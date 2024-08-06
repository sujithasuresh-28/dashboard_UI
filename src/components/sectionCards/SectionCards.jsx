import { Box, Card, CardContent, Icon, Typography } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { sectionCards } from '../../constants/Constants';
import { useContext } from 'react';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const SectionCards = () => {
    const { isDesktop, isMiniDesktop, isMobile, isTablet } = useContext(DeviceTypeContext);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', mt: '30px', columnGap: isMiniDesktop ? '10px' : '25px', rowGap: '25px', flexBasis: '100%', ...((isMobile || isTablet) && { flexWrap: 'wrap', justifyContent: 'space-between' }) }}>
            {sectionCards?.map((card) => (
                <Card sx={{ backgroundColor: '#121212', color: '#fff', borderRadius: 2, p: isDesktop ? '5px !important' : isTablet ? '10px 5px !important' : '0px !important', width: (isMobile || isTablet) ? '45%' : '25%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box', ...((isMiniDesktop || isMobile) && { justifyContent: isMobile ? 'space-between' : 'center' }) }}>
                    <CardContent sx={{ pb: '7px !important', display: 'flex', justifyContent: 'space-between', alignItems: 'space-between', flexDirection: 'column', width: '100%', ...(isMiniDesktop && { p: '8px !important' }) }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
                            <Icon sx={{ width: '52px', height: '45px', mb: 1 }}><img src={card?.icon} /></Icon>
                            <Typography variant="subtitle2" sx={{ ...(isMobile && { fontSize: '13px' }) }}>
                                {card?.name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', ...(!isDesktop && { fontSize: isMobile ? '15px' : '18px' }) }}>
                                {card?.count}
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <ArrowUpward sx={{ color: card?.percentageColor, fontSize: isMobile ? '18px' : 20 }} />
                                <Typography variant="subtitle2" sx={{ color: card?.percentageColor, ml: 0.5, ...(isMobile && { fontSize: '13px' }) }}>
                                    {card?.percentage}
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}

export default SectionCards