import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./feedback.css";

export function Feedback({ ButtonData }) {
  axios
    .post("https://reqres.in/api/users", {
      name: "eshmat",
      job: "5ga1",
    })
    .then(function (respons) {
      console.log(respons);
    })
    .catch(function (error) {
      console.log(error);
    });

  const { t, i18n } = useTranslation();

  const changelanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className="link">
        <Link to={"/"}>go back</Link>
      </div>
      <div>
        <select name="" id="">
          <option onChange={() => changelanguage("en")} value="en">
            Uz
          </option>
          <option onChange={() => changelanguage("ru")} value="fr">
            Ru
          </option>
        </select>
      </div>
      <section>
        <div className="card">
          <div>
            <h1>{t("country")}</h1>
          </div>
          <div>
            <h3>{t("FeedbackTitle")}</h3>
            <p>Add a short, descriptive headline</p>
            <input name="inputname" type="text" />
          </div>
          <div>
            <h3>Category</h3>
            <p>Choose a category for your feedback</p>
            <select className="aslect">
              {ButtonData.map((user, index) => {
                return <option key={index}>{user.name}</option>;
              })}
            </select>
          </div>
          <div>
            <h3>Feedback Detail</h3>
            <p>
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <input name="inputtext" type="text" />
          </div>
          <div>
            <button className="sbtn" type="submit">
              Cancel
            </button>
            <button className="abtn" type="submit">
              Add Feedback
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
