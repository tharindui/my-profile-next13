import React from "react";
import "styles/tailwind.scss";
import Footer from "../components/organisms/home/Footer";
import NavBar from "../components/organisms/home/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar></NavBar>
        <div className="container pt-[130px] min-h-screen mx-auto">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
