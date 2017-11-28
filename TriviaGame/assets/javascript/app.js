brokenBells = {
    question: "What band is the side project of 'Danger Mouse's' Brian Burton and 'The Shins'' lead singer, James Mercer?",
    answerOptions: ["All of it", "Broken Bells", "Mason Jars and Acoustic Rifs"],
    correctAnswer: "2",
}

mpmw = {
    question: "Days N' Daze is an AMAZING Folk Punk Band. The female lead singer Whitney still travels under her original band name. What is it?",
    answerOptions: ["Freight-trains and Whisky", "Opposition Rising", "My Pizza, My World"],
    correctAnswer: "3"
}

chg = {
    question: "Speaking of Days N' Daze, the other lead singer Jesse also has a side gig! Can you guess it?",
    answerOptions: ["Chad Hates George", "Everyone Hates Trump", "Funk is Dead"],
    correctAnswer: "1"
}

pat = {
    question: "Last Folk Punk Question I swear..... Pat The Bunny Schneeweis is a very well known Folk Punk artist. He has published solo work, as well as founded multiple bands. What is his most prominant side band?",
    answerOptions: ["Wingnut Dishwasher Union", "Johnny Hobo and the Freight Trains", "Ramshackle Glory"],
    correctAnswer: "3"
}

fbht = {
    question: "Back to some mainstream, Green Day has a side Garage Rock band. What's it's name?",
    answerOptions: ["21 Guns", "Foxboro Hot Tubs", "Longview"],
    correctAnswer: "2"
}

allQuestions = [brokenBells, mpmw, chg, pat, fbht]

var timeLeft = 10;
var displayedTime;
var score = 0;

