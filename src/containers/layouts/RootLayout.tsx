
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SingleChatPage from '../pages/SingleChatPage';

const RootLayout: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat-session/:sessionId" component={SingleChatPage} />
        <Route component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default RootLayout;
