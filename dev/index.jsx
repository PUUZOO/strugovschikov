import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Add CSS
import './common.blocks/index.scss';

// Components
import Wrapper from './components/Wrapper.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

// Store
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Wrapper>
      <Header></Header>
      <Main></Main>
    </Wrapper>
  </Provider>,
  document.getElementById('portfolio')
)