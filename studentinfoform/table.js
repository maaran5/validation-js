window.onload = this.table()
var stud = JSON.parse(localStorage.getItem("student"));
if(stud){
    document.getElementById("total").style.display="block"
}
function table()
{
    var stud = JSON.parse(localStorage.getItem("student"));
    var table = document.getElementById('table')
    let i = 0
    if(stud.length){
        for(let stu of stud)
        {
            i++;
            table.innerHTML+='<tr>'+'<td>'+i+'</td>'+'<td>'+stu.fname+'</td>'+'<td>'+stu.email+'</td>'+
            '<td>'+stu.number+'</td>'+'<td>'
            +'<button onclick="edit('+i+')" class="btn btn-primary mt-2 ml-2 mr-1">Edit</button><button onclick="del('+i+')" class="btn btn-danger mt-2 mr-3">Delete</button></td></tr>'
        }
    }
    else{
        document.getElementById("box").style.display="none";
        table.innerHTML='<tr>'+'<td colspan=5 class="text-center">'+'No-data-found</td></tr>'
    }
}
function edit(i)
{
i--;
window.location.href="index.html?id/"+i;

}
function del(i){
    var del=JSON.parse(localStorage.getItem("student"));
    del.splice((i-1),1);
    alert("are you to delete");
    localStorage.setItem("student",JSON.stringify(del));
    location.reload();
}
function btn(){
    window.location.href="index.html"
}

