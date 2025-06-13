import { models } from '@entities/aiModel/data';
import { useModelStore } from '@entities/aiModel/model/store';
import type { CreateChatParams } from '@entities/chat/model';
import { Button, Modal, Title } from '@shared/ui';
import { Select } from '@shared/ui/Select';
import React from 'react';

interface CreateChatModalProps {
	isOpen: boolean;
	onClose: () => void;
	onCreate: ({ model, shortModel }: CreateChatParams) => void;
}

export const CreateChatModal = ({
	isOpen,
	onClose,
	onCreate,
}: CreateChatModalProps) => {
	const model = useModelStore(state => state.model);
	const setModel = useModelStore(state => state.setModel);
	const shortModel = useModelStore(state => state.shortModel);
	const setShortModel = useModelStore(state => state.setShortModel);

	const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setModel(selectedValue);

		const selectedOption = models.find(
			option => option.value === selectedValue
		);

		if (selectedOption) {
			setShortModel(selectedOption.label);
		} else {
			setShortModel('');
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Title className='text-white text-center mb-6' as='h2'>
				Create a new chat
			</Title>
			<form className='flex flex-col gap-4'>
				<Select value={model} onChange={handleModelChange} options={models} />
				<Button onClick={() => onCreate({ model, shortModel })}>Create</Button>
			</form>
		</Modal>
	);
};