$(document).ready(function () {
    $("#next1").hide();
    $("#next2").hide();
    $("#next3").hide();
    $("#next4").hide();
    $("#score").hide();
    $("#broken-bells-answers").hide();
    $("#mpmw-answers").hide();
    $("#chg-answers").hide();
    $("#pat-answers").hide();
    $("#fbht-answers").hide();

    //SECTION ONE------------------------------------------------------------------------
    function timer1() {
        $("#display").html(timeLeft);
        timeLeft--;
        displayedTime = setTimeout(timer1, 1000)

        if (timeLeft === 0) {
            stopCount1(displayedTime);
            console.log("false");
            $("#next1").show();
            $("#broken-bells-answers").show();
            $("#broken-bells-timesup").show();
            $("#broken-bells-correct").hide();
            $("#broken-bells-wrong").hide();
        }
    }

    function stopTimer1() {
        clearTimeout(displayedTime);
        timeLeft = 10;
        $("#display").html(timeLeft);

    }

    function stopCount1() {
        stopTimer1();
        $("#display").hide();
    }

    function startCount() {
        timer1();
        $("#start").hide();
        $("#mpmw-answers").hide();
        $("#chg-answers").hide();
        $("#pat-answers").hide();
        $("#fbht-answers").hide();
        $("#question-goes-here").text(allQuestions[0].question)
        $("#answer1").text(allQuestions[0].answerOptions[0])
        $("#answer2").text(allQuestions[0].answerOptions[1])
        $("#answer3").text(allQuestions[0].answerOptions[2])
        $('#form-id input').on('change', function () {
            var userAnswer = ($('input[name=answerOptions]:checked', '#form-id').val());
            console.log(userAnswer);
            if (userAnswer === allQuestions[0].correctAnswer) {
                console.log("true");
                $("#broken-bells-answers").show();
                $("#broken-bells-timesup").hide();
                $("#broken-bells-correct").show();
                $("#broken-bells-wrong").hide();
                $("#next1").show();
                stopTimer1();
                score++;
                console.log(score);
                $("#display").hide();
            } else {
                console.log("false");
                $("#broken-bells-answers").show();
                $("#broken-bells-timesup").hide();
                $("#broken-bells-correct").hide();
                $("#broken-bells-wrong").show();
                $("#next1").show();
                stopTimer1();
                $("#display").hide();
            }
        });
    }

    function resetRadios() {
        $('input[name="answerOptions"]').prop('checked', false);
    };

    //SECTION TWO------------------------------------------------------------------------

    function timer2() {
        $("#display").html(timeLeft);
        timeLeft--;
        displayedTime = setTimeout(timer2, 1000)

        if (timeLeft === 0) {
            console.log("false");
            $("#next2").show();
            $("#next1").hide();
            $("#broken-bells-answers").hide();
            $("#chg-answers").hide();
            $("#pat-answers").hide();
            $("#fbht-answers").hide();
            $("#mpmw-answers").show();
            $("#mpmw-timesup").show();
            $("#mpmw-correct").hide();
            $("#mpmw-wrong").hide();
            $("#chg-answers").hide();
            stopCount2();
        }
    }

    function stopTimer2() {
        clearTimeout(displayedTime);
        timeLeft = 10;
        $("#display").html(timeLeft);

    }

    function stopCount2() {
        stopTimer2();
        $("#display").hide();
    }

    function question2Function() {
        resetRadios();
        $("#broken-bells-answers").hide();
        $("#mpmw-answers").hide();
        $("#fbht-answers").hide();
        $("#display").show();
        $("#next1").hide();
        $("#start").hide();
        timer2();
        $("#question-goes-here").text(allQuestions[1].question)
        $("#answer1").text(allQuestions[1].answerOptions[0])
        $("#answer2").text(allQuestions[1].answerOptions[1])
        $("#answer3").text(allQuestions[1].answerOptions[2])
        $('#form-id input').on('change', function () {
            var userAnswer = ($('input[name=answerOptions]:checked', '#form-id').val());
            console.log(userAnswer);
            if (userAnswer === allQuestions[1].correctAnswer) {
                console.log("true");
                $("#broken-bells-answers").hide();
                $("#chg-answers").hide();
                $("#pat-answers").hide();
                $("#fbht-answers").hide();
                $("#mpmw-answers").show();
                $("#mpmw-timesup").hide();
                $("#mpmw-correct").show();
                $("#mpmw-wrong").hide();
                $("#next1").hide();
                $("#next2").show();
                stopCount2();
                score++;
                console.log(score);
                $("#display").hide();
            } else {
                console.log("false");
                $("#broken-bells-answers").hide();
                $("#chg-answers").hide();
                $("#pat-answers").hide();
                $("#fbht-answers").hide();
                $("#mpmw-answers").show();
                $("#mpmw-timesup").hide();
                $("#mpmw-correct").hide();
                $("#mpmw-wrong").show();
                $("#next1").hide();
                $("#next2").show();
                stopCount2();
                $("#display").hide();
            }
        });
    }

    //SECTION THREE------------------------------------------------------------------------
    function timer3() {
        $("#display").html(timeLeft);
        timeLeft--;
        displayedTime = setTimeout(timer3, 1000)

        if (timeLeft === 0) {
            console.log("false");
            $("#next3").show();
            $("#next2").hide();
            $("#next1").hide();
            $("#broken-bells-answers").hide();
            $("#mpmw-answers").hide();
            $("#pat-answers").hide();
            $("#fbht-answers").hide();
            $("#chg-answers").show();
            $("#chg-timesup").show();
            $("#chg-correct").hide();
            $("#chg-wrong").hide();
            stopCount3();
        }
    }

    function stopTimer3() {
        clearTimeout(displayedTime);
        timeLeft = 10;
        $("#display").html(timeLeft);

    }

    function stopCount3() {
        stopTimer3();
        $("#display").hide();
    }

    function question3Function() {
        resetRadios();
        $("#display").show();
        $("#next2").hide();
        $("#next1").hide();
        $("#start").hide();
        $("#mpmw-answers").hide();
        $("#fbht-answers").hide();
        timer3();
        $("#question-goes-here").text(allQuestions[2].question)
        $("#answer1").text(allQuestions[2].answerOptions[0])
        $("#answer2").text(allQuestions[2].answerOptions[1])
        $("#answer3").text(allQuestions[2].answerOptions[2])
        $('#form-id input').on('change', function () {
            var userAnswer = ($('input[name=answerOptions]:checked', '#form-id').val());
            console.log(userAnswer);
            if (userAnswer === allQuestions[2].correctAnswer) {
                console.log("true");
                $("#mpmw-answers").hide();
                $("#pat-answers").hide();
                $("#fbht-answers").hide();
                $("#next3").show();
                $("#next1").hide();
                $("#next2").hide();
                $("#chg-answers").show();
                $("#chg-timesup").hide();
                $("#chg-correct").show();
                $("#chg-wrong").hide();
                stopCount3();
                score++;
                console.log(score);
                $("#display").hide();
            } else {
                console.log("false");
                $("#mpmw-answers").hide();
                $("#pat-answers").hide();
                $("#fbht-answers").hide();
                $("#next3").show();
                $("#next1").hide();
                $("#next2").hide();
                $("#chg-answers").show();
                $("#chg-timesup").hide();
                $("#chg-correct").hide();
                $("#chg-wrong").show();
                stopCount3();
                $("#display").hide();
            }
        });
    }


    //SECTION FOUR------------------------------------------------------------------------
    function timer4() {
        $("#display").html(timeLeft);
        timeLeft--;
        displayedTime = setTimeout(timer4, 1000)

        if (timeLeft === 0) {
            console.log("false");
            $("#next4").show();
            $("#next3").hide();
            $("#next2").hide();
            $("#next1").hide();
            $("#broken-bells-answers").hide();
            $("#mpmw-answers").hide();
            $("#fbht-answers").hide();
            $("#chg-answers").hide();
            $("#pat-answers").show();
            $("#pat-timesup").show();
            $("#pat-correct").hide();
            $("#pat-wrong").hide();
            stopCount4();
        }
    }

    function stopTimer4() {
        clearTimeout(displayedTime);
        timeLeft = 10;
        $("#display").html(timeLeft);

    }

    function stopCount4() {
        stopTimer4();
        $("#display").hide();
    }

    function question4Function() {
        resetRadios();
        $("#display").show();
        $("#next3").hide();
        $("#next2").hide();
        $("#next1").hide();
        $("#start").hide();
        $("#chg-answers").hide();
        $("#fbht-answers").hide();
        timer4();
        $("#question-goes-here").text(allQuestions[3].question)
        $("#answer1").text(allQuestions[3].answerOptions[0])
        $("#answer2").text(allQuestions[3].answerOptions[1])
        $("#answer3").text(allQuestions[3].answerOptions[2])
        $('#form-id input').on('change', function () {
            var userAnswer = ($('input[name=answerOptions]:checked', '#form-id').val());
            console.log(userAnswer);
            if (userAnswer === allQuestions[3].correctAnswer) {
                console.log("true");
                $("#chg-answers").hide();
                $("#fbht-answers").hide();
                $("#next4").show();
                $("#next3").hide();
                $("#next2").hide();
                $("#next1").hide();
                $("#pat-answers").show();
                $("#pat-timesup").hide();
                $("#pat-correct").show();
                $("#pat-wrong").hide();
                stopCount4();
                score++;
                console.log(score);
                $("#display").hide();
            } else {
                console.log("false");
                $("#chg-answers").hide();
                $("#fbht-answers").hide();
                $("#next4").show();
                $("#next3").hide();
                $("#next2").hide();
                $("#next1").hide();
                $("#pat-answers").show();
                $("#pat-timesup").hide();
                $("#pat-correct").hide();
                $("#pat-wrong").show();
                stopCount4();
                $("#display").hide();
            }
        });
    }

    //SECTION Five------------------------------------------------------------------------
    function timer5() {
        $("#display").html(timeLeft);
        timeLeft--;
        displayedTime = setTimeout(timer5, 1000)

        if (timeLeft === 0) {
            console.log("false");
            $("#score").show();
            $("#next4").hide();
            $("#next2").hide();
            $("#next1").hide();
            $("#next3").hide();
            $("#broken-bells-answers").hide();
            $("#pat-answers").hide();
            $("#mpmw-answers").hide();
            $("#chg-answers").hide();
            $("#fbht-answers").show();
            $("#fbht-timesup").show();
            $("#fbht-correct").hide();
            $("#fbht-wrong").hide();
            stopCount5();
        }
    }

    function stopTimer5() {
        clearTimeout(displayedTime);
        timeLeft = 10;
        $("#display").html(timeLeft);

    }

    function stopCount5() {
        stopTimer5();
        $("#display").hide();
    }

    function question5Function() {
        resetRadios();
        $("#display").show();
        $("#next4").hide();
        $("#next3").hide();
        $("#next2").hide();
        $("#next1").hide();
        $("#start").hide();
        $("#chg-answers").hide();
        $("#pat-answers").hide();
        timer5();
        $("#question-goes-here").text(allQuestions[4].question)
        $("#answer1").text(allQuestions[4].answerOptions[0])
        $("#answer2").text(allQuestions[4].answerOptions[1])
        $("#answer3").text(allQuestions[4].answerOptions[2])
        $('#form-id input').on('change', function () {
            var userAnswer = ($('input[name=answerOptions]:checked', '#form-id').val());
            console.log(userAnswer);
            if (userAnswer === allQuestions[4].correctAnswer) {
                console.log("true");
                $("#chg-answers").hide();
                $("#pat-answers").hide();
                $("#score").show();
                $("#next4").hide();
                $("#next1").hide();
                $("#next2").hide();
                $("#next3").hide();
                $("#fbht-answers").show();
                $("#fbht-timesup").hide();
                $("#fbht-correct").show();
                $("#fbht-wrong").hide();
                stopCount5();
                score++;
                console.log(score);
                $("#display").hide();
            } else {
                console.log("false");
                $("#pat-answers").hide();
                $("#score").show();
                $("#next4").hide();
                $("#next1").hide();
                $("#next2").hide();
                $("#next3").hide();
                $("#fbht-answers").show();
                $("#fbht-timesup").hide();
                $("#fbht-correct").hide();
                $("#fbht-wrong").show();
                stopCount5();
                $("#display").hide();
            }
        });
    }

    function scoreFunction() {
        $("#score").hide();
        $("#trivia-questions-and-form").text((score) + " out of 5!");
    }

    // $("#start").on("click", timer(), dynamicQuestions());
    $("#start").on("click", startCount);

    $("#next1").on("click", question2Function);

    $("#next2").on("click", question3Function);

    $("#next3").on("click", question4Function);

    $("#next4").on("click", question5Function);

    $("#score").on("click", scoreFunction);
});