import React, { useState, useEffect } from 'react';

import SFX from '../data';
import Header from './header/index.jsx';
import Button from './button/index.jsx';
import Answers from './answers/index.jsx';
import Description from './description/index.jsx';
import Question from './question/index.jsx';


function App() {
  const titles = SFX.map(e => e.name);

  const [activeCategory, setActiveCategory] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [activeAnswer, setActiveAnswer] = useState(null);
  const [answerDescription, setAnswerDescription] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    if (activeCategory < titles.length) {
      const random = Math.floor(Math.random() * (SFX[activeCategory].games.length - 1));
      setQuestion(SFX[activeCategory].games[random]);
      const arr = SFX[activeCategory].games.map((e, i) => ({
        id: e.id,
        name: e.name,
        year: e.year,
        description: e.description,
        image: e.image,
        audio: e.audio,
        pressed: false,
        right: i === random,
      }));
      arr.sort(() => Math.random() - 0.5);
      setAnswers(arr);
      console.log(activeCategory);
    }
  }, [activeCategory]);

  useEffect(() => {
    if (activeAnswer) {
      setAnswerDescription(answers.find(e => e.id === activeAnswer));
    }
    setAnswers((arr) => {
      const ans = arr.find(e => e.id === activeAnswer);
      if (ans) {
        ans.pressed = true;
      }
      return arr.map(e => e);
    });
  }, [activeAnswer]);

  return (
    <>
      <Header score="2" array={titles} activeCategory={activeCategory} />
      <Question question={question} />
      <Answers answers={answers} setActiveAnswer={setActiveAnswer} />
      <Description selectedAnswer={answerDescription} />
      <Button activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
    </>
  );
}

export default App;
