const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (path, event) => {
    event.target.parentNode.style.backgroundImage = `url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
}

const createCalendar = () => {

    for(let i = 0; i  < calendarDays; i++) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        
        const calendarDoor = document.createElement("div");
        const calendarDoorText = document.createElement("div");
        
        calendarDoor.classList.add("image");
        
        calendarDoor.style.gridArea = "door" + (i + 1);
        calendarContainer.appendChild(calendarDoor);
        
       
        calendarDoorText.classList.add("text");    
        calendarDoorText.innerHTML = i + 1;
        calendarDoor.appendChild(calendarDoorText);    
        
        if (i+1 <= dd) {
            courseNumber = i + 1;
            let coursePath = `./courses/course-${courseNumber}.jpg`;
            calendarDoorText.addEventListener("click", openDoor.bind(null,  coursePath));
        }
    }
}

window.addEventListener('load', createCalendar);