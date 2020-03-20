
import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { newMessages, updateCurrentSession } from '../../actions';
import MathBot from '../../services/MathBot';
import { MessageTypes } from '../../services/ChatSessionService';
import ChatWindow, { SendMessageHandler } from '../../components/ChatWindow';
import { AppState } from '../../rootReducer';

const bot = new MathBot();

const SingleChatPage: React.FC<SingleChatPageProps> = props => {
  const { chatSession } = props;

  const handleMessageSend: SendMessageHandler = (msg, ev) => {
    ev.preventDefault();
    if(!chatSession)
      return;

    let msgReply: string = '';

    try{
      msgReply = bot.processMessage(msg);
    }
    catch(err){
      msgReply = err.message;
    }
    finally{
      const newMessages = [
        {body: msg, type: MessageTypes.Message, createdAt: new Date()},
        {body: msgReply, type: MessageTypes.Reply, createdAt: new Date()}
      
      ];

      props.newMessages(newMessages);
    }
  };

  if(!chatSession)
    return <Redirect to="/" />;

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>{chatSession.title}</Typography>
      <ChatWindow
        messages={chatSession.messages}
        onSendMessage={handleMessageSend}
      />
    </Container>
  );
};

function mapStateToProps(state: AppState) {
  return {
    chatSession: state.currentSession
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    newMessages,
    updateCurrentSession

  }, dispatch);
}

type SingleChatPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & {
  match: any
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleChatPage);
