document.addEventListener("DOMContentLoaded", function() {
    displayStart();
});

questions = {
    "q1": ["Night Owl or Early Bird?", "Night Owl", "Early Bird"],
    "q2": ["Tea or Coffee?", "Tea", "Coffee"],
    "q3": ["Blue or Red?", "Blue", "Red"]
}

vitamins = {
    1: ['A'], 4: ['B'], 3: ['C'], 5: ['D'], 0: ['E'], 2: ['K']
}

let result = 0;

function displayStart() {
    /* <div id="startQuiz" style="text-align: center;">
        <div>title image <img src="..." alt="..."></div>
        <div>cover image for the quiz <img src="..." alt="..."></div>
        <div><button class="button" onclick="startQuiz()">Start</button></div>
    </div> */
    var sDiv = document.createElement("div");

    var div1 = document.createElement("div");
    var startTitle = document.createElement("img");
    startTitle.src = "personality_title";
    div1.appendChild(startTitle);
    sDiv.appendChild(div1);

    var div2 = document.createElement("div");
    var startImg = document.createElement("img");
    startImg.src = "personality_img";
    div1.appendChild(startImg);
    sDiv.appendChild(div1);

    var div3 = document.createElement("div");
    var startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.addEventListener("click", startQuiz);
    div3.appendChild(startButton);
    sDiv.appendChild(div3);

    document.getElementById("load").appendChild(sDiv);

}

function startQuiz() {
    /// 1) delete div. id=startQuiz
    /// 2) create q. Structure vv
    /* <div id="q1">
        <div class="container" style="text-align: center; justify-content: center;">
            <div class="row">
                <img src="..." alt="...">
            </div>
            <div class="row">
                q1?
            </div>
            <div class="row">
                <div class="col"><button>a1</button></div>
                <div class="col"><button>a2</button></div>
            </div>
        </div>
    </div> */
    /// 
    document.getElementById("load").innerHTML = "";
    displayQuestion();
}

let i = 1;

function displayQuestion() {
    document.getElementById("questions").appendChild(createQuestion(i));
}

function displayResult() {
    document.getElementById("questions").appendChild(calculateResult());
}

function calculateResult() {
    /* <div class="container">
        <div class="row">
            You are Vitamin N!
        </div>
        <div class="row"><img src="..." alt="..."></div>
        <div class="row"><p>personality information</p></div>
    </div> */
    var rDiv = document.createElement("div");
    rDiv.classList.add("container");
    
    var row1 = document.createElement("div");
    row1.classList.add("row");
    row1.innerHTML = vitamins[result][0];
    rDiv.appendChild(row1);

    var row2 = document.createElement("div");
    row2.classList.add("row");
    var vitaminImg = document.createElement("img");
    vitaminImg.src = `vitamin_${vitamins[result][0]}`
    row2.appendChild(vitaminImg);
    rDiv.appendChild(row2);
    
    var row3 = document.createElement("div");
    row3.classList.add("row");
    var vitaminPInfo = document.createElement("p");
    vitaminPInfo.innerHTML = "personality information from vitamins[result][1]."
    rDiv.appendChild(vitaminPInfo);

    var row4 = document.createElement("div");
    row4.classList.add("row");

    var retakeButton = document.createElement("button");
    retakeButton.innerHTML = "Retake";
    retakeButton.addEventListener("click", resetQuiz);
    row4.appendChild(retakeButton);

    var homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.onclick = function() { location.href='main.html'; };
    row4.appendChild(homeButton);

    rDiv.appendChild(row4);

    return rDiv;
}

function createQuestion(i) {
    var qDiv = document.createElement("div");
    qDiv.id = `q${i}`;
    qDiv.classList.add("container");

    var row1 = document.createElement("div");
    row1.classList.add("row");
    const qImage = document.createElement("img");
    qImage.src = `q${i}_Image`;
    row1.appendChild(qImage);
    qDiv.appendChild(row1);

    var row2 = document.createElement("div");
    row2.classList.add("row");
    row2.innerHTML = questions[`q${i}`][0];
    qDiv.appendChild(row2);

    var row3 = document.createElement("div");
    row3.classList.add("row");

    var a1Div = document.createElement("div");
    a1Div.classList.add("col");
    var a1Button = document.createElement("button");
    a1Button.innerHTML = questions[`q${i}`][1];
    a1Button.addEventListener("click", () => { nextQuestion("choice1"); });
    a1Div.appendChild(a1Button);
    row3.appendChild(a1Div);

    var a2Div = document.createElement("div");
    a2Div.classList.add("col");
    var a2Button = document.createElement("button");
    a2Button.addEventListener("click", () => { nextQuestion("choice2"); });
    a2Button.innerHTML = questions[`q${i}`][2];
    a2Div.appendChild(a2Button);
    row3.appendChild(a2Div);

    qDiv.appendChild(row3);
    return qDiv;
}

function nextQuestion(choiceNum) {
    console.log("Next Question!");
    if (choiceNum == "choice2") {
        if (i == 1)
        {
            result += 3;
        } else {
            result += 1;
        }
    } 
    document.getElementById("questions").innerHTML = "";
    i++;
    if (i < 4) {
        displayQuestion();
    }
    else {
        displayResult();
    }
}

function resetQuiz() {
    document.getElementById("questions").innerHTML = "";
    i = 1;
    result = 0;
    displayStart();
}