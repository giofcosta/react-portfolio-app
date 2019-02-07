import React from "react";
import injectSheet from "react-jss";
import { Icon, Timeline, Collapse, Anchor } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import images from "../resources/images";
import ScrollAnimation from "react-animate-on-scroll";

const styles = theme => ({
  ...theme
});



const experiences = [
  {
    title: "After Mercado Livre – Florianópolis, SC - Brazil",
    date: "2018 - 2019",
    rule: "Senior Software Engineer, Indie Game and Web developer, Freelancer",
    description: (
      <p>
        I started to improve my english, hiring a teacher and practicing a lot,
        reaching advanced level. <br />
        I improved my knowledge of React/Vue, nodejs, JSS during this time,
        starting to make my portfolio website. <br />
        I was able to learn Flutter, returning to mobile development, making an
        app. <br />I improved my knowledge of Unity3D skills, starting my first
        indie game. <br />I improved my knowledge of DevOps, creating a
        continuous integrations for my website portfolio in GCP and AWS and
        Github using Docker and Kubernetes.
        <br />
        <br />
        <br />
      </p>
    )
  },
  {
    title: "Mercado Livre – Florianópolis, SC - Brazil",
    date: "2017 - 2018",
    rule: "Senior Software Engineer",
    description: (
      <p>
        I Participated in a project as a front-end using React, developing some
        components importing some csv information to TMS. <br />
        Development of the new version of the TMS, using Golang in the Back-End
        Company’s Infrastructure and React in the front-end. <br />
        Automated Tests in golang, and React with Jest. <br />
        Deploy in AWS through Fury (their infrastructure wrapper) with
        continuous integration. <br />
        Docker containers and Microservice Architecture in Linux and Mac OS.
        <br />
        Git, Git-flow, GitHub and Jira for Management. <br />
        Member of Committee and Community manager in a project called IT Brasil,
        involving some Senior developers in MeLi Brazil to share knowledge and
        keep the growth of the brazilian community. <br />
        Communication by speaking and writing in Spanish language. <br />
        Slack, Discord and Hangout for remote communication.
      </p>
    )
  },
  {
    title: "Axado – Florianópolis, SC - Brazil",
    date: "2016 - 2017",
    rule: "Senior System Analyst",
    description: (
      <p>
        Development and maintenance in a tracking system, using Asp.Net MVC/.Net
        Core, C#, WPF and Windows Service, making an integration between the
        site, the desktop services and Zebra and HP printer devices (some IoT
        skills). <br />
        JQuery and AngularJS in Old Applications and Vue.js for a new
        Application. <br />
        All Deploys in Azure in a Distributed Microservices Architecture, using
        also Topics and Queues in Bus Service and Table Storage for the Logs.
        SignalR and AppInsights is used for real time analizes in a Dashboard.
        <br />
        SQL Server database with Entity Framework/EFCore, sometimes Dapper for
        persistency. <br />
        Visual Studio Online for management and scrum. <br />
        Git as version control <br />
        The company had buyed by Mercado Livre in 2017
      </p>
    )
  },
  {
    title: "Black Drake IT Solutions – Juiz de Fora, MG - Brazil",
    date: "2014 - 2016",
    rule: "Founder/CEO/CTO",
    description: (
      <p>
        Administration, Development, Design, Game Development, Project
        Management and Consulting. I made a lot of projects for my clients,
        using technologies like c#, Ap.net MVC, SignalR, Java, Javascript,
        Android, WIndows Phone, PhoneGap, Windows Universal Apps, Xamarin,
        Unity3D. <br />
        Telerik, AngularJS, Ionic, SEO-Friendly and W3C validations, resource
        optimization, performance improvements. <br />
        Microservices and Web Robots (WebCrawler) with Watin and Selenium.
        <br />
        Git as version control and Visual Studio Online for Project Management
        With Scrum. <br />
        SQL Server and Oracle for Database. <br />
        DevOps on Azure.
      </p>
    )
  },
  {
    title: "Guiando Telecom – Juiz de Fora, MG - Brazil",
    date: "2013 - 2014",
    rule: "Senior System Analyst",
    description: (
      <p>
        Development and maintenance of .Net C# WebForm Applications in Thomson
        Reuters as outsourced. <br />
        Our team resolved hundreds of bugs a week in their applications.
      </p>
    )
  },
  {
    title: "Nova Consulting – Juiz de Fora, MG - Brazil",
    date: "2013",
    rule: "Senior System Analyst",
    description: (
      <p>
        Development and maintenance of Java applications using Java-ee, JSF,
        Jmms, ejb, JBoss Richfaces. <br />
        Versioning With SVN. <br />
        Oracle and MSSQL with JPA/Hibernate for persistence. <br />
        We had our own data centers. <br />
      </p>
    )
  },
  {
    title: "Affero – Juiz de Fora, MG - Brazil",
    date: "2012 – 2013",
    rule: "Senior System Analyst",
    description: (
      <p>
        Development and Maintenance of Java applications using JSP, Spring,
        Java-ee, CDI, JSF, Jms, ejb, Jax-rs, Rest-easy. <br />
        We Developed a proprietary reporting server in AWS infrastructure.{" "}
        <br />
        Javascript, Primefaces, jQuery, CSS and HTML in advanced levels. <br />
        SQL Server and JPA/Hibernate for persistence. <br />
        TDD using tools like Arquillian and Mockito. <br />
        Continuous Integrations with jenkins and Sonar. <br />
        SEO-Friendly and W3C validations, resource optimization, performance
        improvements. <br />
        Scrum Agile Methodology. <br />
        All published in AWS in a custom JBoss cluster.
      </p>
    )
  },
  {
    title: "Delage Consulting – Juiz de Fora, MG - Brazil",
    date: "2011 – 2012",
    rule: "Senior System Analyst",
    description: (
      <p>
        Development and support of a complex Quotation System and start of the
        remade his Warehouse Software using c# and asp.net MVC3. <br />
        Telerik, Javascript, JQuery, CSS and HTML in advanced levels. <br />
        SQL Server with NHibernate for persistence. <b />
        SEO-Friendly and W3C validations, resource optimization, performance
        improvements. <br />
        Scrum and Kanban methodologies. Mercurial and TFS for version control.{" "}
        <br />
        All published on Windows Azure.
      </p>
    )
  },
  {
    title: "Novaprolink Technology– Juiz de Fora, MG - Brazil",
    date: "2008 – 2011",
    rule: "Senior Developer - Team Leader",
    description: (
      <p>
        Support and development in Classic ASP. <br />
        Development of Company Website, CMS, E-Commerce and Framework in C# and
        .Net WebForms and MVC. <br />
        DevExpress, Telerik, Javascript, JQuery, CSS, HTML in advanced levels.
        <br />
        MySQL and SQL Server for data. <br />
        SVN and TFS for version control. <br />
        SEO-Friendly and W3C validations, resource optimization, performance
        improvements. <br />
        We had our own data centers. <br />
        The company was bought by Thomson Reuters in 2012.
      </p>
    )
  }
];

