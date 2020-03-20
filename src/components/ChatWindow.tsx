
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { Message, MessageTypes } from '../services/ChatSessionService';

const useStyles = makeStyles(theme => ({
  root: {
    border: `1px solid`,
    padding: theme.spacing(2)
  },
  messagesWindow: {
    // paddingTop: '100%',
    // position: "relative"
  },
  messageWindowContent: {
    // position: "absolute",
    // overflow: 'auto',
    // left: 0, right: 0, top: 0, bottom: 0
  },
  message: {
    maxWidth: '75%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),

    '&:nth-child(odd)': {
      marginLeft: 'auto',
      backgroundColor: theme.palette.grey['200'],
      color: theme.palette.common.black
    }
  },
  timestamp: {
    display: 'block',
    fontSize: '0.75em',
    marginTop: theme.spacing(1),
    opacity: 0.75
  },
  inputForm: {
    marginTop: theme.spacing(5)
  }
}));

const ChatWindow: React.FC<ChatWindowProps> = props => {
  const [msgBody, setMsgBody] = React.useState('');
  const classes = useStyles();
  
  const { messages, onSendMessage } = props;

  return (
    <div className={classes.root}>
      <div className={classes.messagesWindow}>
        <div className={classes.messageWindowContent}>
          {messages.map((msg, i)=>(
            <div key={`${i}`} className={classes.message}>
              {msg.body}
              <span className={classes.timestamp}>{new Date(msg.createdAt||'').toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={ev => { onSendMessage(msgBody, ev); setMsgBody(''); }} className={classes.inputForm}>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            <TextField
              required
              fullWidth
              placeholder="Type here..."
              variant="outlined"
              value={msgBody}
              onChange={ev => setMsgBody(ev.target.value)}
            />
          </Box>
          <Box>
            <IconButton type="submit">
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export type SendMessageHandler = (messageBody: string, ev: React.FormEvent) => void;

type ChatWindowProps = {
  messages: Message[],
  onSendMessage: SendMessageHandler
};

export default ChatWindow;
