let card = document.getElementsByClassName("card");

const cards = [ 
  "./picture/pic1.png",
  "./picture/pic2.png",
  "./picture/pic3.png",
  "./picture/pic4.png",
  "./picture/pic5.png",
  "./picture/pic6.png",
  "./picture/pic7.png",
  "./picture/pic8.png",]


let cardArea = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let numOfAppear = [0, 0, 0, 0, 0, 0, 0, 0];
let clickedCards = [];
let moves = 0;
let matched = 0;

function drawPicIndex(){
  let min = 0;
  let max = 8;
  let x = cardArea.length;

  for(let i = 0; i<x; i++){
  let randomIndex = Math.floor(Math.random() * (max - min)) + min;
/*
  if(numOfAppear[randomIndex]!== 2 ){
    cardArea[i] = randomIndex;
    numOfAppear[randomIndex] = numOfAppear[randomIndex] + 1;
  }

  */
 while(numOfAppear[randomIndex]=== 2 ){
  randomIndex = Math.floor(Math.random() * (max - min)) + min;
}
  cardArea[i] = randomIndex;  
  numOfAppear[randomIndex] = numOfAppear[randomIndex] + 1;
}console.log(cardArea);
console.log(numOfAppear);
}
drawPicIndex();

function match(){

}


function showPic(index){  
  let id = cardArea[index]; 
  
  if(clickedCards.length==2){
    
    clickedCards.forEach(index =>{

      document.getElementById(index).src = "./picture/backcard.png"; 
          if(cards[cardArea[clickedCards[0]]]===cards[cardArea[clickedCards[1]]]){
        document.getElementById(index).src = "./picture/matched.png" 
        matched += 1;
        document.getElementById("matchedCounter").innerHTML = matched;
        if(matched===16){
          getElementById("end").style.display="inline";

        }
      }
      moves += 1;
      document.getElementById("movesCounter").innerHTML = moves;
    })
    clickedCards = [];
  }  
  document.getElementById(index).src = cards[id]; 

  clickedCards.push(index);
  
  
  
 }
