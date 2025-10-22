// src/app/page.jsx
"use client";
import { useState } from "react";

export default function BasedBankBGM() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main
      className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden"
      style={{
        backgroundImage: "url('/BB_BGM.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CRT overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-15"
           style={{
             backgroundImage:
               "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 2px, transparent 4px)"
           }} />

      {/* X / TELEGRAM / BGM / GOOSE buttons */}
      <div className="absolute top-[28%] flex justify-center gap-[1.7vw]">
        <a
          href="https://x.com/100XGOOSE"
          target="_blank"
          rel="noreferrer"
          className="w-[7vw] h-[3vh] hover:brightness-150 transition-all duration-150"
          title="X (Twitter)"
        ></a>
        <a
          href="https://t.me/BASEDGOOSE100x"
          target="_blank"
          rel="noreferrer"
          className="w-[10vw] h-[3vh] hover:brightness-150 transition-all duration-150"
          title="Telegram"
        ></a>
        <a
          href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk"
          target="_blank"
          rel="noreferrer"
          className="w-[7vw] h-[3vh] hover:brightness-150 transition-all duration-150"
          title="BGM"
        ></a>
        <a
          href="https://app.turbos.finance/fun/#/fun/0x94e3147f4dd49206cb4ccf6c118d78e8b49130f6d1002529caeb24f7db3f61c2::goose::GOOSE"
          target="_blank"
          rel="noreferrer"
          className="w-[8vw] h-[3vh] hover:brightness-150 transition-all duration-150"
          title="GOOSE"
        ></a>
      </div>

      {/* PLAY button */}
      <button
        onClick={() => setIsVideoOpen(true)}
        className="absolute bottom-[21%] w-[15vw] h-[6vh] hover:brightness-150 active:scale-95 transition-all duration-150"
        title="Play Video"
      ></button>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative border-4 border-green-500 rounded-lg shadow-[0_0_25px_rgba(0,255,0,0.5)] max-w-[800px]">
            <video
              src="/based-goose-october6-2025.mp4"
              controls
              autoPlay
              playsInline
              className="w-full h-auto rounded-md"
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 bg-green-500 text-black px-3 py-1 font-bold text-sm hover:bg-green-400"
            >
              ✕ CLOSE
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
