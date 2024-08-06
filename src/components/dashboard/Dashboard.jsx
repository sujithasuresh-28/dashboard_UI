import { Box, Typography } from '@mui/material';
import Layout from '../layout/Layout';
import { useContext } from 'react';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';
import MenuDrawer from '../menuDrawer/MenuDrawer';
import Charts from '../charts/Charts';
import RecentOrders from '../recentOrders/RecentOrders';
import SectionCards from '../sectionCards/SectionCards';
import NetProfit from '../netProfit/NetProfit';
import HotelList from '../hotelList/HotelList';
import CustomerFeedback from '../customerFeeback/CustomerFeedback';

function Dashboard() {
    const { isMobile, isTablet, isMiniDesktop } = useContext(DeviceTypeContext);

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
            <Layout />
            {!isMobile && (
                <Box sm={{ width: '60px', mt: 6 }}>
                    <MenuDrawer type="menuItems" />
                </Box>
            )}
            <Box component="main" sx={{ flexGrow: 1, p: isMobile ? 2 : 3, width: { xs: `calc(100% - 70px)` }, mt: 8, ml: isMobile ? 0 : 9 }}>
                <Typography variant="h4" component="h2" sx={{ mt: 1 }}>
                    Dashboard
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: (isMobile || isTablet) ? 'column' : 'row', columnGap: isMiniDesktop ? '20px' : '40px' }} sm={{ flexDirection: 'column' }}>
                    <SectionCards />
                    <NetProfit />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: (isMobile || isTablet) ? 'column' : 'row', columnGap: isMiniDesktop ? '20px' : '40px' }} sm={{ flexDirection: 'column' }}>
                    <Charts />
                    <HotelList />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: (isMobile || isTablet) ? 'column' : 'row', columnGap: isMiniDesktop ? '20px' : '40px', maxHeight: (isMobile || isTablet) ? '100%' : '550px' }} sm={{ flexDirection: 'column' }}>
                    <RecentOrders />
                    <CustomerFeedback />
                </Box>
            </Box>
        </Box >
    );
}

export default Dashboard;
