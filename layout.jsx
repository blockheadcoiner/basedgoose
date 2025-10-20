// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Based Goose Money",
  description: "Powered by BONK.FUN on the SOL Network",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
