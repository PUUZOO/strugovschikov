import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Container } from 'react-bootstrap'

// Add CSS
import './index.scss';

// Store
import store from "./redux/store";

// Components
import SwitchTheme from './components/menu/SwitchTheme.jsx'

ReactDOM.render(
  <Provider store={store}>
    <Container className="py-5">
      <SwitchTheme />
    </Container>
  </Provider>,
  document.getElementById('portfolio')
)