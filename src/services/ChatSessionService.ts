
class ChatSessionService {
  id: string = `${Date.now()}-${Math.round(Math.random()*1000)}`;
  title: string;
  messages: Message[] = [];

  constructor(title: string) {
    this.title = title;
  }
}

export enum MessageTypes {
  Reply = "reply",
  Message = "message"
}

export type Message = {
  body: string,
  type?: MessageTypes
  createdAt?: Date
}

export type ChatSessionData = {
  title: string
};

export type ChatSession = ChatSessionData & {
  id: string;
  messages: Message[];
}

export default ChatSessionService;
