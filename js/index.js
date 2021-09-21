// 087105110103074105101

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function convertCodeToName(code) {
    var splits = code.match(/.{1,3}/g);
    var result = "";
    for (let i = 0; i < splits.length; i++) {
        result += String.fromCharCode(parseInt(splits[i], 10));
    }
    return result;
}

function onClickStart() {
    document.getElementById("title").style.display = "none";
    loadNextQuestion(questions.pop());
    document.getElementById("question").style.display = "block";
}

function onClickYes() {
    loadNextQuestion(questions.pop());
}

function onClickNo() {
    loadNextQuestion(questions.pop());
}

function imageNameToPath(image_name) {
    return "img/" + image_name.replaceAll(' ', '_').toLowerCase() + ".png";
}

function loadNextQuestion(data) {
    if (data != null) {
        document.getElementById("question_string").textContent = data.message;
        document.getElementById("question_image").src = imageNameToPath(data.image);
        document.getElementById("question_image").alt = data.image;
    } else {
        showAnswer(answer);
    }
}

function showAnswer(data) {
    document.getElementById("question").style.display = "none";
    document.getElementById("answer_string").textContent = data.message;
    document.getElementById("answer_name").textContent = name;
    document.getElementById("answer_image").src = imageNameToPath(data.image);
    document.getElementById("answer_image").alt = data.image;
    document.getElementById("video_name").textContent = name;
    document.getElementById("video_year").textContent = year;
    document.getElementById("answer").style.display = "block";
}

function onClickContinue() {
    document.getElementById("answer").style.display = "none";
    document.getElementById("final").style.display = "block";
}

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
const code = urlParams.get('code');
const year = urlParams.get('count');
const name = convertCodeToName(code);
var content = JSON.parse(data);
var answer = content.answers[getRandomInt(content.answers.length)];
var question_size = content.questions.length;
var question_ids = [];
var questions = [];
while (question_ids.length < 5) {
    var random_id = getRandomInt(question_size);
    if (question_ids.includes(random_id) == false) {
        questions.push(content.questions[random_id]);
        question_ids.push(random_id);
    }
}
