"use strict"
// Suppose we're printing numbers from 1 to 10 using while loop
let num = 1
while (num <= 10) {
    console.log(num);
    num+=1   
}

// Suppose we're iterating over a array using while loop
let arr1 = ['Apple','Oranges','Banana','Jackfruit']
let itevar = 0
while (itevar < arr1.length){
    console.log(arr1[itevar]);
    itevar+=1
}

/* A football club's new signing has been given a fitness target by the coach. He needs to complete several training sessions before he's cleared to play in the next match, and the club wants a simple program to track his progress session by session.

Create a variable to track the number of sessions completed, starting at 0
Use a while loop that keeps running until he reaches 5 completed sessions
On each loop iteration, increase the session count by 1 and print a message showing which session number he just finished
Once the loop ends, print a final message saying he's fit and ready to play
*/

// let numOfSessions = 0
// while (numOfSessions <= 5) {
//     console.log(`Player has completed ${numOfSessions} / 5 training sessions.`);
//     numOfSessions+=1
// }
// console.log("--------------------------------------------");
// console.log("The player is fit to play");

/* You're building a quick squad-check tool for your FIFA World Cup 2026 Predictor project. You have a list of player names for one of the teams, and you want to search through it using a while loop to find out if a specific player is part of the squad — without using any array search methods like includes() or indexOf().

Create an array of at least 6 player names -['Alphonso Davis','Vini Jr','Haaland','Mbappe','Neymar','Messi','Ronaldo']
Create a variable to hold the name of the player you're searching for
Use a while loop with an index variable to go through the array one player at a time
Inside the loop, check if the current player matches the one you're searching for — if it matches, print that the player was found and stop checking further players
If the loop finishes without finding a match, print a message saying the player isn't in the squad
*/

const players = ['m. salah','vini jr','haaland','mbappe','neymar','messi','ronaldo']
let wanted = 'valverde'
let indexVar = 0
let isFound = false

while (indexVar < players.length){
    if (players[indexVar] === wanted) {
        console.log(`${players[indexVar]} was found !!`);
        isFound = true
    }
    indexVar+=1   
}
if(isFound == false){
    console.log('Player not available');
}