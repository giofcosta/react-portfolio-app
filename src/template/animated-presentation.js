import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import images from "../resources/images";
import injectSheet from "react-jss";

const styles = {
  ".container > div > div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  ".text": {
    pointerEvents: "none",
    justifyContent: "start !important",
    fontFamily: "'Kanit', sans-serif",
    lineHeight: 40,
    textTransform: "uppercase"
  },
  ".number": {
    fontSize: 450,
    color: "#373c4c"
  },
  ".number span": {
    display: "inline-block",
    position: "relative",
    transform: "translate3d(-35%, 0, 0)"
  },
  ".header": {
    marginLeft: 350,
    fontSize: 70,
    color: "white"
  },
  ".slopeBegin": {
    backgroundColor: "#20232f",
    clipPath: "polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%)"
  },
  ".slopeEnd": {
    clipPath:
      "polygon(70% 0, 100% 0, calc(100% - 20vw) 100%, calc(70% - 20vw) 100%)"
  },
  ".slopeBegin, .slopeEnd": {
    position: "absolute",
    width: "140%",
    height: "100%",
    cursor: "pointer"
  },
  ".pink": {
    background: "linear-gradient(to right, deeppink 0%, coral 100%)"
  },
  ".teal": {
    background: "linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
  }
};

const NewPage = ({ offset, caption, first, second, gradient, onClick, image, classes }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div
        className="slopeBegin"
        style={{ backgroundImage: "url(" + image + ")" }}
      />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </ParallaxLayer>
  </React.Fragment>
);

const Page = injectSheet(styles)(NewPage)

class AnimatedPresentation extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to);

  render() {
    let idx = 1;
    let cancel = false;

    let nextScrool = auto => {
      if (idx >= 3) idx = 0;
      console.log(idx);
      if (!auto) cancel = true;
      this.scroll(idx++);
    };

    setInterval(() => {
      if (cancel) {
        cancel = false;
        return;
      }

      nextScrool(true);
    }, 8000);

    return (
      <Parallax
        className="container"
        ref="parallax"
        pages={3}
        horizontal
        scrolling={false}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="who we are"
          first="Lorem ipsum"
          second="dolor sit"
          image={images.presentationOne}
          onClick={() => nextScrool()}
        />
        <Page
          offset={1}
          gradient="teal"
          caption="what we do"
          first="consectetur"
          second="adipiscing elit"
          image={images.presentationTwo}
          onClick={() => nextScrool()}
        />
        <Page
          offset={2}
          gradient="tomato"
          caption="what we want"
          first="Morbi quis"
          second="est dignissim"
          onClick={() => nextScrool()}
        />
      </Parallax>
    );
  }
}

export default injectSheet(styles)(AnimatedPresentation);
