export interface INewDeck {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
}

export interface IMyCards {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
  showed: boolean;
}
