import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/App';

const store = new Store({
  portName: 'GET_FIT_DONE' // communication port name
});

if (!document.getElementById('rcr-anchor')) {
  const anchor = document.createElement('div');
  anchor.id = 'rcr-anchor';

  document.body.insertBefore(anchor, document.body.childNodes[0]);

  const unsubscribe = store.subscribe(() => {
    unsubscribe();
    render(
     <Provider store={store}>
       <App/>
     </Provider>
      , document.getElementById('rcr-anchor'));
  }
  )
}

