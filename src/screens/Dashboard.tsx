import React, { useState } from 'react';
import { 
  BarChart3, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Bell, 
  Clock, 
  CheckCircle2,
  BrainCircuit
} from 'lucide-react';
import { motion } from 'motion/react';
import AIProposalModal from '../components/AIProposalModal';

interface DashboardProps {
  user: {
    name: string;
    role: string;
  };
  onLogout: () => void;
}

export default function Dashboard({ user, onLogout }: DashboardProps) {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const stats = [
    { label: 'Active Projects', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pending Proposals', value: '5', icon: MessageSquare, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Total Earned', value: '$4,250', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Completion Rate', value: '98%', icon: CheckCircle2, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const projects = [
    { title: 'AI Branding Design', client: 'Acme Corp', status: 'In Progress', progress: 65, deadline: '2 days left' },
    { title: 'React Native Mobile App', client: 'Global Tech', status: 'Review', progress: 90, deadline: 'Tomorrow' },
    { title: 'E-commerce API Integration', client: 'Startup Inc', status: 'In Progress', progress: 30, deadline: '5 days left' },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center rotate-45">
            <div className="w-4 h-4 bg-white -rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">Propoze</span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          <NavItem icon={BarChart3} label="Dashboard" active />
          <NavItem icon={Briefcase} label="Projects" />
          <NavItem icon={MessageSquare} label="Messages" />
          <NavItem icon={BrainCircuit} label="AI Copilot" />
          <NavItem icon={Settings} label="Settings" />
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all w-full"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl w-96 border border-transparent focus-within:border-blue-500 transition-all">
            <Search className="w-5 h-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search projects, messages..." 
              className="bg-transparent border-none outline-none text-slate-600 text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-900 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">{user.name}</div>
                <div className="text-xs text-slate-500 capitalize">{user.role}</div>
              </div>
              <img 
                src={`https://ui-avatars.com/api/?name=${user.name}&background=3b82f6&color=fff`} 
                alt="Profile" 
                className="w-10 h-10 rounded-xl border border-slate-200 shadow-sm"
              />
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Welcome back!</h1>
              <p className="text-slate-500">Here's what's happening with your projects today.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-500/20 transition-all">
              <Plus className="w-5 h-5" />
              New Project
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm"
              >
                <div className={`${stat.bg} ${stat.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-slate-500 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Projects */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Recent Projects</h2>
                <button className="text-blue-600 font-medium hover:underline text-sm">View all</button>
              </div>
              
              <div className="space-y-4">
                {projects.map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">{project.title}</h3>
                        <p className="text-slate-500 text-sm">{project.client}</p>
                      </div>
                      <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold">
                        {project.status}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">Progress</span>
                        <span className="font-bold text-slate-900">{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 transition-all duration-1000" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Deadline: {project.deadline}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Assistant Card */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900">AI Copilot</h2>
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                
                <BrainCircuit className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-2">Smart Proposal Writer</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Generate high-converting proposals based on project descriptions using Gemini AI.
                </p>
                
                <button 
                  onClick={() => setIsAIModalOpen(true)}
                  className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  Launch Writer
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-8 rounded-[2rem] border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <QuickActionButton label="Billing" />
                  <QuickActionButton label="Reports" />
                  <QuickActionButton label="Contracts" />
                  <QuickActionButton label="Feedback" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AIProposalModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </div>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-full ${
      active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 shadow-sm' 
        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
    }`}>
      <Icon className="w-5 h-5" />
      <span className="font-medium text-sm">{label}</span>
    </button>
  );
}

function QuickActionButton({ label }: { label: string }) {
  return (
    <button className="p-4 border border-slate-100 rounded-2xl hover:bg-blue-50 hover:border-blue-100 transition-all text-sm font-medium text-slate-700 text-center">
      {label}
    </button>
  );
}
