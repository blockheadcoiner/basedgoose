"use client";

export default function Page() {
  return (
    <main
    className="relative min-h-screen text-[#f8e3a1] font-mono flex flex-col items-center justify-center overflow-hidden"
    style={{
      backgroundImage: "url('/90s_goose.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >

          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold pixel-text mb-2">
              BASED BANK
            </h1>
            <h2 className="text-2xl md:text-3xl pixel-text">$BGM</h2>
            <div className="pixel-border h-1 mt-4 bg-[#f8e3a1]"></div>
          </header>

          {/* Main Panel */}
          <main className="pixel-panel p-6 mb-8 mx-auto" style={{ maxWidth: "800px" }}>
            <h3 className="text-xl md:text-2xl mb-4 pixel-text">Welcome!</h3>
            <h4 className="text-lg md:text-xl mb-6 pixel-text">Account Summary</h4>

            <div className="grid gap-4 mb-8">
              <div className="pixel-item p-3 flex justify-between">
                <span className="text-[#a5d6a7]">Checking:</span>
                <span>$1,200.00</span>
              </div>
              <div className="pixel-item p-3 flex justify-between">
                <span className="text-[#a5d6a7]">Savings:</span>
                <span>$170,000,000.00</span>
              </div>
              <div className="pixel-item p-3 flex justify-between">
                <span className="text-[#a5d6a7]">BGM:</span>
                <span>$69,000,000.00</span>
              </div>
            </div>

            <button
              id="playBtn"
              className="pixel-button mx-auto block px-8 py-3 text-xl hover:brightness-125 active:scale-95 transition-all duration-150"
              onClick={() => {
                const modal = document.getElementById("videoModal");
                if (modal) modal.classList.remove("hidden");
              }}
            >
              PLAY
            </button>
          </main>

          {/* Navigation */}
          <nav className="grid grid-cols-3 gap-4 mt-8">
            <a
              href="https://t.me/BASEDGOOSE100x"
              target="_blank"
              rel="noreferrer"
              className="pixel-button text-center py-3 hover:brightness-125 transition"
            >
              TELEGRAM
            </a>
            <a
              href="https://bonk.fun/token/3nZg1VZjT8qbeVPPKFmQmj6zbSw8D42RnxSeae3Qbonk"
              target="_blank"
              rel="noreferrer"
              className="pixel-button text-center py-3 hover:brightness-125 transition"
            >
              BGM
            </a>
            <a
              href="https://app.turbos.finance/fun/#/fun/0x94e3147f4dd49206cb4ccf6c118d78e8b49130f6d1002529caeb24f7db3f61c2::goose::GOOSE"
              target="_blank"
              rel="noreferrer"
              className="pixel-button text-center py-3 hover:brightness-125 transition"
            >
              GOOSE
            </a>
          </nav>
        </div>

        {/* Video Modal */}
        <div
          id="videoModal"
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 hidden"
        >
          <div className="relative pixel-panel p-4 max-w-2xl w-full mx-4">
            <button
              id="closeModal"
              className="absolute top-2 right-2 text-2xl"
              onClick={() => {
                const modal = document.getElementById("videoModal");
                if (modal) modal.classList.add("hidden");
              }}
            >
              ✕
            </button>
            <div className="video-container">
              <video controls autoPlay className="w-full">
                <source
                  src="https://huggingface.co/spaces/basedgoose/based-goose-vault/resolve/main/videos/based-goose-october6-2025.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
