import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ReduxThunk } from 'redux-thunk';
import reducers from './reducers';

import ModelComponentNoAction from './components/ModelComponentNoAction';
import ModelComponentWithAction from './components/ModelComponentWithAction';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <div>
          <ModelComponentNoAction />
          <hr/>
          <ModelComponentWithAction />
        </div>
      </Provider>
    );
  }
}

export default App;
