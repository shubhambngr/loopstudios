// import "./App.css";
import { Component } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/UI/Modal/Modal";
import Intro from "./components/Intro/Intro";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = { menuOpen: false };

  toggleMenuHandler = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  render() {
    return (
      <>
        <Modal
          show={this.state.menuOpen}
          backdropClicked={this.toggleMenuHandler}
        />
        <Header
          navbarMenuClick={this.toggleMenuHandler}
          menuOpen={this.state.menuOpen}
        />
        <Intro />
        <Creations />
        <Footer />
      </>
    );
  }
}

export default App;
