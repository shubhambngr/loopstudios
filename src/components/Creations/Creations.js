import { Component } from "react";
import styles from "./Creations.module.css";
import Card from "./Card/Card";
import headings from "./headings";
import imagesDesktop from "./imagesDesktop";
import imagesMobile from "./imagesMobile";

class Creations extends Component {
  state = {
    width: window.innerWidth,
    seeAll: false,
  };

  resize = () => {
    this.setState({ width: window.innerWidth });
  };

  seeAllHandler = () => {
    this.setState((prevState) => ({ seeAll: !prevState.seeAll }));
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }

  render() {
    const imageArr = this.state.width > 940 ? imagesDesktop : imagesMobile;
    const cards = imageArr.map((image, index) => {
      return <Card key={index} bgImg={image} heading={headings[index]} />;
    });

    return (
      <section className={styles.Creations}>
        <div className={styles.Creations_Top_Bar}>
          <h1>OUR CREATIONS</h1>
          {this.state.width > 940 && (
            <button className={styles.See_All_btn} onClick={this.seeAllHandler}>
              {this.state.seeAll ? "SEE LESS" : "SEE ALL"}
            </button>
          )}
        </div>
        <div className={styles.Creations_Cards}>
          {this.state.seeAll
            ? cards
            : cards.splice(0, Math.ceil(cards.length / 2))}
        </div>
        {this.state.width < 940 && (
          <button className={styles.See_All_btn} onClick={this.seeAllHandler}>
            {this.state.seeAll ? "SEE LESS" : "SEE ALL"}
          </button>
        )}
      </section>
    );
  }
}

export default Creations;
