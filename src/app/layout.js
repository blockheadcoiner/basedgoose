export const metadata = {
  title: "BASED BANK $BGM",
  description: "Welcome to Based Goose Money — the official Based Bank portal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-black text-[#f8e3a1] font-mono">{children}</body>
    </html>
  );
}
