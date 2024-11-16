import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

interface ApplicationStatsProps {
  stats: {
    pending: number;
    accepted: number;
    rejected: number;
  };
}

const ApplicationStats: React.FC<ApplicationStatsProps> = ({ stats }) => {
  const data = {
    labels: ['Pending', 'Accepted', 'Rejected'],
    datasets: [
      {
        data: [stats.pending, stats.accepted, stats.rejected],
        backgroundColor: ['#FFCD56', '#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#FFB23A', '#2C81D8', '#E64A62'],
      },
    ],
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Application Status Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ApplicationStats;
