import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Add CSS
import './common.blocks/index.scss';

// Store
import store from "./redux/store";

// Components
import Wrapper from './components/Wrapper.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <Header></Header>
      <Main></Main>
    </Wrapper>
  </Provider>,
  document.getElementById('portfolio')
)