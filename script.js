const giftBox = document.getElementById("giftBox");
const proposalPage = document.getElementById("proposalPage");
const typing = document.getElementById("typing");
const openGift = document.getElementById("openGift");
const yesBtn = document.getElementById("yesBtn");
const thinkBtn = document.getElementById("thinkBtn");

const message =
`Every time I see you, my heart beats a little faster. You make my world brighter without even trying. I don't want to hide my feelings anymore. I love you. Will you be my forever? ❤️`;
openGift.addEventListener("click", () => {

    const countdown = document.getElementById("countdown");
    const number = document.getElementById("countNumber");
    const music = document.getElementById("bgMusic");

    const roseScreen = document.getElementById("roseScreen");

    countdown.style.display = "flex";

    let n = 3;
    number.innerText = n;

    const timer = setInterval(() => {

        n--;

        if (n > 0) {

            number.innerText = n;

        } else {

            clearInterval(timer);

            countdown.style.display = "none";

            giftBox.style.display = "none";

            music.play();

            // 🌹 Rose Animation
            roseScreen.style.display = "flex";

            setTimeout(() => {
                roseScreen.classList.add("show");
            }, 100);

            // 4.5 sec baad proposal page
            setTimeout(() => {

                roseScreen.classList.remove("show");
                roseScreen.style.display = "none";

                proposalPage.style.display = "flex";

                typeWriter();

            }, 4500);
        }   

    }, 1000);

});
function typeWriter() {
    typing.innerHTML = "";
    let i = 0;

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}




yesBtn.addEventListener("click", () => {

    document.getElementById("submitPopup").style.display = "flex";

    document.getElementById("selectedAnswer").innerHTML =
    "❤️ You selected: <b>YES</b>";

    document.getElementById("formAnswer").value = "❤️ YES";

});

thinkBtn.addEventListener("click", () => {

    document.getElementById("submitPopup").style.display = "flex";

    document.getElementById("selectedAnswer").innerHTML =
    "💭 You selected: <b>I'll Think</b>";

   document.getElementById("formAnswer").value = "💭 I'll Think";

});

document.getElementById("cancelBtn").addEventListener("click", () => {

    document.getElementById("submitPopup").style.display = "none";

});
document.getElementById("submitBtn").addEventListener("click", () => {

    const answer = document.getElementById("formAnswer").value;

    const formData = new FormData();

    formData.append(
        "entry.1890409683",
        answer
    );

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLScHBRlJwwaPsmZwbPvPHet124cQSSv_bHsIZh1h1qXj6XHOtg/formResponse",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    );

    createHearts();
    createConfetti();

    setTimeout(() => {

        document.querySelector(".popup-box").innerHTML = `
        <h2>❤️ Thank You ❤️</h2>
        <p>Your response has been submitted successfully.</p>
        `;

    }, 700);

});
function createHearts(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

}

function createConfetti(){

const colors=[
"#ff4d6d",
"#ffd60a",
"#4cc9f0",
"#90be6d",
"#f72585"
];

for(let i=0;i<120;i++){

let c=document.createElement("div");

c.className="confetti";

c.style.left=Math.random()*100+"vw";

c.style.background=
colors[Math.floor(Math.random()*colors.length)];

c.style.transform=
`rotate(${Math.random()*360}deg)`;

document.body.appendChild(c);

setTimeout(()=>{
c.remove();
},4000);

}

}
const envelopeBtn = document.getElementById("envelopeBtn");
const envelopeContainer = document.getElementById("envelopeContainer");
const envelope = document.querySelector(".envelope");
const closeEnvelope = document.getElementById("closeEnvelope");

envelopeBtn.addEventListener("click", () => {

    envelopeContainer.style.display = "flex";

    setTimeout(() => {
        envelope.classList.add("open");
    }, 300);

});

closeEnvelope.addEventListener("click", () => {

    envelope.classList.remove("open");

    setTimeout(() => {
        envelopeContainer.style.display = "none";
    }, 900);

});
const backBtn = document.getElementById("backBtn");

backBtn.addEventListener("click", () => {

    proposalPage.style.display = "none";

    giftBox.style.display = "flex";

});