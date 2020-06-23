import React from 'react';
import './App.css';

import TodoApp from './pages/TodoApp';
import Header from './components/Header';
import IntroText from './components/IntroText';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroText />
      <TodoApp />
    </div>
  );
}

export default App;