const education = [
  {
    title: "Salgado de Oliveira University – Juiz de Fora, MG Brasil",
    rule: "System Analyst - Degree - Incomplete",
    date: "2008"
  },
  {
    title: "Windows Azure Course – Belo Horizonte, MG Brasil",
    rule: "Microsoft/PUC Minas",
    date: "2011"
  },
  {
    title: "Scrum Practical Course – Juiz de Fora, MG Brasil",
    rule: "Bridge Consulting/Delage Consulting",
    date: "2011"
  },
  {
    title: "OOP Course – Juiz de Fora, MG Brasil",
    rule: "Novaprolink Technology/Salgado de Oliveira University",
    date: "2008"
  },
  {
    title: "Web Development Course – Juiz de Fora, MG Brasil",
    rule: "Salgado de Oliveira University",
    date: "2008"
  },
  {
    title: "Basic Computing Course – Juiz de Fora, MG Brasil",
    rule: "SOS computers",
    date: "2002"
  }
];

const certifications = [
  {
    title: "Salgado de Oliveira University",
    rule: "Android Developer Course",
    description:
      "Two days course for android development at Salgado de Oliveira University.",
    date: "2010"
  },
  {
    title: "Microsoft Certified",
    rule: "MCP - Web Developer",
    description: (
      <p>
        MCPD – Design and Developing Web Applications using Microsoft .NET{" "}
        <br />
        MCTS - .NET Framework 4, Data Access <br />
        MCTS - .NET Framework 4, Service Communication Applications <br />
        MCTS - .NET Framework 4, Web Applications
      </p>
    ),
    date: "2010"
  },
  {
    title: "The Developers Conference - Vue.js - SC/SP",
    rule: "Fast and Efficient development with Vue.js.",
    description:
      "Fifty minutes lecture about Vue.js for São Paulo and Florianópolis for one the largest technology events held in Brazil",
    date: "2017"
  },
  {
    title: "Udemy",
    rule: "Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)",
    description:
      "By Maximillian Shwarzmuller, Professional web developer and Instructor. A complete course about Vue JS in the web.",
    date: "2017"
  },
  {
    title: "Udemy",
    rule: "React + Redux",
    description:
      "By Leonardo Moura Leitão, Software Architect. React, Redux, Webpack, Redux-Form, MongoDB, Express, Node... Several practical exercises and two complete apps from zero!",
    date: "2018"
  },
  {
    title: "Udemy",
    rule: "The Ultimate Game Development Guide",
    description:
      "By Jonathan Weinberger, Authorized Unity Instructor. Create in partnership with Unity Technologies, i was able to improve my C# experience in 2D and 3D game with this embracing guide.",
    date: "2018"
  }
];

