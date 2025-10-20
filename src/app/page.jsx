// src/app/page.jsx
export default function Page() {
  return (
    <main className="min-h-screen bg-black text-gray-200 flex flex-col items-center justify-start font-mono relative overflow-hidden p-6">
      {/* subtle CRT scanlines made with CSS gradient (no image needed) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 4px)",
        }}
      />

      {/* HERO */}
      <section className="text-center z-10 mt-10">
        <h1 className="text-3xl md:text-5xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-500 drop-shadow-[0_0_10px_rgba(0,255,0,.25)]">
          WELCOME TO BASED GOOSE NETWORK
        </h1>
        <h2 className="text-2xl md:text-4xl mt-2 text-slate-200">
          BASED GOOSE MONEY
        </h2>
        <p className="mt-3 text-gray-400">
          Powered by{" "}
          <a
            href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 underline-offset-4 hover:underline"
          >
            BONK.FUN
          </a>{" "}
          on the SOLANA Network
        </p>

        {/* Centered Video */}
        <div className="flex justify-center items-center mt-10 w-full">
          <video
            id="gooseVideo"
            src="/based-goose-october6-2025.mp4"
            controls
            autoPlay
            loop
            playsInline
            className="max-w-[880px] rounded-xl border-4 border-green-400 shadow-[0_0_25px_rgba(0,255,0,.4)]"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          ></video>
        </div>

        <p className="mt-4 text-green-400 animate-pulse">
          ONLINE ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        </p>
      </section>

      {/* BUTTONS */}
      <section className="mt-12 z-10 flex flex-wrap gap-3 items-center justify-center">
        <a
          href="https://x.com/100XGOOSE"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md"
        >
          X.COM
        </a>
        <a
          href="https://t.me/BASEDGOOSE100x"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md"
        >
          TELEGRAM
        </a>
        <a
          href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk"
          target="_blank"
          rel="noreferrer"
          className="bg-gray-900 hover:bg-green-700 px-4 py-2 rounded-md border border-green-500 shadow-md"
        >
          BONK.FUN
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-10 mb-6 text-xs text-gray-500 z-10 text-center">
        © 2025 Based Goose Money. Powered by BONK.FUN.{" "}
        <span className="italic">100x 1000x 10000X 1MX 1BX 1TX TNX</span>
      </footer>
    </main>
  );
}
