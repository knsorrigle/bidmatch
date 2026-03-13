import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar.tsx';

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
};

const textReveal = {
  initial: { y: 120, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }
};

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white font-body selection:bg-white selection:text-black overflow-hidden relative min-h-screen">
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center px-12 md:px-24">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl"
        >
          <div className="overflow-hidden mb-4">
            <motion.span 
              variants={textReveal}
              className="text-[12px] tracking-[0.6em] font-bold text-outline block uppercase opacity-60"
            >
              GENESIS PROTOCOL V.1
            </motion.span>
          </div>
          
          <div className="overflow-visible mb-12 pt-12">
            <motion.h1 
              variants={textReveal}
              className="font-headline font-black text-[12vw] leading-tight tracking-tighter uppercase -ml-2"
            >
              HIRE WITHOUT<br/>
              THE GUESSWORK<span className="text-outline">.</span>
            </motion.h1>
          </div>

          <motion.div 
            variants={textReveal}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <p className="text-lg md:text-xl font-light text-on-surface-variant max-w-md uppercase tracking-widest leading-relaxed opacity-60">
              AI ranks every freelancer before you talk to them. The first deep-validation bidding engine.
            </p>
            
            <button 
              onClick={() => navigate('/login')}
              className="group relative px-20 py-8 border border-white overflow-hidden transition-all duration-700 hover:text-black"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.76,0,0.24,1]"></div>
              <span className="relative z-10 text-xs tracking-[0.5em] font-black uppercase">LOGIN TO PORTAL</span>
            </button>
          </motion.div>
        </motion.div>
      </main>

      {/* Background watermark */}
      <div className="fixed -bottom-32 -right-32 opacity-[0.02] pointer-events-none select-none z-0">
        <span className="font-headline font-black text-[50vw] leading-none tracking-tighter">BID</span>
      </div>

      {/* Scroll Indicator */}
      <div className="fixed bottom-12 right-12 flex flex-col items-end gap-6 opacity-30 z-10">
        <span className="text-[9px] tracking-[0.4em] font-bold uppercase">SCROLL TO ANALYZE</span>
        <div className="w-px h-24 bg-white"></div>
      </div>

      {/* Est Label */}
      <div className="fixed bottom-12 left-12 opacity-20 z-10">
        <span className="text-[9px] tracking-[0.8em] font-black uppercase -rotate-90 origin-left">EST. 2026</span>
      </div>
    </div>
  );
}
