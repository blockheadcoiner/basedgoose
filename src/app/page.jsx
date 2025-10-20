// src/app/page.jsx
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-start font-mono relative overflow-hidden p-6">
      {/* subtle CRT scanlines made with CSS gradient (no image needed) */}
      <div className="pointer-events-none absolute inset-0 opacity-20"
           style={{
             backgroundImage:
               "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 4px)"
           }}
      />

      {/* HERO */}
      <section className="text-center z-10 mt-10">
        <h1 className="text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 drop-shadow-[0_0_10px_rgba(0,255,0,.25)]">
          WELCOME TO BASED GOOSE NETWORK
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2 text-slate-200">BASED GOOSE MONEY</h2>
        <p className="mt-3 text-gray-400">
          Powered by{" "}
          <a
            href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk"
            target="_blank" rel="noreferrer"
            className="text-green-400 underline-offset-4 hover:underline"
          >
            BONK.FUN
          </a>{" "}
          on the SOL Network
        </p>

        {/* CRT MONITOR FRAME WITH YOUR VIDEO */}
        <div className="mt-10 w-[92vw] max-w-[880px] border-4 border-gray-700 rounded-xl p-2 bg-black shadow-[0_0_25px_rgba(0,255,0,.28)]">
          <div className="relative overflow-hidden rounded-md">
            <video
              src="/based-goose-october6-2025.mp4"
              autoPlay muted loop playsInline
              className="w-full h-auto object-cover opacity-95"
            
            />
            {/* glass reflection + vignette */}
            <div className="pointer-events-none absolute inset-0 opacity-30"
                 style={{
                   background:
                     "linear-gradient(transparent 80%, rgba(0,0,0,.55)), radial-gradient(120% 60% at 50% -10%, rgba(255,255,255,.10), transparent)"
                 }}
            />
          </div>
        </div>

        <p className="mt-4 text-green-400 animate-pulse">ONLINE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓</p>
      </section>

      {/* CHART */}
      <section className="mt-10 w-[92vw] max-w-[880px] z-10 border-2 border-gray-700 rounded-lg p-4 bg-[#0a0a0a] shadow-[0_0_15px_rgba(0,255,0,.18)]">
        <h3 className="text-green-400 mb-2 text-left">basedgoose_chart.exe</h3>
        <iframe
          src="https://dexscreener.com/solana/htzoan7ftfpvjacyzabv4zjps2ip3vuccyhorodawpb7?embed=1&theme=dark"
          className="w-full h-[500px] border border-gray-800 rounded-md"
          allowFullScreen
        />
      </section>

      {/* BUTTONS */}
      <section className="mt-12 z-10 flex flex-wrap gap-3 items-center justify-center">
        <a href="https://x.com/100XGOOSE" target="_blank" rel="noreferrer"
           className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md">X.COM</a>
        <a href="https://t.me/BASEDGOOSE100x" target="_blank" rel="noreferrer"
           className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md">TELEGRAM</a>
        <a href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk" target="_blank" rel="noreferrer"
           className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md">BONK.FUN</a>
        <a href="https://dexscreener.com/solana/htzoan7ftfpvjacyzabv4zjps2ip3vuccyhorodawpb7" target="_blank" rel="noreferrer"
           className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md">DEXSCREENER</a>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 mb-6 text-xs text-gray-500 z-10 text-center">
        © 2025 Based Goose Network. Powered by BONK.FUN. <span className="italic">Site best viewed in Netscape 7.0.</span>
      </footer>
    </main>
  );
}
