import React from "react";
import injectCss from "react-jss";
import { Rate, List, Icon } from "antd";
import { ParallaxLayer } from "react-spring/addons";

const styles = {
  title: {
    // outline: "1px solid green",
    width: "100%",
    marginRight: "100px",
    marginBottom: "30px",
    borderBottom: "1px solid #eeeeee"
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    // outline: "1px solid red",
    // height: '100%',
    padding: "100px 0",
    paddingLeft: "100px"
  },
  flexBlock: {
    flex: "1 0 0",
    maxWidth: "50%",
    overflowY: "auto",
    // outline: "1px solid blue",
    marginRight: "100px",
    marginBottom: "30px"
  },
  content: {
    width: "100%",
    marginRight: "100px"
  }
};

class Skill extends React.Component {
  render() {
    const { classes, offset } = this.props;
    const data = [
      {
        avatar: "check",
        title: "Front-End",
        stars: 10,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      },
      {
        avatar: "check",
        title: "Back-End",
        stars: 10,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      },
      {
        avatar: "check",
        title: "DevOps",
        stars: 7,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      },
      {
        avatar: "check",
        title: "Data Structures",
        stars: 9,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      },
      {
        avatar: "check",
        title: "Game Development",
        stars: 7,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      },
      {
        avatar: "check",
        title: "Management",
        stars: 6,
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team"
      }
    ];

    const languages = [
      {
        avatar: "check",
        title: "Portuguese (Native)",
        description: "Fluent"
      },
      {
        avatar: "check",
        title: "English",
        description: "Advanced"
      },
      {
        avatar: "check",
        title: "Spanish",
        description: "Low Intermediary"
      }
    ];

    return (
      <React.Fragment>
        <ParallaxLayer
          offset={offset}
          speed={0}
          factor={1}
          style={{ backgroundColor: "#ffffff" }}
        />

        <ParallaxLayer offset={offset} speed={0.5} factor={1}>
          <div className={classes.flexContainer}>
            <div className={classes.title}>
              {" "}
              <h2>MY SKILLS</h2>
            </div>
            <div className={classes.flexBlock}>
              <h3>Development</h3>
              <br />
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon type={item.avatar} style={{ fontSize: 20 }} />
                      }
                      title={
                        <React.Fragment>
                          <span>{item.title}</span>
                          <Rate
                            count={10}
                            allowHalf
                            disabled
                            defaultValue={item.stars}
                            style={{ float: "right" }}
                          />
                        </React.Fragment>
                      }
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className={classes.flexBlock}>
              <h3>Languages</h3>
              <br />
              <List
                itemLayout="horizontal"
                dataSource={languages}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon type={item.avatar} style={{ fontSize: 20 }} />
                      }
                      title={<span>{item.title}</span>}
                      description={item.description}
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </ParallaxLayer>
      </React.Fragment>
    );
  }
}

export default injectCss(styles)(Skill);
