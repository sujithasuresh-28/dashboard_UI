import { Box, Card, CardContent, Icon, Rating, Typography } from '@mui/material';
import { customersFeedback } from '../../constants/Constants';
import { Star } from '@mui/icons-material';
import { useContext } from 'react';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const CustomerFeedback = () => {
    const { isMobile } = useContext(DeviceTypeContext);
    return (
        <Card className='customer-feedback' sx={{ mt: '30px', bgcolor: '#121212', p: '5px 3px !important', borderRadius: 2, flexBasis: '40%', overflow: 'auto' }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', ...(isMobile && { fontSize: '20px' }) }}>Customer's Feedback</Typography>
                {customersFeedback.map((customer) => (
                    <Box sx={{
                        mt: 2,
                        pb: 2,
                        borderBottom: '1px solid #4b4a4a',
                        '&:last-child': {
                            borderBottom: 'none',
                        },
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                            <Icon sx={{ width: isMobile ? '34px' : '38px', height: isMobile ? '34px' : '38px', mr: 1 }}><img width={isMobile ? '34px' : '38px'} height={isMobile ? '34px' : '38px'} src={customer.icon} /></Icon>
                            <Typography variant='h6' sx={{ ...(isMobile && { fontSize: '17px' }) }}>{customer.name}</Typography>
                        </Box>
                        <Rating
                            name="simple-controlled"
                            value={customer.rating}
                            readOnly
                            emptyIcon={<Star fontSize={isMobile ? '8px' : "inherit"} sx={{ color: '#d3d3d3' }} />}
                            sx={{
                                '& .MuiRating-iconFilled': {
                                    color: '#fedd2e',
                                },
                                '& .MuiRating-iconEmpty': {
                                    color: '#ffffff',
                                    fill: '#ffffff'
                                },
                                fontSize: '20px'
                            }}
                        />
                        <Typography variant='subtitle2' sx={{ color: '#bebebe' }}>{customer.comments}</Typography>
                    </Box>
                ))}
            </CardContent>
        </Card>
    )
}

export default CustomerFeedback