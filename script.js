emailjs.init({
            publicKey: '6upSXP_XXdZIVKN27',
    });

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


function sendEmail(){ 
    
        let fname = document.getElementById("firstname").value.trim();
        let lname = document.getElementById("lastname").value.trim();
        let email = document.getElementById("email").value.trim();
        let number = document.getElementById("number").value.trim();
        let bhk_group = document.querySelector('input[name="bhk"]:checked')?.value || " ";
        let project = document.getElementById("project").value;
        let message = document.getElementById("message").value.trim();

        let params = {
            first_name: fname,
            last_name: lname,
            from_email: email,
            from_number: number,
            from_bhk:bhk_group,
            from_project:project,
            message: message
        }

    emailjs
    .send('service_f234mci', 'template_43z54fb', params)
    .then(()=>{
        alert('Email Successfully Submitted ✅')
        document.getElementById("form").reset();    
    })
    .catch(()=>{
        alert("Email can not send!")
    })
   
}





