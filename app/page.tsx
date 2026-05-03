export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Anonymous &amp; Encrypted
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          The{" "}
          <span className="text-[#58a6ff]">Productivity Truthometer</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop lying to yourself. Anonymously track your <strong className="text-[#c9d1d9]">actual</strong> work hours vs reported hours — then see how you compare to the industry.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $15/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No account needed. Fully anonymous. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔒</div>
            <h3 className="font-semibold text-white mb-1">Encrypted Locally</h3>
            <p className="text-sm text-[#8b949e]">Your raw data never leaves your device. Only anonymized aggregates are shared.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-white mb-1">Industry Benchmarks</h3>
            <p className="text-sm text-[#8b949e]">See how your honesty gap compares to thousands of anonymous developers.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-white mb-1">Zero Friction</h3>
            <p className="text-sm text-[#8b949e]">Log hours in seconds. No sign-up, no email, no tracking of who you are.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-xs font-semibold text-[#58a6ff] uppercase tracking-widest mb-3">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <p className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Unlimited time log entries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Encrypted local storage</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Full analytics dashboard</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> Anonymous industry benchmarks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff] font-bold">✓</span> CSV export</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data really anonymous?</h3>
            <p className="text-sm text-[#8b949e]">Yes. All time entries are stored encrypted in your browser. Only statistical aggregates — never individual records — are contributed to the industry dashboard. We cannot identify you.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What does the analytics dashboard show?</h3>
            <p className="text-sm text-[#8b949e]">Your personal honesty gap over time, weekly trends, and how your reported-vs-actual ratio compares to anonymized industry averages broken down by role and company size.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel any time from your Lemon Squeezy customer portal with one click. No questions asked, no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Work Productivity Truthometer. Built for honest developers.
      </footer>
    </main>
  );
}
