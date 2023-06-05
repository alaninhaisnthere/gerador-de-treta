export async function getRandomWord(): Promise<string> {
  const response = await fetch('https://api.dicionario-aberto.net/random');
  const data = await response.json();
  return data.word;
}
