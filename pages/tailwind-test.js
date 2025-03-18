import Head from 'next/head';

export default function TailwindTest() {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center p-4">
      <Head>
        <title>Tailwind CSS Test</title>
      </Head>
      
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Tailwind CSS Test Page</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">If you see this styled, Tailwind is working!</h2>
        <p className="text-gray-700 mb-6">This text should be gray and have some margin at the bottom.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-red-500 text-white p-4 rounded-lg text-center font-bold">Red Box</div>
          <div className="bg-green-500 text-white p-4 rounded-lg text-center font-bold">Green Box</div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg text-center font-bold">Yellow Box</div>
          <div className="bg-purple-500 text-white p-4 rounded-lg text-center font-bold">Purple Box</div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
          This is a Button
        </button>
      </div>
    </div>
  );
} 