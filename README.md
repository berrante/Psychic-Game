# Psychic-Game

## Overview
A classic guessing-game-style web app.

## Game Play
Users press any key to begin. They are then prompted to guess which letter has been randomly selected by the app. They are given 8 chances to guess before either scoring a win, or losing. 

## Code Overview
1. When game is started by the user, a function runs to select a random letter from our letters array.
2. Each keystroke is logged and then compared against our selected letter. 
  a. Our Guesses var goes down by one.
  b1. If user guesses correctly, our Wins var is increased by one.
  b2. If user guesses incorrectly:
    c1. If guesses remain, allow for more keystrokes.
    c2. If no guesses remain, increase our Losses var by one and reset the game.
