

// const body = document.querySelector('body');
// const navbar = document.querySelector('nav');
// const works = document.querySelector('.works');

// const btn = document.createElement('button');
// btn.textContent = 'add work';
// navbar.appendChild(btn);

// function work(linkWork){
//     const srcWork = linkWork;
//     const work = document.createElement('img');
    
//     work.setAttribute('src', srcWork);
//     console.log(typeof work);
//     return work;
    
// }

// btn.addEventListener('click', () => 
// works.appendChild(work('image/sky.jpg')));





const desc = {
    '1':'31.10.2022',
    '2':'9.2023 Ветерок',
    '3':'Губы',
    '4':'Ветерок',
    '5':'На пляже',
    '6':'Тыквы',
    '7':'',
    '8':'Подсолнух'};


function viewPhoto(img, index){
    img = img.cloneNode()
    modal.style.display = "flex";
    modal.appendChild(img);
    description.textContent = desc[index-1]

    
    function closePhoto(img){
        modal.removeChild(img);
        modal.style.display = 'none';
        console.log('close');
    }
    if (modal.style.display !=='none'){
            console.log('open');
            console.log(img);
            img.removeEventListener('click',() => viewPhoto(currentValue));
            img.addEventListener('click', () =>closePhoto(img));
        }
}



const modal = document.querySelector('.modal');
const img = document.querySelectorAll('img');
const description = document.querySelector('.description');

img.forEach(function(currentValue, index){
    currentValue.addEventListener('click', () => viewPhoto(currentValue,index))
})



