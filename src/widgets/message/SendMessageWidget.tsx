import { useSendMessage } from '@features/message/sendMessage/model/useSendMessage';
import { SendMessageForm } from '@features/message/sendMessage/ui/SendMessageForm';

export const SendMessageWidget = () => {
	const { message, setMessage, sendMessage } = useSendMessage();

	return (
		<SendMessageForm
			message={message}
			setMessage={setMessage}
			onSubmit={sendMessage}
		/>
	);
};
