## Project Description

This project is a card game application built with Next.js, React, and Tailwind CSS. It allows users to play a sorting game with a deck of cards. The application has the following features:

- The application should display five cards with their back sides visible.
- The user should be able to click on each card.
- Clicking on a card should rotate it and reveal its front side.
- After five clicks (when all five cards are showing their front sides), the cards should be sorted in ascending order, with 'A' being the lowest and 'K' being the highest.
- A restart button should appear after the sorted cards are displayed.
- Clicking the restart button should start a new game with a new deck of cards.
- Comprehensive tests have been written using React Testing Library and Jest to ensure proper functionality.

## Technologies Used

The project is implemented using the following technologies:

- Next.js: A React framework for building server-rendered applications.
- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for quickly styling web applications.
- Material-UI: A popular React component library for building UI elements and components.
- React Testing Library: A testing library for testing React components and interactions.
- Jest: A JavaScript testing framework used in conjunction with React Testing Library for unit and integration testing.

## Implementation Details

The card game is built using React components and styled using Tailwind CSS classes. The game logic is implemented using JavaScript and React hooks within the Next.js framework. When a card is clicked, a function is called to flip the card and keep track of the number of flipped cards. Once all five cards are flipped, another function is triggered to sort the cards in ascending order. After sorting, the restart button becomes visible, allowing users to start a new game.

## Testing

Comprehensive tests have been implemented using React Testing Library and Jest. These tests cover scenarios such as:

- Rendering the card components and ensuring they are initially displayed with their back sides visible.
- Simulating user clicks on the cards and verifying that they are flipped to reveal the front side.
- Checking that the cards are sorted correctly after five flips.
- Testing the restart functionality to ensure it starts a new game with a new deck of cards.

These tests are executed using Jest and React Testing Library to ensure that the application functions as expected.