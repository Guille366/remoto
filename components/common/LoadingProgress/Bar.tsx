interface BarInterface {
  animationDuration: number;
  progress: number;
}

const Bar = ({ animationDuration, progress }: BarInterface) => {
  return (
    <div
      className="bg-violet-700 h-1 w-full top-0 left-0 fixed z-50"
      style={{
        marginLeft: `${(-1 + progress) * 100}%`,
        transition: `margin-left ${animationDuration}ms linear`,
      }}
    />
  );
};

export default Bar;
