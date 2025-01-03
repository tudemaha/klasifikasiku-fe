import { Pie } from "react-chartjs-2";

interface PieChartProps {
  data: { labels: string[]; datasets: any[] };
  title: string;
}

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";

// Daftarkan elemen dan plugin Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, title }: PieChartProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 ">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="text-center flex justify-center">
        <div className="w-1/2 ">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
