// App.js
import React, { useContext } from 'react';
import { Typography, Box, Select, MenuItem, Card, CardContent } from '@mui/material';
import BarChart from './BarChart';
import { barChartOptions } from '../../constants/Constants';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

const Charts = () => {
  const { isMobile } = useContext(DeviceTypeContext);
  const data = {
    labels: isMobile ? ['5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31'] : ['5', '7', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27', '29', '31', '33', '35', '37', '39', '41', '43', '45', '47', '49'],
    datasets: [
      {
        data: isMobile ? [5, 3, 2, 4, 6, 5, 10, 6, 9, 10, 5, 4, 7, 2, 7, 9, 5, 7] : [5, 3, 2, 4, 6, 5, 10, 6, 9, 10, 5, 4, 7, 2, 7, 9, 7, 10, 4, 8, 10, 6, 3, 9, 4, 12, 6, 3, 8, 4, 9, 7, 6, 3, 2, 5, 6, 8, 2, 10, 4, 6, 9, 2, 5, 1, 8, 8, 3, 5, 3],
        backgroundColor: '#7294ff',
        borderWidth: 1,
        borderRadius: 20,
        barThickness: 20,
      },
    ],
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', mt: '30px', bgcolor: '#121212', p: '5px 3px !important', borderRadius: 2, flexBasis: '100%' }}>
      <CardContent sx={{ ...(isMobile && { padding: '10px 3px' }) }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', ...(isMobile && { pl: 1 }) }}>Activity</Typography>
          <Select defaultValue="Weekly" variant="outlined"
            sx={{
              color: '#fff',
              backgroundColor: '#4b4c51',
              borderRadius: '30px',
              fontSize: '13px',
              '.MuiOutlinedInput-notchedOutline': { borderColor: '#3a3a3c' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#3a3a3c' },
              '.MuiSvgIcon-root': { color: '#fff' },
              '.MuiSelect-select': { padding: '10px 15px' },
            }}>
            <MenuItem value="Weekly" sx={{ p: '10px 5px !important' }}>Weekly</MenuItem>
          </Select>
        </Box>
        <BarChart data={data} options={barChartOptions} />
      </CardContent>
    </Card>
  );
};

export default Charts;
