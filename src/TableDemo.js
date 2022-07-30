import { Fab, Grid, Paper, Table, TableContainer } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';


import { Box } from '@mui/system';


export const TableDemo = () => {
  return (
   <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Box>
   </div>
  )
}
