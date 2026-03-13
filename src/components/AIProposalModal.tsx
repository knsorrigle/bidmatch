import React, { useState } from 'react';
import { X, Wand2, Loader2, Send, Copy, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AIProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIProposalModal({ isOpen, onClose }: AIProposalModalProps) {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [proposal, setProposal] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerate = async () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockProposal = `Subject: Proposal for ${description.split(' ').slice(0, 3).join(' ')}...

Hi there! I saw your post regarding "${description}" and I'm very excited to help. 

Based on my experience with similar projects, I can provide:
1. High-quality, scalable architecture
2. Efficient delivery within the specified timeline
3. Clear communication and regular updates

I'd love to hop on a call to discuss how we can make this project a success!

Best regards,
[Your Name]`;
    
    setProposal(mockProposal);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(proposal);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Wand2 className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">AI Proposal Writer</h2>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {!proposal ? (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Project Description</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Paste the project requirements here..." 
                      className="w-full h-48 px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none text-slate-600 transition-all"
                    />
                  </div>
                  
                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !description.trim()}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Generating Magic...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-5 h-5" />
                        Generate Proposal
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="relative">
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button 
                        onClick={handleCopy}
                        className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all text-slate-600 flex items-center gap-2 text-xs font-bold"
                      >
                        {isCopied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        {isCopied ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <div className="w-full h-80 px-6 py-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 whitespace-pre-wrap overflow-y-auto">
                      {proposal}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => setProposal('')}
                      className="flex-1 px-6 py-4 border border-slate-200 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                    >
                      Rewrite
                    </button>
                    <button 
                      className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send to Client
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="bg-slate-50 p-6 flex items-center gap-3 border-t border-slate-100">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Wand2 className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-xs text-slate-500 italic">
                Optimized by Gemini AI Pro to match project sentiment and requirements.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
