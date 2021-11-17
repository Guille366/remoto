import { memo } from "react";

const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="font-nunito flex items-center justify-center w-full h-14 px-4 text-xs">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg border-t border-gray-200">
        <p className="text-start text-gray-500">
          &copy;{year} <span className="font-code">{"REMOTO"}</span>.
        </p>
        <p className="text-end text-gray-400">
          by{" "}
          <a
            href="https://github.com/vorsakha"
            target="_blank"
            rel="noopener noreferrer"
            className="font-code"
          >
            @vorsakha
          </a>
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
