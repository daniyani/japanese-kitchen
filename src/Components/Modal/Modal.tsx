import { FC } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

type Props = {
  children: JSX.Element | Array<JSX.Element>;
};

const Backdrop: FC = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalWindow: FC<Props> = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal: FC<Props> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement as HTMLElement)}
      {ReactDOM.createPortal(
        <ModalWindow>{children}</ModalWindow>,
        portalElement as HTMLElement
      )}
    </>
  );
};

export default Modal;
