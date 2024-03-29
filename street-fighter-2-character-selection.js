// ** Short Intro**

// Some of you might remember spending afternoons playing Street Fighter 2 in some Arcade back in the 90s or emulating it nowadays with the numerous emulators for retro consoles.

// Can you solve this kata? Suuure-You-Can!

// UPDATE: a new kata's harder version is available here.

// ** The Kata **

// You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

// ![alt text][screen] [screen]: https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fightersgeneration.com%2Fnp5%2Fgm%2Fsf2ce-s2.jpg&f=1 "Character Selection Screen for Street Fighter 2"

// Selection Grid Layout in text:

// | Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
// | Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
// ** Input **

// the list of game characters in a 2x6 grid;
// the initial position of the selection cursor (top-left is (0,0));
// a list of moves of the selection cursor (which are up, down, left, right);
// ** Output **

// the list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not, see tests);
// ** Rules **

// Selection cursor is circular horizontally but not vertically!

// As you might remember from the game, the selection cursor rotates horizontally but not vertically; that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost (examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

// Instead, if I try to go further up from the upmost or further down from the downmost, I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image; you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

// ** Test **

// For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

// ** Notice **: changing some of the input data might not help you.

// ** Examples **

// 1.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['up', 'left', 'right', 'left', 'left']
// then I should get:

// ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
// as the characters I've been hovering with the selection cursor during my moves. Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

// 2.

// fighters = [
//     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
//     ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
// ]
// initial_position = (0,0)
// moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
// Result:

// ['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']

function withinBounds(arr1, arr2) {
  if (arr1[0] > arr2[0].length - 1) {
    arr1[0] = 0;
  }
  if (arr1[0] < 0) {
    arr1[0] = arr2[0].length - 1;
  }
  if (arr1[1] < 0) {
    arr1[1] = 0;
  }
  if (arr1[1] > 1) {
    arr1[1] = 1;
  }
}

function movement(coordinate, actions, selections, options) {
  actions.forEach(move => {
    switch (move) {
      case "up":
        coordinate[1] = coordinate[1] - 1;
        withinBounds(coordinate, options);
        selections.push(options[coordinate[1]][coordinate[0]]);
        break;
      case "down":
        coordinate[1] = coordinate[1] + 1;
        withinBounds(coordinate, options);
        selections.push(options[coordinate[1]][coordinate[0]]);
        break;
      case "left":
        coordinate[0] = coordinate[0] - 1;
        withinBounds(coordinate, options);
        selections.push(options[coordinate[1]][coordinate[0]]);
        break;
      case "right":
        coordinate[0] = coordinate[0] + 1;
        withinBounds(coordinate, options);
        selections.push(options[coordinate[1]][coordinate[0]]);
        break;
    }
  });
}

function streetFighterSelection(fighters, position, moves) {
  let scrolledFighters = [];
  movement(position, moves, scrolledFighters, fighters);
  return scrolledFighters;
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ["up", "left", "right", "left", "left"];

// function streetFighterSelection2(fighters, position, moves) {
//   let row = position[0];
//   let column = position[1];

//   moves.forEach(move => {
//     switch (move) {
//       case "up":
//         row = 0;
//         break;
//       case "down":
//         row = 1;
//         break;
//       case "left":
//         if (column === 0) {
//           column = fighters[0].length - 1;
//         } else {
//           column -= 1;
//         }
//         break;
//       case "right":
//         if (column === fighters[row].length - 1) {
//           column = 0;
//         } else {
//           column += 1;
//         }
//         break;
//     }
//   });
// }
