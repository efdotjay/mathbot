
import { EReduxActionTypes, IReduxBaseAction } from "./rootReducer";
import { ChatSession, Message } from './services/ChatSessionService';

export function newChatSession(session: ChatSession): IReduxNewChatSessionAction {
  return {
    type: EReduxActionTypes.NEW_CHAT_SESSION,
    payload: session
  };
}

export function updateCurrentSession(session: ChatSession): IReduxUpdateCurrentSessionAction {
  return {
    type: EReduxActionTypes.UPDATE_CURRENT_SESSION,
    payload: session
  }
}

export function newMessages(messages: Message[]): IReduxNewMessageAction {
  return {
    type: EReduxActionTypes.NEW_MESSAGES,
    payload: messages
  }
}

export interface IReduxNewChatSessionAction extends IReduxBaseAction {
  type: EReduxActionTypes.NEW_CHAT_SESSION;
  payload: ChatSession
}

export interface IReduxNewMessageAction extends IReduxBaseAction {
  type: EReduxActionTypes.NEW_MESSAGES;
  payload: Message[]
}

export interface IReduxUpdateCurrentSessionAction extends IReduxBaseAction {
  type: EReduxActionTypes.UPDATE_CURRENT_SESSION;
  payload: ChatSession
}
