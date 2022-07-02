import { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "../../assets/styles/Modal.module.scss";

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export const Modal = ({ onClose, children }) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("overlays")
      )}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};
