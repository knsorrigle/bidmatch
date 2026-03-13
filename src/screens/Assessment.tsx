import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const QUESTIONS = [
  {
    id: 1,
    question: "How do you handle race conditions in distributed systems?",
    options: ["Optimistic Locking", "Distributed Locks (Redis/Etcd)", "Idempotent Operations", "Message Queues"]
  },
  {
    id: 2,
    question: "Which pattern best describes a Micro-frontend architecture?",
    options: ["Monolithic UI", "Component Injection", "Iframe Isolation", "Module Federation"]
  }
];

export default function Assessment() {
  const navigate = useNavigate();
  const [qIndex, setQIndex] = useState(0);

  const next = () => {
    if (qIndex < QUESTIONS.length - 1) setQIndex(qIndex + 1);
    else navigate('/freelancer/profile/1');
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black overflow-hidden relative">
      <Navbar />

      <main className="pt-48 px-12 lg:px-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={qIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col lg:flex-row gap-24 items-end"
          >
            <div className="flex flex-col w-full lg:w-2/3">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                className="text-[12px] tracking-[0.6em] font-bold text-outline mb-12 block uppercase"
              >
                <ScrambleText text="Technical Proficiency Tier III" />
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="font-headline font-black text-[10vw] lg:text-[12vw] leading-tight tracking-tighter uppercase -ml-2 mt-4"
              >
                <ScrambleText text={QUESTIONS[qIndex].question} />
              </motion.h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/3 mb-12 relative z-20 bg-black lg:pl-12">
              <div className="bg-black w-full h-[150%] absolute -top-[25%] -z-10 -left-12 lg:w-[calc(100%+3rem)]"></div>
              {QUESTIONS[qIndex].options.map((opt, i) => (
                <motion.button
                  key={opt}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                  onClick={next}
                  className="border border-outline-variant/30 p-8 flex items-center justify-center text-center hover:bg-white hover:text-black transition-all duration-500 group"
                >
                  <span className="text-[10px] tracking-[0.2em] font-black uppercase">{opt}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Progress Footer matched 1:1 visuals */}
      <footer className="fixed bottom-12 left-12 right-12 flex justify-between items-end z-50">
        <div className="text-[9px] tracking-[0.4em] text-outline opacity-40 uppercase">
          AI AGENT MONITORING ACTIVE — NO EXTERNAL RESOURCES ALLOWED
        </div>
        <div className="flex items-center gap-12">
          <span className="font-headline text-4xl font-black text-white/10 italic">VALIDATING...</span>
          <div className="w-48 h-px bg-outline-variant/30 relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((qIndex + 1) / QUESTIONS.length) * 100}%` }}
              className="absolute h-full bg-white"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
