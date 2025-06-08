import type { Message } from '@entities/message/model';

export interface Chat {
	id: number;
	userId: number | string;
	modelName: string;
	lastMessage: Message | null;
}
