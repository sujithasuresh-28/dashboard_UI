// BarChart.js
import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { DeviceTypeContext } from '../../context/DeviceTypeContext';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data, options }) => {
  const { isMiniDesktop, isTablet, isMobile } = useContext(DeviceTypeContext);

  let chartClassName = 'chart-default';
  if (isMiniDesktop) chartClassName = 'chart-mini-desktop';
  else if (isTablet) chartClassName = 'chart-tablet';
  else if (isMobile) chartClassName = 'chart-mobile';

  return (
    <div className={`chart-container ${chartClassName}`}>
      <Bar data={data} options={{ ...options, responsive: true, maintainAspectRatio: false }} />
    </div>
  );
};

export default BarChart;
