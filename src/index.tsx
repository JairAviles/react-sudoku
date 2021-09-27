import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, NewButton, Numbers, Title } from 'components'
import { configureStore, register, reportWebVitals } from 'core'
import { GlobalStyles, theme } from 'styles'

const { store, persistor } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Content data-cy="content">
            <Title data-cy="title">Sudoku</Title>
            <Card data-cy="card">
              <NewButton />
              <Grid data-cy="grid" />
              <Numbers />
            </Card>
          </Content>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
register()
