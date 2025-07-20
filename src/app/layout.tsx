import Footer from "./components/footer";
import Header from "./components/header";

const metadata = {
  title: "Al Amin Khan App",
  description: "Powered by Al Amin",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Poppins, Arial" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
