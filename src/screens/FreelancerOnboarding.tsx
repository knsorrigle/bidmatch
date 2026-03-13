import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar.tsx';
import ScrambleText from '../components/ScrambleText.tsx';

const SKILLS = ['AI/ML', 'DEVOPS', 'RUST', 'TYPESCRIPT', 'NEXT.JS', 'SYSTEM DESIGN'];
const EXPERIENCE_OPTIONS = ['0–1', '2–3', '4–6', '7+'];

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0 }
};

const textRevealVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export default function FreelancerOnboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    skills: [] as string[],
    experience: '2–3',
    rate: '85',
    github: '',
    portfolio: '',
    linkedin: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const toggleSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex justify-between items-center px-12 lg:px-24 min-h-[70vh]"
          >
            <div className="flex flex-col z-10 w-1/2 pt-16">
              <motion.span variants={textRevealVariants} className="text-[10px] tracking-[0.5em] font-bold text-outline uppercase mb-2">
                LET'S BUILD YOUR
              </motion.span>
              <motion.h1 variants={textRevealVariants} className="font-headline font-black text-[12vw] leading-[1] tracking-tighter uppercase -ml-2">
                <ScrambleText text="PROFILE" /><span className="text-outline">.</span>
              </motion.h1>
            </div>
            
            <div className="flex flex-col w-1/2 max-w-lg lg:ml-auto space-y-12 lg:space-y-16 relative z-20 bg-black lg:pl-12 lg:bg-gradient-to-r lg:from-transparent lg:via-black lg:to-black">
              <div className="bg-black w-full h-full absolute inset-0 -z-10 lg:-left-24 lg:w-[calc(100%+6rem)]"></div>
              <motion.div variants={textRevealVariants} className="space-y-12 bg-black relative">
                <div className="group border-b border-outline-variant/30 pb-2">
                  <label className="block text-[9px] tracking-[0.3em] font-bold text-outline uppercase mb-2 opacity-50">FULL NAME</label>
                  <input
                    type="text"
                    placeholder="Johnathan Doe"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-none p-0 font-body text-2xl text-white placeholder:text-white/20 focus:ring-0"
                  />
                </div>
                <div className="group border-b border-outline-variant/30 pb-2">
                  <label className="block text-[9px] tracking-[0.3em] font-bold text-outline uppercase mb-2 opacity-50">PROFESSIONAL TITLE</label>
                  <input
                    type="text"
                    placeholder="Lead Creative Architect"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-transparent border-none p-0 font-body text-2xl text-white placeholder:text-white/20 focus:ring-0"
                  />
                </div>
              </motion.div>
              
              <motion.button
                variants={textRevealVariants}
                onClick={nextStep}
                className="w-full border border-white p-6 flex items-center justify-between hover:bg-white hover:text-black transition-all duration-500 group bg-black"
              >
                <span className="text-[11px] tracking-[0.3em] font-black uppercase">CONTINUE</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col px-12 lg:px-24 min-h-[70vh] pt-24 pb-12 overflow-visible"
          >
            <motion.h1 variants={textRevealVariants} className="font-headline font-black text-[12vw] leading-tight tracking-tighter uppercase mb-2">
              <ScrambleText text="EXPERTISE" /><span className="text-outline">.</span>
            </motion.h1>
            <motion.p variants={textRevealVariants} className="text-xs text-outline tracking-widest uppercase mb-12 opacity-50">
              Select all that apply.
            </motion.p>
            
            <motion.div variants={textRevealVariants} className="grid grid-cols-2 md:grid-cols-3 w-full border border-outline-variant/20 relative z-20">
              {SKILLS.map((skill) => (
                <div 
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`border border-outline-variant/10 p-8 flex items-center justify-center cursor-pointer transition-all duration-300 ${formData.skills.includes(skill) ? 'bg-white text-black' : 'hover:bg-white/5 bg-black'}`}
                >
                  <span className="text-[10px] tracking-[0.2em] font-black uppercase text-center">{skill}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={textRevealVariants} className="mt-12 self-end relative z-20">
              <button
                onClick={nextStep}
                className="border border-white px-12 py-5 flex items-center gap-6 hover:bg-white hover:text-black transition-all duration-500 group bg-black"
              >
                <span className="text-[11px] tracking-[0.3em] font-black uppercase">CONTINUE</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </motion.div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-row items-center px-12 lg:px-24 min-h-[70vh]"
          >
            <div className="w-1/2 pt-16 z-10">
              <motion.span variants={textRevealVariants} className="text-[10px] tracking-[0.5em] font-bold text-outline uppercase mb-2 block">YOUR</motion.span>
              <motion.h1 variants={textRevealVariants} className="font-headline font-black text-[10vw] leading-tight tracking-tighter uppercase">
                <ScrambleText text="EXPERIENCE" /><span className="text-outline">.</span>
              </motion.h1>
            </div>
            
            <div className="w-1/2 h-full flex flex-col justify-center px-12 md:px-20 space-y-16 lg:border-l border-outline-variant/10 z-20 relative bg-black">
              <motion.div variants={textRevealVariants} className="space-y-6 bg-black relative">
                <label className="text-[10px] tracking-[0.3em] font-bold text-outline uppercase opacity-40">YEARS OF EXPERIENCE</label>
                <div className="flex gap-2">
                  {EXPERIENCE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setFormData({ ...formData, experience: opt })}
                      className={`flex-1 h-14 border flex items-center justify-center font-black text-xs tracking-widest transition-all ${formData.experience === opt ? 'bg-white text-black' : 'border-outline-variant/30 hover:border-white'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={textRevealVariants} className="space-y-6">
                <label className="text-[10px] tracking-[0.3em] font-bold text-outline uppercase opacity-40">HOURLY RATE (USD)</label>
                <div className="flex items-end gap-2 border-b border-outline-variant/30 pb-2 group focus-within:border-white transition-all">
                  <span className="text-4xl font-black text-white/20">$</span>
                  <input
                    type="text"
                    value={formData.rate}
                    onChange={e => setFormData({ ...formData, rate: e.target.value })}
                    className="w-full bg-transparent border-none p-0 text-7xl font-black text-white focus:ring-0 leading-none"
                  />
                </div>
                <p className="text-[9px] tracking-widest text-outline uppercase opacity-40">Based on market trends for your seniority, $75–$110 is the competitive range.</p>
              </motion.div>
              
              <motion.button
                variants={textRevealVariants}
                onClick={nextStep}
                className="border border-white px-12 py-5 flex items-center justify-between hover:bg-white hover:text-black transition-all duration-500 group bg-black"
              >
                <span className="text-[11px] tracking-[0.3em] font-black uppercase">CONTINUE</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-row items-center px-12 lg:px-24 min-h-[70vh] relative overflow-hidden"
          >
            <div className="absolute -bottom-24 left-10 opacity-[0.03] select-none pointer-events-none">
              <span className="font-headline font-black text-[40vw] tracking-tighter leading-none">BID</span>
            </div>
            
            <div className="w-1/2 flex flex-col justify-center relative z-10 pt-16">
              <motion.span variants={textRevealVariants} className="text-[11px] tracking-[0.4em] font-bold text-outline mb-4 uppercase">PROVE YOUR</motion.span>
              <motion.h1 variants={textRevealVariants} className="font-headline font-black text-[12vw] leading-tight tracking-tighter uppercase mb-6">
                <ScrambleText text="WORK" /><span className="text-outline">.</span>
              </motion.h1>
              <motion.p variants={textRevealVariants} className="text-[10px] tracking-widest text-outline max-w-xs leading-relaxed opacity-40 uppercase">
                Links help us verify your skills automatically.
              </motion.p>
            </div>

            <div className="w-1/2 flex flex-col space-y-12 relative z-20 bg-black lg:pl-16">
              <div className="bg-black w-full h-full absolute inset-0 -z-10 -left-16 lg:w-[calc(100%+4rem)]"></div>
              <motion.div variants={textRevealVariants} className="space-y-8 bg-black relative">
                {['GITHUB PROFILE', 'PORTFOLIO URL', 'LINKEDIN'].map(label => (
                  <div key={label} className="border-b border-outline-variant/30 pb-2">
                    <label className="block text-[9px] tracking-[0.3em] font-bold text-outline uppercase mb-2 opacity-50">{label}</label>
                    <input
                      type="text"
                      placeholder={label === 'GITHUB PROFILE' ? 'https://github.com/username' : ''}
                      className="w-full bg-transparent border-none p-0 font-body text-xl text-white placeholder:text-white/10 focus:ring-0"
                    />
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={textRevealVariants} className="border border-outline-variant/30 p-8 flex items-center justify-between bg-black lg:bg-white/5">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent-amber flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-black font-black">check</span>
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] tracking-[0.2em] font-black uppercase truncate">CASE_STUDY_ARCH_REDACT.PDF</div>
                    <div className="text-[8px] tracking-[0.1em] font-bold text-outline uppercase opacity-40 mt-1">UPLOAD SUCCESSFUL - 2.4 MB</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.button
                variants={textRevealVariants}
                onClick={nextStep}
                className="border border-white p-5 flex items-center justify-between hover:bg-white hover:text-black transition-all duration-500 group bg-black shrink-0"
              >
                <span className="text-[11px] tracking-[0.3em] font-black uppercase">CONTINUE</span>
                <span className="material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div
            key="step5"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex flex-col justify-center px-12 lg:px-48 min-h-[70vh] py-12"
          >
            <motion.div variants={textRevealVariants} className="mb-12 pt-16">
              <span className="text-[12px] tracking-[0.5em] font-bold text-outline uppercase mb-4 block">YOU'RE</span>
              <h1 className="font-headline font-black text-[12vw] leading-[1] tracking-tighter uppercase">
                <ScrambleText text="READY" /><span className="text-outline">.</span>
              </h1>
            </motion.div>
            
            <motion.div variants={textRevealVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl z-20 relative">
              {['SKILLS VERIFIED', 'PROFILE COMPLETE', 'AI MATCHING ACTIVE'].map(stat => (
                <div key={stat} className="border border-outline-variant/10 p-6 flex items-center justify-between bg-black">
                  <span className="text-[9px] tracking-widest font-black uppercase">{stat}</span>
                  <div className="w-2 h-2 rounded-full bg-accent-amber shadow-[0_0_10px_#F5A623] shrink-0"></div>
                </div>
              ))}
            </motion.div>
            
            <motion.button
              variants={textRevealVariants}
              onClick={() => navigate('/freelancer/browse')}
              className="w-full max-w-5xl h-[80px] border border-white flex items-center justify-between px-10 group hover:bg-white hover:text-black transition-all duration-500 bg-black relative z-20"
            >
              <span className="text-sm tracking-[0.3em] font-black uppercase">ENTER BIDMATCH</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-3 transition-transform">arrow_forward</span>
            </motion.button>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black overflow-hidden relative">
      <Navbar />
      
      <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center -rotate-90 origin-left z-40 opacity-20">
        <span className="text-[9px] tracking-[0.8em] font-bold text-outline uppercase whitespace-nowrap">ONBOARDING SEQUENCE</span>
      </div>

      <div className="fixed top-28 right-12 z-40 bg-black/80 px-4 py-2 mt-4 rounded-sm border border-outline-variant/10">
        <span className="text-[10px] tracking-[0.4em] font-black text-white/50 uppercase">
          STEP {String(step).padStart(2, '0')} / 05
        </span>
      </div>

      <main className="pt-24 relative min-h-screen">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 px-12 pb-12 pt-24 bg-gradient-to-t from-black via-black to-transparent flex justify-between items-end z-50 pointer-events-none">
        <div className="text-[8px] tracking-[0.4em] text-outline-variant uppercase opacity-40">
          © 2026 BIDMATCH — GENESIS PROTOCOL
        </div>
        
        <div className="flex items-center gap-6 pointer-events-auto">
          {[1,2,3,4,5].map(s => (
            <div key={s} className="flex items-center gap-6 cursor-pointer" onClick={() => setStep(s)}>
              <span 
                className={`text-[10px] tracking-widest transition-all ${step === s ? 'text-white font-bold underline underline-offset-8' : 'text-white/20 hover:text-white'}`}
              >
                {String(s).padStart(2, '0')}
              </span>
              {s < 5 && step === s && <motion.div layoutId="line" className="w-16 h-px bg-white opacity-40 hidden md:block" />}
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
