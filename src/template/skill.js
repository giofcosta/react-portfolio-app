import React from "react";
import injectSheet from "react-jss";
import { Rate, List, Icon, Tag } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";

const styles = theme => ({
  ...theme,
  tags: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "auto",
    marginRight: "0",
  }
});

const data = [
  {
    title: "Front-End",
    stars: 10
  },
  {
    title: "Back-End",
    stars: 10
  },
  {
    title: "Desktop",
    stars: 8
  },
  {
    title: "Mobile",
    stars: 7
  },
  {
    title: "DevOps/Infrastructure",
    stars: 7
  },
  {
    title: "Software Architecture",
    stars: 8
  },
  {
    title: "Data Structures",
    stars: 8
  },
  {
    title: "Game Development",
    stars: 8
  },
  {
    title: "Design",
    stars: 6
  }
  // {
  //   title: "Management",
  //   stars: 7
  // }
];

const languages = [
  {
    title: "Portuguese (Native)",
    description: "Fluent"
  },
  {
    title: "English",
    description: "Advanced"
  },
  {
    title: "Spanish",
    description: "Low Intermediary"
  }
];

const tags = [
  "FullStack",
  "Software",
  "Developer",
  "Portuguese",
  "English",
  "Spanish",
  "C++",
  "C#",
  "Java",
  "Go",
  "Javascript",
  "Dart",
  "Front-end",
  "React",
  "Vue",
  "AngularJS",
  "jQuery",
  "Razor",
  "Css",
  "JSS",
  "Less",
  "Sass",
  "Bootstrap",
  "Material-UI",
  "ant Design",
  "MDBootstrap",
  "Ionic",
  "HTML",
  "Telerik",
  "KendoUI",
  "DevExpress",
  "SyncFusion",
  "PrimeFaces",
  "RichFaces",
  "Adobe Flash",
  "Back-end",
  "Asp.Net Web Forms",
  "Asp.Net MVC",
  "Asp.Net Core",
  "JBoss Seam",
  "Java Spring",
  "node.js",
  "Asp Classic",
  "WCF",
  "Desktop",
  "Universal Apps",
  "WPF",
  "VB.Net",
  "Mobile",
  "Flutter",
  "Android",
  "Cordova",
  "Ionic",
  "Xamarin",
  "Windows Phone",
  "Architecture",
  "MVVM",
  "MVC",
  "DDD",
  "TDD",
  "OOP",
  "Design Patterns",
  "Clean Code",
  "Microservices",
  "SOAP",
  "Rest",
  "E-Commerce",
  "UML",
  "DevOps",
  "Infrastructure",
  "Azure DevOps (Visual Studio Online)",
  "Windows",
  "Mac",
  "Linux",
  "Docker",
  "Azure",
  "Aws",
  "Google Cloud Platform",
  "JBoss",
  "Apache Tomcat",
  "IIS",
  "Continuous Integration",
  "GIt",
  "SVN",
  "Mercurial",
  "Source Code",
  "TFS",
  "GitHub",
  "Data Structures",
  "MS Sql Server",
  "Oracle 11g",
  "MySql",
  "Redis",
  "Mongo",
  "Management",
  "Azure DevOps (Visual Studio Online)",
  "Trello",
  "Jira",
  "GitHub",
  "ZenHub",
  "MS Project",
  "Excel",
  "Game Developer",
  "Unity 2D/3D",
  "Maya",
  "3D Studio Max",
  "Design",
  "Photoshop",
  "InDesign",
  "PageMaker",
  "Corel Draw",
  "Illustrator",
  "Personal",
  "Easy to work with",
  "Easy learning",
  "Contributing member",
  "Transparent",
  "Proactive",
  "Easy adaptation",
  "Excellent interpersonal skills"
];

class Skill extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="skills" className={classes.containerWrapper}>
        <div className={classes.flexContainer} style={{ minHeight: "auto" }}>
          <div className={classes.title}>
            {" "}
            <h2>MY SKILLS</h2>
          </div>
          <br />
          <br />
          <div className={classes.flexBlock1}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  delay={300}
                  offset={1000}
                  animateOnce={true}
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon
                          type="check"
                          style={{ fontSize: 20, color: "green" }}
                        />
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
                </ScrollAnimation>
              )}
            />
          </div>
          <div className={classes.flexBlock2}>
            <List
              itemLayout="horizontal"
              dataSource={languages}
              renderItem={item => (
                <ScrollAnimation
                  animateIn="bounceInRight"
                  delay={300}
                  offset={1000}
                  animateOnce={true}
                >
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Icon
                          type="check"
                          style={{ fontSize: 20, color: "green" }}
                        />
                      }
                      title={
                        <div>
                          <span>{item.title}</span>
                          <span style={{ float: "right", color: "green" }}>
                            {item.description}
                          </span>
                        </div>
                      }
                    />
                  </List.Item>
                </ScrollAnimation>
              )}
            />

            <ScrollAnimation
              animateIn="jackInTheBox"
              delay={600}
              offset={1000}
              animateOnce={true}
            >
              <img
                src={images.technology}
                alt="technology"
                style={{
                  objectFit: "contain",
                  width: "100%",
                  opacity: 0.9
                }}
              />
            </ScrollAnimation>
          </div>
        </div>
        <br />
        <br />
        <Parallax
          bgImage={images.presentationOne}
          strength={1000}
          bgImageStyle={{ opacity: 0.3 }}
        >
          <br />
          <div className={classes.tags}>
            {tags.map((item, key) => (
              <ScrollAnimation
                animateIn="zoomIn"
                delay={600}
                offset={1000}
                animateOnce={true}
              >
                <Tag color="#2db7f5" key={key} style={{ margin: 5 }}>
                  {item}
                </Tag>
              </ScrollAnimation>
            ))}
          </div>
          <p style={{ float: "right" }} />
        </Parallax>
      </div>
    );
  }
}

export default injectSheet(styles)(Skill);
