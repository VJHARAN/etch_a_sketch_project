
function createGrid(size=16){
    const squareSize=100/size;
     
    console.log(squareSize);
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
    if (gridSize>0 && gridSize<=100){
        removeGrid();
        createGrid(gridSize);
    }
    else{
        alert("Input a value between 1-100 !");
    }
})
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    clearGrid();
})


createGrid();


