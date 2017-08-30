# Psychic-Game

## Overview
A classic guessing-game-style web app.

## Game Play
Users press any key to begin. They are then prompted to guess which letter has been randomly selected by the app. They are given 8 chances to guess before either scoring a win, or losing. 

## Code Overview
1. When game is started by the user, a function runs to select a random letter from our letters array.
1. Each keystroke is logged and then compared against our selected letter. 
  1. Our Guesses var goes down by one.
  1. If user guesses correctly, our Wins var is increased by one.
  1. If user guesses incorrectly:
    1. If guesses remain, allow for more keystrokes.
    1. If no guesses remain, increase our Losses var by one and reset the game.
