import { Button, Modal, Title } from '@shared/ui';
import { Select } from '@shared/ui/Select';
import { useState } from 'react';

interface CreateChatModalProps {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (modelName: string) => void;
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

	const [modelName, setModelName] = useState(models[0].value);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Title className='text-white text-center mb-6' as='h2'>
				Create a new chat
			</Title>
			<form className='flex flex-col gap-4'>
				<Select
					value={modelName}
					onChange={e => setModelName(e.target.value)}
					options={models}
				/>
				<Button onClick={() => onCreate(modelName)}>Create</Button>
			</form>
		</Modal>
	);
};
