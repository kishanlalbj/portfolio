import { Work } from "../types";

const WorkCard = ({ company, from, to, isPresent, designation }: Work) => {
  return (
    <div className="p-4 border border-secondary hover:shadow-sm shadow-primary rounded-md">
      <div>
        <h4 className="text-lg font-bold">{company}</h4>
        <p>{designation} </p>
        <p>
          {from} - {isPresent ? "now" : to}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
