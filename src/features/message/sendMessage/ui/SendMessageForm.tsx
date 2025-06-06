import { Button, TextArea } from '@shared/ui';

interface SendQueryFormProps<T> {
	message: string;
	setMessage: (message: string) => void;
	onSubmit: () => T;
}

export const SendMessageForm = <T,>({
	message,
	setMessage,
	onSubmit,
}: SendQueryFormProps<T>) => {
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form
			className='flex gap-2 w-full max-w-6xl fixed bottom-4 '
			onSubmit={handleSubmit}
		>
			<TextArea
				placeholder='Ask AI...'
				value={message}
				onChange={handleChange}
			/>
			<Button>send</Button>
		</form>
	);
};
