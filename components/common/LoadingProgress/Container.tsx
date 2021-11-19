import { ReactChild } from "react";

interface ContainerInterface {
  animationDuration: number;
  isFinished: boolean;
  children: ReactChild;
}

const Container = ({
  animationDuration,
  children,
  isFinished,
}: ContainerInterface) => {
  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
