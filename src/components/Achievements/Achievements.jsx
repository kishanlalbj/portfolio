import Title from "../ui/Title";
import "./Achievements.css";

const Achievements = ({ achievements }) => {
  return (
    <div className="hidden">
      <div style={{ textAlign: "right" }}>
        <Title text={"Achievements"}></Title>
      </div>
      <ul className="achievements-list">
        {achievements.map((a) => {
          return (
            <li key={a.id} className="hidden">
              <div>
                <h4>
                  {a.badge ? (
                    <a
                      href={a.badge}
                      className="achievements-link"
                      target="_blank"
                      title="View Credential"
                    >
                      {a.title}{" "}
                      <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        style={{ fontSize: "12px" }}
                      ></i>
                    </a>
                  ) : (
                    <>{a.title}</>
                  )}
                </h4>
                <p>{a.issuer}</p>
                <p>{a.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Achievements;
