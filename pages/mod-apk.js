import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ModApk() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/photo_6251279660893717148_y.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10 z-0"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-gradient-x z-0"></div>

      <Head>
        <title>VIP Mod APK | 91Club</title>
        <meta name="description" content="Download the 91 Club VIP Prediction app for Android." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black/50 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">91 Club VIP</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/mod-apk" className="hover:text-blue-400 transition-colors">VIP APK</Link></li>
                <li><Link href="/random-prediction" className="hover:text-blue-400 transition-colors">VIP Predictions</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10 text-white">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">91 CLUB VIP APK</h1>
          <p className="text-xl mb-12 text-center text-blue-200 max-w-2xl mx-auto">
            Download our exclusive VIP prediction app for Android and get the same premium predictions as our website, directly on your mobile device!
          </p>
        </div>

        {/* App Features Section */}
        <section className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">App Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
                <div className="bg-blue-500/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Secure Login</h3>
                <p className="text-blue-200 text-center">
                  Secure authentication with passkey protection and biometric login options for authorized VIP members only.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
                <div className="bg-purple-500/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Same VIP Algorithm</h3>
                <p className="text-blue-200 text-center">
                  The exact same prediction algorithm as our website, with the same accuracy and reliability, now in your pocket.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 backdrop-blur-md rounded-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
                <div className="bg-indigo-500/30 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Instant Alerts</h3>
                <p className="text-blue-200 text-center">
                  Receive instant notifications for high-confidence predictions and special offers directly on your phone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Download APK</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
              Get our Android app for exclusive VIP predictions. The app requires Android 7.0 or higher and permission to install from unknown sources.
            </p>
            
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-8 rounded-xl border border-white/10 mb-8 max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">91 Club VIP Prediction</h3>
                <p className="text-blue-200 mb-4">Version 1.0.0 • 15MB • Android 7.0+</p>
                <p className="text-yellow-300 text-sm mb-6">⚠️ Please note: This app is in beta version. For VIP members only.</p>
                
                <a 
                  href="/downloads"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  GET VIP APK (₹99)
                </a>

                <p className="mt-4 text-blue-200 text-sm">Secure payment processing by Cosmofeed</p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 max-w-lg">
                <h4 className="text-lg font-semibold mb-2">How It Works:</h4>
                <ol className="text-left text-blue-200 space-y-2 list-decimal pl-5">
                  <li>Click the button above to open our Cosmofeed payment page</li>
                  <li>Complete the secure payment process (₹99 only)</li>
                  <li>You'll receive the APK download link immediately after payment</li>
                  <li>Download and install the app on your Android device</li>
                  <li>Login with your VIP passkey to access exclusive predictions</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className={`bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Don't Have a VIP Account?</h2>
            <p className="mb-8 text-blue-200 max-w-2xl mx-auto">
              Register with our affiliate partners to get your VIP passkey and unlock exclusive predictions and premium features!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href="https://okwin.com/affiliate-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Register Now
              </a>
              <a 
                href="https://heylink.me/binarygod/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Join Our Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-md text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 91 Club VIP. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 