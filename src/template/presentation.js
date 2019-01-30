import React from "react";
import resources from "../resources/images";
import Typing from "react-typing-animation";
import { Button, Icon } from "antd";
import injectSheet from "react-jss";
import { ParallaxLayer } from "react-spring/addons";

const styles = {
  "@global": {
    body: {
      backgroundImage: `url('${resources.presentation}')`,
      backgroundSize: "cover"
    }
  },
  main: `
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  textOne: `
    margin-top: -400px;
    position: relative;
    width: 90%;
    line-height: 80px;
    color: #f0f0f0;
    font-size: 4em;
    font-weight: 800;
    will-change: transform, opacity;
    text-align: right;
  `,
  textTwo: `
    margin-top: 150px;
    position: relative;
    width: 90%;
    color: #f0f0f0;
    font-size: 2.5em;
    will-change: transform, opacity;
    text-align: right;
  `,
  button: `
    margin-top: 700px;
    font-size: 2em;
    font-weight: 800;
    text-transform: uppercase;
    height: 70px;
    width: 340px;
  `
};

class Presentation extends React.Component {
  render() {
    const { classes, parallax, offset } = this.props;
    console.log(parallax);

    return (
      <React.Fragment>
        <ParallaxLayer offset={offset} speed={.5} factor={1}>
          <div className={classes.main}>
            <p className={classes.textOne}>
              GREETINGS FRIEND.
              <br />
              <small>Welcome to my website!</small>
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={offset} speed={0.3} factor={1}>
          <div className={classes.main}>
            <div className={classes.textTwo}>
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
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={offset} speed={.1} factor={1}>
          <div className={classes.main}>
            <Button className={classes.button} ghost size={"large"} onClick={() => parallax(1)}>
              <Icon type="play-circle" />
              More about me
            </Button>
          </div>
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        /> */}
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Presentation);
