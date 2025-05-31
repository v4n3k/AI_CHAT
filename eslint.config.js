import js from '@eslint/js';
import eslintPluginBoundaries from 'eslint-plugin-boundaries'; // <-- Добавляем
import importPlugin from 'eslint-plugin-import'; // <-- Добавляем
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json', // Важно для tseslint и import/resolver
        tsconfigRootDir: import.meta.dirname, // Указывает, где искать tsconfig.json относительно данного файла
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin, // <-- Добавляем
      boundaries: eslintPluginBoundaries, // <-- Добавляем
    },
    settings: {
      // Настройки для eslint-plugin-import
      'import/resolver': {
        typescript: {
          project: './tsconfig.json', // Указываем tsconfig для разрешения путей
        },
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'], // Разрешаем эти расширения
      // Настройки для eslint-plugin-boundaries
      // Это ключевая часть для FSD
      'boundaries/elements': [
        { type: 'app', pattern: 'app/*' },
        { type: 'pages', pattern: 'pages/*' },
        { type: 'widgets', pattern: 'widgets/*' },
        { type: 'features', pattern: 'features/*' },
        { type: 'entities', pattern: 'entities/*' },
        { type: 'shared', pattern: 'shared/*' },
      ],
      'boundaries/alias': {
        '@/app': 'app', '@/pages': 'pages',
        '@/widgets': 'widgets',
        '@/features': 'features',
        '@/entities': 'entities',
        '@/shared': 'shared',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // --- Правила для eslint-plugin-import ---
      'import/no-unresolved': 'error', // Гарантирует, что импорты разрешаются
      'import/no-cycle': ['error', { maxDepth: Infinity }], // Запрещает циклические зависимости
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            // FSD Layers order
            { pattern: '@/**', group: 'internal' }, // Catch all FSD aliases first
            { pattern: '@/{app,pages,widgets,features,entities,shared}/**', group: 'internal', position: 'after' },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // --- Правила для eslint-plugin-boundaries (ключевые для FSD) ---
      'boundaries/no-import-boundaries': [
        'error',
        {
          // Определяем слои в порядке их зависимости (сверху вниз)
          // app -> pages -> widgets -> features -> entities -> shared
          dependencyGraph: [
            'app',
            'pages',
            'widgets',
            'features',
            'entities',
            'shared',
          ],
          // Разрешаем импорты внутри одного и того же слайса (например, features/auth/ui может импортировать features/auth/api)
          // Но не разрешаем импорты между разными слайсами одного слоя (например, features/auth не может импортировать features/product)
          allowSameSlice: true,
          allowCrossSlice: false, // Запрещает импорты между разными слайсами одного слоя
          allowCircularDependencies: false, // Запрещает циклические зависимости между элементами
          // Специальные исключения, если нужны
          // rules: [
          //   {
          //     from: 'features',
          //     target: ['widgets', 'entities', 'shared'],
          //     allow: true,
          //   },
          //   {
          //     from: 'widgets',
          //     target: ['entities', 'shared'],
          //     allow: true,
          //   },
          // ],
        },
      ],
      'boundaries/no-private-imports': [
        'error',
        {
          // Публичные API должны быть в index.ts или в файлах, которые заканчиваются на .api.ts и т.п.
          // Эта регулярка позволяет импортировать только из index.ts или из файлов, которые не являются папками
          // Например, import Button from '@/shared/ui/Button' разрешено, если Button.tsx существует.
          // А import { internal } from '@/shared/utils/internal/helper' будет запрещено, если internal не в index.ts
          publicApi: ['*/index.ts', '!*/*/*'], // index.ts или файлы, которые не являются частью подпапки (например, shared/ui/Button.tsx)
          // Если у вас есть другие публичные точки входа, добавьте их сюда, например:
          // publicApi: ['*/index.ts', '*/*.model.ts', '**/*.api.ts'],
        },
      ],
      // Опционально: Запретить импорты из неизвестных элементов (путей, которые не соответствуют FSD структуре)
      // 'boundaries/no-unknown-elements': 'error',
    },
  },
);