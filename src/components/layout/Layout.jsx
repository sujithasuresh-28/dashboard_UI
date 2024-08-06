import { useContext, useState } from 'react';
import { AppBar, Box, Drawer, Icon, IconButton, InputAdornment, OutlinedInput, Toolbar } from '@mui/material';
import { Menu as MenuIcon, SearchRounded } from '@mui/icons-material';
import { theme } from '../../utils/Theme';
import MenuDrawer from '../menuDrawer/MenuDrawer';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const drawerWidth = 70;

function Layout() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { isMobile } = useContext(DeviceTypeContext)

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: theme.palette.appBar, paddingTop: '5px', paddingBottom: '5px' }}>
            <Toolbar sx={{ paddingLeft: '15px !important', display: 'flex' }}>
                {isMobile && (
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 1 }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Icon sx={{ width: '40px', height: '40px', ...(isMobile && { ml: '-7px' }) }}><img src={logo} /></Icon>
                    <OutlinedInput
                        id="search-input"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchRounded sx={{ width: '20px', color: '#bdbbbb' }} />
                                <span style={{ marginLeft: '10px', fontSize: '14px', color: '#bdbbbb' }}>Search</span>
                            </InputAdornment>
                        }
                        inputProps={{
                            sx: { paddingY: '0px' }
                        }}
                        sx={{ marginLeft: !isMobile ? '40px' : '20px' }}
                    />
                </Box>
                {!isMobile ? (
                    <>
                        <Box sx={{ flexGrow: 1 }} />
                        <MenuDrawer isMobile={isMobile} />
                    </>
                ) : (
                    <Icon sx={{ ml: 1, width: '50px', height: '45px' }}><img src={avatar} /></Icon>
                )}
            </Toolbar>
            {isMobile && (
                <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} >
                    <Drawer
                        container={container}
                        open={mobileOpen}
                        ModalProps={{ keepMounted: true }}
                        sx={{
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: theme.palette.sideBar },
                        }}
                        onClose={handleDrawerToggle}
                    >
                        <MenuDrawer type="menuItems" isMobile={isMobile} />
                    </Drawer>
                </Box>
            )}
        </AppBar >
    );
}

export default Layout;
