import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";
import projectExample from "../../assets/images/projects.jpeg";
import chatSW from "../../assets/images/chatsw.jpeg";
import inventGtw from "../../assets/images/inventory-gateway.jpg";
import dogaoHexa from "../../assets/images/dogao.jpg";
import orderMs from "../../assets/images/order.jpg";
import docStream from "../../assets/images/docs.jpg";
import gopportunitiesImg from "../../assets/images/gopportunities.jpg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <C.Container id="projects" theme={theme == Theme.Light ? "light" : "dark"}>
      <h1>{t("projetosMaior")}</h1>
      <p>
        {t("maisProjetos")}
        <a
          href="https://github.com/felipematheus1337?tab=repositories"
          target="_blank"
        >
          <img
            className="git-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
      </p>

      <C.ProjectContainer>
        {/* 1) Inventory Gateway */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={inventGtw} alt="Inventory Gateway" />
          <h3>Inventory Gateway</h3>
          <p>{t("inventoryGateway")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />
            <img
              alt="Spring"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
            />
            <img
              alt="Go"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            />
            <img
              alt="Redis"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg"
            />
            <img
              alt="Docker"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Inventory-Gateway"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 2) DocStream */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={docStream} alt="DocStream-CleanArch" />
          <h3>DocStream-CleanArch</h3>
          <p>{t("docStreamCleanArch")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Quarkus"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/quarkus/quarkus-original.svg"
            />
            <img
              alt="Kafka"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original-wordmark.svg"
            />
            <img
              alt="MongoDB"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            />
            <img
              alt="AWS"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/DocStream-CleanArch"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 3) Star Wars Chat */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={chatSW} alt="Star Wars Chat APP" />
          <h3>Star Wars Chat APP</h3>
          <p>{t("starwars")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Socket.IO"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
            />
            <img
              alt="Node.js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            />
            <img
              alt="JavaScript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              alt="Express"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Star-Wars-Chat-SocketIO-NodeJS"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 4) Movie Rate */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img
            src="https://github.com/felipematheus1337/movieRate_Spring_React/blob/master/frontend/.github/menu.png?raw=true"
            alt="Movie Rate"
          />
          <h3>Movie Rate</h3>
          <p>{t("movieRate")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="React"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
            <img
              alt="Java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />
            <img
              alt="Spring"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
            />
            <img
              alt="PostgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/movieRate_Spring_React"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 5) Order Microservices */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={orderMs} alt="Order Microsservices" />
          <h3>Order Microsservices</h3>
          <p>{t("orderMicroservices")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />
            <img
              alt="Spring"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
            />
            <img
              alt="Quarkus"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/quarkus/quarkus-original.svg"
            />
            <img
              alt="Go"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            />
            <img
              alt="PostgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
            <img
              alt="MongoDB"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Order_Microsservices"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 6) Customer API */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={projectExample} alt="Customer API" />
          <h3>Customer API</h3>
          <p>{t("employeeApi")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Node.js"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
            />
            <img
              alt="TypeScript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <img
              alt="PostgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Customer_API_TypeScript_Node"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        {/* 7) Dogão-HexaClean */}
        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={dogaoHexa} alt="Dogão-HexaClean" />
          <h3>Dogão-HexaClean</h3>
          <p>{t("dogaoHexaClean")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Java"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />
            <img
              alt="Spring"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
            />
            <img
              alt="Kafka"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original-wordmark.svg"
            />
            <img
              alt="Docker"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Dogao_HexaClean"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>

        <C.ProjectCard theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={gopportunitiesImg} alt="Gopportunities" />
          <h3>Gopportunities</h3>
          <p>{t("gopportunities")}</p>

          <h4>{t("tecnologias")}</h4>
          <p className="tec-icons">
            <img
              alt="Go"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg"
            />
            <img
              alt="SQLite"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"
            />
            <img
              alt="Docker"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            />
          </p>

          <a
            href="https://github.com/felipematheus1337/Gopportunities"
            target="_blank"
            rel="noreferrer noopener"
          >
            {t("repositorio")}
          </a>
        </C.ProjectCard>
      </C.ProjectContainer>
    </C.Container>
  );
};

export default Projects;
