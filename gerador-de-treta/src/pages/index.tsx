import Image from 'next/image'
import Logo from '../assets/logo.svg'
import { useState, useEffect } from 'react';
import { getRandomWord } from '../utils/api';


export default function Home() {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');

  useEffect(() => {
    async function fetchRandomWords() {
      const word1 = await getRandomWord();
      const word2 = await getRandomWord();
      setFirstWord(word1);
      setSecondWord(word2);
    }

    fetchRandomWords();
  }, []);

  return (
    <div className="bg-gray-900 h-screen flex justify-around items-center">
      <div className="flex">
        <div>
          <Image src={Logo} alt="twitter logo" className="h-20" />
        </div>
        <div className="font-roboto text-lg text-white">
          Todos sabem que <h1>{firstWord}</h1> é totalmente incompatível com <h1>{secondWord}</h1>! Mas vocês não estão preparados pra isso.
        </div>
      </div>
    </div>
  );
}