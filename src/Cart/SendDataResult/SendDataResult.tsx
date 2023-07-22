import { FC, ReactNode } from "react";

type Props = {
  children: JSX.Element | Array<JSX.Element> | ReactNode;
};

const SendDataResult: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default SendDataResult;
