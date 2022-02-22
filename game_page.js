var p1 = localStorage.getItem("Player_1_Name");
var p2 = localStorage.getItem("Player_2_Name");

document.getElementById("p1_name").innerHTML = p1 +"-";
document.getElementById("P2_name").innerHTML = p2 +"-";

var p1_score = 0;
var p2_score = 0;

document.getElementById("Span_p1").innerHTML = p1_score;
document.getElementById("Span_p2").innerHTML = p2_score;
document.getElementById("player_question").innerHTML = "Question Turn " + p1;
document.getElementById("player_answer").innerHTML = "Answer Turn "+ p2;

function send(){
    var one = document.getElementById("equation").value; 
    var two = document.getElementById("equation2").value; 
    answer = parseInt(one)*parseInt(two);

    question = "<h4>"+one+"x"+two+"</h4>";
    answer_tag = "<br> Answer: <input type='text' id='input_check_box'>";
    button = "<br><br> <button class='btn btn-info' onclick='answer()'>Answer When Ready</button>";
    add = question + answer_tag + button;

    document.getElementById("answer_or_question").innerHTML = add;
    document.getElementById("equation").value="";
    document.getElementById("equation2").value="";
}

question_turn = "player_uno";
answer_turn = "player_doce";

function answer(){
  get_answer = document.getElementById("input_check_box").value;
   
    if (get_answer==answer)
    {
        if (answer_turn == "player_uno")
        {
            player1_score = player1_score+1;
            document.getElementById("Span_p1").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("Span_p2").innerHTML = player2_score;
        }

    }
    if (question_turn == "player_uno")
    {
        question_turn = "player_doce";
        document.getElementById("player_question").innerHTML = "The questioner is " + player_doce;

    }
    else
    {
        question_turn = "player_uno";
        document.getElementById("player_question").innerHTML = "The questioner is " + player_uno;
    } 
    if (answer_turn == "player_uno")
    {
        answer_turn = "player_doce";
        document.getElementById("player_answer").innerHTML = "The answerer is " + player_doce;
    }
    else 
    {
        answer_turn = "player_uno";
        document.getElementById("player_answer").innerHTML = "The answerer is " + player_uno;
    }
    document.getElementById("answer_or_question").innerHTML = "";
}

