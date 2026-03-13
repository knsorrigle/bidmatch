import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const textRevealVariants = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
};

const buttonVariants = {
  initial: { x: 50, opacity: 0 },
  animate: (i: number) => ({ 
    x: 0, 
    opacity: 1, 
    transition: { delay: 0.5 + (i * 0.1), duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
  })
};

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden font-body selection:bg-white selection:text-black">
      <Navbar />

      <main className="min-h-screen flex flex-col justify-center px-12 md:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end lg:items-center">
          {/* Headline */}
          <div className="max-w-6xl overflow-hidden">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.4 }} 
              transition={{ delay: 0.3 }}
              className="font-label text-xs tracking-[0.5em] text-outline mb-8 block"
            >
              ACCESS YOUR
            </motion.span>
            <motion.h1 
              variants={textRevealVariants}
              initial="initial"
              animate="animate"
              className="font-headline font-black text-[12vw] lg:text-[15vw] leading-none tracking-tighter uppercase m-0 -ml-2 pt-8"
            >
              <ScrambleText text="ACCOUNT" /><span className="text-outline">.</span>
            </motion.h1>
          </div>

          {/* Login Buttons */}
          <div className="mt-24 lg:mt-0 flex flex-col gap-6 w-full lg:w-[480px] relative z-20 bg-black lg:pl-16">
            <div className="bg-black w-full h-[150%] absolute -top-[25%] -z-10 -left-16 lg:w-[calc(100%+4rem)]"></div>
            {[
              { label: 'LOGIN WITH GOOGLE', sub: 'GOOGLE' },
              { label: 'LOGIN WITH APPLE', icon: 'apple' }
            ].map((btn, i) => (
              <motion.button 
                key={btn.label}
                custom={i}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                onClick={() => navigate('/role')}
                className="flex items-center justify-between border border-outline-variant/30 p-10 hover:bg-white hover:text-black transition-all duration-700 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <span className="text-[11px] tracking-[0.3em] font-extrabold uppercase">{btn.label}</span>
                </div>
                {btn.sub ? (
                  <span className="font-headline text-4xl font-black opacity-80 uppercase tracking-tighter relative z-10 group-hover:scale-95 transition-transform">{btn.sub}</span>
                ) : (
                  <span className="material-symbols-outlined text-3xl opacity-60 relative z-10 group-hover:rotate-12 transition-transform">{btn.icon}</span>
                )}
              </motion.button>
            ))}
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
              className="text-[9px] tracking-widest text-outline mt-6 uppercase leading-relaxed max-w-md"
            >
              BY PROCEEDING, YOU AGREE TO THE BIDMATCH ARCHITECTURAL TERMS OF SERVICE AND DIGITAL PRIVACY PROTOCOL.
            </motion.p>
          </div>
        </div>
      </main>

      {/* Decorative vertical identifier */}
      <div className="fixed left-12 top-0 h-full flex items-center pointer-events-none z-0 opacity-10">
        <span className="text-[10px] tracking-[0.8em] font-bold text-outline uppercase -rotate-90 origin-left h-full flex items-center">
          AUTHENTICATION PORTAL
        </span>
      </div>

      {/* Footer Info matched 1:1 */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-end text-[10px] font-black tracking-[0.4em] text-outline uppercase opacity-40">
        <div className="flex flex-col gap-2">
          <span>EST. 2024</span>
          <span>VERSION 1.0.4</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="w-16 h-px bg-outline-variant opacity-30"></div>
          <span>GLOBAL / EN</span>
        </div>
      </footer>
    </div>
  );
}
