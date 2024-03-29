// PULL FROM MAIN BRANCH
// git checkout dev        # gets you "on branch dev"
// git fetch origin        # gets you up to date with origin
// git merge origin/main

// PUSH FROM DEVELOPMENT BRANCH TO MAIN BRANCH
// git checkout dev
// git push origin dev:main
// git checkout main
// git pull

// page controller
const pages = ['Page_landing', 'Page_portfolio', 'Page_qualifications', 'Page_service', 'Page_ai'];

function show(shown) {
    for (let i=0; i<pages.length; i++){
        console.log("we find that shown == pages[i] is " + shown == pages[i]);
        if (shown == pages[i]) {
            switch (pages[i]) {
                case 'Page_landing':
                  if (page_style == "./style1.css") {
                    document.getElementById(shown).style = "display:grid; grid-template-columns: 0.5fr 0.8fr; grid-template-rows: 1fr; gap: 0px 0px;";
                  }
                  else { document.getElementById(shown).style = 'display:block';  }
                  break;
                case 'Page_portfolio':
                    generateProjects();
                    document.getElementById(shown).style = 'display:block';
                  break;
                case 'Page_service':
                    generateService();
                    document.getElementById(shown).style = 'display:block';
                  break;
                default:
                    document.getElementById(shown).style = 'display:block';
              }                        
            if (pages[i] == 'Page_landing') {
            }
            else {  }

            document.getElementById('current-page').innerHTML = shown.substring(5, shown.length).toUpperCase();
            console.log(pages[i] + " is " + document.getElementById(pages[i]).style.display) + " !!!!!";
        }
        else {
            document.getElementById(pages[i]).style.display = 'none';
            console.log(pages[i] + " is " + document.getElementById(pages[i]).style.display);
        }
    }
    console.log("---------------------------");
    return false;
}

// projectts generator
const PROJECTS = [{
    "name": "TIME LEAP",
    "language": "unity c# git",
    "tags": "game 2D",
    "description": 'Winner of Best in Programming (TAGD Fall 21)',
    "image": "TimeLeap.png",
    "link": "https://pengso0o.itch.io/time-leap"
},{
    "name": "CARRYON",
    "language": "react html/css/jsx azure python",
    "tags": "webdev hackathon",
    "description": 'TAMUHack 23',
    "image": "CarryOn.jpg",
    "link": "https://devpost.com/software/carryon-hg39kz?ref_content=user-portfolio&ref_feature=in_progress"
},{
    "name": "GRAPPLING WITH SCHOOL",
    "language": "unit c# git",
    "tags": "game 2D",
    "description": 'Winner of Best in Design and 1st Overall (TAGD Spring 22)',
    "image": "GWS.png",
    "link": "https://pengso0o.itch.io/grapplingwithschool"
}];

const TPL_Results = item => `<div class="project-item">
  <h3 class="Results-itemName">${item.name}</h3>
  <img style="width:100%; height:auto object-fit: cover;" src="./assets/project_images/${item.image}">
  <div style='padding: 5px;'>
    <p class="Results-itemLanguage"><b>Tech: ${item.language}</b></p>
    <p class="Results-itemTags">Fields: ${item.tags}</p>
    <p class="Results-itemDesc">${item.description}</p>
    <button onclick="window.location.href='${item.link};'">see more!</button>
  </div>
</div>`;

function generateProjects () {
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


    document.getElementById('projects').innerHTML = PROJECTS.map(item => TPL_Results(item)).join('');
}

// projects generator
const CLUBS = [{
  "name": "Aggie Coding Club",
  "status": "Projects Chair (Spring 2023), Vice-President (Fall 2023)",
  "dates": "Fall 2022 - present",
  "description": "Managing the project managers (40+) and project members (450+) of Aggie Coding Club, by giving guidance, answering technical problems, setting up GitHub repositories. <ul> <li>Fall 2022 semester - organized 450+ members into 20+ projects, using a bot connected to the Discord API, of various topics ranging from model rocketry to mobile and web applications.</li> <li>Spring 2022 semester - leading a project of 20+ people using Twitter AP via Python involved with webscraping data, as well as interact with users via DMs and replies, hosting via Heroku by Salesforce.</li> <li>Fall 2021 semester - participated in a project that spliced video clips based off phoneme (auditory phrase) detection with CMUsphinx via Python and Docker.</li></ul>",
  "image": "acc_steve.png",
  "link": "https://www.aggiecodingclub.com/"
},{
  "name": "Engineering Teaching Assistant Organization",
  "status": "Vice-President",
  "dates": "Fall 2022 - present",
  "description": 'Engineering Teaching Assistant Organization.',
  "image": "tamu.png",
  "link": "https://discord.gg/8B5PhjWrfP"
},
{
  "name": "Texas A&M Game Developers",
  "status": "Member",
  "dates": "Fall 2021 - present",
  "description": 'Attended presentations from video game industry professionals and workshops. Participated in a semester-long game jam in a team of three peers, where we self-led weekly meetings and made a 2D platforming game in Unity.',
  "image": "tagd.webp",
  "link": "https://tagdigda.wixsite.com/gamedev"
},{
  "name": "Datathon",
  "status": "volunteer",
  "dates": "Fall 2021",
  "description": 'A datathon is where you build your analytical skill set and create data-driven solutions in 24 hours. We provide data science lectures, workshops, challenges, prizes, fun activities, swag, food, and more! ',
  "image": "datathon.svg",
  "link": "https://tamudatathon.com/"
}];

const Service_Results = item => `<div class="service-item">
<div>
  <img style="width:100px; height:auto object-fit: cover;" src="./assets/service_images/${item.image}">
</div>
<div style="margin-left:5%;">
  <h3 style="margin-bottom: 5px;">${item.name} - ${item.status}</h3>
  <div style="padding: 5px; color:var(--custom-dark)">
  <p class="Results-itemLanguage"><i>${item.dates}</i></p>
  <p class="Results-itemTags">${item.description}</p>
  <button onclick="window.location.href='${item.link};'">see more!</button>
</div>
</div>
</div>`;

function generateService () {
  fetch('./data.json')
  .then((response) => response.json())
  .then((json) => console.log(json));


  document.getElementById('service').innerHTML = CLUBS.map(item => Service_Results(item)).join('');
}

let isStyle1 = 1;

// style controller
function switchStyle() {
  localStorage.setItem("page_stylesheet_name", isStyle1 ? './style2.css' : './style1.css');
  load_style();
  show('Page_' + document.getElementById('current-page').innerText.toLowerCase());
  isStyle1 = !isStyle1;
}

function load_style() {
  page_style = localStorage.getItem("page_stylesheet_name");
  if (page_style === null) {
    page_style = "./style1.css";
  }
  document.getElementById('whichStyle').setAttribute("href", page_style);
}

load_style() // load style immediately
