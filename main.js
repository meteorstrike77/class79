var nameofstudents = [];
function submit() {
    var name1 = document.getElementById("nameofstudent1").value;
    var name2 = document.getElementById("nameofstudent2").value;
    var name3 = document.getElementById("nameofstudent3").value;
    var name4 = document.getElementById("nameofstudent4").value;

    nameofstudents.push(name1);
    nameofstudents.push(name2);
    nameofstudents.push(name3);
    nameofstudents.push(name4);

    console.log(nameofstudents);
    document.getElementById("display").innerHTML = nameofstudents;
    document.getElementById("buttonsubmit").style.display = "none";
    document.getElementById("buttonsort").style.display = "inline-block";
}
function sort() {
    nameofstudents.sort();
    console.log(nameofstudents);
    document.getElementById("display").innerHTML = nameofstudents;
}