import React from "react";

type ClassificationResultProps = {
  title: string;
  data: {
    id: string;
    f1: number;
    recall: number;
    precision: number;
    excel_download: string;
    result: {
      stock_code: string;
      description: string;
      prediction: string;
    }[];
  };
};

const ClassificationResult: React.FC<ClassificationResultProps> = ({
  data,
  title,
}) => {
  return (
    <>
      {/* Classification Section */}
      <section className="mb-8 bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Hasil Klasifikasi {title}</h3>
          <a
            href={data.excel_download}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Download Data
          </a>
        </div>

        {/* Metrics */}
        <div className="mb-4 border border-blue-600 rounded-lg p-4 flex gap-x-4">
          <p>
            Presisi:{" "}
            <span className="font-bold">
              {(data.precision * 100).toFixed(2)}%
            </span>
          </p>
          <p>
            Recall:{" "}
            <span className="font-bold">{(data.recall * 100).toFixed(2)}%</span>
          </p>
          <p>
            F1-score:{" "}
            <span className="font-bold">{(data.f1 * 100).toFixed(2)}%</span>
          </p>
        </div>

        {/* Scrollable Table */}
        <div className="overflow-y-auto max-h-[500px]">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Data</th>
                <th className="border border-gray-300 px-4 py-2">
                  Hasil Klasifikasi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.result.map((item, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {item.prediction}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ClassificationResult;
