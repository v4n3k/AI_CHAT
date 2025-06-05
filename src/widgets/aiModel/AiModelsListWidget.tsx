import { useGetAiModels } from '@features/aiModel/model/useGetAiModels';
import { AiModelsList } from '@features/aiModel/ui';

export const AiModelsListWidget = () => {
	const { models } = useGetAiModels();

	return <AiModelsList models={models} />;
};
