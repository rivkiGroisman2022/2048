re_name()

function re_name() {
  document.getElementById("to_change").innerHTML = localStorage.getItem('first_name')
  document.getElementById("yuyu").play()
}

//פונקצית משחק חדש 
function new_game() {
  window.open("game_page.html")
  window.close("first.html") 
  
}