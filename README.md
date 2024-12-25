# Etch-a-Sketch

## Introduction

This project involves creating an interactive webpage where users can draw on a 16x16 grid of square divs using their mouse. The grid is dynamically generated using JavaScript, and its layout is controlled with Flexbox to ensure proper positioning. Users can also adjust the grid's size by entering a number for the grid's dimensions, and the new grid will replace the old one while maintaining the total area size.

## Features

- **Dynamic Grid Generation**: Create a grid of square divs dynamically using JavaScript, without manually adding them to the HTML.
- **Hover Effects**: When the mouse hovers over a grid square, it changes color, creating a pixelated drawing effect.
- **Grid Size Customization**: Users can modify the size of the grid by entering a new number (1-100) for the number of squares per side, and the grid is regenerated with the new size.
- **Responsive Layout**: The grid layout is managed using Flexbox, allowing for a responsive and flexible design that adjusts to different screen sizes.
- **Grid Size Limit**: A prompt limits the grid size to a maximum of 100x100 squares to prevent performance issues with very large grids.

## Skills Used / Demonstrated

- **HTML/CSS**: Structuring the webpage with proper HTML elements and styling the grid layout using Flexbox.
- **JavaScript**: Dynamically generating div elements using JavaScript and managing user input with prompt dialogs.
- **Event Handling**: Implementing mouse events (such as hover) to create interactive effects on the grid.
- **CSS Flexbox**: Creating a flexible, responsive layout for the grid without using CSS Grid, as per project requirements.
- **DOM Manipulation**: Adding and removing elements in the DOM based on user input and interactions.
- **User Input**: Using prompts to accept dynamic user input and adjusting the grid size based on the user's specifications.

## Possible Improvements

- **Enhanced User Interaction**: Implement a feature where hovering over a square gradually darkens its color with each interaction, rather than changing to a fixed color.
- **Responsive Design**: Make the webpage responsive so it works well on different screen sizes by using media queries.
- **Color Customization**: Allow users to select their preferred colors for the grid or implement a random color feature when hovering.
- **Grid Size Validation**: Improve input validation for the grid size input to ensure only valid numbers within the specified range are accepted.
- **Performance Optimization**: Add functionality to prevent excessive CPU usage when creating very large grids, ensuring the page remains responsive even with higher grid sizes.
