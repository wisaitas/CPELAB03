var rand = Math.floor(Math.random()*100);
var In = document.getElementById('number');
var incorrect = document.querySelector('#incorrectanswer');
var correct  = document.querySelector('#correctanswer');
var send = document.getElementById('send');
var last;
var count = 0;

function getInput() {
    document.getElementById('incorrectanswer').style.display = "block";
    document.getElementById('number').focus();
    if(isNaN(In.value)){
        console.log("Input your number pls");
    }else{
        checkcondition(In.value);
        console.log("rand = " + rand);
    }
}

function checkcondition() {
    if(In.value != rand){
        last = incorrect.textContent;
        incorrect.textContent = last + " " + In.value;
        document.getElementById('correctanswer').style.background = "red";
        correct.textContent = "Wrong";
        count++;
        if(count >= 10){
            send.style.display = "none";
            document.getElementById('end').style.display = "block";
            document.getElementById('end').style.textAlign = "center";
            correct.textContent = "!!!!GameOver!!!!"
        }
        if(In.value > rand){
            document.getElementById('highlow').textContent = "Last guess was too high!";
        }else{
            document.getElementById('highlow').textContent = "Last guess was too low!";
        }
        console.log("incorrect");
        console.log(count);
    }else{
        document.getElementById('correctanswer').style.background = "green";
        correct.textContent = "Congratulations! You Win";
        send.style.display = "none";
        document.getElementById('end').style.display = "block";
        document.getElementById('end').style.textAlign = "center";
        document.getElementById('highlow').textContent = "";
    }
}

function repage(){
    location.reload();
}

