import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const colorPrimary = '#FE395A'
const colorSecondary = '#9AFFFD'

const theme = createMuiTheme({  
  overrides: {
    /*
    MuiCheckbox: {
      root: {
        color: textPrimary
      }
    },
    MuiFormControlLabel: {
      label: {
        color: textSecondary,
        '&.Mui-disabled': {
          color: textSecondary
        }
      }
    },
    MuiFormHelperText: {
      root: {
        color: textSecondary, 
        '&.Mui-error': {
          color: colorPrimary,
        }       
      },
    },
    MuiFormLabel: {
      root: {
        color: textPrimary,        
        '&.Mui-disabled': {
          color: textSecondary,
        },
        '&.Mui-focused': {
          color: colorSecondary,
        },
        '&.Mui-error': {
          color: colorPrimary,
        }, 
      },        
    },
    MuiIconButton: {
      root: {
        color: textSecondary,        
      },
    },
    MuiInputAdornment: {
      root: {
        color: textPrimary,
      }
    },
    MuiPopover: {
      paper: {
        backgroundColor: bgColor1,
      },
    },
    MuiInput: {      
      underline: {
        '&:before': {
          borderBottomColor: textSecondary,
        },
        '&:after': {
          borderBottomColor: textSecondary,
        },
        '&:hover:before': {
          borderBottomColor: [textSecondary, '!important'],
        },
        '&.Mui-error:after': {
          borderBottomColor: colorPrimary,
        },
      },
      root: {           
        color: textPrimary,
        '&:hover': {      
          borderBottom: 'none'    
        },     
        '& .Mui-disabled': {
          color: textPrimary,
        },         
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: bgColor1,
        color: textPrimary,
      }
    },    
    MuiRadio: {         
      colorSecondary: {
        '&.Mui-checked': {
          color: colorPrimary
        },
      },
      root: {
        color: textPrimary,                                    
      }
    },
    MuiTypography: {
      colorTextSecondary: {
        color: textSecondary
      }
    }
    */
  },
  palette: {    
    primary: {      
      main: colorPrimary,
    },
    secondary: {      
      main: colorSecondary,
    }
  },  
  typography: {
    fontFamily: 'Poppins, Open Sans',
    fontSize: 16
  },  
})

export default responsiveFontSizes(theme)