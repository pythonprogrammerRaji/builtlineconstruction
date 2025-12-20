const texts = [
    "BUILD YOUR DREAM HOUSE WITH US",
    "QUALITY CONSTRUCTION YOU CAN TRUST",
    "WE SHAPE YOUR FUTURE BUILDINGS"
];
    let index = 0;
    const heroText = document.getElementById("heroText");
setInterval(() => {
    index = (index + 1) % texts.length; 
    heroText.textContent = texts[index];
}, 3000);



window.addEventListener('load',()=>{
    const hero = document.querySelector(".hero");
    const text = document.querySelector(".hero-content");
    const image = document.querySelector(".Image");
    const nav = document.querySelector("nav")

    setTimeout(() => {
        hero.classList.add("show-bg");
    }, 1000);

    setTimeout(() => {
        text.classList.add("show-text");  
    }, 3000);

     setTimeout(() => {
        image.classList.add("showImage")
        image.style.display = "block"
        nav.classList.add("shownav")
     },4000);
})


// let counters = document.querySelectorAll(".count");

// let done = false;

// window.addEventListener('scroll', ()=>{
//     if(done) return

//     counters.forEach(counter =>{
//         let target = +counter.dataset.target;
//         let count = 0

//         let interval = setInterval(()=>{
//             counter.innerText = ++count + '+';
//             if(count == target){
//                 clearInterval(interval);
//             }
//         }, 30)
//     })

//     done = true;

// })

let counters = document.querySelectorAll(".count");
const counterSection = document.querySelector("#counter");

function startCounting() {
    counters.forEach(counter => {
        let target = +counter.dataset.target;
        let count = 0;

        counter.innerText = "0"; // reset before start

        let interval = setInterval(() => {
            count++;
            counter.innerText = count + "+";

            if (count === target) {
                clearInterval(interval);
            }
        }, 30);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
        }
    });
}, {
    threshold: 0.5 // section visible 50%
});

observer.observe(counterSection);




// function sendEmail(){
//     emailjs.init({
//         publicKey: 'YOUR_PUBLIC_KEY',
//     });

//     let username = document.getElementById("username").value.trim();
//     let email = document.getElementById("email").value.trim();
//     let number = document.getElementById("number").value.trim();
//     let project = document.getElementById("project").value.trim();
//     let message = document.getElementById("message").value.trim();

//     let params = {
//         from_name: uname,
//         from_email: email,
//         from_number: number,
//         from_project:project,
//         message: message
//     }

//     emailjs
//     .sendForm('services_id', 'template_id', params)
//     .then(function(){
//         alert('Email Successfully Submitted ✅')
//     })
//     .catch(function(){
//         alert("Email not can send!")
//     })
// }





