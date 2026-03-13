import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const SKILLS = ['TYPESCRIPT', 'CLOUD INFRASTRUCTURE', 'SYSTEM DESIGN', 'RUST'];

export default function FreelancerProfile() {
  const navigate = useNavigate();
  const [scores, setScores] = useState({ match: 0, quality: 0, logic: 0 });

  useEffect(() => {
    const controls = [
      animate(0, 98, { duration: 2, onUpdate: val => setScores(s => ({ ...s, match: Math.floor(val) })) }),
      animate(0, 94, { duration: 2, delay: 0.2, onUpdate: val => setScores(s => ({ ...s, quality: Math.floor(val) })) }),
      animate(0, 97, { duration: 2, delay: 0.4, onUpdate: val => setScores(s => ({ ...s, logic: Math.floor(val) })) })
    ];
    return () => controls.forEach(c => c.stop());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black overflow-hidden relative">
      <Navbar />

      <main className="pt-48 px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
          <div className="flex flex-col lg:w-2/3">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              className="text-[12px] tracking-[0.8em] font-bold text-outline mb-12 block uppercase"
            >
              PROFILE 0019 — VERIFIED
            </motion.span>
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="font-headline font-black text-[10vw] lg:text-[12vw] leading-tight tracking-tighter uppercase -ml-2 mt-4"
            >
              <ScrambleText text="MARCUS" /><br/>
              <ScrambleText text="VANCE" /><span className="text-outline">.</span>
            </motion.h1>
            
            <div className="flex flex-wrap gap-4 mt-20">
              {SKILLS.map((skill, i) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + (i * 0.1) }}
                  className="border border-outline-variant/30 px-6 py-2 text-[10px] font-black tracking-widest uppercase"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-1/3 pt-12 space-y-12">
            {[
              { label: 'SKILL MATCH', val: scores.match },
              { label: 'PROPOSAL QUALITY', val: scores.quality },
              { label: 'LOGIC & EXECUTION', val: scores.logic }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + (i * 0.2) }}
                className="flex flex-col border-b border-outline-variant/10 pb-4"
              >
                <div className="flex justify-between items-end mb-4">
                  <span className="text-[11px] tracking-[0.4em] font-black text-outline uppercase">{stat.label}</span>
                  <span className="font-headline text-6xl font-black">{stat.val}%</span>
                </div>
                <div className="w-full h-1 bg-outline-variant/10">
                  <motion.div className="h-full bg-accent-amber" initial={{ width: 0 }} animate={{ width: `${stat.val}%` }} transition={{ duration: 2 }} />
                </div>
              </motion.div>
            ))}
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="w-full bg-white text-black h-20 font-black tracking-[0.4em] text-xs uppercase hover:invert transition-all"
            >
              SEND BID REQUEST
            </motion.button>
          </div>
        </div>
      </main>

      {/* Background large initial */}
      <div className="fixed -bottom-32 -left-32 opacity-[0.03] select-none pointer-events-none">
        <span className="font-headline font-black text-[50vw] leading-none tracking-tighter text-outline">A</span>
      </div>
    </div>
  );
}
