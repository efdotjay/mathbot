
import { ChatSession } from './services/ChatSessionService';

export const initialState: AppState = {
  chatSessions: [],
  currentSession: null
};

export function rootReducer(state: AppState = initialState, action: IReduxBaseAction): AppState {
  switch (action.type) {
    case EReduxActionTypes.NEW_CHAT_SESSION:
      return { chatSessions: [...state.chatSessions, action.payload], currentSession: action.payload };
    case EReduxActionTypes.UPDATE_CURRENT_SESSION:
      return { ...state, currentSession: {...action.payload} };
    case EReduxActionTypes.NEW_MESSAGES:
      const currSession = state.currentSession;
      if(!currSession)
        return state;

      currSession.messages = [...currSession.messages, ...action.payload];
      return { ...state, currentSession: {...currSession}  };
    default:
      return state;
  }
}

export enum EReduxActionTypes {
  NEW_CHAT_SESSION = "NEW_CHAT_SESSION",
  NEW_MESSAGES = "NEW_MESSAGES",
  UPDATE_CURRENT_SESSION = "UPDATE_CURRENT_SESSION"
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
  [key: string]: any;
}

export interface AppState {
  chatSessions: ChatSession[];
  currentSession: ChatSession|null;
}
