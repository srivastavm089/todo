
// .options[1].innerText
// console.log(option)
let data = [];
let prev = [...data]
let admin=[]
let developer = []

function addUser(){
    
    const name = document.getElementById('name').value;
   const prof = document.getElementById('profession').value;
   const age = document.getElementById('age').value;
   const add = document.getElementById('section1');
   const child = document.createElement('div');
   child.className = 'list-container';
   child.id = 'list-d'
   const p1 = document.createElement('p')
  
   const p2 = document.createElement('p')
   const p3 = document.createElement('p')
   const p4 = document.createElement('p')
   data.push({Name:name,Profession:prof, Age:age})
   
   data.map((item,index)=>{
     p1.innerText = `${index+1}.`;
     p1.id = 'p1'
     p2.innerText = `Name:${item.Name}`;
     p2.id = 'p2'
     p3.innerText = `Profession:${item.Profession}`;
     p3.id = 'p3'
     p4.innerText = `Age:${item.Age}`
     p4.id='p4'
     child.appendChild(p1);
     child.appendChild(p2);
     child.appendChild(p3);
     child.appendChild(p4);
     add.appendChild(child);

   
   })
   
}




function Filter(event){
 
    const child = document.getElementById('list-d').style.display ='none';
   const name = document.getElementById('name').value;
   const prof = document.getElementById('profession').value;
   const age = document.getElementById('age').value;
   const add = document.getElementById('section1');
   const option = document.getElementById('drop-option')
   let value = option.options[option.selectedIndex].text;
   if(value==='Admin'){
    data.map((item,index)=>{
       
     const d1=  document.getElementById('p1').innerText = `${index}.`
     const d2=  document.getElementById('p2').innerText = `${item.Name}`
     const d3=  document.getElementById('p3').innerText = `${item.Profession}`
      const d4= document.getElementById('p4').innerText = `${item.Age}`
      child.style.display ='flex'
      child.appendChild(d1)
      child.appendChild(d2)
      child.appendChild(d3)
      child.appendChild(d4)
      
    }).filter((item)=>{
        return item.Profession!=='Developer'
    })
   }else if(value=='Developer'){
    data.map((item,index)=>{
       
        const d1=  document.getElementById('p1').innerText = `${index}.`
        const d2=  document.getElementById('p2').innerText = `${item.Name}`
        const d3=  document.getElementById('p3').innerText = `${item.Profession}`
         const d4= document.getElementById('p4').innerText = `${item.Age}`
         child.style.display ='flex'
         child.appendChild(d1)
         child.appendChild(d2)
         child.appendChild(d3)
         child.appendChild(d4)
         
       }).filter((item)=>{
           return item.Profession!=='Admin'
       })
   }else{
    return 
   }
  

   
   

   }