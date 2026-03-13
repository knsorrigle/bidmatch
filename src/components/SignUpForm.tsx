import React, { useState } from 'react';
import { Eye, EyeOff, Check, Briefcase, UserSearch } from 'lucide-react';

interface SignUpFormProps {
  onSuccess: (data: any) => void;
}

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [role, setRole] = useState<'freelancer' | 'client'>('freelancer');

  const handleGoogleLogin = () => alert(`Join with Google clicked (Role: ${role})`);
  const handleAppleLogin = () => alert(`Join with Apple clicked (Role: ${role})`);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the Terms & Privacy');
      return;
    }
    onSuccess({ role, name, email, password });
  };

  return (
    <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 lg:px-32 max-w-2xl mx-auto w-full">
      <h1 className="text-4xl font-bold mb-2 tracking-tight text-slate-900">Join the Propoze community</h1>
      <p className="text-slate-500 mb-8">Sign up to connect with top freelancers and clients.</p>

      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-900 mb-4">I am a...</label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setRole('freelancer')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all ${
              role === 'freelancer'
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-slate-100 hover:border-slate-200 bg-white'
            }`}
          >
            <Briefcase className={`w-6 h-6 mb-3 ${role === 'freelancer' ? 'text-blue-600' : 'text-slate-400'}`} />
            <span className="font-bold text-slate-900 mb-1">Freelancer</span>
            <span className="text-xs text-slate-500">I want to find work</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('client')}
            className={`flex flex-col text-left p-4 rounded-xl border-2 transition-all ${
              role === 'client'
                ? 'border-blue-600 bg-blue-50/50'
                : 'border-slate-100 hover:border-slate-200 bg-white'
            }`}
          >
            <UserSearch className={`w-6 h-6 mb-3 ${role === 'client' ? 'text-blue-600' : 'text-slate-400'}`} />
            <span className="font-bold text-slate-900 mb-1">Client</span>
            <span className="text-xs text-slate-500">I want to hire talent</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button type="button" onClick={handleGoogleLogin} className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-lg py-2.5 hover:bg-slate-50 transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          <span className="font-medium text-sm">Join with Google</span>
        </button>
        <button type="button" onClick={handleAppleLogin} className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-lg py-2.5 hover:bg-slate-50 transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.31-.86 3.59-.8 1.5.05 2.65.65 3.35 1.73-2.96 1.76-2.48 5.64.46 6.84-1.03 2.6-2.18 4.38-2.48 4.4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          <span className="font-medium text-sm">Join with Apple</span>
        </button>
      </div>

      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-100"></div>
        </div>
        <span className="relative bg-white px-4 text-xs text-slate-400 uppercase tracking-wider">or</span>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Rafiqur Rahman"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="rafiqur51@company.com"
            className="w-full px-4 py-3 rounded-lg border border-blue-500 ring-4 ring-blue-500/10 focus:outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <button type="button" onClick={() => alert('Forgot password clicked')} className="text-sm text-blue-600 font-medium hover:underline">
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="min 8 chars"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => setAgreed(!agreed)}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${agreed ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}
          >
            {agreed && <Check className="w-3.5 h-3.5 text-white" />}
          </button>
          <span className="text-sm text-slate-600">
            I agree to the <button type="button" onClick={() => alert('Terms & Privacy clicked')} className="text-slate-900 font-medium underline decoration-slate-300 underline-offset-2 hover:text-blue-600">Terms & Privacy</button>
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg transition-colors mt-4"
        >
          Create Account
        </button>
      </form>

      <div className="mt-8 text-sm text-slate-600">
        Already have an account?{' '}
        <button type="button" onClick={() => alert('Log in clicked')} className="text-blue-600 font-medium hover:underline">
          Log in
        </button>
      </div>
    </div>
  );
}
