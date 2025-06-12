import { useModelStore } from '@entities/aiModel/model/store';
import { Button, Modal, Title } from '@shared/ui';
import { Select } from '@shared/ui/Select';

interface CreateChatModalProps {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (model: string) => void;
}

export const CreateChatModal = ({
	isOpen,
	onClose,
	onCreate,
}: CreateChatModalProps) => {
	const models = [
		{
			id: 1,
			value: 'google/gemma-3n-e4b-it:free',
		},
		{
			id: 2,
			value: 'ChatGPT',
		},
		{
			id: 3,
			value: 'Claude',
		},
	];

	const model = useModelStore(state => state.model);
	const setModel = useModelStore(state => state.setModel);

	const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setModel(e.target.value);
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Title className='text-white text-center mb-6' as='h2'>
				Create a new chat
			</Title>
			<form className='flex flex-col gap-4'>
				<Select value={model} onChange={handleModelChange} options={models} />
				<Button onClick={() => onCreate(model)}>Create</Button>
			</form>
		</Modal>
	);
};
