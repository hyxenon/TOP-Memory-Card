import { Card } from "./Card";
import { useState, useEffect } from "react";
import data from "../data";
import { Header } from "./Header";
import { Modal } from "./Modal";

export const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  const [playerPokemons, setPlayerPokemons] = useState([]);
  
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBetScore] = useState(0);


  const [loseModal, setLoseModal] = useState(false)
  const [winModal, setWinModal] = useState(false)

  useEffect(() => {
    const newCards = [...data];
    shuffleArray(newCards);
    setPokemons(newCards);
  }, [playerPokemons]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleClick = (name) => {
    setPlayerPokemons((oldPokemon) => [...oldPokemon, name]);

    const samePokemon = playerPokemons.every((pokemon) => pokemon !== name);
    


    if(samePokemon){
        setCurrentScore(oldCurrent => oldCurrent + 1)
        if(currentScore + 1 === 8){
            setWinModal(true)
        } 
    }else{
        setLoseModal(true)
        if(currentScore > bestScore){
            setBetScore(currentScore)
        }
        setCurrentScore(0)
        setPlayerPokemons([])
    }

    
  };

  const tryAgainClick = () => {
    setLoseModal(false)
    setWinModal(false)
    setCurrentScore(0)
  }

  return (
    <div>
    { loseModal  && <Modal tryAgain={tryAgainClick} info="You Lose! Try again?"/>}
    { winModal  && <Modal tryAgain={tryAgainClick} info="Perfect Score! You won. Try Again?"/>}

      <header>
        <Header current={currentScore} best={bestScore} />
      </header>

      <main className="h-[841px] bg-bgColor flex justify-center">
        <div className="pt-[61px] grid grid-cols-2 gap-x-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {pokemons.map((card) => (
            <Card
              key={card.id}
              onClick={handleClick}
              img={card.img}
              name={card.name}
            />
          ))}
        </div> 
      </main>
      
    </div>
  );
};
