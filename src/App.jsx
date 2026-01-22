import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Core from './Core';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isLoading={isLoading} />
      <Core />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!bg-gray-900 !text-white !font-sans !rounded-xl !border !border-pink-500/30 !shadow-[0_0_15px_rgba(236,72,153,0.3)] !backdrop-blur-md"
        bodyClassName="!text-sm !font-medium"
        progressClassName="!bg-gradient-to-r !from-blue-400 !to-pink-500"
      />
    </>
  );
}

export default App;