import type { Message } from '@entities/message/model';
import type { UserId } from '@entities/user/model';

export interface Chat {
	id: number;
	userId: UserId;
	model: string;
	shortModel: string;
	lastMessage: Message | null;
}

export interface CreateChatParams extends Pick<Chat, 'model' | 'shortModel'> {}
