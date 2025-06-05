import type { AiModel } from '../model';

interface AiModelCardProps {
	model: AiModel;
}

export const AIModelCard = ({ model }: AiModelCardProps) => {
	return (
		<li className='bg-slate-600 text-white p-4 rounded-lg shadow-md hover:scale-105 transition-transform duration-200'>
			<h3>{model.name}</h3>
			<p className='text-slate-400'>{model.description}</p>
			<p className='text-sm text-gray-300 mt-2'>{model.useCases}</p>
		</li>
	);
};
