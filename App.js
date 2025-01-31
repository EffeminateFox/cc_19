//U54529624
//App.js
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';

// Creates a context for global state
export const AppContext = createContext();

const App = () => {
  const [state, setState] = useState({
  
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Gallery} />
            {/* Add more routes as needed */}
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
