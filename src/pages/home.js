import React from "react";
import injectSheet from "react-jss";
import { Parallax} from "react-spring/addons";
import { Presentation, AboutMe, Skill, Experience } from "../template";

const styles = {};

class Home extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={4} scrolling={true}>
        <Presentation
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={3}
        />
        <AboutMe
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={1}
        />

        <Skill
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={2}
        />

        <Experience
          parallax={idx => {
            this.parallax.scrollTo(idx);
          }}
          offset={0}
        />

        {/* <ParallaxLayer
          offset={2}
          speed={.2}
          // onClick={() => this.parallax.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        /> */}

        {/* <ParallaxLayer
          offset={3}
          speed={1}
          factor={1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff" 
          }}
          // onClick={() => this.parallax.scrollTo(0)}
        /> */}
      </Parallax>
    );
  }
}

export default injectSheet(styles)(Home);
