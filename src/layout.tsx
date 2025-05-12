import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Theme from './components/theme';


interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <Box sx={{
            bgcolor: 'var(--bg-color)',
        }}>
            <Theme />
            {children}

        </Box>
    );
}

export default Layout;
