function user () {
    const userPageProgress = document.getElementsByTagName("title")[0].innerHTML;
    const userPageDate = new Date();

    function pageProgress(){
        if(localStorage.getItem(userPageProgress) === null){
            localStorage.setItem(userPageProgress, 1);
        }
        else{
            localStorage[userPageProgress] = parseInt(localStorage[userPageProgress]) + 1;
            localStorage.setItem(`${userPageProgress}Date`, userPageDate);
        }
    }

    userSessionLoad();

    pageProgress();

}

function userSessionLoad(){
    const links = document.querySelectorAll('.introduction-item');
    for (let i of links){
        console.log(sessionStorage[i.innerHTML]);
        if(sessionStorage[i.innerHTML]){
            i.style.color = "orange";
        }
    }
    
}

export default user;