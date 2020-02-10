const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav Section
const navSection = document.querySelectorAll("nav a");

navSection[0].textContent = siteContent.nav["nav-item-1"];
navSection[1].textContent = siteContent.nav["nav-item-2"];
navSection[2].textContent = siteContent.nav["nav-item-3"];
navSection[3].textContent = siteContent.nav["nav-item-4"];
navSection[4].textContent = siteContent.nav["nav-item-5"];
navSection[5].textContent = siteContent.nav["nav-item-6"];


// Append and Prepend children
const newNav1 = document.createElement("a");
const newNav2 = document.createElement("a");
const navList = document.querySelector('nav');

newNav1.textContent = "Append";
newNav2.textContent = "Prepend";

navList.appendChild(newNav1);
navList.prepend(newNav2);
newNav1.style.color = "green";
newNav2.style.color = "green";

navSection.forEach(item => item.style.color = "green");

// Logo

const mainImg = document.querySelector('#cta-img')

mainImg.src = siteContent.cta["img-src"];

// H1 Content & Button

const mainH1 = document.querySelector('h1');
const startBtn = document.querySelector('button');

mainH1.textContent = siteContent.cta["h1"];
startBtn.textContent = siteContent.cta["button"];

//Event Listener Stretch

startBtn.addEventListener("click", function () {
  startBtn.style.backgroundColor = 'grey';
  startBtn.style.color = 'white';
});

// main content

const mainContentHead = document.querySelector(".text-content:nth-child(1) h4");
const mainContentPar = document.querySelector(".text-content:nth-child(1) p");
const mainContentHead2 = document.querySelector(".text-content:nth-child(2) h4");
const mainContentPar2 = document.querySelector(".text-content:nth-child(2) p");


mainContentHead.textContent = siteContent["main-content"]["features-h4"];
mainContentPar.textContent = siteContent["main-content"]["features-content"];
mainContentHead2.textContent = siteContent["main-content"]["about-h4"];
mainContentPar2.textContent = siteContent["main-content"]["about-content"];

// Middle Image
const midImg = document.getElementById('middle-img');

midImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom Content
const mainContentHead3 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
const mainContentPar3 = document.querySelector(".bottom-content .text-content:nth-child(1) p");
const mainContentHead4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
const mainContentPar4 = document.querySelector(".bottom-content .text-content:nth-child(2) p");
const mainContentHead5 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
const mainContentPar5 = document.querySelector(".bottom-content .text-content:nth-child(3) p");

mainContentHead3.textContent = siteContent["main-content"]["services-h4"];
mainContentPar3.textContent = siteContent["main-content"]["services-content"];
mainContentHead4.textContent = siteContent["main-content"]["product-h4"];
mainContentPar4.textContent = siteContent["main-content"]["product-content"];
mainContentHead5.textContent = siteContent["main-content"]["vision-h4"];
mainContentPar5.textContent = siteContent["main-content"]["vision-content"];

// Contact
const contactHeader = document.querySelector(".contact h4");
const contactPar = document.querySelectorAll(".contact p");

contactHeader.textContent = siteContent.contact["contact-h4"];
contactPar[0].innerHTML = siteContent.contact["address"];
contactPar[1].innerHTML = siteContent.contact["phone"];
contactPar[2].innerHTML = siteContent.contact["email"];

//Footer
const foot = document.querySelector("footer p");

foot.textContent = siteContent.footer.copyright;

