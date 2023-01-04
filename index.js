const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const date = today.toLocaleDateString();
document.getElementById('date').innerHTML=date;
   let name = new Array();
   let passport = new Array();
   let dob = new Array();
   let relation = new Array();
   let occupation = new Array();
   let status = new Array();
   let company = new Array();
   let designation = new Array();
   let school = new Array(); 
   let phoneno = new Array();
function update(id,partofid,index) 
{
  var get = document.getElementById(id).value;
  if(partofid=='n')
  {
    name[index]=get;
  }
  if(partofid=='pn')
  {
    passport[index]=get;
  }
  if(partofid=='dob')
  {
    dob[index]=get;
  }
  if(partofid=='rtm')
  {
    relation[index]=get;
  }
  if(partofid=='O')
  {
    occupation[index]=get;
  }
  if(partofid=='ms')
  {
    status[index]=get;
  }
  if(partofid=="cn")
  {
    company[index]=get;
  }
  if(partofid=="d")
  {
    designation[index]=get;
  }
  if(partofid=="sn")
  {
    school[index]=get;
  }
  if(partofid=="phone")
  {
    phoneno[index]=get;
  }
  let render = document.getElementById('render');
  if(occupation[index]=="Service"||occupation[index]=="Buisness")
  {
    render.innerHTML = `<th>Company's Name</th>
    <td><input type="text" id="cn${index}" onchange="update(id,'cn',${index})"></td>
    <br>
    <br>
    <th>Designation</th>
    <td><input type="text" id="d${index}" onchange="update(id,'d',${index})"></td>`;
    occupation[index]="";
  }
  if(occupation[index]=="Student")
  {
    render.innerHTML = `<th>School/College Name</th>
    <td><input type="text" id="sn${index}" onchange="update(id,'sn',${index})"></td>`;
    occupation[index]="";
  }
  if(occupation[index]=="Homemaker")
  {
     render.innerHTML=``;
  }
  let namespace = document.getElementsByClassName('name1');
  for(let i=0;i<namespace.length;i++)
    {
       namespace[i].innerHTML =  name[index];
    } 
    
 let passportspace = document.getElementsByClassName('passport1');
  for(let i=0;i<passportspace.length;i++)
    {
       passportspace[i].innerHTML =  passport[index];
    }
    document.getElementById('company1').innerHTML = company[index];
    document.getElementById('designation1').innerHTML = designation[index];  
    document.getElementById('dateofbirth0').innerHTML= dob[index];
    document.getElementById('relation0').innerHTML = relation[index];
    document.getElementById('phoneno0').innerHTML = phoneno[index];
}

