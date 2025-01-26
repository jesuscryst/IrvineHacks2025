document.addEventListener("DOMContentLoaded", function() {
    displayStart();
});

questions = {
    "q1": ["Night Owl or Early Bird?", "Night Owl", "Early Bird"],
    "q2": ["Tea or Coffee?", "Tea", "Coffee"],
    "q3": ["Blue or Red?", "Blue", "Red"]
}

vitamins = {
    1: ['A', "You have a unique way of seeing the world—one that goes beyond the surface. Whether it’s understanding the deeper meaning behind people’s actions or grasping the unseen connections between ideas, your mind is always working at a higher level. You’re the type of person who pauses to reflect, who considers multiple perspectives before making a decision, and who often sees things others may miss. Your ability to grasp complex concepts and provide profound insights makes you a go-to person for advice and guidance. People tend to appreciate your thoughtful and perceptive nature."], 
    4: ['B', "You’re like a burst of sunshine in any room, always ready to take on the next adventure with enthusiasm and vigor. Your energy is contagious—whether you're at work, socializing, or just going through your day, you have a natural ability to ignite excitement in others. Your boundless enthusiasm keeps you constantly moving, always up for a challenge, and ready to push your limits. You don't just go through the motions of life; you embrace each moment with intensity and passion. The world around you never seems dull because you bring a vibrant energy that makes everything feel alive."], 
    3: ['C', "You have a tendency to focus on the positives, even in negative situations. You don’t dwell on the past, and can see the lessons learned from your mistakes. When faced with challenges you  Your positive mindset allows you to approach challenges with a sense of possibility and enthusiasm. Similar to the boost to skin health and the immune system from vitamin C, your optimism and hopeful outlook when life gets tough boosts the spirits of those around you."], 
    5: ['D', "You trust your abilities and your decisions. You have the courage to take on risks and challenges with conviction and assurance of your success. Your belief in yourself helps you navigate life’s ups and downs with ease, knowing you have the strength to handle any obstacles in your way. Just as you need vitamin D to help your body absorb calcium to grow your bones, your confidence in yourself lays a firm foundation for your own growth and well-being."], 
    0: ['E', "You remain composed and level-headed, even in stressful situations. When the pressure is on, you don’t become overwhelmed, and take on challenges with a quiet and relaxed determination. Others around you may rely on your soothing presence under stress. Much like how vitamin E keeps your cells protected and stabilized from reacting with harmful free radicals, you offer emotional stability, protecting your own well-being and potentially others’ as well."], 
    2: ['K', "You are driven by big dreams. You have a clear sense of purpose, and are determined to achieve your goals and push your limits to become the best version of yourself. With a strong desire for success you won’t let obstacles stop your progress, like how vitamin K is needed to stop any bleeding."]
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
    startImg.classList.add("qImageResize");
    startImg.src = "images/personality_img.png";
    div2.appendChild(startImg);
    sDiv.appendChild(div2);

    var div3 = document.createElement("div");
    div3.classList.add("row");
    div3.style.justifyContent = "center";
    var startButton = document.createElement("button");
    startButton.innerHTML = "Start";
    startButton.style.width = "200px";
    startButton.style.margin = "20px"
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
    if (vitamins[result][0] == 'B') {
        row1.innerHTML = `You are B Vitamins!`;
    } else {
        row1.innerHTML = `You are Vitamin ${vitamins[result][0]}!`;
    }
    rDiv.appendChild(row1);

    var row2 = document.createElement("div");
    row2.classList.add("row");
    row2.style.justifyContent = "center";
    var vitaminImg = document.createElement("img");
    vitaminImg.classList.add("qImageResize");
    vitaminImg.src = `images/vitamin_${vitamins[result][0]}.png`
    row2.appendChild(vitaminImg);
    rDiv.appendChild(row2);
    
    var row3 = document.createElement("div");
    row3.classList.add("row");
    row3.style.justifyContent = "center";
    var vitaminPInfo = document.createElement("p");
    vitaminPInfo.style.margin = "20px";
    vitaminPInfo.innerHTML = vitamins[result][1];
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

    var row2 = document.createElement("div");
    row2.classList.add("row");
    row2.style.justifyContent = "center";
    row2.innerHTML = questions[`q${i}`][0];
    qDiv.appendChild(row2);

    var row3 = document.createElement("div");
    row3.classList.add("row");
    row3.style.alignItems = "center";
    row3.style.justifyContent = "center";
    row3.style.display = "flex";

    var a1Div = document.createElement("div");
    a1Div.classList.add("col");
    var a1Button = document.createElement("button");
    a1Button.innerHTML = questions[`q${i}`][1];
    a1Button.addEventListener("click", () => { nextQuestion("choice1"); });
    a1Div.appendChild(a1Button);
    row3.appendChild(a1Div);

    var imgDiv = document.createElement("div");
    imgDiv.classList.add("col");
    const qImage = document.createElement("img");
    qImage.src = `images/q${i}_Image.png`;
    qImage.classList.add("qImageResize");
    imgDiv.appendChild(qImage);
    row3.appendChild(imgDiv);

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