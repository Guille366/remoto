import { memo } from "react";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex items-center justify-center w-full h-14 font-mono px-4">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg border-t border-gray-200">
        <p className="text-start text-gray-500 text-xs">
          &copy;{year} <span className="font-bold text-gray-500">REMOTO</span>.
          Todos os direitos reservados.
        </p>
        <p className="text-end text-gray-400 text-xs">
          by{" "}
          <a
            href="https://github.com/vorsakha"
            target="_blank"
            rel="noopener noreferrer"
          >
            @vorsakha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
