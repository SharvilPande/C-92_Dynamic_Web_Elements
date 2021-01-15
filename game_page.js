
Player_1 = localStorage.getItem("player_1_name");
Player_2 = localStorage.getItem("player_2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = Player_1 + ":";
document.getElementById("player_2_name").innerHTML = Player_2 + ":";

document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + Player_1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + Player_2;

function send() {
     
    get_word =  document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    middle_letter = Math.floor(word.length/2);
    charAt2 = word.charAt(middle_letter);
    console.log(charAt2);

    last_letter = word.length - 1;
    charAt3 = word.charAt(last_letter);
    console.log(charAt3);

    remove_charAt1 = word.replace(charAt1 , "_");
    remove_charAt2 = remove_charAt1.replace(charAt2 , "_");
    remove_charAt3 = remove_charAt2.replace(charAt3 , "_");
    console.log(remove_charAt3);

    question = "<h4 id='q_letter'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<h4> Answer: </h4> <input class ='form-control' id ='input_box_check' type = 'text'> <br>";
    button = "<button id = 'button_check' class = 'btn btn-primary' onclick = 'check()' >Check</button>";
    row = question + input_box + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_box_check").value;
    answer = get_answer.toLowerCase();
    console.log("Answer given by either player - " + answer);

    if (answer == word) {
        
       if (answer_turn == "player1") {

        player_1_score = player_1_score + 1;
        document.getElementById("player_1_score").innerHTML=player_1_score;
           
       } else {

        player_2_score = player_2_score + 1;
        document.getElementById("player_2_score").innerHTML=player_2_score;

        }
    }

    if (question_turn == "player1") {

        question_turn = "player2";
        document.getElementById("player_question").innerHTML= "Question Turn - " + Player_2;
        
    } else {

        question_turn = "player1";
        document.getElementById("player_question").innerHTML= "Question Turn - " + Player_1;
        
    }

    if (answer_turn == "player2") {

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + Player_1;
        
    } else {

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML= "Answer Turn - " + Player_2;
        
    }

    document.getElementById("output").innerHTML = "";
}