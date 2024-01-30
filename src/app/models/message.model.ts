export interface MessagePayload {
  id_user: string;
  message: string;
}

export interface ChatI {
  messages: MessagePayload[];
  id_chat: number;
  title: string;
}

export interface ScheduleList {
  title: string;
  id: number;
}
