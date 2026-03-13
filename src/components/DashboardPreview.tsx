import React from 'react';

export default function DashboardPreview() {
  return (
    <div className="p-16 xl:p-24 z-10 relative flex-1 flex flex-col">
      <h2 className="text-4xl xl:text-5xl font-medium leading-tight mb-4">
        The simplest way to manage<br />your freelance business
      </h2>
      <p className="text-blue-100 text-lg mb-16">
        Enter your credentials to access your account
      </p>

      {/* Dashboard Mockup */}
      <div className="relative flex-1 w-full max-w-2xl mx-auto mt-8">
        {/* Main Dashboard Card */}
        <div className="absolute top-0 left-0 right-12 bottom-12 bg-white rounded-2xl shadow-2xl text-slate-800 p-6 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-semibold">Dashboard</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-full text-sm border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="font-medium">All Projects</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span>Dec 27, 2023 - Jan 03, 2024</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <div className="text-sm text-slate-500 mb-2">Billable Hours / Week</div>
              <div className="flex items-end gap-4">
                <div className="text-3xl font-bold">32.4 hr</div>
                <div className="text-emerald-500 text-sm font-medium flex items-center mb-1">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  23%
                </div>
              </div>
              {/* Mini chart placeholder */}
              <div className="h-12 mt-4 flex items-end gap-1">
                {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-100 rounded-t-sm relative group">
                    <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-slate-500 mb-2">Invoiced Amount</div>
              <div className="flex items-end gap-4">
                <div className="text-3xl font-bold">$4,250</div>
                <div className="text-rose-500 text-sm font-medium flex items-center mb-1">
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  12%
                </div>
              </div>
              {/* Mini chart placeholder */}
              <div className="h-12 mt-4 flex items-end gap-1">
                {[60, 50, 80, 40, 70, 55, 30].map((h, i) => (
                  <div key={i} className="flex-1 bg-rose-100 rounded-t-sm relative group">
                    <div className="absolute bottom-0 left-0 right-0 bg-rose-400 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div>
            <h4 className="font-medium mb-4">Active Clients</h4>
            <div className="space-y-4">
              {[
                { name: 'Acme Corp', status: 'On Track', progress: 60, color: 'bg-blue-500', initial: 'A' },
                { name: 'Global Tech', status: 'Review', progress: 85, color: 'bg-amber-500', initial: 'G' },
                { name: 'Startup Inc', status: 'Planning', progress: 20, color: 'bg-emerald-500', initial: 'S' },
              ].map((client, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3 w-1/3">
                    <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-medium ${client.color}`}>
                      {client.initial}
                    </div>
                    <span className="font-medium">{client.name}</span>
                  </div>
                  <div className="w-1/4 text-slate-500">{client.status}</div>
                  <div className="w-1/3 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${client.color}`} style={{ width: `${client.progress}%` }}></div>
                    </div>
                    <span className="text-slate-500 w-8 text-right">{client.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overlapping Modal */}
        <div className="absolute top-24 -right-4 w-80 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] text-slate-800 p-5 z-20 border border-slate-100">
          <div className="flex justify-between items-center mb-5">
            <h4 className="font-semibold">New Invoice</h4>
            <button type="button" onClick={() => alert('Close modal clicked')} className="text-slate-400 hover:text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Client Email</label>
              <div className="flex gap-2">
                <input type="text" value="billing@acmecorp.com" readOnly className="flex-1 px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none" />
                <button type="button" onClick={() => alert('Send invoice clicked')} className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">Send</button>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-slate-500 mb-3">Recent Clients</div>
            <div className="space-y-3">
              {[
                { name: 'Leslie Alexander', email: 'leslie@example.com', img: 'https://i.pravatar.cc/150?u=1' },
                { name: 'Courtney Henry', email: 'courtney@example.com', img: 'https://i.pravatar.cc/150?u=2' },
                { name: 'Robert Fox', email: 'robert@example.com', img: 'https://i.pravatar.cc/150?u=3' },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="text-sm font-medium">{user.name}</div>
                      <div className="text-xs text-slate-500">{user.email}</div>
                    </div>
                  </div>
                  <button type="button" onClick={() => alert(`Edit ${user.name} clicked`)} className="text-slate-400 hover:text-slate-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="text-xs font-medium text-slate-500 mb-2">Payment Link</div>
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-md border border-slate-100">
              <span className="text-xs text-slate-500 truncate flex-1">pay.freelancehub.com/inv_392...</span>
              <button type="button" onClick={() => alert('Copy link clicked')} className="text-blue-600 text-xs font-medium hover:underline">Copy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
