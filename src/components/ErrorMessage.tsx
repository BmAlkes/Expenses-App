import { ReactNode } from "react";

type ChildrenProps = {
  children: ReactNode;
};

const ErrorMessage = ({ children }: ChildrenProps) => {
  return (
    <p className="bg-red-400 p-2 text-white font-bold text-sm text-center">
      {children}
    </p>
  );
};

export default ErrorMessage;
