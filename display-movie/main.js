
const form=document.querySelector('.form')
const container=document.querySelector('.container')
const input=document.querySelector('.input')
const movie="https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"

 const a=async ()=>{
const a=await fetch(movie);
const m=await a.json();
let as=m;


console.log(m);
as.map(e=>{
    console.log(e);
    
    const g=document.createElement('div');
    g.innerHTML=`${e.Title}`
     
    form.appendChild(g);
    
})



input.addEventListener('input',find)
function find (){
let s=m.filter(f=>{
const regex=new RegExp(`^${this.value}`,'gi')
 


 return f.Title.match(regex)



})


if(this.value.length===0) s=[];
console.log(s);
s.map(e=>{
    container.style.backgroundImage=`url(${e.Images})`
    container.style.backgroundSize="cover";

})

}
 }
 a()