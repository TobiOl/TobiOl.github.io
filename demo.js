function SayHello(){
    window.alert("hello world");
    //changes the header from what it currently is to Good morning
    document.getElementById("greeting").innerHTML = "Good morning";
    console.log("one more time")
}
function ChangeStyle(obj, oldStyle, newStyle){
    obj.classList.remove(oldStyle)
    obj.classList.add(newStyle)
}

function ChangeImage(){
document.getElementById("profilePic").src = "images/ahaha.png"
}
function RevertImage(){
    document.getElementById("profilePic").src = "https://images.idgesg.net/images/article/2019/05/team_manipulates_coding_elements_programming_interface_development_developers_teamwork_by_dean_mitchell_gettyimages-1055056786_2400x1600-100795794-large.jpg?auto=webp&quality=85,70"
}