import React from "react";
import injectSheet from "react-jss";
import { Rate, List, Icon, Tag } from "antd";
import { Parallax } from "react-parallax";
import images from "../resources/images";

const styles = {
  title: {
    // outline: "1px solid green",
    width: "100%",
    marginRight: "50px",
    marginBottom: "30px",
    borderBottom: "1px solid #eeeeee"
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    // outline: "1px solid red",
    // height: '100%',
    padding: "50px 0",
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
    stars: 7
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
  },
  {
    title: "Management",
    stars: 7
  }
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
  "contributing member",
  "transparent",
  "proactive",
  "easy adaptation",
  " excellent interpersonal skills"
];

class Skill extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Parallax bgImage={images.presentationOne} strength={1000} bgImageStyle={{opacity:0.1}}>
          <div className={classes.flexContainer} >
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
                )}
              />

              <br />
              <h3>Languages</h3>
              <br />
              <List
                itemLayout="horizontal"
                dataSource={languages}
                renderItem={item => (
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
                )}
              />
            </div>
            <div className={classes.flexBlock}>
              <h3>Tags</h3>
              <br />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {tags.map((item, key) => (
                  <Tag color="#2db7f5" key={key} style={{ margin: 5 }}>
                    {item}
                  </Tag>
                ))}
              </div>
              <p style={{ float: "right" }}>
                <br />
                <br />
                <br />
                Waiting for new challenges...
              </p>
            </div>
          </div>
        </Parallax>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Skill);
