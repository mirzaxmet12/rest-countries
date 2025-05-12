import { Box } from '@mui/material'
import  {  useState } from 'react'


function Theme() {
    const [theme, setTheme] = useState('Темный')

    const handleChange = () => {
        if (theme == 'Темный') {
            setTheme('Светлый')
            document.body.classList.add('dark')
        }
        else {
            setTheme('Темный')
            document.body.classList.remove('dark')
        }
    }

    return (
        <Box sx={{
            bgcolor: 'var(--bg-card-color)',
            width: '100%',
            boxShadow: '0 0 3px  1.5px  rgba(0,0,0,0.12)',
        }}>
            <button onClick={handleChange} style={{
                border: 'none',
                marginLeft: 90,
                background: 'none',
                padding: '30px 0 ',
                fontSize: '25px',
                outline: 'none',
            }
            }>{theme}</button>
        </Box >
    )
}

export default Theme
