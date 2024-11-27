import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Head>
        <title>Grand Entrance Exam Result</title>
      </Head>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-center text-2xl font-bold text-main mb-6">
          Grand Entrance Exam Result
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="registrationNumber"
              className="block text-gray-700 font-medium"
            >
              Registration Number *
            </label>
            <input
              type="text"
              id="registrationNumber"
              placeholder="Registration Number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main"
            />
          </div>
          <div>
            <label
              htmlFor="cnic"
              className="block text-gray-700 font-medium"
            >
              CNIC or B-Form Number *
            </label>
            <input
              type="text"
              id="cnic"
              placeholder="CNIC or B-Form Number"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-main focus:border-main"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-main text-white py-3 rounded-md text-lg font-semibold hover:bg-main focus:outline-none focus:ring-2 focus:ring-main"
          >
            Get Result
          </button>
        </form>
      </div>
    </div>
  );
}
