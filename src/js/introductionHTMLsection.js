const contLinks = document.querySelector('.introduction-links');
const links = document.querySelectorAll('.introduction-item');
const outPutLinks = document.querySelectorAll('.outPut-html__info');
const otputInfo = document.getElementById('otPutInfo')
let arrLink = [];
let arrOutPutLinks = [];



links.forEach(element => {

    element.addEventListener('click', (e) => {
        let target='outPut-html__info '+e.target.innerHTML.toLowerCase();
        for (let i=0;i<outPutLinks.length;i++){
            let name=outPutLinks[i].className
            
            console.log(name);
            if (name==target){
                otputInfo.textContent =  outPutLinks[i].textContent
                break;
            }else {
                otputInfo.innerHTML = "nothing"
            }
        }
    })
})


// for (let i=0;i<=outPutLinks.length;i++){

//         console.log(outPutLinks[i].className)

//     }