const readings = [
  {
    title: "Head First Java",
    rule: "Kathy Sierra, Bert Bates",
    description: "",
    date: ""
  },
  {
    title: "Head First Iphone",
    rule: "Dan Pilone, Tracey Pilone",
    description: "",
    date: ""
  },
  {
    title: "Google Android",
    rule: "Ricardo R. Lecheta",
    description: "",
    date: ""
  },
  {
    title:
      "System Architecture for Web With Java Using Design Patterns and Frameworks",
    rule: "Evandro Carlos Teruel",
    description: "",
    date: ""
  },
  {
    title: "The Head Of Steve Jobs",
    rule: "Leander Kahney",
    description: "",
    date: ""
  },
  {
    title: "The Accidental Billionaires - The Founding of Facebook",
    rule: "Ben Mezrich",
    description: "",
    date: ""
  },
  {
    title: "The Art  of War",
    rule: "Sun Tsu",
    description: "",
    date: ""
  }
];

const TimeLineBuilder = props => {
  return (
    <Timeline mode="right" style={{ marginRight: "55%" }}>
      {props.items.map((item, key) => (
        <Timeline.Item
          key={key}
          dot={
            <Icon
              type={props.iconType}
              theme="filled"
              style={{ fontSize: "20px" }}
            />
          }
        >
          <h3>{item.title}</h3>
          {item.date}
          <div
            style={{
              width: "100%",
              float: "right",
              marginRight: "calc(-100% - 65px)",
              marginTop: -30,
              textAlign: "justify"
            }}
          >
            <h4>{item.rule}</h4>
            {item.description}
          </div>
          <div style={{ clear: "both" }} />
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { panel: "" };
  }

  handleClick = (id, e) => {
    this.setState({ panel: id });
    
  };

  render() {
    const { classes } = this.props;
    const scroll = el => {
      el.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    const customPanelStyle = {
      background: "#f7f7f7",
      borderRadius: 4,
      marginBottom: 24,
      border: 0,
      overflow: "hidden"
    };

    return (
      <div id="resume" className={classes.containerWrapper}>
        <div className={classes.flexContainer} style={{ position: "relative" }}>
          <div
            style={{
              right: 0,
              position: "absolute"
            }}
          >
            <Anchor style={{ paddingTop: 110 }}>
              <Anchor.Link
                href="#experience"
                title={
                  <Link
                    to="/#experience"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                    onClick={e => this.handleClick("1", e)}
                  >
                    Experience
                  </Link>
                }
              />
              <Anchor.Link
                href="#education"
                title={
                  <Link
                    to="/#education"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Education
                  </Link>
                }
              />
              <Anchor.Link
                href="#certifications"
                title={
                  <Link
                    to="/#certifications"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Certifications
                  </Link>
                }
              />
              <Anchor.Link
                href="#readings"
                title={
                  <Link
                    to="/#readings"
                    scroll={el => scroll(el)}
                    className="ant-anchor-link-title"
                  >
                    Readings
                  </Link>
                }
              />
            </Anchor>
          </div>

          <div className={classes.title}>
            <h2>RESUME</h2>
          </div>
          <div style={{ width: "90%", textAlign: "center", padding: 30 }}>
          <ScrollAnimation
              animateIn="bounceInUp"
              delay={300}
              offset={1000}
              animateOnce={true}
            >
            <img
              src={images.resume}
              alt="resume"
              style={{
                objectFit: "contain",
                opacity: 0.8
              }}
            />
            </ScrollAnimation>
          </div>
          <Collapse
            bordered={false}
            style={{ width: 1000 }}
            defaultActiveKey={[this.state.panel]}
          >
            <div id="experience" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel
              header="Experience"
              key={1}
              style={customPanelStyle}
            >
              <TimeLineBuilder
                {...this.props}
                items={experiences}
                iconType="calendar"
              />
            </Collapse.Panel>
            <div id="education" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel header="Education" key={2} style={customPanelStyle}>
              <TimeLineBuilder
                {...this.props}
                items={education}
                iconType="bank"
              />
            </Collapse.Panel>
            <div
              id="certifications"
              style={{ float: "left", marginTop: -93 }}
            />
            <Collapse.Panel
              header="Certifications"
              key={3}
              style={customPanelStyle}
            >
              <TimeLineBuilder
                {...this.props}
                items={certifications}
                iconType="safety-certificate"
              />
            </Collapse.Panel>
            <div id="readings" style={{ float: "left", marginTop: -93 }} />
            <Collapse.Panel header="Readings" key={4} style={customPanelStyle}>
              <TimeLineBuilder
                {...this.props}
                items={readings}
                iconType="read"
              />
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Resume);
