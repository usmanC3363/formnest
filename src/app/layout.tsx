import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import "./fonts.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InViewObserver from "./components/helper/InViewObserver";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="no-scrollbar h-full">
        <main>
          <Header />
          <div className="mt-32">
            <InViewObserver />
            {children}
          </div>
          <Footer />
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
