const Title: React.FC<{id?: string}> = ({ children, id }) => {
  return <h2 id={id} className="text-2xl font-nunito font-bold">{children}</h2>;
};

export default Title;
