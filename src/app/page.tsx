"use client";

import Loading from "@/components/Loading";
import ClassificationResult from "@/components/Result";
import { BASE_URL } from "@/utils/consts";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [resultKnn, setResultKnn] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!selectedFile) {
      setError("Please select a file.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setResultKnn(null);

    const formData = new FormData();
    formData.append("transaction", selectedFile);

    try {
      const response = await fetch(BASE_URL + "/classification_c4_5", {
        method: "POST",
        body: formData,
      });

      const responseKNN = await fetch(BASE_URL + "/classification", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      if (!responseKNN.ok) {
        throw new Error(`Error: ${responseKNN.statusText}`);
      }

      const data = await response.json();
      const dataKNN = await responseKNN.json();
      setResult(data);
      setResultKnn(dataKNN);
    } catch (error: any) {
      setError(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#3F72AF] text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Klasifikasiku.id</h1>
          <nav className="space-x-6">
            <Link href="/">
              <span className="hover:underline">Beranda</span>
            </Link>
            <Link href="#">
              <span className="hover:underline">Tentang</span>
            </Link>
            <Link href="#">
              <span className="hover:underline">Hubungi</span>
            </Link>
          </nav>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-8 flex flex-col lg:flex-row items-center justify-between relative">
        {!result && !resultKnn && (
          <>
            {/* Illustration */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <img
                src="/undraw_security_re_a2rk.png"
                alt="Illustration"
                className="w-3/4 mx-auto"
              />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-5/12 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-black">
                Masukan file excel
              </h2>
              <form onSubmit={handleSubmit}>
                {/* File Input */}
                <div className="mb-4">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                    accept=".xls,.xlsx"
                    required
                  />
                </div>
                {/* Download Template */}
                <div className="text-sm text-gray-600 mb-4">
                  Download template excel{" "}
                  <Link href="/template.xlsx">
                    <span className="text-blue-600 hover:underline">
                      disini
                    </span>
                  </Link>
                </div>
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#3F72AF] text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Klasifikasi sekarang
                </button>
              </form>
            </div>
          </>
        )}

        {(result || resultKnn) && (
          <>
            <main className="container mx-auto p-8 text-black">
              <h2 className="text-2xl font-bold mb-6">Hasil Klasifikasi</h2>
              <ClassificationResult
                title="DECISSION TREE C4.5"
                data={result.data}
              />
              <ClassificationResult title="KNN" data={resultKnn.data} />
            </main>
          </>
        )}
        {loading && <Loading />}
      </main>

      {/* Footer */}
      <footer className="bg-[#3F72AF] text-white py-4 text-center">
        <p>&copy; 2024 Klasifikasiku.id</p>
      </footer>
    </div>
  );
}
