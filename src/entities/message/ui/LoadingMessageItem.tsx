import { MessageItem } from '@entities/message/ui';
import { useEffect, useState } from 'react';

export const LoadingMessageItem = () => {
	const [dotCount, setDotCount] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setDotCount(prevCount => (prevCount % 3) + 1);
		}, 500);

		return () => clearInterval(interval);
	}, []);

	const content = `AI is thinking${'.'.repeat(dotCount)}`;

	return <MessageItem from='model' content={content} />;
};
