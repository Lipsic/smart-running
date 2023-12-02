import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { ModeStyled } from '../styles/Mode';
import { IconButton } from '@mui/material';



function Mode({mode}) {
  return (
    <ModeStyled >
        <IconButton variant='outlined' >
       {mode === 'walk'  && <DirectionsWalkIcon /> || 
       mode === 'running' && <DirectionsRunIcon /> || 
       mode === 'bike' && <PedalBikeIcon />}
        </IconButton>
    </ModeStyled>
  )
}

export default Mode