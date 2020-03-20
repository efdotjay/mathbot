
import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ChatSessionService from '../../services/ChatSessionService';
import { newChatSession } from '../../actions';
import NewSessionForm, { SessionFormSubmitHandler } from '../../components/NewSessionForm';

const HomePage: React.FC<HomePageProps> = props => {
  const handleNewSessionClick: SessionFormSubmitHandler = (data, ev) => {
    ev.preventDefault();

    const { newChatSession, history } = props;
    const newSession = new ChatSessionService(data.title);

    newChatSession(newSession);

    history.push(`/chat-session/${newSession.id}`);
  };

  return (
    <div>
      <Container>
        <Typography variant="h1">
          Welcome!
        </Typography>
        <NewSessionForm
          onSubmit={handleNewSessionClick}
        />
      </Container>
    </div>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({
    newChatSession

  }, dispatch);
}

type HomePageProps = ReturnType<typeof mapDispatchToProps> & RouterProps;

export default connect(undefined, mapDispatchToProps)(HomePage);
