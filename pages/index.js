import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [showTelegramSuccess, setShowTelegramSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTelegramJoin = () => {
    // In a real implementation, this would redirect to the Telegram channel
    setShowTelegramSuccess(true);
    setTimeout(() => setShowTelegramSuccess(false), 3000);
    // Open the Telegram link in a new tab
    window.open('https://heylink.me/binarygod/', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      <Head>
        <title>91CLUB VIP</title>
        <meta name="description" content="91Club Vip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-black/50 backdrop-blur-md text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">91 CLUB VIP</h1>
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

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className={`relative overflow-hidden rounded-2xl shadow-2xl mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"></div>
          <div className="relative z-20 p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to 91Club VIP Prediction</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Your trusted partner for gaming and entertainment. Join us for the best gaming experience with high-quality games and excellent customer service.
            </p>
            
            <div className="mb-8">
              <a 
                href="https://okwin.com/affiliate-link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg text-lg inline-block transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Register Now with Okwin
              </a>
              <p className="mt-3 text-gray-200">Sign up and start earning with our affiliate program!</p>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Link 
                href="/mod-apk"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition duration-300 border border-white/20"
              >
                VIP APK
              </Link>
              <Link 
                href="/random-prediction"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition duration-300 border border-white/20"
              >
                VIP Prediction
              </Link>
            </div>
          </div>
        </section>

        {/* Winning Videos Section */}
        <section className={`bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Winning Videos</h2>
          <p className="text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Watch our users win big with 91Club! These videos showcase real wins from our platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">Big Win Highlights</h3>
              <div className="relative aspect-video">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/videos/photo_6246709424848752598_y.jpg"
                >
                  <source src="/videos/IMG_3007.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-300">Watch this amazing win from one of our players!</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">Strategy Showcase</h3>
              <div className="relative aspect-video">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/IMG_3009.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-300">Learn winning strategies from our top players!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">Jackpot Win</h3>
              <div className="relative aspect-video">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/IMG_3010.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-300">Incredible jackpot win from last week!</p>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 transform transition-all duration-300 hover:scale-[1.02]">
              <h3 className="text-xl font-bold p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">Expert Gameplay</h3>
              <div className="relative aspect-video">
                <video 
                  controls 
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/document_6248983119949468527.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4">
                <p className="text-gray-300">Watch expert gameplay and learn how to win big!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Telegram Section */}
        <section className={`bg-gradient-to-r from-blue-800/30 to-indigo-900/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-4 text-center">Join Our Telegram Channel</h2>
          <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
            Get exclusive tips, predictions, and special offers by joining our Telegram channel!
          </p>
          
          <div className="flex justify-center">
            {showTelegramSuccess && (
              <div className="fixed top-24 inset-x-0 mx-auto max-w-md z-50">
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg animate-bounce">
                  <div className="flex items-center">
                    <svg className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <p>Success! Redirecting to Telegram...</p>
                  </div>
                </div>
              </div>
            )}
            
            <button 
              onClick={handleTelegramJoin}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Our Telegram Channel
            </button>
          </div>
        </section>

        {/* Features Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Exclusive Bonuses</h3>
            <p className="text-gray-300">
              Get access to exclusive bonuses and promotions when you register through our affiliate links.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Secure Gaming</h3>
            <p className="text-gray-300">
              Our platform provides a secure and fair gaming environment with advanced encryption technology.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 border border-white/10 transform transition-all duration-300 hover:scale-[1.03]">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fast Payouts</h3>
            <p className="text-gray-300">
              Enjoy quick and hassle-free withdrawals with our streamlined payout system.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-black/50 backdrop-blur-md text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 91Club VIP Prediction. All rights reserved.</p>
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