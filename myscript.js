$(document).ready(function(){

    $('.proj1-p').hide();
    $('.proj-1').hover(function(){
        $(this).find('.proj1-p').toggle();
    });

$(".des").click(function(){
    $(".design").slideToggle()
    $(".pdes").slideToggle()
})

$(".des").click(function(){
    $(".design").slideToggle()
    $(".pdes").slideToggle()
})

$(".des").click(function(){
    $(".design").slideToggle()
    $(".pdes").slideToggle()
})

$('#send').click(function(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name == ""|| email ==""||message ==""){
        alert(`You cannot submit an empty field`);
    }
    else{
        alert("Thank you " +name+" for contacting us.")}
    })
    })