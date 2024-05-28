
async function getBoredAPI(){
    const textBox = document.querySelector('#user-input')

    var number = textBox.value;
    console.log(number)
    const boredURL = `https://www.boredapi.com/api/activity?participants=${number}`;
    const response = await fetch(boredURL);
    boredData = await response.json();

    unpackInfoFromBored(boredData);

    
}

function unpackInfoFromBored(activity){
    
    console.log(`An activity you can do is ${activity.activity}`)

   const activityBox =  document.querySelector(`#activity-text`);
   activityBox.textContent = activity.activity

}

function runProgram(){

    console.log('runProgram');
   
    const button = document.querySelector(`#submit-button`)
    button.addEventListener('click', getBoredAPI )
    //your code goes here
}
document.addEventListener('DOMContentLoaded', runProgram);