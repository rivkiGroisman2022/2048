//(0) מערך משבצות שמכיל עבור כל משבצת האם היא מלאה (1) או לא
let squares = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//מערך תכולה שמכיל עבור כל משבצת את הערך העכשווי
let content = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//מערך השמות של המשבצות (הדיבים)
let names_squares = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"]
//מערך המספרים המוגרלים שתכיל המשבצת החדשה
let number_for_random = [4, 4, 8, 4, 4, 4]
//מערך הערכים האפשריים והצבעים שלהם
let colors_to_numbers = [" ", " white", "rgb(18, 223, 120)", "rgb(51, 236, 27)", "rgb(224, 221, 9)", "rgb(228, 128, 13)", "rgb(228, 13, 103)", "rgb(128, 165, 42)", "rgb(123, 32, 139)", "rgb(31, 18, 148)", "rgb(255, 6, 6)"]
//
let numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
//משתנה לולאה של הפונקציות הוזזה
let i
//משתנה לולאה  
let k
//משתנה ניקוד אינט
let score = document.getElementById("score_h1").innerHTML
//משתנה ניקוד סטרינג
let int_score = parseInt(score)


document.getElementById("name_js").innerHTML = localStorage.getItem('first_name')
add_number()
add_number()





//(פונקצית הוספת משבצת חדשה עם ערך רנדומלי (4 או 8
function add_number() {
  document.getElementById("sary_is_smart").play()
  let there_is_place = 0
  for (k = 0; k < squares.length - 1; k++) {
    if (squares[k] == 0) {
      there_is_place = 1
    }
  }
  if (there_is_place == 0) {
    game_over()
  }
  //משתנה שמכיל מספר רנדומלי של משבצת חדשה (בין 1 ל- 16)
  let new_squar
  //לולאת שדואגת לכך שהמשבצת שנבחרה לא מלאה כבר בערך
  do {
    new_squar = Math.floor(Math.random() * 16) + 1
  } while (squares[new_squar - 1] == 1);
  squares[new_squar - 1] = 1
  //number_for_random משתנה שמכיל את הערך של המשבצת החדשה שהוגרלה (4 או 8) מתוך מערך 
  let four_or_eight = Math.floor(Math.random() * 5)
  //משתנה שמכיל את הדיב של המשבצת החדשה
  let content_new = document.getElementById(names_squares[new_squar - 1])
  content_new.innerHTML = number_for_random[four_or_eight]
  content[new_squar - 1] = number_for_random[four_or_eight]
  change_color()
  
}

//פונקצית הוזזה שקולטת כשלחצן נלחץ ומפנה לפונקצית "איזה לחצן" המתאימה
function moove() {
  document.addEventListener("keypress", which_key())
}

//פונקצית "איזה לחצן" שבודקת איזה לחצן נלחץ ומפנה לפונקצית הכיוון הנכונה
function which_key() {
  if (event.keyCode == 37) {
    left()
  }
  if (event.keyCode == 38) {
    up()
  }
  if (event.keyCode == 39) {
    right()
  }
  if (event.keyCode == 40) {
    down()
  }
}

//פונקצית ימין
function right() {
  for (let j = 0; j < 3; j++) {
    for (i = 11; i >= 0; i--) {
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i + 4]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_right(this_squere)
      }

    }
  }
  for (i = 11; i >= 0; i--) {
    //משתנה שמכיל את ערך המשבצת הנוכחית
    let this_squere = document.getElementById(names_squares[i]).innerHTML
    //משתנה שמכיל את ערך המשבצת הבאה
    let next_squere = document.getElementById(names_squares[i + 4]).innerHTML
    if (next_squere === this_squere && next_squere !== " ") {
      the_same_right(this_squere, next_squere)
    }
  }
  for (let j = 0; j < 3; j++) {
    for (i = 11; i >= 0; i--) {
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i + 4]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_right(this_squere)
      }

    }
  }
  add_number()
  change_color()
}

//פונקצית ריק ימין שמטפלת במקרה שהמשבצת הסמוכה ריקה
function is_empty_right(this_squere1) {
  document.getElementById(names_squares[i + 4]).innerHTML = this_squere1
  squares[i + 4] = 1
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
}

//פונקצית זהים ימין שמטפלת במקרה שהמשבצת הסמוכה מכילה ערך זהה
function the_same_right(this_squere2, next_squere2) {
  document.getElementById(names_squares[i + 4]).innerHTML = this_squere2 * 2
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
  int_score = int_score + 10
  let string_score = " " + int_score
  document.getElementById("score_h1").innerHTML = string_score
  if (document.getElementById(names_squares[i + 4]).innerHTML == 2048) {
    win()
  }
}

//פונקצית שמאל
function left() {
  for (let j = 0; j < 3; j++) {
    for (i = 4; i < 16; i++) {
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i - 4]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_left(this_squere)
      }

    }
  }
  for (i = 4; i < 16; i++) {
    //משתנה שמכיל את ערך המשבצת הנוכחית
    let this_squere = document.getElementById(names_squares[i]).innerHTML
    //משתנה שמכיל את ערך המשבצת הבאה
    let next_squere = document.getElementById(names_squares[i - 4]).innerHTML
    if (next_squere === this_squere && next_squere !== " ") {
      the_same_left(this_squere, next_squere)
    }
  }
  for (let j = 0; j < 3; j++) {
    for (i = 4; i < 16; i++) {
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i - 4]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_left(this_squere)
      }

    }
  }
  add_number()
  change_color()
}

//פונקצית ריק שמאל שמטפלת במקרה שהמשבצת הסמוכה ריקה
function is_empty_left(this_squere1) {
  document.getElementById(names_squares[i - 4]).innerHTML = this_squere1
  squares[i - 4] = 1
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
}

