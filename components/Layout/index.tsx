import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main className="font-code min-h-total max-w-screen-lg m-auto px-4 text-gray-800">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
