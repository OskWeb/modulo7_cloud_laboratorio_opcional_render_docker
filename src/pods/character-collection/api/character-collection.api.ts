import {
  CharacterEntityApi,
  CharactersCollectionData,
} from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];

const baseUrl = '/api';

export const getCharacterCollection =
  async (): Promise<CharactersCollectionData> => {
    const response = await fetch(`${baseUrl}/character`);
    if (response.ok) {
      const data = response.json();
      console.log(data);
      return await data;
    } else {
      throw Error(response.statusText);
    }
    // devolver coleccion de la API
    // return characterCollection;
  };

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // eliminar de la api
  // characterCollection = characterCollection.filter((h) => h.id !== id);
  return true;
};
