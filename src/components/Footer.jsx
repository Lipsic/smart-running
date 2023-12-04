import { Typography } from '@mui/material'

function Footer() {
    "h-24 pt-7 text-white text-center grow-0 bg-blackOpaque absolute min-w-full bottom-0 py-auto"
  return (
    <footer style={{backgroundColor: "#333", color: 'white', }}>
    <Typography textAlign='center' marginTop='15px'>
          &copy; Created by Marcos Vinícius. Do not claim this project as yours.
    </Typography>
    </footer>
  )
}

export default Footer