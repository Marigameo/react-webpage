import React    from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './layout';

import 'styles/default.less';

function initApp() {
  const rootEl = document.querySelector('#MAIN_CONTENT');
  ReactDOM.render(
      <Layout />,
      rootEl
  );
}

/**
 * app start
 */
document.addEventListener('DOMContentLoaded', () => {
  initApp()
});
