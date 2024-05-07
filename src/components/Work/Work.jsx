import "./Work.css";
import Title from "../ui/Title";

const Work = ({ works }) => {
  return (
    <div className="hidden">
      <Title text={"Experience"}></Title>

      <div>
        <ul id="work-list">
          {works?.map((w) => {
            return (
              <li key={w.id} className="work-item hidden">
                <div>
                  <h4> {w.company}</h4>
                  <p>
                    <span style={{ fontSize: "12px" }}> {w.place}</span>
                  </p>
                  <p> {w.designation}</p>

                  {!w.isPresent ? (
                    <p>
                      {w.from}-{w.to}
                    </p>
                  ) : (
                    <p>{w.from} - Present</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Work;
