import Head from 'next/head';

export default function Test() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <Head>
        <title>Tailwind CSS Test</title>
      </Head>
      
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind CSS Test</h1>
      <p className="text-lg text-gray-700">If you can see this text styled with Tailwind CSS, it's working!</p>
      
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-red-500 text-white p-4 rounded-lg">Red Box</div>
        <div className="bg-green-500 text-white p-4 rounded-lg">Green Box</div>
        <div className="bg-blue-500 text-white p-4 rounded-lg">Blue Box</div>
      </div>
    </div>
  );
} 