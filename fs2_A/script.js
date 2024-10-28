const head =document.getElementById('head');

console.log(head);
head.style.color='red';
head.style.border='5px solid green';

const favcity=document.getElementsByClassName('favcity');

console.log(favcity);

for(let city of favcity){
    city.style.color='blue';
}

const container=document.querySelector('.container');

const para1 = document.createElement('p');

const para2 = document.createElement('p');

container.appendChild(para1);

container.appendChild(para2);

const btn =document.querySelector('#btn');

btn.addEventListener('click',()=>{

    console.log('clicked');
//////////////////////////////////////////////////////////////     for API calling      ///////////////////////////////////////////
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then((res)=>{
       // console.log(res);
        return res.json();
        
    })
    .then((data)=>{
        console.log(data);

        
        para1.innerText=data.setup;
        // console.log(para1);

        setTimeout(()=>{

            para2.innerText=data.punchline
        
        },5000)

        // para2.innerText=data.punchline;
        // console.log(para2);
    })

    .catch((error)=>{
        console.log(error);
    })
})
/////////////////////////////////////////////////////////////////////////////////////////





// promises in js
// let pr = new Promise((resolve,reject)=>{

// }) 