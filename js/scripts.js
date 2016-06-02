$(function(){
  $("#personal form").submit(function(event){
    event.preventDefault();
    var name = $("#full-name").val();
    var age = $("#age").val();
    var gender = $("#gender option:selected").val();
    var interest = parseInt($("#interest option:selected").val());
    var matchpic = "";
    var matchname = "";
    if(name){
      if(gender === "male" && interest === 1) {
        matchpic="img/bear.jpg"
        matchname="Bear Grylls"
      } else if (gender === "male" && interest === 2) {
        matchpic="img/tom.jpg"
        matchname="Tom Brady"
      } else if (gender === "male" && interest === 3) {
        matchpic="img/mattdamon.jpg"
        matchname="Matt Damon"
      } else if (gender === "male" && interest === 4) {
        matchpic="img/mark.jpg"
        matchname="Mark Zuckerberg"
      } else if (gender === "female" && interest === 1) {
        matchpic="img/avril.jpg"
        matchname="Avril Lavigne"
      } else if (gender === "female" && interest === 2) {
        matchpic="img/ronda.png"
        matchname="Ronda Rousey"
      } else if (gender === "female" && interest === 3) {
        matchpic="img/jennifer.jpg"
        matchname="Jennifer Lawrence"
      } else if (gender === "female" && interest === 4) {
        matchpic="img/marissa.jpg"
        matchname="Marissa Mayer"
      }
      $("#matchimg").attr("src", matchpic);
      $(".salutation").append(name);
      $("#matchtext").empty().append(matchname);

    } else {

    }


  })
})
