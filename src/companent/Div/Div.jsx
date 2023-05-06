import { Link, NavLink } from "react-router-dom";
import { Aside } from "../Aside";
import { Header } from "../Header";
import { Comments } from "../Comments";

export function Div({ objData, ButtonData, userData }) {
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
                      <h3>{user.name}</h3>
                      <p>{user.describe}</p>
                      <NavLink path="/Comments" element={<Comments/>}>
                        <button className="ubtn">{user.button}</button>
                      </NavLink>
                    </span>
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
