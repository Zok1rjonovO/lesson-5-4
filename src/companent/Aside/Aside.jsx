export function Aside({ ButtonData, userData }) {
  return (
    <aside>
      <div className="aside__header">
        <h3>Frontend Mentor</h3>
        <p>Feedback Board</p>
      </div>
      <div className="header__btns">
        {ButtonData.map((user, index) => {
          return <button key={index}>{user.name}</button>;
        })}
      </div>
      <div>
        <ul className="list">
          <div className="list__title">
            <h1>Roadmap</h1>
            <a href="/">View</a>
          </div>
          <li>
            {userData.map((user, index) => {
              return (
                <div className="list__text" key={index}>
                  <div className="circle"></div>
                  <p>{user.name}</p>
                  <p>{user.number}</p>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    </aside>
  );
}
