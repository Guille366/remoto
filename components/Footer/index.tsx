const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center w-full h-14 font-mono">
      <div className="w-full flex flex-row justify-between items-center m-auto h-14 max-w-screen-lg border-t border-gray-200">
        <p className="text-center text-gray-400 text-xs">
          &copy;2021 <span className="font-bold text-gray-400">REMOTO</span>.
          Todos os direitos reservados.
        </p>
        <p className="text-center text-gray-400 text-xs">
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

export default Footer;
