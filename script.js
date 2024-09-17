"use strict";
var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const educationElement = document.getElementById('education');
    const expirienceElement = document.getElementById('expirience');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && expirienceElement && skillsElement)
        //create resume output
        const resumeOutput = `
    <h2>Resume</h2> 
    <p><strong>Name:</strong> ${name} </p>
`;
});
