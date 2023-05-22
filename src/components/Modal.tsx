import { ReactNode, useEffect } from "react";
import CloseIcon from "./Icons/CloseIcon";
import clsx from "clsx";
import useScrollLock from "../hooks/useLocker";

interface IModalProps {
  title?: string;
  open?: boolean;
  children: ReactNode;
}

const Modal = ({ title, open = true, children }: IModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return;
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  return (
    <div className={clsx("modal", open === false && "modal-hidden")}>
      <div className="modal-shadow"></div>
      <div className="modal-container">
        <div className="modal-close">
          <p>{title}</p>
          <CloseIcon width={18} height={18} />
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