//פונקצית זהים שמאל שמטפלת במקרה שהמשבצת הסמוכה מכילה ערך זהה
function the_same_left(this_squere2, next_squere2) {
  document.getElementById(names_squares[i - 4]).innerHTML = this_squere2 * 2
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
  int_score = int_score + 10
  let string_score = " " + int_score
  document.getElementById("score_h1").innerHTML = string_score
  if (document.getElementById(names_squares[i - 4]).innerHTML == 2048) {
    win()
  }
}

//פונקצית למעלה
function up() {
  for (let j = 0; j < 3; j++) {
    for (i = 0; i < 16; i++) {
      if (i == 0 || i == 4 || i == 8 || i == 12) {
        continue
      }
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i - 1]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_up(this_squere)
      }

    }
  }
  for (i = 0; i < 16; i++) {
    if (i == 0 || i == 4 || i == 8 || i == 12) {
      continue
    }
    //משתנה שמכיל את ערך המשבצת הנוכחית
    let this_squere = document.getElementById(names_squares[i]).innerHTML
    //משתנה שמכיל את ערך המשבצת הבאה
    let next_squere = document.getElementById(names_squares[i - 1]).innerHTML
    if (next_squere === this_squere && next_squere !== " ") {
      the_same_up(this_squere, next_squere)
    }
  }
  for (let j = 0; j < 3; j++) {
    for (i = 0; i < 16; i++) {
      if (i == 0 || i == 4 || i == 8 || i == 12) {
        continue
      }
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i - 1]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_up(this_squere)
      }

    }
  }
  add_number()
  change_color()
}

//פונקצית ריק למעלה למעלה שמטפלת במקרה שהמשבצת הסמוכה ריקה
function is_empty_up(this_squere1) {
  document.getElementById(names_squares[i - 1]).innerHTML = this_squere1
  squares[i - 1] = 1
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
}

//פונקצית זהים למעלה שמטפלת במקרה שהמשבצת הסמוכה מכילה ערך זהה
function the_same_up(this_squere2, next_squere2) {
  document.getElementById(names_squares[i - 1]).innerHTML = this_squere2 * 2

  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
  int_score = int_score + 10
  let string_score = " " + int_score
  document.getElementById("score_h1").innerHTML = string_score
  if (document.getElementById(names_squares[i - 1]).innerHTML == 2048) {
    win()
  }
}

//פונקצית למטה
function down() {
  for (let j = 0; j < 3; j++) {
    for (i = 0; i < 16; i++) {
      if (i == 3 || i == 7 || i == 11 || i == 15) {
        continue
      }
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i + 1]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_down(this_squere)
      }

    }
  }
  for (i = 15; i >= 0; i--) {
    if (i == 3 || i == 7 || i == 11 || i == 15) {
      continue
    }
    //משתנה שמכיל את ערך המשבצת הנוכחית
    let this_squere = document.getElementById(names_squares[i]).innerHTML
    //משתנה שמכיל את ערך המשבצת הבאה
    let next_squere = document.getElementById(names_squares[i + 1]).innerHTML
    if (next_squere === this_squere && next_squere !== " ") {
      the_same_down(this_squere, next_squere)
    }
  }
  for (let j = 0; j < 3; j++) {
    for (i = 0; i < 16; i++) {
      if (i == 3 || i == 7 || i == 11 || i == 15) {
        continue
      }
      //משתנה שמכיל את ערך המשבצת הנוכחית
      let this_squere = document.getElementById(names_squares[i]).innerHTML
      //משתנה שמכיל את ערך המשבצת הבאה
      let next_squere = document.getElementById(names_squares[i + 1]).innerHTML
      if (next_squere === " " && this_squere !== " ") {
        is_empty_down(this_squere)
      }

    }
  }
  add_number()
  change_color()
}

//פונקצית ריק למטה שמטפלת במקרה שהמשבצת הסמוכה ריקה
function is_empty_down(this_squere1) {
  document.getElementById(names_squares[i + 1]).innerHTML = this_squere1
  squares[i + 1] = 1
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
}

//פונקצית זהים למטה שמטפלת במקרה שהמשבצת הסמוכה מכילה ערך זהה
function the_same_down(this_squere2, next_squere2) {
  document.getElementById(names_squares[i + 1]).innerHTML = this_squere2 * 2
  document.getElementById(names_squares[i]).innerHTML = " "
  squares[i] = 0
  int_score = int_score + 10
  let string_score = " " + int_score
  document.getElementById("score_h1").innerHTML = string_score
  if (document.getElementById(names_squares[i + 1]).innerHTML == 2048) {
    win()
  }
}

//פונקציית גיים אובר
function game_over() {  
  alert("game over")
  window.open("lose.html")
  window.close("game_page")
}

//פונקצית ניצחון 
function win() {
  window.close("game_page")
  window.open("win.html")
}

//פונקצית שינוי צבע למספר
function change_color() {
  for (let a = 0; a < 16; a++) {
    for (let m = 1; m < numbers.length; m++) {
      if (numbers[m] == document.getElementById(names_squares[a]).innerHTML) {
        document.getElementById(names_squares[a]).style.setProperty("color", colors_to_numbers[m])
      }

    }
  }
}

//פונקציית שם של לוקל סטוריג
function namei() {
  let name = first_name.value
  localStorage.setItem('first_name', name)
  let w = localStorage.getItem('first_name')
  window.open("game_page.html")
  window.close("first.html") 
}

//פונקצית משחק חדש 
function new_game() {
  window.open("game_page.html")
  window.close("first.html") 
}
