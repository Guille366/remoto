const Title: React.FC<{id?: string}> = ({ children, id }) => {
  return <h2 id={id} className="text-2xl font-code font-bold">{children}</h2>;
};

export default Title;
