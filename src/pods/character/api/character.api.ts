import { Character } from './character.api-model';

const baseUrl = '/api';

export const getCharacter = async (id: string): Promise<Character> => {
  //cambiar por API
  const response = await fetch(`${baseUrl}/character/${id}`);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await fetch(`${baseUrl}/character/${character.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
  }
  console.log(character.bestSentence);

  return true;
};
