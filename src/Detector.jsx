import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Newsdata from "./Newsdata";

function Detector(props) {
  const getBorderColor = () => {
    const firstWord = props.answer.trim().split(' ')[0];
    if (firstWord.toUpperCase() === 'FAKE') 
      return 'red';
    else if(firstWord.toUpperCase() === 'REAL') 
      return '#00FF40';
  };
  const getNewsInfoFromId = (selectedNewsId) => {
    return Newsdata.find((item, index) => index === selectedNewsId).title;
  };
  const [inputValue, setInputValue] = useState(
    getNewsInfoFromId(props.selectedNewsId)
  );
  useEffect(() => {
    setInputValue(getNewsInfoFromId(props.selectedNewsId));
    props.setQuestion(getNewsInfoFromId(props.selectedNewsId));
  }, [props.selectedNewsId]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    props.setQuestion(e.target.value);
  };

  return (
    <div className="w-7/12 h-full">
      <div className="bg-white h-screen flex flex-col pt-20 items-center">
        <form
          onSubmit={props.generateAnswer}
          className="w-full h-2/5 md:w-2/3 text-center justify-center items-center"
        >
          <textarea
            required
            className="border rounded w-full my-2 min-h-fit p-3"
            value={inputValue}
            onChange={handleChange}
            placeholder="Ask wheather it is fake or not ?"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-300 p-3 rounded-md hover:bg-blue-400 transition-all duration-300"
            disabled={props.generatingAnswer}
          >
          Generate answer
          </button>
        </form>
        <div className="answer-box w-full md:w-2/3 m-auto text-center rounded my-1" style={{ borderColor: getBorderColor() }}>
          <ReactMarkdown className="p-3">{props.answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default Detector;
