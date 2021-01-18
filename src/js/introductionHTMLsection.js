const contLinks = document.querySelector('.introduction-links');
const links = document.querySelectorAll('.introduction-item');
const outPutLinks = document.querySelectorAll('.outPut-html__info');
const otputInfo = document.getElementById('otPutInfo')
const outputTitle = document.getElementById('output-title')

let arrLink = [];
let arrOutPutLinks = [];



links.forEach(element => {

    element.addEventListener('click', (e) => {
        let target = 'outPut-html__info ' + e.target.textContent.toLowerCase();
        for (let i = 0; i < outPutLinks.length; i++) {
            let name = outPutLinks[i].className
            console.log(e.target.innerHTML)

            if (name == target) {
                otputInfo.textContent = outPutLinks[i].textContent
                outputTitle.textContent = e.target.textContent
                break;
            } else {
                otputInfo.innerHTML = "nothing"
            }
        }
    })
})


const accordion = document.querySelectorAll('.contentBt')

for (let i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function (){

        this.classList.toggle('activTask')
    })

}