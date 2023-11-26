import { Box, Typography } from '@mui/material';
import React from 'react';
import { useStyle } from './styles';

export const NavBar: React.FC = () => {
    const style = useStyle();

    return (
        <Box component={'header'} className={style.nav}>
            <Typography variant={'caption'}>Nav Bar</Typography>
        </Box>
    );
};
