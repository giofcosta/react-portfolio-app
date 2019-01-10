import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SoloDevImage from "../resources/solo-developers.png";
import homeOfficeImage from "../resources/work-office.jpg";
import { Parallax } from "react-parallax";

const styles = theme => ({
  "@global": {
    html: {
      //minHeight: '2000px'
    }
  }
});

class Home extends React.Component {
  render() {
    const windowHeight = window.innerHeight;

    return (
      <React.Fragment>
        <Parallax bgImage={homeOfficeImage} strength={windowHeight / 3}>
          <div style={{ height: windowHeight }}>
            <div>HTML inside the parallax</div>
          </div>
        </Parallax>
        <div style={{ height: windowHeight }}>Conteudo 2</div>
        <Parallax bgImage={SoloDevImage} strength={windowHeight / 3}>
          <div style={{ height: windowHeight }}>
            <div>HTML inside the parallax</div>
          </div>
        </Parallax>
        <div style={{ height: windowHeight }}>Conteudo 3</div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Home);
