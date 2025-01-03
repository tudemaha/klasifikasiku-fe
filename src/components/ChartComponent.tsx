import { Bar } from "react-chartjs-2";

interface ChartProps {
  data: { labels: string[]; datasets: any[] };
  title: string;
}

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

// Daftarkan semua komponen yang diperlukan
ChartJS.register(
  CategoryScale, // Untuk sumbu kategori
  LinearScale, // Untuk sumbu linear
  BarElement, // Untuk elemen bar
  Title, // Untuk judul chart
  Tooltip, // Untuk tooltip
  Legend // Untuk legenda
);

const ChartComponent = ({ data, title }: ChartProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <Bar data={data} />
    </div>
  );
};

export default ChartComponent;
