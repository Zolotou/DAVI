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



    pageProgress();

}

export default user;