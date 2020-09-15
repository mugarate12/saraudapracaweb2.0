import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import usePersistedState from './hooks/usePersistedTheme'

import GlobalStyle from './styles/global'
import DefaultTheme from './styles/themes/default'
import DarkTheme from './styles/themes/dark'

import Home from './pages/Home/index'
import CreateEvent from './pages/CreateEvent/index'
import ViewEvents from './pages/ViewEvents/index'

export const ThemeContext = React.createContext(() => {})

export default function Navigator() {
  const [theme, setTheme] = usePersistedState('theme', DefaultTheme.title)

  function toggleTheme() {
    setTheme(theme === DefaultTheme.title ? DarkTheme.title : DefaultTheme.title)
  }

  function Theme() {
    return theme === DefaultTheme.title ? DefaultTheme : DarkTheme
  }

  return (
    <Router>
      <ThemeProvider theme={Theme()} >
        <ThemeContext.Provider value={toggleTheme} >
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/eventos/criar' component={CreateEvent} />
            <Route path='/eventos/ver' component={ViewEvents} />
          </Switch>
        </ThemeContext.Provider>
      </ThemeProvider>
    </Router>
  )
}
