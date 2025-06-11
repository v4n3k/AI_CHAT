import type { Message } from '@entities/message/model';
import type { UserId } from '@entities/user/model';

export interface Chat {
	id: number;
	userId: UserId;
	modelName: string;
	lastMessage: Message | null;
}
