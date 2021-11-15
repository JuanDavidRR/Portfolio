import { useContext } from 'react'
import { ThemeContext } from '../../context'
import './togle.css'

export const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleDark = () =>{
        theme.dispatch({
            type: 'TOGGLE'
        })
    }
    
    return (
        <div className ="toggle">
           <i class="fas fa-sun toogle-icon"></i>
        <i class="fas fa-moon toogle-icon"></i>
            <div className="toogle-button" onClick={handleDark} style={{left: theme.state.darkMode ? '30px' : '0px'}} >            </div>
        </div>
    )
}
