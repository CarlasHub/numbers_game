let  chosen_count = 0;

let chosen = [];

//array holds all numbers 
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const container = document.getElementsByClassName('table')[0];

let  numbers = document.getElementsByClassName('number');

let restart = document.querySelector('#restart');

var interval;
// declaring move variable
let  moves = 100;
let counter = document.querySelector(".moves");

// declare variables for star icons
const stars = document.querySelectorAll(".fa-star");

// close icon in modal
let closeicon = document.querySelector(".close");

// declare modal
let modal = document.getElementById("popup1");

//reset time
    second = 0;
    minute = 0; 
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";


//shuffle the numbers everytime the pages refresh 
function startGame(o){
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  
	return o;

scores();
};


document.body.onload = startGame(values);

//check if array is ordered in the right sequence. Return the winner if true
const isArraySorted = (arr) => {
  for(let i = 1; i < arr.length; i++)
    if(arr[i-1] > arr[i])
      return false;
  
  return true;

};


//click and display


var scores = function (){
   // reset moves
    moves = 100;
    counter.innerHTML = moves;
    // reset rating
    for (var i= 0; i < stars.length; i++){
     stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
    }
  
    
};




const clearSelected = () =>{
  Array.from(numbers).forEach(num => {
    num.selected = false
    
    chosen = [];
    chosen_count = 0;
  })
};

//nodes 
values.forEach(num => {
  let newNode = document.createElement("div");
  newNode.classList.add('number');
  newNode.innerText = num;
  newNode.setAttribute('selected',false);
  newNode.style.background = '#c79615';
  container.appendChild(newNode);
});


function render(array){
  Array.from(numbers).forEach((x,i) => x.innerText = values[i])
};

//move numbers
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
     arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);  
   return arr;
};

Array.from(numbers).forEach(elem => {
    elem.addEventListener('click',() =>{
      elem.style.background = 'green';
      //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0; 
        hour = 0;
    }
      startTimer();
       moveCounter();
      if(chosen_count < 2){
        chosen_count = chosen_count + 1;
        console.log('clicked: ',chosen_count);
        chosen.push(parseInt(elem.innerText));
        elem.selected ? '' : elem.style.background = '#e41706';
        elem.selected ? '':  elem.classList.add("open");
      }
      if(chosen_count >= 2){
        const selected1 = values.indexOf(chosen[0]);
       values = move(values,values.indexOf(chosen[0]),values.indexOf(chosen[1]));
        const selected2 = values.indexOf(chosen[1]);
        values = move(values,selected2,selected1);
        render(values);
        console.log('numbers: ',values);
        clearSelected();
        return;
      }

      if(isArraySorted(values) === true) {
        var win = true;
        congratulations();
        console.log('win');
      }else{
        console.log('you aint got  this');
      }
      
         
      
    } );
});


// count player's moves
function moveCounter(){
    moves--;
    counter.innerHTML = moves;
    //start timer on first click
   if(moves == 100){
        second = 0;
        minute = 0; 
        hour = 0;
        startTimer();
    }
    // setting rates based on moves
    if (moves < 8 && moves > 12){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves < 20){
        for( i= 0; i < 3; i++){
            if(i > 20){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}



// game timer

function startTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}






// congratulations when all numbers ordered, show modal and moves, time and rating
function congratulations(){
        clearInterval(interval);
        finalTime = timer.innerHTML;
        // show congratulations modal
        modal.classList.add("show");
        // declare star rating variable
        var starRating = document.querySelector(".stars").innerHTML;
        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;
        //closeicon on modal
        closeModal();
    };


restart.addEventListener('click', function(){
    clearInterval(interval);
    modal.classList.remove("Modalshow");
    timer.innerHTML = "0 mins 0 secs";
    console.log(values);
    moves();
    });
    
    
    
// close icon on modal
function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
         startGame(values);
    });
}






