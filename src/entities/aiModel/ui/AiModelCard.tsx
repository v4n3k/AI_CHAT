import type { AiModel } from '../model';

interface AiModelCardProps {
	model: AiModel;
}

export const AIModelCard = ({ model }: AiModelCardProps) => {
	return (
		<li className='bg-slate-700 border border-slate-500 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex flex-col gap-2'>
			<h3 className='text-lg font-semibold text-white'>{model.name}</h3>
			<p className='text-slate-400 text-sm'>{model.description}</p>
			<div className='flex items-center space-x-2 mt-2'>
				<p className='text-xs text-gray-300'>{model.useCases}</p>
			</div>
		</li>
	);
};
