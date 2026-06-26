// Suppose we're printing numbers from 1 to 10 using for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// Suppose we're printing tables of numbers from 1 to 10

for (let i = 1; i <= 2; i++) {
    console.log("-------------------------------");
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} X ${j} = ${i*j}`);
    }
}

/* You're managing the playlist for a friend's birthday party, and you've got a list of songs queued up. Before the party starts, you want a quick script that announces each song in order as it's about to play, along with its position in the queue.

Create an array of at least 5 song names (or song + artist pairs, your choice)
Use a for loop to go through the array from start to finish
On each iteration, print a message showing the song's position in the queue (like "Song 1: ...") along with the song name
After the loop finishes, print a final message saying the playlist has ended, along with the total number of songs that played */


const songArr = ['Dai Dai','Ole Ole',"It's time for Africa",'Haya Haya',"Hips don't lie"]

for(let i = 0; i < songArr.length; i++){
    console.log(`Song ${i+1}: ${songArr[i]}`);
}
console.log(`Playlist ended playing ${songArr.length} songs.`);

/* You're setting up seating for a wedding reception. There are several tables, and each table has a fixed number of seats. You want a script that prints out a seating label for every single seat at every table, so the venue staff can stick labels on each chair.

Create a variable for the number of tables (for example, 4)
Create a variable for the number of seats per table (for example, 6)
Use an outer for loop to go through each table
Inside it, use an inner for loop to go through each seat at that table
On each inner iteration, print a label like "Table 1 - Seat 1", "Table 1 - Seat 2", and so on
After each table's seats are fully labeled, print a short separator message before moving to the next table
Once both loops finish, print a final message showing the total number of seats labeled across the whole venue */


let noOfTables = 4
let noOfSeats = 6

for (let i = 1; i <= noOfTables; i++) {
    for (let j = 1 ; j <= noOfSeats; j++){
        console.log(`Table ${i} - Seat ${j}`);     
    }
    console.log('------------------------------');
}
console.log(`Total seats available ${noOfTables * noOfSeats}`);

/* You're checking attendance for a college lecture. You have a list of registered student names, and the moment you spot a particular student you're looking for, you don't need to keep checking the rest of the list — you can just stop right there and move on.

Create an array of at least 6 student names
Create a variable holding the name of the student you're looking for (make sure it's somewhere in the array)
Use a for loop to go through the array from start to finish
On each iteration, print the name of the student currently being checked
As soon as you find a match with the student you're looking for, print a message saying they've been found, along with their position in the list
Use the break keyword right after finding the match, so the loop stops checking the remaining students immediately
After the loop, print a message confirming attendance check is complete */

const studArr = ['John','Mike','Rose','Lucy','Mark','Sofia']
let classCrush = 'Rose'


for (let i = 0; i < studArr.length; i++) {
    console.log(studArr[i]);
    if(studArr[i].toLowerCase() === 'rose'){
        console.log(`Rose has been spot ${i+1} on the list.`);
        break
    }
}
console.log('Attendance Check complete');

/* You're going through a list of grocery items on your shopping app to print a packing slip, but a few items in the list are out of stock and marked as null. You don't want those showing up on the packing slip at all — you just want to skip over them and continue printing the rest.

Create an array of at least 7 items where a couple of the entries are null (representing out-of-stock items) and the rest are item names as strings
Use a for loop to go through the array from start to finish
Inside the loop, check if the current item is null — if it is, use the continue keyword to skip straight to the next iteration without printing anything
If the item isn't null, print a message showing its position in the list along with the item name, as if it's being added to the packing slip
After the loop finishes, print a final message saying the packing slip is ready, along with the total number of valid items that were printed (not counting the skipped ones) */



const itemArr = ['Shoes', null, 'Belt','Socks',null,'Shirts','Watch']
let counter = 0
for (let i = 0; i < itemArr.length; i++) {
    if(itemArr[i] === null){
        continue
    }
    console.log(`${itemArr[i]} is at ${i+1} position.`);
    counter+=1
}
console.log(`Packing Slip is ready along with ${counter} valid items`);


// for ...of()

const numArr = [56, 5, 96, 102, 89]

for (const i of numArr) {
console.log(i);    
}

let egStr = 'John'

for (const str of egStr){
    console.log(str);
}

const langObj = {
    js: 'javaScript',
    cpp: 'C ++',
    java:'java',
    rb:'ruby'
}
for(const key in langObj){
    console.log(`${key} shortcut is ${langObj[key]}`);
}

const langArr = ['javaScript','C ++','java','ruby']
for (const key in langArr) {
    console.log(langArr[key]);
}