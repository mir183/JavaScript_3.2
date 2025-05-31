const prompt = require('prompt-sync')();

class Question {
    constructor(questionText, answer) {
        this.questionText = questionText;
        this.answer = answer;
    }
}

class Quiz {
    constructor() {
        this.questions = [];
        this.score = 0;
    }

    addQuestion(questionText, answer) {
        this.questions.push(new Question(questionText, answer));
    }

    startQuiz() {
        for (const question of this.questions) {
            console.log(question.questionText);
            const userAnswer = prompt('Your answer: ');
            if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
                console.log('Correct!');
                this.score++;
            } else {
                console.log(`Wrong! The correct answer is ${question.answer}`);
            }
        }
        console.log(`Quiz finished! Your score: ${this.score}/${this.questions.length}`);
    }
}

function main() {
    const quiz = new Quiz();
    quiz.addQuestion('What is the capital of Bangladesh?', 'Dhaka');
    quiz.addQuestion('What is 2 + 2?', '4');
    quiz.addQuestion('What is the national flower of Bangladesh?', 'Water lily');

    quiz.startQuiz();
}

main();