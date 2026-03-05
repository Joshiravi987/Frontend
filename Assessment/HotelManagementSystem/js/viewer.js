import { StorageUtil } from "./storageUtil.js";

class SubmissionViewer {

constructor(){

this.tableBody = document.getElementById("tableBody");
this.search = document.getElementById("search");

this.data = StorageUtil.getItem("guests");

this.render(this.data);

this.search.addEventListener("input", () => this.filter());

}

render(data){

this.tableBody.innerHTML = "";

if(data.length === 0){
this.tableBody.innerHTML =
"<tr><td colspan='4'>No data found</td></tr>";
return;
}

data.forEach((g,index) => {

this.tableBody.innerHTML += `
<tr>
<td>${g.name}</td>
<td>${g.phone}</td>
<td>${g.email}</td>
<td><button onclick="deleteRecord(${index})" class="btn btn-danger btn-sm">Delete</button></td>
</tr>
`;

});

}

filter(){

let text = this.search.value.toLowerCase();

let filtered = this.data.filter(g =>
g.name.toLowerCase().includes(text)
);

this.render(filtered);

}

}

function deleteRecord(index){

let data = JSON.parse(localStorage.getItem("guests")) || [];

data.splice(index,1);

localStorage.setItem("guests",JSON.stringify(data));

location.reload();

}

new SubmissionViewer();