

let values = [];

let i = 0;
let j = 0;
let w = 2;

let pivots = [];

function setup() {
  createCanvas(windowWidth-50, windowHeight-50);
  values = new Array(width/ w);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
 quickSort(values,0,values.length -1);
}

async function quickSort(arr, start, end) {
  if( start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  await quickSort(arr, start, index -1);
  await quickSort(arr, index+1, end);
  
  pivots.splice(pivots.indexOf(index),1);
}

async function partition(arr,start, end){
  let pivotIndex = start;
  pivots.push(pivotIndex);

  let pivotValue = arr[end];
  for(let i= start; i< end; i++){
    if(arr[i] < pivotValue){
      await swap(arr, i, pivotIndex);
      pivots.splice(pivots.indexOf(pivotIndex),1);
      pivotIndex++;
      pivots.push(pivotIndex);
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
    stroke(0);
    fill(255);

    if(pivots.indexOf(i) > -1 ){
      fill(255,0,0);
    }

    rect( i * w, height - values[i], w, values[i]);
  }
}

async function swap(arr, a, b) {
  await sleep(5);

  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve,ms));
}