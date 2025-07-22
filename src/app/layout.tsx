import { Metadata } from "next";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial by Al Amin",
    template: "%s | by Al Amin",
    absolute: "",
  },
  description: "Developed by Al Amin",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
