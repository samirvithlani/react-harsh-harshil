import { Alert, CircularProgress, Dialog, LinearProgress } from '@mui/material'
import React from 'react'

export const MuiDemo2 = (props) => {
    const { onClose, selectedValue, open } = props;
    const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>

        <Alert severity='success'>
            alert
        </Alert>
      <CircularProgress color='success'></CircularProgress>
      <LinearProgress value={progress} color='primary'></LinearProgress>
    </div>
  )
}
