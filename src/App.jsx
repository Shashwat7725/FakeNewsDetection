import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import LoginForm from "./LoginForm.jsx";
import Navbar from "./Navbar.jsx";
import Detector from "./Detector.jsx";
import Newslist from "./Newslist.jsx";
import News from "./Newsdata.jsx";
import ReactMarkdown from "react-markdown";
import Newsdata from "./Newsdata.jsx";
function App() {
  const [logged, setLogged] = useState(false);
  const [news] = useState(News);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const getAnswers = async () => {
    setAnswer("Loading ...... \n It might take upto 5 seconds");
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCVkm8Y9NWuL1U6TO9DippPM_7G-uiMwvk",
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text:
                    question +
                    " answer REAL NEWS if the statement is correct else answer FAKE NEWS in english in 40-50 words,only reply based on news",
                },
              ],
            },
          ],
        },
      });

      setAnswer(
        response["data"]["candidates"][0]["content"]["parts"][0]["text"]
      );
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
  };

  useEffect(() => {
    setSelectedNewsId(Newsdata[0].id || 1);
  }, []);
  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    await getAnswers();
    setGeneratingAnswer(false);
  }

  return (
    <div>
      <Navbar />
      {logged ? (
        <div className="w-full h-screen flex flex-row">
          <Newslist
            news={news}
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
            generatingAnswer={generatingAnswer}
            setGeneratingAnswer={setGeneratingAnswer}
            generateAnswer={generateAnswer}
            setSelectedNewsId={setSelectedNewsId}
          />
          <Detector
            question={question}
            setQuestion={setQuestion}
            answer={answer}
            setAnswer={setAnswer}
            generatingAnswer={generatingAnswer}
            setGeneratingAnswer={setGeneratingAnswer}
            generateAnswer={generateAnswer}
            selectedNewsId={selectedNewsId}
          />
        </div>
      ) : (
        <LoginForm logged={logged} setLogged={setLogged} />
      )}
    </div>
  );
}

export default App;
