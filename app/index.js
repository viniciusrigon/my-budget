import React from 'react';
import {
    render
} from 'react-dom';
import {
    AppContainer
} from 'react-hot-loader';
import Root from './containers/Root';
import i18n from "./utils/i18n/i18n.client.config";
import initialStore from "./store/initialStore";
import {
    configureStore,
    history
} from './store/configureStore';
import './app.global.css';

const store = configureStore(initialStore);


render( 
  <AppContainer>
    <Root store = {store} history = {history}/>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        // eslint-disable-next-line global-require
        const NextRoot = require('./containers/Root').default;
        render( 
          <AppContainer>
            <NextRoot store = {store} history = {history}/> 
          </AppContainer>,
          document.getElementById('root')
        );
    });
}