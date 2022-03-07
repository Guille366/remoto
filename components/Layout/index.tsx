import React from "react";
import useProgress from "../../hooks/useProgress";
import Progress from "../common/LoadingProgress";
import Footer from "../Footer";
import Header from "../Header";

const Layout: React.FC = ({ children }) => {
  const isAnimating = useProgress();

  return (
    <>
      <main className="font-code min-h-total max-w-screen-lg m-auto px-4 text-gray-700 scrollbar-thin scrollbar-thumb-violet-400 scrollbar-track-violet-100">
        <Progress isAnimating={isAnimating} />
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
