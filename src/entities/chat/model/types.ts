import type { Message } from '@entities/message/model';
import type { UserId } from '@entities/user/model';

export interface Chat {
	id: number;
	userId: UserId;
	model: string;
	lastMessage: Message | null;
}
