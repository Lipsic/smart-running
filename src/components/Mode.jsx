import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import { ModeStyled } from '../styles/Mode';
import { IconButton } from '@mui/material';
import {useAtom}from 'jotai';
import { writeOnlyStatistics } from "../store/statistics";
import { useEffect } from 'react';



function Mode({mode}) {
  const [_, setStats]= useAtom(writeOnlyStatistics)
  useEffect(()=>{

    setStats({
      mode: mode
    })
  },[mode])

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