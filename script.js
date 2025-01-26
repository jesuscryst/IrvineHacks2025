document.addEventListener("DOMContentLoaded", function() {
    displayStart();
});

questions = {
    "q1": ["Night Owl or Early Bird?", "Night Owl", "Early Bird"],
    "q2": ["Tea or Coffee?", "Tea", "Coffee"],
    "q3": ["Blue or Red?", "Blue", "Red"]
}

vitamins = {
    1: ['A'], 
    4: ['B'], 
    3: ['C'], 
    5: ['D'], 
    0: ['E'], 
    2: ['K']
}

let result = 0;

function displayStart() {
    /* <div id="startQuiz" style="text-align: center;">
        <div>title image <img src="..." alt="..."></div>
        <div>cover image for the quiz <img src="..." alt="..."></div>
        <div><button class="button" onclick="startQuiz()">Start</button></div>
    </div> */
    var sDiv = document.createElement("div");

    var div2 = document.createElement("div");
    div2.classList.add("row");
    div2.style.justifyContent = "center";
    var startImg = document.createElement("img");
    startImg.src = "personality_img";
    div2.appendChild(startImg);
    sDiv.appendChild(div2);

    var div3 = document.createElement("div");
    div3.classList.add("row");
    div3.style.justifyContent = "center";
    var startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.addEventListener("click", startQuiz);
    div3.appendChild(startButton);
    sDiv.appendChild(div3);

    document.getElementById("load").appendChild(sDiv);

}

function startQuiz() {
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
    rDiv.style.justifyContent = "center";
    
    var row1 = document.createElement("div");
    row1.classList.add("row");
    row1.style.justifyContent = "center";
    row1.innerHTML = `You are Vitamin ${vitamins[result][0]}!`;
    rDiv.appendChild(row1);

    var row2 = document.createElement("div");
    row2.classList.add("row");
    row2.style.justifyContent = "center";
    var vitaminImg = document.createElement("img");
    vitaminImg.src = `vitamin_${vitamins[result][0]}`
    row2.appendChild(vitaminImg);
    rDiv.appendChild(row2);
    
    var row3 = document.createElement("div");
    row3.classList.add("row");
    row3.style.justifyContent = "center";
    var vitaminPInfo = document.createElement("p");
    vitaminPInfo.innerHTML = "personality information from vitamins[result][1]."
    rDiv.appendChild(vitaminPInfo);

    var row4 = document.createElement("div");
    row4.classList.add("row");
    row4.style.justifyContent = "center";
    row4.style.display = "flex";

    var col1 = document.createElement("div");
    col1.classList.add("col");
    var retakeButton = document.createElement("button");
    retakeButton.innerHTML = "Retake";
    retakeButton.addEventListener("click", resetQuiz);
    col1.appendChild(retakeButton);
    row4.appendChild(col1);

    var col2 = document.createElement("div");
    col2.classList.add("col");
    var homeButton = document.createElement("button");
    homeButton.innerHTML = "Home";
    homeButton.onclick = function() { location.href='main.html'; };
    col2.appendChild(homeButton);
    row4.appendChild(col2);

    rDiv.appendChild(row4);

    return rDiv;
}

function createQuestion(i) {
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
    var qDiv = document.createElement("div");
    qDiv.id = `q${i}`;
    qDiv.classList.add("container");

    var row1 = document.createElement("div");
    row1.classList.add("row");
    row1.style.justifyContent = "center";
    const qImage = document.createElement("img");
    qImage.src = `images/q${i}_Image.png`;
    qImage.classList.add("qImageResize");
    row1.appendChild(qImage);
    qDiv.appendChild(row1);

    var row2 = document.createElement("div");
    row2.classList.add("row");
    row2.style.justifyContent = "center";
    row2.innerHTML = questions[`q${i}`][0];
    qDiv.appendChild(row2);

    var row3 = document.createElement("div");
    row3.classList.add("row");
    row3.style.justifyContent = "center";
    row3.style.display = "flex";

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