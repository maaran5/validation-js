var url = window.location.href;
var spliturl = url.split("?");
var id = spliturl[1].split('/');
console.log(id);
if (id) {
 edit(id[1]);
}
function next() {
 var error = false;
 var fname = document.getElementById("name");
 if (fname.value == "") {
  document.getElementById("na").innerHTML = " * name required *";
  var error = true;
 }
 else {
  document.getElementById("na").innerHTML = "";
 }
 var gender;
 var radio1 = document.getElementById("male");
 var radio2 = document.getElementById("female");
 var radio3 = document.getElementById("others");
 if (radio1.checked || radio2.checked || radio3.checked) {
  if (radio1.checked) {
   gender = radio1.value;
  }
  if (radio2.checked) {
   gender = radio2.value;
  }
  if (radio3.checked) {
   gender = radio3.value;
  }
  document.getElementById("radio").innerHTML = "";
 }
 else {
  document.getElementById("radio").innerHTML = "* gender required *";
  var error = true;
 }
 var mail = document.getElementById("email");
 var email = /^([A-Za-z0-9_.])+\@([a-z])+\.([a-z]{3})+$/;
 if (mail.value.match(email)) {
  document.getElementById("em").innerHTML = "";
 }
 else {
  if (mail.value == "") {
   document.getElementById("em").innerHTML = "* email required *";
   var error = true;
  }
  else {
   document.getElementById("em").innerHTML = "* correct email format @gmail.com *";
   var error = true;
  }
 }
 var num1 = document.getElementById("number");
 var number = /^([0-9]{10})+$/;
 if (num1.value.match(number)) {
  document.getElementById("num").innerHTML = "";
 }
 else {
  if (num1.value == "") {
   document.getElementById("num").innerHTML = "* number required *";
   var error = true;
  }
  else {
   document.getElementById("num").innerHTML = "* 10 number only *"
   var error = true;
  }
 }
 var dates = document.getElementById("date");
 if (dates.value == "") {
  document.getElementById("day").innerHTML = "* date of birth required *";
  var error = true;
 }
 else {
  document.getElementById("day").innerHTML = "";
 }
 var option = document.getElementById("nation");
 if (option.value == "") {
  document.getElementById("sel").innerHTML = "* nationality required *";
  var error = true;
 }
 else {
  document.getElementById("sel").innerHTML = "";
 }
 var degre = document.getElementById("degree");
 if (degre.value == "") {
  document.getElementById("degrees").innerHTML = "* degree required *";
  var error = true;
 }
 else {
  document.getElementById("degrees").innerHTML = "";
 }
 var years = document.getElementById("years");
 if (years.value == "") {
  document.getElementById("pastout").innerHTML = "* years required *";
  var error = true;
 }
 else {
  document.getElementById("pastout").innerHTML = "";
 }
 var semester = document.getElementById("semaster");
 if (semester.value == "") {
  document.getElementById("sem").innerHTML = "* semester required *";
  var error = true;
 }
 else {
  document.getElementById("sem").innerHTML = "";
 }
 var coruse = document.getElementById("coruses");
 if (coruse.value == "") {
  document.getElementById("year").innerHTML = "* semester years required *";
  var error = true;
 }
 else {
  document.getElementById("year").innerHTML = "";
 }
 var places = document.getElementById("place");
 if (places.value == "") {
  document.getElementById("location").innerHTML = "* branch required *";
  var error = true;
 }
 else {
  document.getElementById("location").innerHTML = "";
 }
 var language = document.getElementById("languages");
 if (language.value == "") {
  document.getElementById("lang").innerHTML = "* language required *";
  var error = true;
 }
 else {
  document.getElementById("lang").innerHTML = "";
 }
 var name3 = document.getElementById("father");
 if (name3.value == "") {
  document.getElementById("dname").innerHTML = "* father name required *";
  var error = true;
 }
 else {
  document.getElementById("dname").innerHTML = "";
 }
 var name2 = document.getElementById("mother");
 if (name2.value == "") {
  document.getElementById("mname").innerHTML = "* mother name required *";
  var error = true;
 }
 else {
  document.getElementById("mname").innerHTML = "";
 }
 var work = document.getElementById("occupation");
 if (work.value == "") {
  document.getElementById("occup").innerHTML = "* occupation required *";
  var error = true;
 }
 else {
  document.getElementById("occup").innerHTML = "";
 }
 var income1 = document.getElementById("income");
 if (income1.value == "") {
  document.getElementById("fincome").innerHTML = "* income required *";
  var error = true;
 }
 else {
  document.getElementById("fincome").innerHTML = "";
 }
 var num = document.getElementById("contact");
 var number1 = /^([0-9]{10})+$/;
 if (num.value.match(number1)) {
  document.getElementById("num2").innerHTML = "";
 }
 else {
  if (num.value == "") {
   document.getElementById("num2").innerHTML = "* number required *";
   var error = true;
  }
  else {
   document.getElementById("num2").innerHTML = "* 10 number only *"
   var error = true;
  }
 }
 var studobj = {
  fname: fname.value,
  gender: gender,
  email: mail.value,
  number: num1.value,
  date: dates.value,
  nation: option.value,
  degree: degre.value,
  year: years.value,
  semesters: semester.value,
  semyear: coruse.value,
  branch: places.value,
  lang: language.value,
  fathername: name3.value,
  mothername: name2.value,
  occupation: work.value,
  income: income1.value,
  phone: num.value
 }

 if(error){
  return;
 }
 else{
  var local = JSON.parse(localStorage.getItem('student'))
  if (local) {
   local.push(studobj);
   localStorage.setItem('student', JSON.stringify(local))
  }
  else {
   let arr = []
   arr.push(studobj)
   localStorage.setItem("student", JSON.stringify(arr));
  }
 }
 
 console.log(studobj);
 if (error) {
  return;
 }
 else {
  window.location.href = "index1.html";
 }
}
function edit(id) {
 var getid = JSON.parse(localStorage.getItem("student"));
 var edit = getid[id];
 console.log(edit);
 document.getElementById("name").value = edit.fname;

 //---------------gender-----------------------------

 if(edit.gender=='male')
 {
  document.getElementById("male").checked = true
 }
 if(edit.gender=='female')
 {
  document.getElementById("female").checked = true
 }
 if(edit.gender=='others')
 {
  document.getElementById("others").checked = true
 }
 //------------------------------------------------------
 document.getElementById("email").value = edit.email;
 document.getElementById("number").value = edit.number;
 document.getElementById("date").value = edit.date;
 document.getElementById("nation").value = edit.nation;
 document.getElementById("degree").value = edit.degree;
 document.getElementById("years").value = edit.year;
 document.getElementById("semaster").value = edit.semesters;
 document.getElementById("coruses").value = edit.semyear;
 document.getElementById("place").value = edit.branch;
 document.getElementById("languages").value = edit.lang;
 document.getElementById("father").value = edit.fathername;
 document.getElementById("mother").value = edit.mothername;
 document.getElementById("occupation").value = edit.occupation;
 document.getElementById("income").value = edit.income;
 document.getElementById("contact").value = edit.phone;

 var edit=JSON.parse(localStorage.getItem("student"));
 edit.splice(id,1);
 localStorage.setItem("student",JSON.stringify(edit));
}


