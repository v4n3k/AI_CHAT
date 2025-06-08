export interface Message {
	id: number | string;
	chatId: number;
	from: 'user' | 'model';
	content: string;
}
