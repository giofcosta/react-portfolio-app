import React from "react";
import injectSheet from "react-jss";
import Typing from "react-typing-animation";
import resources from "../resources/images";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import { Button, Icon, BackTop } from "antd";

const styles = {
  "@global": {
    body: {
      backgroundImage: `url('${resources.presentation}')`,
      backgroundSize: "cover"
    }
  }
};

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.presentationImage}>
        <Parallax ref={ref => (this.parallax = ref)} pages={4} className="jose">
          <ParallaxLayer offset={0} speed={1}>
            <div className={"presentation-main"}>
              <p className={"presentation-text-1"}>
                GREETINGS FRIEND.
                <br />
                <small>Welcome to my website!</small>
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.3}>
            <div className={"presentation-main"}>
              <p className={"presentation-text-2"}>
                <Typing speed={30}>
                  <small>
                    <Typing.Delay ms={600} />
                    I am a
                    <Typing.Delay ms={600} />
                    <Typing.Speed ms={60} />
                    <b> FULL-STACK,</b>
                    <Typing.Delay ms={600} />
                    <b> MOBILE</b>
                    <Typing.Delay ms={600} /> and <b>GAME DEVELOPER</b>. <br />
                    <Typing.Delay ms={600} />
                    <Typing.Speed ms={30} />
                    In this website,
                    <Typing.Delay ms={200} /> you can see everything about my
                    career,
                    <br />
                    <Typing.Delay ms={200} /> portfolio
                    <Typing.Delay ms={200} /> and my work.
                  </small>
                  <br />
                  <br />
                  <Typing.Delay ms={1000} />
                  <Typing.Speed ms={100} />
                  I hope you enjoy.
                  <Typing.Delay ms={1000} />
                  <Typing.Speed ms={100} />
                  <b> Giovanni Fernandes.</b>
                </Typing>
              </p>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.1}>
            <div className={"presentation-main"}>
              <Button
                className={"presentation-button"}
                ghost
                size={"large"}
                onClick={() => this.parallax.scrollTo(1)}
              >
                <Icon type="play-circle" />
                More about me
              </Button>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={2}
            factor={2}
            style={{ backgroundColor: "#ffffff" }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url('${resources.presentationTwo}')`,
              backgroundSize: "cover"
            }}
          />

          <ParallaxLayer
            offset={3}
            speed={1}
            style={{ backgroundColor: "#ffffff" }}
          />

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(3)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />

          <ParallaxLayer
            offset={3}
            speed={0.1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={() => this.parallax.scrollTo(0)}
          />
          <BackTop target={() => this.parallax} />
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(Home);
