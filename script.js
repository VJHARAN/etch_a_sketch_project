
function createBlackGrid(size=16){
    const squareSize=100/size;
    for (let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
            let div=document.createElement('div');
            div.classList.add('square');
            div.style.width=`${squareSize}%`;
            div.style.height=`${squareSize}%`;
            container.appendChild(div);
        } 
    }

    const squareDivs=document.querySelectorAll('.square');
    squareDivs.forEach((divs)=>{
        divs.addEventListener('mouseover',()=>{
            divs.style.backgroundColor='#000';
            divs.style.border='3px solid #27cc06';
        })
    })
}


function createRGBGrid(size=16){
    const squareSize=100/size;
    for (let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
            let div=document.createElement('div');
            div.classList.add('square');
            div.style.width=`${squareSize}%`;
            div.style.height=`${squareSize}%`;

            container.appendChild(div);
        } 
    }
     const squareDivs=document.querySelectorAll('.square');
     squareDivs.forEach((divs)=>{
        divs.addEventListener('mouseover',()=>{
            divs.style.backgroundColor=`rgb(${rgbGrid()},${rgbGrid()},${rgbGrid()})`;
            divs.style.border='3px solid rgb(0, 0, 0)';
        })
    })
}


function rgbGrid(){
   let rgbVal=Math.floor(Math.random()*256);
   return rgbVal;
}


function removeGrid(){
    container.innerHTML='';
     
}

function clearGrid(){
    const squareDivs=document.querySelectorAll('.square');
    squareDivs.forEach((divs)=>{
        divs.style.backgroundColor='#FFF';
        divs.style.border='1px solid #000';
     })
}

const container=document.querySelector('.container');
const button=document.querySelector('button');
button.addEventListener('click',()=>{
    const gridSize= prompt('Set squares per side for Sketchpad (1-100)');
    if (gridSize>0 && gridSize<=100 && flag==0){
        removeGrid();
        createBlackGrid(gridSize);
    }
    else if(gridSize>0 && gridSize<=100 && flag==1){
        removeGrid();
        createRGBGrid(gridSize);

    }
    else{
        alert("Input a value between 1-100 !");
    }
})


const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    clearGrid();
})

const switchColor=document.querySelector('#rgb-button');
switchColor.textContent="RGB GRID";
switchColor.style.backgroundColor='#5805b0';
switchColor.style.color='#FFF';
switchColor.addEventListener('click',()=>{
    
    if (switchColor.getAttribute('class')=='rgb'){
        flag=1;
        switchColor.classList.toggle('rgb');
        switchColor.classList.toggle('mono');
        switchColor.textContent="BLACK GRID";
        switchColor.style.backgroundColor='#000';
        switchColor.style.color='#FFF';
        removeGrid();
        createRGBGrid();
    }
    else{
        flag=0;
        switchColor.textContent="RGB GRID";
        switchColor.classList.toggle('mono');
        switchColor.classList.toggle('rgb');
        switchColor.style.backgroundColor='#5805b0';
        switchColor.style.color='#FFF';
        removeGrid();
        createBlackGrid();   
    }
})

let flag=0;
createBlackGrid();


