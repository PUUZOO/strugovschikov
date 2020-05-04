import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Container } from 'react-bootstrap'

// Add CSS
import './index.scss';

import store from "./redux/store";

// Components
import Menu from './components/menu/Menu.jsx'
import StatusMenu from './components/menu/StatusMenu.jsx'

ReactDOM.render(
  <Provider store={store}>
    <Container className="py-5">
      <Menu />
      <StatusMenu className="mt-4" />
    </Container>
  </Provider>,
  document.getElementById('portfolio')
)