import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import "./fonts.css";
// import Footer from "./components/Footer";
// import InViewObserver from "./components/ui/InViewObserver";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="no-scrollbar h-full">
        <Header />

        <div className="mt-32">{children}</div>

        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
