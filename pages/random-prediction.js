import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RandomPrediction() {
  const [periodNumber, setPeriodNumber] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const generatePrediction = () => {
    if (!periodNumber) {
      alert('Please enter a period number');
      return;
    }

    setIsLoading(true);

    // Reduced delay to 500ms for faster response
    setTimeout(() => {
      // Generate a single random prediction (either "Big" or "Small")
      // Slightly biased towards "Big" (55% chance)
      const result = Math.random() < 0.55 ? "Big" : "Small";
      
      setPrediction(result);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/images/photo_6251279660893717148_y.jpg')] bg-cover bg-center opacity-20 z-0"></div>
      
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-10 z-0"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-gradient-x z-0"></div>

      <Head>
        <title>VIP Prediction | 91Club</title>
        <meta name="description" content="Get predictive insights for 91 Club games." />
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

      <main className="container mx-auto px-4 py-12 relative z-10 text-white">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">VIP RESULT</h1>
          <p className="text-xl mb-12 text-center text-blue-200 max-w-2xl mx-auto">
            Get accurate predictive insights for 91 Club games. Our advanced algorithm analyzes patterns to give you the edge.
          </p>
        </div>

        {/* User Input Section */}
        <section className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Enter Period Number</h2>
            <p className="mb-8 text-center text-blue-200">
              Enter the period number to get a prediction for your game. Our algorithm will analyze the patterns and provide you with the most likely outcome.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <input
                type="text"
                value={periodNumber}
                onChange={(e) => setPeriodNumber(e.target.value)}
                placeholder="Enter period number"
                className="bg-white/10 border border-white/30 p-4 rounded-lg w-full md:w-64 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={generatePrediction}
                disabled={isLoading}
                className={`bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Generating...' : 'RESULT'}
              </button>
            </div>
          </div>
        </section>

        {/* Prediction Result Section */}
        {(isLoading || prediction) && (
          <section className={`bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 mb-12 border border-white/20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">VIP Result</h2>
              
              {isLoading ? (
                <div className="flex flex-col items-center justify-center p-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
                  <p className="text-blue-200 text-center">Analyzing patterns...</p>
                </div>
              ) : (
                <div className="text-center">
                  <p className="mb-6 text-lg">Result for period <span className="font-semibold text-blue-300">{periodNumber}</span>:</p>
                  <div className="flex justify-center mb-8">
                    <div 
                      className={`p-10 rounded-2xl text-center font-bold text-4xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                        prediction === 'Big' 
                          ? 'bg-gradient-to-br from-red-500/80 to-pink-600/80 text-white' 
                          : 'bg-gradient-to-br from-green-500/80 to-emerald-600/80 text-white'
                      }`}
                      style={{ minWidth: '200px' }}
                    >
                      {prediction}
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-xl mx-auto border border-white/20">
                    <p className="text-blue-200 italic text-center">
                      <span className="text-yellow-300">Note:</span> 🚀 Exclusive VIP Predictions Await You! 🔥

Create a new account using the registration link below to unlock VIP predictions! ⚡
⚠️ Warning: Old accounts may get banned, so make sure to register a fresh account now!

👉 Register Now & Enjoy Premium Predictions! ✅
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Call-to-Action Section */}
        <section className={`bg-gradient-to-r from-blue-900/30 to-indigo-900/30 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 text-center">Want More Accurate Results?</h2>
          <p className="mb-8 text-center text-blue-200 max-w-2xl mx-auto">
            Register with our VIP LINK  and join our Telegram channel for exclusive predictions and tips!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 transform transition-all duration-300 hover:scale-[1.03]">
              <h3 className="text-xl font-bold mb-4 text-center">Register Now</h3>
              <p className="mb-6 text-center text-blue-200">Sign up with our VIP LINK  to get access to premium features and better odds.</p>
              <div className="flex justify-center">
                <a 
                  href="https://okwin.com/affiliate-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Register with Okwin
                </a>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 transform transition-all duration-300 hover:scale-[1.03]">
              <h3 className="text-xl font-bold mb-4 text-center">Join Our Telegram</h3>
              <p className="mb-6 text-center text-blue-200">Get exclusive predictions, tips, and strategies from our expert team.</p>
              <div className="flex justify-center">
                <a 
                  href="https://heylink.me/binarygod/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Join Telegram Channel
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black/50 backdrop-blur-md text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 91 Club VIP Prediction. All rights reserved.</p>
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