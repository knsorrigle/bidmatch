import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-12 py-8 bg-black/95 backdrop-blur-md border-b border-white/5 pointer-events-auto shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div 
        className="font-headline font-black text-2xl tracking-tighter uppercase select-none cursor-pointer text-white mix-blend-difference" 
        onClick={() => navigate('/')}
      >
        BIDMATCH
      </div>
      <div className="flex items-center gap-12">
        <a 
          onClick={() => navigate('/login')}
          className="font-label text-[11px] font-black uppercase tracking-[0.3em] text-white hover:opacity-50 transition-opacity cursor-pointer mix-blend-difference"
        >
          JOIN
        </a>
        <a 
          onClick={() => navigate('/login')}
          className="font-label text-[11px] font-black uppercase tracking-[0.3em] text-white hover:opacity-50 transition-opacity cursor-pointer mix-blend-difference"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
}
