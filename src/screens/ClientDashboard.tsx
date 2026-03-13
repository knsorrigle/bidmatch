import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const FREELANCERS = [
  { rank: '01', name: 'ALEXA VANDERGRIFF', title: 'Lead System Architect', score: 9.8, match: 98, amber: true },
  { rank: '02', name: 'MARCUS CHEN', title: 'Rust Core Developer', score: 9.6, match: 95 },
  { rank: '03', name: 'SOFIA RODRIQUEZ', title: 'AI Infrastructure Lead', score: 9.5, match: 94 },
  { rank: '04', name: 'DAVID PARK', title: 'Cloud-Native Specialist', score: 9.2, match: 91 },
];

export default function ClientDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black overflow-hidden relative">
      <Navbar />

      <main className="pt-48 px-12 lg:px-24">
        <header className="flex flex-col mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            className="text-[12px] tracking-[0.8em] font-bold text-outline mb-12 block uppercase"
          >
            BID MATCH ANALYSIS — LIVE
          </motion.span>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-headline font-black text-[10vw] lg:text-[12vw] leading-tight tracking-tighter uppercase -ml-2 mt-4"
          >
            <ScrambleText text="12 FREELANCERS" /><br/>
            <ScrambleText text="RANKED" /><span className="text-outline">.</span>
          </motion.h1>
        </header>

        <div className="flex flex-col border border-outline-variant/10">
          <div className="grid grid-cols-12 p-8 border-b border-outline-variant/20 opacity-40">
            <div className="col-span-1 text-[10px] font-black tracking-widest uppercase">RANK</div>
            <div className="col-span-5 text-[10px] font-black tracking-widest uppercase">CANDIDATE</div>
            <div className="col-span-2 text-[10px] font-black tracking-widest uppercase">SKILL MATCH</div>
            <div className="col-span-2 text-[10px] font-black tracking-widest uppercase">AI SCORE</div>
            <div className="col-span-2 text-right text-[10px] font-black tracking-widest uppercase">ACTION</div>
          </div>

          <div className="flex flex-col">
            {FREELANCERS.map((f, i) => (
              <motion.div 
                key={f.rank}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                onClick={() => navigate(`/freelancer/profile/${f.rank}`)}
                className={`grid grid-cols-12 p-10 items-center border-b border-outline-variant/10 hover:bg-white hover:text-black transition-all duration-500 cursor-pointer group`}
              >
                <div className="col-span-1 font-headline text-3xl font-black group-hover:scale-110 transition-transform">{f.rank}</div>
                <div className="col-span-5 flex flex-col">
                  <span className="font-headline text-2xl font-black tracking-tighter uppercase">{f.name}</span>
                  <span className="text-[10px] tracking-widest font-black opacity-40 group-hover:text-black/50 uppercase">{f.title}</span>
                </div>
                <div className="col-span-2 font-headline text-2xl font-black">{f.match}%</div>
                <div className="col-span-2 font-headline text-5xl font-black tracking-tighter">{f.score.toFixed(1)}</div>
                <div className="col-span-2 text-right">
                  <span className="material-symbols-outlined text-3xl group-hover:translate-x-3 transition-transform">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom watermark */}
      <div className="fixed -bottom-12 right-12 opacity-[0.05] pointer-events-none select-none">
        <span className="font-headline font-black text-[20vw] leading-none tracking-tighter text-outline shadow-white">MATCH</span>
      </div>
    </div>
  );
}
