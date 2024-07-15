 const p = document.querySelector('p');
    const h3 = document.querySelector('h3');
    const submit = document.querySelector('#submit')
    const clear= document.querySelector('#clear')
    const cheak= document.querySelector('.chk')
    const num = document.querySelector('#num');
    function generaterandom(){
        p.textContent = Math.floor(Math.random()*100)+1;
       submit.addEventListener('click',()=>{
      
      if(num.value == p.textContent){ 
         h3.style.display=`block`;

        h3.textContent="Congratulation you Guessed Right Number";
        p.textContent = Math.floor(Math.random()*100)+1;
      }
      else{
        h3.style.display=`block`;
h3.textContent="YOu Have Guessed Wrong Number";
      }
       })
       clear.addEventListener('click',()=>{
        h3.style.display=`none`;
        p.style.display=`none`;
       })
       cheak.addEventListener('click',()=>{
        p.style.display=`block`;
       })

}
generaterandom();