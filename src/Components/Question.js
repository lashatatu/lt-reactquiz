import { Options } from "./Options";

const Question = ({ question }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        options={question.options}
        prop1={(option) => (
          <button className={"btn btn-option"} key={option}>
            {option}
          </button>
        )}
      />
    </div>
  );
};

export default Question;
