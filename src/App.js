import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WelcomeForm from './components/WelcomeForm';

export default function App() {
  return (
    <Router>
      <Route path='/welcomeForm'>
        <WelcomeForm />
      </Route>
    </Router>
  );
}
