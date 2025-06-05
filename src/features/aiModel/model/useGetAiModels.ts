import { getAiModels } from '@entities/aiModel/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAiModels = () => {
	const query = useQuery({
		queryKey: ['aiModels'],
		queryFn: () => getAiModels(),
	});

	return { models: query.data, ...query };
};
