
let data = [];



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
   const option = document.getElementById('drop-option');
   let value = option.value;
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
   
   const option = document.getElementById('drop-option')
   // let value = option.options[option.selectedIndex].text;
   const add = document.getElementById('section1');
   let value1=option.value;
   if(value1!=="Profession"){
   
   rend = document.getElementById('list-d')
   let res = data.filter((item)=>{
      return item.Profession === value1
   
})
let filt = res;
   filt.map((item,index)=>{
      add.innerHTML = '';
    let child = document.createElement('div');
    child.className = 'list-container';
    let p1=  document.createElement('p');
     let p2= document.createElement('p');
     let p3=  document.createElement('p');
     let p4= document.createElement('p');
     p1.innerText = `${index+1}.`
     p2.innerText = `${item.Name}`;
     p3.innerText = `${item.Profession}`;
     p4.innerText = `${item.Age}`;
     child.appendChild(p1);
     child.appendChild(p2);
     child.appendChild(p3);
     child.appendChild(p4);
     add.appendChild(child)

   })
}else{
   add.innerHTML = '';
   console.log(data)
  data.map((item,index)=>{
  
   let child = document.createElement('div');
   child.className = 'list-container';
   let p1=  document.createElement('p');
    let p2= document.createElement('p');
    let p3=  document.createElement('p');
    let p4= document.createElement('p');
    p1.innerText = `${index+1}.`
    p2.innerText = `${item.Name}`;
    p3.innerText = `${item.Profession}`;
    p4.innerText = `${item.Age}`;
    child.appendChild(p1);
    child.appendChild(p2);
    child.appendChild(p3);
    child.appendChild(p4);
    add.appendChild(child)
  })
}
}

