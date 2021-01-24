const modalHeader = document.querySelector('.modal-header');
const modalContent = document.querySelector('.modal-content');
export default function welcome() {
    const modalHeader = document.querySelector('.modal-header');
    const modalContent = document.querySelector('.modal-content');
    let welcomePopup;
    let inputPopup;
    let welcomeButton;
    let nameUser;
    let welcomeContent;
    // let all;
    let welcomeUser;


    welcomeScreen();

    function welcomeScreen() {
        modalHeader.innerHTML = "Welcome Traveller!";
        modalContent.insertAdjacentHTML('afterbegin', '<div class="welcome"><h3>What is your Nickname:</h3><input class="welcome-input" type="text" placeholder="name"/><div id="welcome-button">I am ready</div></div>');
        welcomeButton = document.getElementById('welcome-button');
        welcomePopup = document.querySelector('.welcome');
        /*   all = document.querySelectorAll(".wrapper, footer, .welcom-img, .header");
          for (let i = 0; i < all.length; i++) {
              all[i].style.display = "none"; //все спрятано
          } */

        createUser();
    }

    function createUser() {
        inputPopup = document.querySelector('.welcome-input');
        inputPopup.addEventListener('keydown', (e) => {
            welcomeButton.className = 'welcome-button';
        })
        welcomeButton.addEventListener('click', () => {
            nameUser = inputPopup.value;
            welcomePopup.innerHTML = "";
            welcomePopup.innerHTML = `<h2>Choose your level ${nameUser}:</h2><div class="smash"><div class="welcome-smash1">
            </div><div class="welcome-smash2"></div></div>`;
            const noobButton = document.querySelector(".welcome-smash1");
            const proButton = document.querySelector(".welcome-smash2");
            noobButton.addEventListener('click', () => {
                enterThePage("newbie")
            })
            proButton.addEventListener('click', () => {
                enterThePage("intermidiate")
            })
        })

    }

    function enterThePage(level) {
        /*
        for (let i of all) {
            i.style.display = 'flex'; //снова выводим спрятанные корневые узлы
        }
        */
        welcomeUser = document.querySelector('.modal-header');

        welcomeUser.innerHTML = `Well, ${nameUser} your level is: ${level} `;
        //welcomeUser.innerHTML = `Well ${ nameUser } \n your level is: ${ level } `;
        //welcomeBody.removeChild(welcomeWindow);
        localStorage.setItem('userName', `${nameUser} `);
        localStorage.setItem('levelOfUser', `${level} `);
        // нужно очищать окно при нажатии на кнопку
    }
}


//check if user already exists 

document.addEventListener("DOMcontentLoaded", checkUser());
function checkUser() {
    let userName = localStorage.getItem('userName');
    //   console.log(userName)
    if (userName != null) {
        modalHeader.innerHTML = `Welcome back, <span>${localStorage.getItem('userName')}</span>`;
        modalContent.innerHTML = `<h3 class="welcome-user-level"> Your level is still ${localStorage.getItem('levelOfUser')}</h3><h3>Check this quote:</h3>
        <p class="welcome-api"></p>
        <h3>Don't worry, be happy!</h3>
        <p>We do not collect or use the information you provided here.</p>
        <p>All your personal data is stored in the Local Storage of your browser of your local computer.</p>
            `;
    }
    else {
        welcome();
    }
}

// reset the user statistic
let reset = document.querySelector('.welcome-reset-button');
reset.addEventListener('click', () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('levelofUser');
    window.location.reload(false);
})

// get the Api quote
async function getQuote() {
    const url = "https://api.adviceslip.com/advice"
    const data = await fetch(url);
    const result = await data.json();
    document.querySelector('.welcome-api').textContent = result.slip.advice;
}
getQuote(); 