import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Downloads() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative flex flex-col items-center justify-center p-6">
      <Head>
        <title>VIP App Download | 91Club</title>
        <meta name="description" content="Download the 91 Club VIP Prediction app for Android." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 max-w-lg w-full transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">91 Club VIP APK</h1>
        
        <p className="text-blue-200 mb-8 text-center">
          Thank you for purchasing the 91 Club VIP Prediction App! Your download is ready.
        </p>
        
        <div className="flex justify-center mb-8">
          <a 
            href="/downloads/91club-vip.apk.html" 
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            PREVIEW VIP APP
          </a>
        </div>
        
        <div className="bg-black/30 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold mb-2 text-white">File Info:</h4>
          <ul className="text-blue-200 space-y-1">
            <li>Version: 1.0.0</li>
            <li>Size: 15MB</li>
            <li>Android 7.0+ required</li>
          </ul>
        </div>
        
        <div className="bg-black/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold mb-2 text-white">NOTE:</h4>
          <p className="text-blue-200 text-sm">
            This is a preview version. To get the actual APK file, please contact our development team who will provide you with the compiled APK for distribution via Cosmofeed.
          </p>
          <p className="text-blue-200 text-sm mt-2">
            The source code for the mobile app is in the /mobile-app directory.
          </p>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link 
            href="/mod-apk"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
          >
            Back to MOD APK Page
          </Link>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-blue-200 text-sm">
        &copy; 2024 91 Club VIP. All rights reserved.
      </footer>
    </div>
  );
} 