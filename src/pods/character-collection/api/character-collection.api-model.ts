export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
  bestSentence: string;
}

interface Origin {
  name: string;
  url: string;
}
interface Location {
  name: string;
  url: string;
}
export interface CharactersCollectionData {
  info: {
    count: number;
    page: number;
    next: string;
    prev: string;
  };
  results: CharacterEntityApi[];
}
