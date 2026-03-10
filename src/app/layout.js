import { FavoritesProvider } from "@/context/FavoritesContext";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Countries Explorer",
  description: "Explore countries with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
