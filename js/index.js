window.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelector(".tabheader__items"),
    tabsParent = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent")

    const className = "tabheader__item_active"

    function hideTabContents(){
        tabsContent.forEach(item => {
            item.style.display = "none"
        })

        tabs.querySelector("."+className).classList.remove(className)
    }

    function openTabContent(index){
        tabsContent[index].style.display = "block";
        tabsParent[index].classList.add(className);
    }

    hideTabContents()
    openTabContent(0)

    tabs.addEventListener("click", (event) => {
        const target = event.target

        if (!(target.classList.contains(className))){
            tabsParent.forEach((item, index) => {
                if(item == target){
                    hideTabContents()
                    openTabContent(index)
                }
            })
        }
    })

    // timer

    const deadLine = "2024-04-07"

    const getTimeRemaining = (endTime) =>{
        const t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) & 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
        
        return {
            "total": t,
            days,
            hours,
            minutes,
            seconds
        }
    }

    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`
        } else {
            return num;
        }
    }
    
    const setClock = (endTime) => {
        const timer = document.querySelector(".timer"),
            days = timer.querySelector("#days"),
            hours = timer.querySelector("#hours"),
            minutes = timer.querySelector("#minutes"),
            seconds = timer.querySelector("#seconds"),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const objTime = getTimeRemaining(endTime);

            days.innerHTML = getZero(objTime["days"])
            hours.innerHTML = getZero(objTime["hours"])
            minutes.innerHTML = getZero(objTime["minutes"])
            seconds.innerHTML = getZero(objTime["seconds"])

            if (objTime["t"] <= 0){
                clearInterval(timeInterval)
            }
        }
    }

    setClock(deadLine)
});