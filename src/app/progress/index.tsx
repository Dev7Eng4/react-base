import { useState } from 'react';

import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';
import { getCurrentUserInfo } from 'service/api/user.api';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularStatic() {
  const [progress, setProgress] = useState(0);

  const { data, isLoading } = useQuery({
    queryFn: () => getCurrentUserInfo(setProgress),
    queryKey: ['current-user'],
    cacheTime: 0,
  });

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return <CircularProgressWithLabel value={progress} />;
}
