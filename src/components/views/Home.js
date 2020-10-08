import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({  
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'    
  }
}))

export default function Login() {
  const classes = useStyles()

  return (
    <div className={classes.login}>
      <h2>Home</h2>      
    </div>
  )
}
