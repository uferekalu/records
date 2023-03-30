import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";

export default function GeneralModal(props) {
  useEffect(() => {
    const closeOnEscapeKeyDown = e => {
      if ((e.charCode || e.keyCode) === 27) {
        props.onClose();
      }
    };
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div
            onClick={props.onClose}
            className="modal-close"
          >
            <Image src={process.env.PUBLIC_URL + "/assets/images/close.png"} width="14" height="14" alt="close" />
          </div>
          <div className="modal-header">
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.children}</div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
}
