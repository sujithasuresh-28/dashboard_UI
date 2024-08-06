import React, { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Icon, Box, Card, CardContent, Typography } from '@mui/material';
import { recentOrdersTableBody, recentOrdersTableHead } from '../../constants/Constants';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const RecentOrders = () => {
    const { isMobile } = useContext(DeviceTypeContext);
    return (
        <Card sx={{ mt: '30px', bgcolor: '#121212', p: '5px 3px !important', borderRadius: 2, flexBasis: '67%' }}>
            <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', ...(isMobile && { fontSize: '20px', mb: 1 }) }}>Recent Orders</Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {recentOrdersTableHead?.map((head, index) => <TableCell sx={{ ...(isMobile && { fontSize: '15px', ...(index === 0 && { width: '170px' }) }) }}>{head}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {recentOrdersTableBody.map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell sx={{ ...(index === recentOrdersTableBody?.length - 1 && { borderBottom: 'none' }), ...(isMobile && { fontSize: '15px', width: '170px' }) }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', ...(isMobile && { width: '170px' }) }}>
                                            <Icon sx={{ width: isMobile ? '30px' : '35px', height: isMobile ? '30px' : '35px', mr: 1 }}><img width={isMobile ? '30px' : '35px'} height={isMobile ? '30px' : '35px'} src={row.img} /></Icon>
                                            {row.name}
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ ...(index === recentOrdersTableBody?.length - 1 && { borderBottom: 'none' }), ...(isMobile && { fontSize: '15px' }) }}>{row.orderNo}</TableCell>
                                    <TableCell sx={{ ...(index === recentOrdersTableBody?.length - 1 && { borderBottom: 'none' }), ...(isMobile && { fontSize: '15px' }) }}>{row.amount}</TableCell>
                                    <TableCell sx={{ ...(index === recentOrdersTableBody?.length - 1 && { borderBottom: 'none' }), ...(isMobile && { fontSize: '15px' }) }}>
                                        <Box sx={{ color: row.status === 'Delivered' ? '#32ad43' : '#ea3838', width: '90px', textAlign: 'center', borderRadius: '20px', backgroundColor: row.status === 'Delivered' ? 'rgba(9, 195, 34, 0.3)' : 'rgba(255, 0, 0, 0.3)' }}>
                                            {row.status}
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default RecentOrders;
