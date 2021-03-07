function popupMessage() {
    // alert("This page is a prototype for the Pawtastic project, which is still under construction. Please visit again soon!!!");
    // console.log("This page is a prototype for the project, which is still under construction. Please visit again soon!!!");
}

function prototypeAlertPopup() {
    alert("This page is a prototype for the Pawtastic project, which is still under construction. Please visit again soon!!!");
}

window.onload = function () {
    var saveAndExitLink = document.getElementById("saveAndExitLink");
    saveAndExitLink.onclick = prototypeAlertPopup;    
}


// export {popupMessage, prototypeAlertPopup};