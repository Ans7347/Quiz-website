let currentQuestionIndex = 0;

function showQuestion(index) {
    $(`.question:eq(${index})`).show();
}

function hideQuestion(index) {
    $(`.question:eq(${index})`).hide();
}

function nextQuestion() {
    hideQuestion(currentQuestionIndex);
    currentQuestionIndex++;

    if (currentQuestionIndex < $(".question").length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

function showResult() {
    const correctAnswers = {
        q1: "a",
        q2: "c",
        q3: "a",
        q4: "a",
        q5: "b",
        q6: "c",
        q7: "b",
        q8: "d",
        q9: "a",
        q10: "b",
    };

    let score = 0;

    for (const question in correctAnswers) {
        const userAnswer = $(`input[name='${question}']:checked`).val();
        if (userAnswer === correctAnswers[question]) {
            score++;
        }
    }

    let resultMessage = `You scored ${score} out of ${Object.keys(correctAnswers).length}.\n`;

    if (score === Object.keys(correctAnswers).length) {
        resultMessage += "Great job! You got all questions right.";
    } else {
        resultMessage += "Keep practicing. You can do better!";
    }

    $("#resultMessage").text(resultMessage);
    $("#quizForm").hide();
    $("#result").show();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    $(".question").hide();
    $("#result").hide();
    showQuestion(currentQuestionIndex);
    $("#quizForm").show();
}

// Start the quiz by showing the first question
$(document).ready(function () {
    showQuestion(currentQuestionIndex);
});
