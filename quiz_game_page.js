function send() {
    number1 = document.getElementById("number1"), value;
    number2 = document.getElementById("number2"),value;
    actual_answer = parseInt (number1) * parseInt (number2) ;
    question_number = "<h4>" + number1 + "X" + number2 + "<h4>";
    input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
    check_button = "<br></br><button></button> class='btn btn-info' onclicke'check() 'check()</button>";
    question_number = "<h4>"+"X"+number2+"</h4>";
input_box = "<br>Answer : <input type-'text' id-'input check boxs'>";
check_button="<br><br><button class='btn btn-info' onclick check()'>Check</button>";
row = question_numberl + input_box + check_button;
document. getElementById("output"). innerHTML = row;
document. getElementById ("number1").value = "";
document. getElementById ("number2").value = "";
question_turn = "players";
answer_turn = "player2";
}
function check()
{
    get_answer = document. getElementById ("input _check_box"). value;
    if(get_answer == actual_answer)
        {
        if(answer_turn == "player1")
        {
        update_player1_score = player1_score +1;
        document.getElementById("playerl_score").innerHTML = update_player_score;
        }
        else
        {
        update_player2_score = player2_score +1;
        document. getElementById("player2_score"). innerHTML = update_player2_score;
        }
    }
}
if (question_turn == "player1")
{
question_turn = "player2"
document. getElementById("player_question"). innerHIML = "Question Turn - " + player2_name ;
}
else
{
question_turn = "player1"
document. getElementById("player_question"), innerHTML = "Question Turn - " + player_name ;
}