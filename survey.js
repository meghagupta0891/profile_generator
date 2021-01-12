const readline = require('readline');
const questions = [
    'What\'s your name? Nicknames are also acceptable :)',
    'What\'s an activity you like doing?',
    'What do you listen to while doing that?',
    'Which meal is your favourite (eg: dinner, brunch, etc.)',
    'What\'s your favourite thing to eat for that meal?',
    'Which sport is your absolute favourite?',
    'What is your superpower? In a few words, tell us what you are amazing at!'
]

var answers = [];
var rl0,rl1,rl2,rl3,rl5,rl6;
function execQASession(i,rl){
     rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(questions[i], (answer) => {
        answers.push(answer);
        rl.close();
        if(i < questions.length-1) {
            i+= 1;
            execQASession(i,'rl'+i);
        }
        else {
            displayProfile();
        }
    });
}

function displayProfile() {
  console.log(answers[0]+' loves ' + answers[1] + 
  ' while listening to ' + answers[2] +
  ' devouring '+ answers[4] + ' for ' + answers[3] + 
  ' prefers ' + answers[5] + 
  ' over any other sport, and is amazing at ' + answers[6] + '.' );
}

execQASession(0,'rl0');