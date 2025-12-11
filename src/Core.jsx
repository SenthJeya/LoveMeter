import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import confetti from 'canvas-confetti';
import { Crown, Heart, Sparkles, Database } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const LOVE_QUOTES = [
  "Love is all you need.",
  "You complete me.",
  "Two hearts, one soul.",
  "Forever and always.",
  "Love beats all odds.",
  "You are my sunshine.",
  "True love stories never end.",
  "My heart is yours.",
  "Life is better with you.",
  "You are my happy place."
];

function Core() {
  const [name1, setName1] = useState(''); // Reset to empty on page refresh
  const [name2, setName2] = useState(''); // Reset to empty on page refresh
  const [result, setResult] = useState(null);
  const [animate, setAnimate] = useState(false);

  const isValidName = (name) => /^[A-Za-z]*$/.test(name);

  const getRandomPercentage = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const countRemainingLetters = (str1, str2) => {
    const arr1 = str1.toLowerCase().split('');
    const arr2 = str2.toLowerCase().split('');
    const common = arr1.filter(char => arr2.includes(char));
    const remaining1 = arr1.filter(char => !common.includes(char)).length;
    const remaining2 = arr2.filter(char => !common.includes(char)).length;
    return remaining1 + remaining2;
  };

  const compareNames = (name1, name2) => {
    const sameStart = name1[0]?.toLowerCase() === name2[0]?.toLowerCase();
    const sameLength = name1.length === name2.length;

    if (sameStart && sameLength) {
      return getRandomPercentage(95, 100);
    } else if (sameStart || sameLength) {
      return getRandomPercentage(85, 90);
    } else {
      const reminder = countRemainingLetters(name1, name2);
      if (reminder === 0) {
        return getRandomPercentage(80, 85);
      } else if (reminder % 2 !== 0) {
        return getRandomPercentage(75, 80);
      } else {
        return getRandomPercentage(70, 75);
      }
    }
  };



  const handleSubmit = (e) => {
    if (result) return; // Prevent recalculation if result is showing

    if (!name1 && !name2) {
      toast.error("King & Queen can't be Empty");
      return;
    }
    if (!name1) {
      toast.error("King can't be empty");
      return;
    }
    if (!name2) {
      toast.error("Queen can't be empty");
      return;
    }

    if (!isValidName(name1) || !isValidName(name2)) {
      toast.error('Names must contain only letters (no numbers or special characters).');
      return;
    }

    setAnimate(true);
    setTimeout(() => {
      const percentage = compareNames(name1, name2);
      const randomQuote = LOVE_QUOTES[Math.floor(Math.random() * LOVE_QUOTES.length)];
      setResult({ name1, name2, percentage, quote: randomQuote });
      setAnimate(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleNameChange = (setter) => (e) => {
    let value = e.target.value;
    if (isValidName(value) || value === '') {
      if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      setter(value);
    }
  };

  const closeResult = () => {
    setResult(null);
    setName1(''); // Reset name1 when result is closed
    setName2(''); // Reset name2 when result is closed
  };

  useEffect(() => {
    let animationFrameId;

    if (result) {
      const frame = () => {
        // launch a few confetti from the left edge
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          shapes: ['heart'],
          colors: ['#ef4444', '#ec4899', '#db2777'],
          zIndex: 100
        });
        // and launch a few from the right edge
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          shapes: ['heart'],
          colors: ['#ef4444', '#ec4899', '#db2777'],
          zIndex: 100
        });

        animationFrameId = requestAnimationFrame(frame);
      };

      frame();
    } else {
      confetti.reset();
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      confetti.reset();
    };
  }, [result]);


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans" onClick={result ? closeResult : null}>
      <Header className="h-16" />
      
      {/* Top Scrolling Notice */}
      <div className="bg-yellow-500/10 text-yellow-300 py-2 overflow-hidden relative border-b border-yellow-500/20">
        <div className="animate-scroll-left flex items-center gap-8 w-full">
          <span className="flex items-center gap-2"><Database className="w-4 h-4" /> ⚠️ No Database Connected - Privacy First! All Calculations Happen Locally. ⚠️</span>
          <span className="flex items-center gap-2"><Database className="w-4 h-4" /> ⚠️ No Database Connected - Privacy First! All Calculations Happen Locally. ⚠️</span>
          <span className="flex items-center gap-2"><Database className="w-4 h-4" /> ⚠️ No Database Connected - Privacy First! All Calculations Happen Locally. ⚠️</span>
          <span className="flex items-center gap-2"><Database className="w-4 h-4" /> ⚠️ No Database Connected - Privacy First! All Calculations Happen Locally. ⚠️</span>
        </div>
      </div>

      <main className="flex flex-col relative" style={{ height: 'calc(100vh - 12rem)' }}> {/* Adjusted height: Header + Footer + Top Notice */}
        {/* Blue top section with gradient */}
        <div className="h-1/2 bg-gradient-to-b from-blue-700 to-gray-900 flex items-end justify-center pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          <div className={`max-w-xs w-full p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl z-10 transition-all duration-500 transform ${animate ? 'animate-hit-top absolute top-1/2 -translate-y-full opacity-0' : 'relative opacity-100 hover:scale-105'}`}>
            <label htmlFor="name1" className="block text-3xl font-serif font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-md flex items-center justify-center gap-2">
              <Crown className="w-8 h-8 text-yellow-400 fill-current" /> King
            </label>
            <input
              type="text"
              id="name1"
              value={name1}
              onChange={handleNameChange(setName1)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              className="w-full px-4 py-3 bg-gray-800/50 border border-blue-400/30 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white text-center placeholder-gray-400 transition-all"
              placeholder="Enter King's Name"
            />
          </div>
        </div>
        
        {/* Button positioned between sections */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
          <button
            onClick={handleSubmit}
            className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] hover:scale-110 active:scale-95"
          >
             <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
             <span className="relative z-10 text-white font-bold text-lg tracking-wider flex items-center gap-2">
               <Heart className="w-6 h-6 fill-current animate-pulse" /> CALCULATE LOVE <Heart className="w-6 h-6 fill-current animate-pulse" />
             </span>
          </button>
        </div>

        {/* Pink bottom section with gradient */}
        <div className="h-1/2 bg-gradient-to-t from-pink-700 to-gray-900 flex items-start justify-center pt-20 relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/hearts.png')] pointer-events-none"></div>
          <div className={`max-w-xs w-full p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-2xl z-10 transition-all duration-500 transform ${animate ? 'animate-hit-bottom absolute top-1/2 -translate-y-0 opacity-0' : 'relative opacity-100 hover:scale-105'}`}>
            <label htmlFor="name2" className="block text-3xl font-serif font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 drop-shadow-md flex items-center justify-center gap-2">
              <Crown className="w-8 h-8 text-yellow-400 fill-current" /> Queen
            </label>
            <input
              type="text"
              id="name2"
              value={name2}
              onChange={handleNameChange(setName2)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              className="w-full px-4 py-3 bg-gray-800/50 border border-pink-400/30 rounded-xl shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent text-white text-center placeholder-gray-400 transition-all"
              placeholder="Enter Queen's Name"
            />
          </div>
        </div>
      </main>

      {/* Result Popup */}
      {result && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative bg-gray-900 border-2 border-pink-500/50 rounded-3xl p-10 shadow-[0_0_50px_rgba(236,72,153,0.4)] text-center max-w-sm w-full transform transition-all scale-100 hover:scale-105">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <span className="text-6xl filter drop-shadow-lg">💖</span>
            </div>
            <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6 mt-4 italic">
              "{result.quote}"
            </h2>
            <div className="flex flex-col items-center gap-4 mb-6">
               <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-red-1000 to-pink-500 drop-shadow-2xl tracking-widest animate-pulse">
                 {getInitialsDisplay(result.name1, result.name2)}
               </div>
               <div className="flex items-center gap-3 text-lg font-serif italic text-white/90">
                  <span className="text-blue-300 drop-shadow-md">{result.name1}</span>
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-bounce" />
                  <span className="text-pink-300 drop-shadow-md">{result.name2}</span>
               </div>
               <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden shadow-inner mt-2">
                 <div 
                   className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000 ease-out" 
                   style={{ width: `${result.percentage}%` }}
                 ></div>
               </div>
               <div className="text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                 {result.percentage}%
               </div>
            </div>
            <p className="text-sm text-gray-500 animate-pulse">Click anywhere to close</p>
          </div>
        </div>
      )}



      <Footer className="h-16 text-gray-500" />
    </div>
  );
}

// Logic to extract initials
const getInitialsDisplay = (name1, name2) => {
  const initial1 = name1.charAt(0).toUpperCase();
  const initial2 = name2.charAt(0).toUpperCase();

  return (
    <span className="flex items-center justify-center">
      {initial1} <Heart className="w-8 h-8 mx-2 text-red-500 fill-red-500 animate-bounce" /> {initial2}
    </span>
  );
};

export default Core;
