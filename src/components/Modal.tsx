import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
type Props = {
  children: ReactNode;
  open: boolean;
  onClose?: () => void;
};

const Modal = ({ open, onClose, children }: Props) => {
  if (open)
    return ReactDOM.createPortal(
      <React.Fragment>
        <div className="w-screen h-screen fixed top-0 left-0">
          <div
            className="w-full h-full bg-black/30 z-0"
            onClick={onClose}
          ></div>
          <div className="z-10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {children}
          </div>
        </div>
      </React.Fragment>,
      document.body
    );
  return null;
};

export default Modal;
