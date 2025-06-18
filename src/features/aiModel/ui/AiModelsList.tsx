import type { AiModel } from '@entities/aiModel/model';
import { AIModelCard } from '@entities/aiModel/ui';
import { Section, Title } from '@shared/ui';

interface AiModelsListProps {
	models: AiModel[];
}

export const AiModelsList = ({ models }: AiModelsListProps) => {
	return (
		<Section>
			<Title as='h2' className='text-white'>
				Experiment with diverse AI models to boost productivity, spark
				creativity, and get answers instantly
			</Title>
			<ul className='grid grid-cols-1 md:grid-cols-3 gap-4'>
				{models?.map(model => (
					<AIModelCard key={model.name} model={model} />
				))}
			</ul>
		</Section>
	);
};
