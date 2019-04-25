//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}
document.onreadystatechange{

}
window.onload{
  function(){
    console.log("Hi dfds");
  }
}
var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
function enable(){
  document.getElementById("button").disabled = false;
}

function addValue(){
  var table = document.getElementById("myTable");
  var row = document.createElement('tr'); //创建行
  var checkCell = document.createElement("td"); //创建第1列
  checkCell.innerHTML = '<input id="checkbox" type="checkbox" onclick="checkboxOnclick(this)"/><br/><br/><img src="down.png" width="25px" onclick="imgOnClick(this)"/>';  
  var stuCell = document.createElement('td'); //创建第2列student
  stuCell.innerHTML = "Student"; //填充数据
  var advCell = document.createElement('td');//创建第3列advisor
  advCell.innerHTML = "Teacher";
  var staCell = document.createElement('td');//创建第4列award status
  staCell.innerHTML = "Approved"; 
  var semCell = document.createElement('td');//创建第5列sememster
  semCell.innerHTML = "Fall";  
  var typCell = document.createElement('td');//创建第6列type
  typCell.innerHTML = "TA";  
  var budCell = document.createElement('td');//创建第7列budget
  budCell.innerHTML = "12345";  
  var perCell = document.createElement('td');//创建第8列percentage
  perCell.innerHTML = "100%";  
  row.appendChild(checkCell);
  row.appendChild(stuCell); //加入行，下面类似
  row.appendChild(advCell);
  row.appendChild(staCell);
  row.appendChild(semCell);
  row.appendChild(typCell);
  row.appendChild(budCell);
  row.appendChild(perCell);
  table.appendChild(row);
}

var count = 0;
function checkboxOnclick(checkbox){
  var r = checkbox.parentElement.parentElement; //tr  
  if ( checkbox.checked == true){
    // document.getElementById("button").disabled = false;
    // document.getElementById("button").style.backgroundColor="orange";
    r.style.backgroundColor="orange";
    var del = document.createElement("td");
    del.innerHTML='<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
    r.appendChild(del);
    // document.getElementById("delete").style.visibility="visible";  
    count++;
  }else{
    r.style.backgroundColor="#fff";
    r.deleteCell(8); //delete the button
    // document.getElementById("delete").style.visibility="hidden"; 
    count--;
  } 
  if(count>0){
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor="orange";
  }else{
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor="initial";
   } 
}

function deleteRow(obj){
  var tr=obj.parentNode.parentNode; 
	var tbody=tr.parentNode;
  tbody.removeChild(tr);
  count--;
  if(count == 0){
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor="initial";
  }
  
} 

function insertAfter(newEl, targetEl){
  var parentEl = targetEl.parentNode;
    if(parentEl.lastChild == targetEl){
      parentEl.appendChild(newEl);
    }else{
      parentEl.insertBefore(newEl,targetEl.nextSibling);
    }            
} 
var count = 0;
function imgOnClick(obj){
  if(count==0){
    var tr=obj.parentNode.parentNode; 
    var newrow = document.createElement('tr');
    var col = document.createElement('td');
    col.innerHTML = "Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number: <br/>Tuition Number: <br/>Comments:<br /><br/><br/>Award Status:<br/><br/><br/>";
    col.colSpan="8";
    newrow.appendChild(col);
    insertAfter(newrow,tr);
    count++;
  }else{
    var index=obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index+1);
    count = 0;
  } 
}


