import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Aside } from "../Aside";
import { Header } from "../Header";


export function Div({ objData, ButtonData, userData }) {
  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header">
      <Aside ButtonData={ButtonData} userData={userData}></Aside>
      <section>
        <Header></Header>
        <ul>
          <li>
            {objData.map((user, index) => {
              return (
                <div className="header__div" key={index}>
                  <div className="header__text">
                    <button className="nbtn">{user.number}</button>
                    <span>
                      <h3>{t("name")}</h3>
                      <p>{user.describe}</p>
                      <Link to={"/comments"}>
                        <button className="ubtn">{user.button}</button>
                      </Link>
                    </span>
                    <button className="ubtn" onClick={() => changeLanguage("en")}>Uz</button>
                    <button className="ubtn" onClick={() => changeLanguage("ru")}>Ru</button>
                  </div>
                  <div>
                    <button className="cbtn">{user.commentnum}</button>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      </section>
    </div>
  );
}
