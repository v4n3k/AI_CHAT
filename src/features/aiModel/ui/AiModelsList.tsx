import type { AiModel } from '@entities/aiModel/model';
import { AIModelCard } from '@entities/aiModel/ui';

interface AiModelsListProps {
	models: AiModel[];
}

export const AiModelsList = ({ models }: AiModelsListProps) => {
	return (
		<ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
			{models.map(model => (
				<AIModelCard key={model.name} model={model} />
			))}
		</ul>
	);
};
