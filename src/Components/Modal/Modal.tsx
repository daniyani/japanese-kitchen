import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type Props = {
  children: JSX.Element | Array<JSX.Element> | ReactNode;
  hideCartHandler: () => void;
};

const Backdrop: FC<Omit<Props, "children">> = ({ hideCartHandler }) => {
  return <div className={styles.backdrop} onClick={hideCartHandler}></div>;
};

const ModalWindow: FC<Omit<Props, "hideCartHandler">> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal: FC<Props> = ({ children, hideCartHandler }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideCartHandler={hideCartHandler} />,
        portalElement as HTMLElement
      )}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement as HTMLElement
      )}
    </>
  );
};

export default Modal;
