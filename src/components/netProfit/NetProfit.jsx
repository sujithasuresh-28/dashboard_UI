import { Box, Card, CardContent, Typography } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { useContext } from 'react';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';


const NetProfit = () => {
    const radius = 40;
    const strokeWidth = 12;
    const circumference = 2 * Math.PI * radius;
    const progress = (70 / 100) * circumference;
    const backgroundStroke = '#293368';
    const progressStroke = '#7095fd';

    const { isDesktop, isTablet, isMobile } = useContext(DeviceTypeContext)

    return (
        <Card sx={{ mt: '30px', bgcolor: '#121212', p: '5px 3px !important', borderRadius: 2, flexBasis: isMobile && isTablet ? '100%' : '60%' }}>
            <CardContent sx={{ pb: '7px !important', ...(isMobile && { p: '3px !important' }) }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '30vw', justifyContent: 'space-between', position: 'relative', ...((isTablet || isMobile) && { width: '100%', padding: '5px' }) }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography variant="subtitle2" sx={{ fontSize: '15px' }}>Net Profit</Typography>
                        <Typography variant={(isDesktop || isTablet) ? 'h4' : 'h5'} sx={{ fontWeight: 'bold', mt: 1, ...(!(isDesktop || isTablet) && { fontSize: isMobile ? '27px' : '29px' }) }}>$ 6759.25</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 1 }}>
                            <ArrowUpward sx={{ color: '#09c322', fontSize: 20 }} />
                            <Typography variant="subtitle2" sx={{ color: '#09c322', ml: 0.5 }}>
                                3%
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ ...(isMobile && { width: '50%' }), textAlign: 'center' }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        >
                            <svg width="100" height="100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    stroke={backgroundStroke}
                                    strokeWidth={strokeWidth}
                                    fill="none"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={radius}
                                    stroke={progressStroke}
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={circumference - progress}
                                    fill="none"
                                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                                />
                            </svg>
                            <Box
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <span style={{ fontSize: '7px', textAlign: 'center' }}><span style={{ fontSize: '15px', textAlign: 'center', fontWeight: 'bold' }}>70%</span> <br /> Goal <br /> Completed</span>
                            </Box>
                        </Box>
                        <Typography variant="subtitle2" sx={{ fontSize: '10px', mt: '3px', mr: '2px' }}>*The values here has been rounded off</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

export default NetProfit