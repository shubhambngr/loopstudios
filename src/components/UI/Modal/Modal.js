import styles from "./Modal.module.css";
import { Component } from "react";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.backdropClicked} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? "translateX(0)" : "translateX(-100%)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          <ul className={styles.Links}>
            <li>
              <a href="/#">
                <h1>ABOUT</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>CAREERS</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>EVENTS</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>PRODUCTS</h1>
              </a>
            </li>
            <li>
              <a href="/#">
                <h1>SUPPORT</h1>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Modal;
