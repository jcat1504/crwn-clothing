//example of local storage

const myObjectToStore = { name: 'jess' }

window.localStorage.setItem('myItem',
JSON.stringify(myObjectToStore));

//to access it
window.localStorage.getItem('myItem');


//to receive object back from a string
//first we gotta create a new var
const myRetrievedObject = window.localStorage.getItem('myitem');
JSON.parse(myRetrievedObject); //jess
//so in other words parse is changing string back to obj. of course stringify is STRING