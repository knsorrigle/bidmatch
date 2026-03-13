import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const PROJECTS = [
  { id: 1, title: 'Neural Engine Optimizer', client: 'X-CORP', budget: '$12k', complexity: 'HIGH', tags: ['RUST', 'AI'] },
  { id: 2, title: 'Liquid Finance UI', client: 'AEON', budget: '$8k', complexity: 'MEDIUM', tags: ['NEXT.JS', 'GSAP'] },
  { id: 3, title: 'Distro-Ledger Core', client: 'BLOCK-O', budget: '$25k', complexity: 'CRITICAL', tags: ['GO', 'SECURITY'] },
  { id: 4, title: 'Quantum Auth Layer', client: 'SPECTRE', budget: '$15k', complexity: 'HIGH', tags: ['CPP', 'WASM'] },
];

const containerVariants = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export default function BrowseProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-48 px-12 lg:px-24 pb-20">
        <header className="mb-12 overflow-visible pt-12">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="font-headline font-black text-[10vw] leading-normal tracking-tighter uppercase -ml-2"
          >
            <ScrambleText text="FIND YOUR NEXT PROJECT" /><span className="text-outline">.</span>
          </motion.h1>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 border border-outline-variant/10"
        >
          {PROJECTS.map(project => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              onClick={() => navigate('/freelancer/assessment')}
              className="bg-black p-12 flex flex-col justify-between h-[400px] hover:bg-white hover:text-black transition-all duration-700 group cursor-pointer border border-outline-variant/5"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.4em] font-black text-outline group-hover:text-black/40 mb-2 uppercase transition-colors">{project.client}</span>
                  <h2 className="font-headline font-black text-4xl lg:text-5xl tracking-tighter uppercase leading-none">{project.title}</h2>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-[0.2em] font-black uppercase opacity-40 group-hover:opacity-100">{project.complexity}</span>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex gap-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-outline-variant/30 px-3 py-1 text-[9px] font-black tracking-widest group-hover:border-black/20 uppercase transition-colors">{tag}</span>
                  ))}
                </div>
                <div className="text-right">
                  <span className="font-headline text-4xl font-black tracking-tighter">{project.budget}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Decorative vertical identifier */}
      <div className="fixed left-12 top-0 h-full flex items-center pointer-events-none z-0 opacity-10">
        <span className="text-[10px] tracking-[0.8em] font-bold text-outline uppercase -rotate-90 origin-left h-full flex items-center">
          BIDDING PORTAL ACTIVE
        </span>
      </div>
    </div>
  );
}
