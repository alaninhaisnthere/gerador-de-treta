import Image from 'next/image';
import Axios from 'axios';
import Logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';

export default function Home() {
  const [randomFirstWord, setrandomFirstWord] = useState('');
  const [randomSecondWord, setrandomSecondWord] = useState('');


  useEffect(() => {
    fetchFirstWord();
  }, []);

  const fetchFirstWord = async () => {
    try {
      const response = await
        Axios.get('http://localhost:3001/palavra');
      setrandomFirstWord(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSecondWord();
  }, []);

  const fetchSecondWord = async () => {
    try {
      const response = await
        Axios.get('http://localhost:3001/palavra');
      setrandomSecondWord(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="bg-gray-900 h-screen flex justify-around items-center">
      <div className="flex">
        {/* <div>
          <Image src={Logo} alt="twitter logo" className="h-20" />
        </div> */}
        <div className="font-roboto text-lg text-white">
          Todos sabem que
          <h1>{randomFirstWord}</h1>
          é totalmente incompatível com
          <h1>{randomSecondWord}</h1>
          Mas vocês não estão preparados pra isso.
        </div>
      </div>
    </div>
  );
}
