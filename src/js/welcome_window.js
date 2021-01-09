export default function welcome() {
    const welcomeTitle = document.querySelector('.welcom-img');
    const welcomeBody = document.querySelector('body');
    let welcomePopup;
    let inputPopup;
    let welcomeButton;
    let nameUser;



    welcomeScreen();

    function welcomeScreen() {
        const welcomeWindow = document.createElement('div');
        welcomeWindow.className = 'welcome-popup-background';
        welcomeWindow.insertAdjacentHTML('afterbegin', '<div class="welcome-popup"><h2>Welcome Traveler!</br>What is your Nickname:</h2><input  class="welcome-input" type="text" placeholder="name"/><div id="welcome-button"><h2>I am ready</h2></div></div>');
        welcomeBody.appendChild(welcomeWindow);
        console.log(welcomeTitle.style);
        welcomeButton = document.getElementById('welcome-button');
        welcomePopup = document.querySelector('.welcome-popup');
        // inputPopup = document.querySelector('.welcome-input');
        let all = document.querySelectorAll(".wrapper, footer, .welcom-img");
        for (let i = 0; i < all.length; i++) {
            all[i].style.display = "none";
        }
        // inputPopup.addEventListener('onkeydown', ()=>{
        //     // document.querySelector('body').removeChild(welcomeWindow);
        //     welcomeWindow.insertAdjacentHTML

        // })

        createUser();
    }

    function createUser() {
        inputPopup = document.querySelector('.welcome-input');
        console.log(inputPopup);
        inputPopup.addEventListener('keydown', (e) => {
            welcomeButton.className = 'welcome-button';
        })
        welcomeButton.addEventListener('click', ()=>{
            nameUser = inputPopup.value;
            welcomePopup.innerHTML ="";
            welcomePopup.insertAdjacentHTML('afterbegin',`<h2>Choose your level ${nameUser}:</h2><div class="smash"><div class="welcome-smash1" style= "background-image: url('../../assets/smeharik1.jpg')">I am new</div><div class="welcome-smash2">I am already Smeharik</div></div>`)
        })
    }
}