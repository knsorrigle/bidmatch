import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar.tsx';

const panelVariants = {
  initial: (side: 'left' | 'right') => ({ 
    x: side === 'left' ? '-100%' : '100%',
    opacity: 0 
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
  }
};

const contentVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1, 
    transition: { delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] } 
  }
};

export default function RoleSelection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col md:flex-row overflow-hidden font-body selection:bg-black selection:text-white">
      <Navbar />

      {/* Left Panel - Client */}
      <motion.div 
        custom="left"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        onClick={() => navigate('/client/dashboard')}
        className="flex-1 min-h-[50vh] md:min-h-screen border-r border-outline-variant/10 flex flex-col justify-center items-center group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.76,0,0.24,1]"></div>
        
        <motion.div variants={contentVariants} className="relative z-10 flex flex-col items-center group-hover:text-black transition-colors duration-500 w-full px-4 overflow-visible">
          <span className="text-[12px] tracking-[0.6em] font-bold text-outline group-hover:text-black/40 mb-8 uppercase transition-colors text-center">I WANT TO</span>
          <h1 className="font-headline font-black text-[10vw] md:text-[8vw] leading-tight tracking-tighter uppercase mb-4 text-center">
            HIRE.
          </h1>
          <div className="w-12 h-px bg-white group-hover:bg-black transition-colors"></div>
        </motion.div>
      </motion.div>

      {/* Right Panel - Freelancer */}
      <motion.div 
        custom="right"
        variants={panelVariants}
        initial="initial"
        animate="animate"
        onClick={() => navigate('/freelancer/onboarding')}
        className="flex-1 min-h-[50vh] md:min-h-screen flex flex-col justify-center items-center group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-accent-amber translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.76,0,0.24,1]"></div>
        
        <motion.div variants={contentVariants} className="relative z-10 flex flex-col items-center group-hover:text-black transition-colors duration-500 w-full px-4 overflow-visible">
          <span className="text-[12px] tracking-[0.6em] font-bold text-outline group-hover:text-black/40 mb-8 uppercase transition-colors text-center">I WANT TO</span>
          <h1 className="font-headline font-black text-[10vw] md:text-[8vw] leading-tight tracking-tighter uppercase mb-4 text-center">
            WORK.
          </h1>
          <div className="w-12 h-px bg-white group-hover:bg-black transition-colors"></div>
        </motion.div>
      </motion.div>

      {/* Center Label matched 1:1 visuals */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block">
        <div className="w-[1px] h-[30vh] bg-outline-variant/30 flex items-center justify-center">
          <span className="bg-black px-4 py-8 text-[10px] tracking-[0.5em] font-black uppercase text-outline">SELECT PATH</span>
        </div>
      </div>
    </div>
  );
}
