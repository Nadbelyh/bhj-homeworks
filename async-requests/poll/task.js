const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
let questionId = 0;
let answerId = 0;

const xhr = new XMLHttpRequest();
xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", () => {
  const xhrResponse = xhr.response;
  questionId = xhrResponse.id;
  setPollItems(xhrResponse);
});

function setPollItems(xhrResponse) {
  pollTitle.innerText = xhrResponse.data.title;
  const answersArr = xhrResponse.data.answers;

  pollAnswers.addEventListener("click", function (event) {
    if (event.target.className === "poll__answer") {
      const answerText = event.target.innerText;
      const answerId = answersArr.indexOf(answerText);
      alert("Спасибо, ваш голос засчитан!");
      getPollAnswers();
    }
  });

  for (let item in answersArr) {
    const button = document.createElement("button");
    button.className = "poll__answer";
    button.innerText = answersArr[item];
    pollAnswers.append(button);
  }
}

function getPollAnswers() {
  const xhrPost = new XMLHttpRequest();
  xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/poll ");
  xhrPost.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhrPost.responseType = "json";
  xhrPost.send(`vote=${questionId}&answer=${answerId}`);
  xhrPost.addEventListener("load", () => {
    pollAnswers.remove();
    const xhrPostResponse = xhrPost.response.stat;

    let sumAllVotes = 0;
    for (let item of xhrPostResponse) {
      sumAllVotes += item.votes;
    }

    const answers = document.createElement("div");
    answers.className = "poll__answers poll__answers_active";
    answers.id = "poll__answers";
    pollTitle.after(answers);

    const ulAnswers = document.createElement("ul");
    answers.append(ulAnswers);

    for (let item of xhrPostResponse) {
      let itemPercent = +(item.votes / (sumAllVotes * 0.01)).toFixed(2);

      const answer = document.createElement("li");
      answer.innerHTML = `${item.answer}: ${itemPercent}%`;
      ulAnswers.append(answer);
    }
  });
}
