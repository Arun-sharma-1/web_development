/*
// console.log(document.querySelector('.message').textContent);
// document.querySelector(".message").textContent='change message'

var a=document.querySelector('.message')
if(a) 
{
    a.textContent='change msg'
}
document.querySelector(".between").textcontent='change message'
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value);
console.log('arun hs')

var element = document.querySelector('.message')
if (element) {
    element.textContent = 'dice'
}
*/

let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

document.querySelector(".check").addEventListener("click", function () {
    const guess_value = Number(document.querySelector(".guess").value);
    console.log(guess_value);

    if (!guess_value) {
        document.querySelector(".message").textContent = "NO value ";
        document.querySelector('body').style.backgroundColor='red';
    }
    else if (guess_value === answer) {
        document.querySelector(".message").textContent = "Correct NO ";
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').style.width='30rem'
        document.querySelector(".number").textContent = answer;

        if(score > highscore)
        {
            highscore=score;
            document.querySelector('.highscore').textContent=highscore
        }

    }
    else if(guess_value !==answer)
    {
        if (score > 1) {
            document.querySelector(".message").textContent = guess_value > answer? "Too high ":  "Too low ";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lose the match ";
            document.querySelector(".score").textContent = 0;
        }
    }
    /*
    else if (guess_value > answer) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too high ";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "You lose the match ";
            document.querySelector(".score").textContent = 0;
        }
    } else if (guess_value < answer) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Too low ";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent = "You lose the match ";
            document.querySelector(".score").textContent = 0;
        }

    }*/
});

document.querySelector('.again').addEventListener('click',function()
{
    document.querySelector('body').style.backgroundColor='#222'
    document.querySelector('.number').style.width='15rem'
    document.querySelector('.message').textContent='Start guessing...'
    document.querySelector('.guess').value=''
    document.querySelector('.number').textContent='?'
    document.querySelector('.score').textContent=20
});


 