import React, { useEffect } from 'react'
import { Switch, Redirect, Route, Router, useHistory } from 'react-router-dom'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import AppBar from './components/common/AppBar'
import Login from './components/views/Login'
import theme from './theme'

const useStyles = makeStyles(theme => ({  
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'    
  }
}))

export default function App() {
  const classes = useStyles()
  let history = useHistory()
  const { Authentication } = useSelector(state => state)
  const { authenticated } = Authentication

  useEffect(() => {
    !authenticated && <Redirect to="/login" />
  }, [authenticated])

  return (
    <MuiThemeProvider theme={theme}> 
      <div id="App" className={classes.appWrapper}>
        <Router history={history}> 
          { authenticated ? <AppBar /> : null }                               
          <Switch>
            <Route exact path='/login' component={Login} />                                
          </Switch>           
        </Router>        
      </div>      
    </MuiThemeProvider>            
  )
}
