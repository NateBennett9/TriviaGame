$('#start').on('click',function() {
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "Fill in the blank: “ ____ STARTED THE FIRE!”",
    answers: ["Kevin", "Ryan", "Michael", "Andy"],
    correctAnswer: "Ryan"
},
{
    question: "Which character attended high school with Michael?",
    answers: ["Todd Packer", "Phyllis", "Kevin", "Dwight"],
    correctAnswer: "Phyllis"
},
{
    question: "What is Andy's nickname for Jim?",
    answers: ["Jimbo", "Fat Halpert", "Jimothy", "Big Tuna"],
    correctAnswer: "Big Tuna"
},
{
    question: "What does Pam name Box of paper snowshoe racing?",
    answers: ["Flonkerton", "Icelandic Snowshoe Racing", "Bixing", "Pegerhosen"],
    correctAnswer: "Flonkerton"
},
{
    question: "Where do Jan and Michael take Christian, the Lackawanna County rep?",
    answers: ["Applebee's", "Olive Garden", "Poor Richard's", "Chili's"],
    correctAnswer: "Chili's"
},
{
    question: "What is Michael's injury?",
    answers: ["He gets his head stuck in a stair railing", "He crashes his car into a telephone pole", "He's run over by a co-worker", "He burns his foot on a George Foreman Grill"],
    correctAnswer: "He burns his foot on a George Foreman Grill"
},
{
    question: "Which of these things does Prison Mike NOT claim to have been busted for?",
    answers: ["I stole", "I robbed", "I killed Dumbledore", "I kidnapped the President's son"],
    correctAnswer: "I killed Dumbledore"
},
{
    question: "What office supply chain does Dwight briefly work for?",
    answers: ["OfficeMax", "Staples", "Office Depot", "Costco"],
    correctAnswer: "Staples"
},
{
    question: "Where does Jim propose to Pam?",
    answers: ["A romantic restaurant", "At the Office", "In the parking lot", "A gas station"],
    correctAnswer: "A gas station"
},
{
    question: "What item of clothing transforms Michael into Date Mike?",
    answers: ["A backwards golf cap", "A bandana", "Sunglasses", "A watch"],
    correctAnswer: "A backwards golf cap"
}];

var game = {
    correct: 0,
    wrong: 0,
    counter: 300,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            game.done();
        }
    },

    start: function() {
        timer = setInterval(game.countdown,1000);
        $('#inquiry').prepend('<h1>Time Remaining: <span id="counter">300</span> seconds</h1>');
        $('#start').remove();
        for (var q = 0; q < questions.length; q++) {
            $('#inquiry').append('<h2>' + questions[q].question+'</h2>');
            for (var a = 0; a < questions[q].answers.length; a++) {
                $("#inquiry").append("<input type='radio' name='question-"+q+"' value='"+questions[q].answers[a]+"'>"+questions[q].answers[a]+'<br>')
            }
        }
        $('#inquiry').append('<br><button id="end" class="btn btn-primary btn-lg btn-block">DONE</button>')
    },
    
    done: function(){

        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val()==questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val()==questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });

        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val()==questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val()==questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val()==questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val()==questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val()==questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-7']:checked"), function () {
            if ($(this).val()==questions[7].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-8']:checked"), function () {
            if ($(this).val()==questions[8].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });


        $.each($("input[name='question-9']:checked"), function () {
            if ($(this).val()==questions[9].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#inquiry h2').remove();

        $('#inquiry').html("<h2>Final Score</h2>");
        $('#inquiry').append("<h3>Correct Answers: "+ this.correct + "</h3>");
        $('#inquiry').append("<h3>Wrong Answers: "+ this.wrong + "</h3>");
        $('#inquiry').append("<h3>Missing Answers: "+(questions.length-(this.wrong+this.correct))+ "</h3>");
    }
}
