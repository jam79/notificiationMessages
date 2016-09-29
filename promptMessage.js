function addMessage(){
    var msg = prompt("Enter message here: ");
    var reminderDay = prompt("Remind me on (DD/MM/YYYY: ");
    
    document.write(reminderDay + "<br>" + msg);
}

addMessage();