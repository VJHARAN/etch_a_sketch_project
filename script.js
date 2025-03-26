const container=document.querySelector('.container');

for (let i=1;i<=16;i++){
    for(let j=1;j<=16;j++){
        let div=document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
     
}

const squareDivs=document.querySelectorAll('.square');
console.log(squareDivs);
squareDivs.forEach((divs)=>{
    divs.addEventListener('mouseover',()=>{
        divs.style.backgroundColor='#000';
    })
})