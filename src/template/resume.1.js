import React from "react";
import injectSheet from "react-jss";
import { Icon, Tag, Card } from "antd";
import { ParallaxLayer } from "react-spring/addons";

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
    marginRight: "50px",
    marginBottom: "30px"
  },
  content: {
    width: "100%",
    marginRight: "50px"
  }
};

const experiencesone = [
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

class Resume extends React.Component {
  state = { loading: true };

  render() {
    const { classes, offset, parallax } = this.props;

    let ctx = this;
    setTimeout(() => {
      ctx.setState({ loading: false });
    }, 3000);

    return (
      <React.Fragment>
        <ParallaxLayer
          offset={offset}
          speed={0}
          factor={2}
          style={{
            backgroundColor: "#ffffff"
          }}
        />

        <ParallaxLayer offset={offset} speed={0.5} factor={2}>
          <div className={classes.flexContainer}>
            <div className={classes.title}>
              <h2>RESUME</h2>
            </div>
            <div className={classes.flexBlock} style={{width: '100%'}}>
              <h3>Experience</h3>
              <br />
              {experiencesone.map((exp, key) => (
                <Card loading={this.state.loading} style={{ marginBottom: 30 }}>
                  <Card.Meta
                    avatar={
                      <Icon
                        type="code"
                        theme="filled"
                        style={{
                          color: "#108ee9",
                          fontSize: 20,
                          marginRight: 10
                        }}
                      />
                    }
                    title={
                      <div>
                        {exp.title}
                        <span style={{ color: "green", float: "right" }}>
                          {exp.date}
                        </span>
                      </div>
                    }
                    description={
                      <div>
                        <h4 style={{ color: "#108ee9" }}>{exp.rule}</h4>
                        {exp.description}
                      </div>
                    }
                  />
                </Card>
              ))}
            </div>
            {/* <div className={classes.flexBlock}>
                    <h3>Education</h3>
            </div> */}
          </div>
        </ParallaxLayer>
      </React.Fragment>
    );
  }
}

export default injectSheet(styles)(Resume);
