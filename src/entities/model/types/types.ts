export interface Message {
	id: string | number;
	chatId: number;
	from: 'model' | 'user' | 'error';
	content: string;
}
