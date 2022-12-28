
var row = null;
var msg = document.getElementById("msg");

// Ad function
function Add() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style = "color: red;">Please enter data !</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: yellow;">Data Inserted !</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style = "color: orange;">Data Updated !</h3>`;
    }
  }

  document.getElementById("form").reset();
}

function retrieveData() {
  var emp = document.getElementById("Employee id").value;
  var fname = document.getElementById("first name").value;
  var lname = document.getElementById("last name").value;
  var mobno = document.getElementById("mobile no").value;

  var arr = [emp, fname, lname, mobno];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {

  var e = localStorage.setItem("Employee id", dataEntered[0]);
  var f = localStorage.setItem("first name", dataEntered[1]);
  var l = localStorage.setItem("last name", dataEntered[2]);
  var m = localStorage.setItem("mobile no", dataEntered[3]);
  var e1 = localStorage.getItem("Employee id", e);
  var f1 = localStorage.getItem("first name", f);
  var l1 = localStorage.getItem("last name", l);
  var m1 = localStorage.getItem("mobile no", m);


  var arr = [e1, f1, l1,m1];
  return arr;

}

function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  cell4.innerHTML = readData[3];
  cell5.innerHTML = `<button onclick="edit(this)"><a href="script.js:void(0)" style="text-decoration: none;">Edit</a></button> &nbsp
<button onclick="remove(this)"><a href="script.js:void(0)" style="text-decoration: none;">Delete</a></button>`;
}


function edit(td) {
  row = td.parentElement.parentElement;
  document.getElementById("Employee id").value = row.cells[0].innerHTML;
  document.getElementById("first name").value = row.cells[1].innerHTML;
  document.getElementById("last name").value = row.cells[2].innerHTML;
  document.getElementById("mobile no").value = row.cells[3].innerHTML;
}


function update(td) {
  row = td.parentElement.parentElement;
  row.cells[0].innerHTML = document.getElementById("Employee id").value;
  row.cells[1].innerHTML = document.getElementById("first name").value;
  row.cells[2].innerHTML = document.getElementById("last name").value;
  row.cells[3].innerHTML = document.getElementById("mobile no").value;
  row = null;
}


function remove(td) {
  var ans = confirm("Are you sure you want to delete the record?");
  if (ans == true) {
    var row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    msg.innerHTML = `<h3 style = "color: red;">Data Deleted !</h3>`;
  }
  
}


function addEmployee(){
    let payload={};
    payload['first name']=document.getElementById("first name").value;
    payload['last name']=document.getElementById("last name").value;
    payload['Employee id']=document.getElementById("Employee id").value;
    payload['mobile no']=document.getElementById("mobile no").value;

    fetch("https://trg.kooversapp.com/rest/employee/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(payload)
    })
    .then((res)=>res.json())
    .then((response)=>{
        document.getElementById("message").innerHTML=response.message;
        document.getElementById("first name").value="";
        document.getElementById("last name").value="";
        document.getElementById("Employee id").value="";
        document.getElementById("mobile no").value="";
        getData();
    })
    
}
function clearForm(){
addEmployee.onclick=function(){
    data.firstname=firstnameEle.value;
    data.lastname=lastnameEle.value;
    data.employeeid=employeeidEle.value;
    if(httpm="PUT"){
        data.id=id
    }
}
}
function getData(){
    fetch("https://trg.kooversapp.com/rest/employee/getEmployeeList/")
    .then((res)=>res.json())
    .then((response)=>{
        var data="";
        console.log(response);
        response.forEach((employee,_index)=>{
            data+="<tr>";
            data+="<td>"+employee.firstname+"</td>";
            data+="<td>"+employee.lastname+"</td>";
            data+="<td>"+employee.employeeid+"</td>";
            data+="<td>"+employee.mobileno+"</td>";
            data+="<td><button class='btn btn-primary' onclick='editDataCall(event)'>Edit</button></td>";
            data+="<td><button class='btn btn-danger''onclick='deleteemployee(event)'>Delete</button></td>";
            data+="</tr>";

        })
        document.getElementById("tbData").innerHTML=data;
    })
}
getData();


function editDataCall(e){
id=e.target.parentElement.parentElement.id;
}

function deleteemployee(e){
    id=e.target.parentElement.parentElement.id;
    fetch(url+"https://trg.kooversapp.com/rest/employee/getById/"<ID>
    +id,
    {method:'DELETE'})
    .then(
        ()=>{
    getData()
}
)
}




function clearForm(){

}
