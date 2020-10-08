import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Redirect, Route, useHistory } from 'react-router-dom'
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import AppBar from './components/common/AppBar'
import Login from './components/views/Login'
import Home from './components/views/Home'
import theme from './theme'

const useStyles = makeStyles(theme => ({  
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'    
  }
}))

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route {...rest} render={
      props => {
        if(authenticated) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={
            {
              pathname: '/login',
              state: {
                from: props.location
              }
            }
          } />
        }
      }
    } />
  )
}

export default function App() {
  const classes = useStyles()
  let history = useHistory()
  const { Authentication } = useSelector(state => state)
  const { authenticated } = Authentication

  return (
    <MuiThemeProvider theme={theme}> 
      <div id="App" className={classes.appWrapper}>
        <BrowserRouter history={history}> 
          { 
            authenticated 
              ? <AppBar /> 
              : null 
          }                               
          <Switch>
            <Route exact path='/login' component={Login} />
            <ProtectedRoute 
              exact 
              path='/' 
              authenticated={authenticated}               
              component={Home} 
            />                                
          </Switch>           
        </BrowserRouter>        
      </div>      
    </MuiThemeProvider>            
  )
}
