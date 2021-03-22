import React, { useState, useEffect } from 'react';

import useSound from 'use-sound';
import SFX from '../data';
import Header from './header/index.jsx';
import Button from './button/index.jsx';
import Answers from './answers/index.jsx';
import Description from './description/index.jsx';
import Question from './question/index.jsx';
import Result from './result/index.jsx';


function App() {
  const titles = SFX.map(e => e.name);

  const [playCorrect] = useSound('audio/smb_coin.wav');
  const [playError] = useSound('audio/smb_breakblock.wav');

  const [activeCategory, setActiveCategory] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [answerDescription, setAnswerDescription] = useState(null);
  const [question, setQuestion] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (activeCategory < titles.length) {
      setRightAnswer(false);
      const random = Math.floor(Math.random() * (SFX[activeCategory].games.length - 1));
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
      setQuestion(arr[random]);
      arr.sort(() => Math.random() - 0.5);
      setAnswers(arr);
    } else {
      setFinish(true);
    }
    setAnswerDescription(null);
  }, [activeCategory]);

  const answerClicked = (answer) => {
    setAnswerDescription(answer);
    if (!rightAnswer) {
      if (answer.right) {
        setRightAnswer(true);
        playCorrect();
        const myScore = answers.length - answers.filter(e => e.pressed && !e.right).length;
        if ((answers.filter(e => e.pressed && !e.right).length + 1) !== answers.length) {
          setScore(s => s + myScore);
        }
      } else {
        playError();
      }
      setAnswers((arr) => {
        const ans = arr.find(e => e.id === answer.id);
        if (ans) {
          ans.pressed = true;
        }
        return arr.map(e => e);
      });
    }
  };

  const oneMoreTime = () => {
    setScore(0);
    setActiveCategory(0);
    setFinish(false);
  };

  return (

    <>
      <Header score={score} array={titles} activeCategory={activeCategory} />
      { finish
        ? <Result score={score} oneMoreTime={oneMoreTime} />
        : (
          <main>
            <Question question={question} rightAnswer={rightAnswer} />
            <section>
              <Answers
                answers={answers}
                answerClicked={answerClicked}
              />
              <Description
                selectedAnswer={answerDescription}
              />
            </section>
            <Button
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              rightAnswer={rightAnswer}
              setRightAnswer={setRightAnswer}
            />
          </main>
        )}
    </>
  );
}

export default App;
