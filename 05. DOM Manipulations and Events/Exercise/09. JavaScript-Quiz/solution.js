function solve() {
    const RIGHT_ANSWERS = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'];

    const givenAnswers = [];
    const quizElementsToHideShow = Array.from(document.querySelector('#quizzie').children).slice(1);
    const resultOutputElement = document.querySelector('#results li h1');
    const answerLiElements = document.querySelectorAll('.quiz-answer');
    for (const answerLiElement of answerLiElements) {
        answerLiElement.addEventListener('click', answer);
    }

    function answer(e) {
        const selectedAnswer = e.currentTarget.querySelector('p').textContent;
        const currentQuestionSection = e.currentTarget.parentElement.parentElement;
        const questionSectionIndex = quizElementsToHideShow.indexOf(currentQuestionSection);
        const nextElementToShow = currentQuestionSection.nextElementSibling
        givenAnswers[questionSectionIndex] = selectedAnswer;

        currentQuestionSection.style.display = 'none';
        nextElementToShow.style.display = 'block';

        if (nextElementToShow.tagName.toLowerCase() === 'ul') {
            const givenRightAnswerNumber = givenAnswers.filter((answer, index) => answer === RIGHT_ANSWERS[index]).length;
            resultOutputElement.textContent = helpers.showResult(givenRightAnswerNumber, RIGHT_ANSWERS.length);
        }
    }

    const helpers = {
        showResult(rightAnswersNumber, totalAnswersNumber) {
            const SUCCESSFUL_QUIZ_MASSAGE = 'You are recognized as top JavaScript fan!';
            const UNSUCCESSFUL_QUIZ_MASSAGE = `You have ${rightAnswersNumber} right answers`;
            return rightAnswersNumber === totalAnswersNumber ? SUCCESSFUL_QUIZ_MASSAGE : UNSUCCESSFUL_QUIZ_MASSAGE;
        }
    };
}
