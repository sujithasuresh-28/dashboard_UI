import { Box, Card, CardContent, Icon, IconButton, Typography } from '@mui/material';
import { hotelList } from '../../constants/Constants';
import { ChevronRight } from '@mui/icons-material';
import { useContext } from 'react';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const HotelList = () => {
    const { isTablet, isMobile } = useContext(DeviceTypeContext);
    return (
        <Card sx={{ mt: '30px', bgcolor: '#121212', p: isMobile ? '10px' : '16px', borderRadius: 2, width: '400px', flexBasis: '59%', ...((isTablet || isMobile) && { width: '100%' }) }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', p: '5px !important' }}>
                {hotelList.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', p: '5px 0' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Icon sx={{ width: isMobile ? '60px' : '70px', height: isMobile ? '60px' : '69px', mr: 2 }}>
                                <img src={item.icon} alt={item.name} width={isMobile ? '50px' : '70px'} />
                            </Icon>
                            <Typography variant="subtitle1" sx={{ color: 'white' }}>{item.name}</Typography>
                        </Box>
                        <IconButton>
                            <ChevronRight sx={{ color: 'white' }} />
                        </IconButton>
                    </Box>
                ))}
            </CardContent>
        </Card>
    )
}

export default HotelList