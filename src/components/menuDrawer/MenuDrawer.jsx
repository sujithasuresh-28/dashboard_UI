import { Box, Icon, List, ListItem, ListItemIcon, Toolbar } from '@mui/material';
import { menuItems, topNavItems } from '../../constants/Constants';
import { theme } from '../../utils/Theme';
import logout from '../../assets/logout.png';

const MenuDrawer = ({ type, isMobile }) => {
    return (
        <Box sx={{ ...(type === 'menuItems' ? { marginTop: isMobile ? '10px' : 9, ...(!isMobile && { bgcolor: theme.palette.desktopSideBar, height: '100%', position: 'fixed' }) } : { display: 'flex', justifyContent: 'flex-end' }) }}>
            {!isMobile ? (
                <>
                    {type === 'menuItems' ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '85%' }}>
                            <List sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                                {menuItems.map(({ id, icon, active }) => (
                                    <ListItem key={id} sx={{ ...(active ? { borderLeft: '3px solid #7294ff' } : { ml: '3px' }) }}>
                                        <ListItemIcon sx={{ width: '30px', height: '30px', minWidth: '40px !important' }}><img src={icon} alt="id" /></ListItemIcon>
                                    </ListItem>
                                ))}
                            </List>
                            <Icon sx={{ ml: '15px', width: '30px', height: '30px', minWidth: '40px !important' }}><img src={logout} alt="logout" /></Icon>
                        </Box>
                    ) : (
                        <List sx={{ display: 'flex', flexDirection: 'row', rowGap: '5px' }}>
                            {topNavItems.map(({ id, icon }) => (
                                <ListItem key={id} sx={{ padding: '0px !important' }}>
                                    <ListItemIcon sx={{ width: '30px', height: '40px' }}><img src={icon} alt={id} /></ListItemIcon>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </>
            ) : (
                <>
                    <Toolbar />
                    <List sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                        {menuItems.map(({ id, icon, active }) => (
                            <ListItem key={id} sx={{ ...(active ? { borderLeft: '3px solid #7294ff' } : { ml: '3px' }) }}>
                                <ListItemIcon sx={{ width: '30px', height: '30px' }}><img src={icon} alt={id} /></ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                    <List sx={{ display: 'flex', flexDirection: 'column', rowGap: '18px' }}>
                        {topNavItems.map(({ id, icon }, index) => {
                            if (index !== topNavItems.length - 1) {
                                return (
                                    <ListItem key={id} sx={{ padding: '0px !important', ml: '10px' }}>
                                        <ListItemIcon sx={{ width: '30px', height: '40px' }}><img src={icon} alt={id} /></ListItemIcon>
                                    </ListItem>
                                )
                            } return null;
                        })}
                    </List>
                    <Icon sx={{ ml: '15px', mt: '10px', width: '30px', height: '30px', minWidth: '40px !important' }}><img src={logout} alt="logout" /></Icon>
                </>
            )}
        </Box>
    );
}

export default MenuDrawer;