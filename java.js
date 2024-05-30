document.addEventListener('DOMContentLoaded', (event) => {
    const colbox=document.getElementById('color-box');
    const btn=document.getElementById('change-color-btn');

    function getRandomColor(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color=`rgb(${red},${green},${blue})`;
        return color;
    }

    btn.addEventListener('click',()=>{
        const randomColor=getRandomColor();
        colbox.style.backgroundColor=randomColor;
    }
    );
})