function downloadCV(){
    
    let link=document.createElement("m");
    link.href="cv.pdf";
    link.download ="Mayank_CV.pdf";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
}
function downloadCV(){
    window.location.href="cv.pdf"
}

function whatsapp(){
    window.open("https://wa.me/916388077651", "_blank")
}


