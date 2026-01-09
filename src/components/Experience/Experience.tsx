import { Theme } from "../../@types/Theme";
import { useTheme } from "../../hooks/ThemeContext";
import * as C from "./index";
import { useTranslation } from "react-i18next";
import DATA_PREV_LOGO_URL from "../../assets/images/dataprev.jpg";
import NETQUANT_LOGO_URL from "../../assets/images/netquant.jpeg";
import VAREJONLINE_LOGO_URL from "../../assets/images/varejonline.jpeg";
import QINTESS_BB_LOGO_URL from "../../assets/images/qintess_bb.png";
import TIVIT_LOGO_URL from "../../assets/images/tivit_sicredi.png";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <C.Container
      id="experience"
      theme={theme == Theme.Light ? "light" : "dark"}
    >
      <h1>{t("experiencia")}</h1>
      <C.ExperienceContainer>
        <C.ExperienceDiv theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={DATA_PREV_LOGO_URL} alt="dataprev-logo" />
          <h3>{t("estagio")}</h3>
          <h4>DATAPREV</h4>
          <p>{t("respDataPrev")}</p>
        </C.ExperienceDiv>

        <C.ExperienceDiv theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={NETQUANT_LOGO_URL} alt="dataprev-logo" />
          <h3>{t("estagio")}</h3>
          <h4>Fi-Analytics</h4>
          <p>{t("respNetQuant")}</p>
        </C.ExperienceDiv>

        <C.ExperienceDiv theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={VAREJONLINE_LOGO_URL} alt="dataprev-logo" />
          <h3>Desenvolvedor Júnior</h3>
          <h4>Varejonline</h4>
          <p>{t("respVarejonline")}</p>
        </C.ExperienceDiv>

        <C.ExperienceDiv theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={QINTESS_BB_LOGO_URL} alt="qintess-logo" />
          <h3>Analista Desenvolvedor II</h3>
          <h4>Qintess • Banco do Brasil</h4>
          <p>{t("respQintessBb")}</p>
        </C.ExperienceDiv>

        <C.ExperienceDiv theme={theme == Theme.Light ? "light" : "dark"}>
          <img src={TIVIT_LOGO_URL} alt="tivit-logo" />
          <h3>Analista Desenvolvedor Pleno</h3>
          <h4>TIVIT • Banco Sicredi</h4>
          <p>{t("respTivit")}</p>
        </C.ExperienceDiv>
      </C.ExperienceContainer>
    </C.Container>
  );
};

export default Experience;
