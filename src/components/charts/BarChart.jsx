// BarChart.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, options }) => {
  const { isMiniDesktop, isTablet, isMobile } = useContext(DeviceTypeContext);
  const height = isMiniDesktop || isTablet ? 110 : isMobile ? 170 : 80;

  return <Bar data={data} options={options} height={height} />;
};

export default BarChart;
