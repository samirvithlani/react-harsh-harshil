import { Box, Button, Fab, IconButton, Slider, Switch } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FingerprintIcon from '@mui/icons-material/Fingerprint';



export const MuiDemo1 = () => {
    return (
        <div>
            <Box sx={{
                width: 300,
                height: 300,
                backgroundColor: 'black',
                '&:hover': {
                    backgroundColor: 'yellow',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>

                <Button variant="contained" color="primary">CLICK</Button>
                <Button variant="outlined" color="success">CLICK</Button>
                <Button variant="text" color="error">CLICK</Button>
                <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>DELETE</Button>
                <Button variant="outlined" color="primary" endIcon={<CameraAltIcon />}>DELETE</Button>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="fingerprint" color="secondary">
                    <FingerprintIcon/>
                </IconButton>
                
                    
            </Box>
            <Fab variant="extended" color="primary" aria-label="add">
                Fingerprint
                <FingerprintIcon/>
            </Fab>
            <Slider size='small' valueLabelDisplay='auto' defaultValue={0}
            step={10}
            marks
            min={0}
            max={100}
            >
                

            </Slider>
            <Switch>open</Switch>
            
        </div>
    )
}
