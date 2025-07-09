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
    <html lang="en" className={`no-scrollbar font-montreal`}>
      <body className={`no-scrollbar min-h-screen`}>
        <Header />
        <div className="mt-[7.5rem] max-h-max min-h-[84svh] lg:min-h-[100vh] 2xl:min-h-[71vh]">
          {/* <InViewObserver /> */}
          {children}
        </div>
        {/* <Footer extraClass=" text-mywhite-50" /> */}
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
