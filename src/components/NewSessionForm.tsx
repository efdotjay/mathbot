
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { ChatSessionData } from '../services/ChatSessionService';

const NewSessionForm: React.FC<NewSessionFormProps> = props => {
  const [title, setTitle] = React.useState('');
  return (
    <form onSubmit={ev => props.onSubmit({title}, ev)}>
      <TextField
        placeholder="Choose a title..."
        value={title}
        onChange={ev => setTitle(ev.target.value)}
      />
      <Button type="submit">Start new session</Button>
    </form>
  );
};

export type SessionFormSubmitHandler = (data: ChatSessionData, ev: React.FormEvent) => void;

type NewSessionFormProps = {
  onSubmit: SessionFormSubmitHandler
};

export default NewSessionForm;
