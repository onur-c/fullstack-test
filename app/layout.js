import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "./components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Onur Dev",
  description: "Full stack app tutorial by Lama Dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
