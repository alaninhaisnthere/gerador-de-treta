import axios from 'axios';

export async function getRandomWords() {
  try {
    const response = await axios.get('https://api.dicionario-aberto.net/random');
    const words = response.data || [];
    return words.slice(0, 2);
  } catch (error) {
    console.error('Erro ao gerar palavras', error);
    return [];
  }
}
