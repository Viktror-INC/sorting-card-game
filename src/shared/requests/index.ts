import axios from "axios";

export const getNewDeckData = async () =>
  await axios.get(
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );

export const getMyCardsData = async (deckId: string, count: string) =>
  await axios.get(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
  );

export const addToPiles = async (
  deckId: string,
  pileName: string,
  cards: string
) => {
  await axios.get(
    `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cards}`
  );
};

export const returnCards = async (deckId: string, pileName: string) => {
  try {
    await axios.get(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/return/`
    );
  } catch (error) {
    console.log(error);
  }
};

export const returnSpecialCards = async (
  deckId: string,
  pileName: string,
  cards: string
) => {
  try {
    await axios.get(
      `https://www.deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/return/?cards=${cards}`
    );
  } catch (error) {
    console.log(error);
  }
};



export const reshuffleCards = async(deckId: string,) => {
    await axios.get(`https://www.deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
}