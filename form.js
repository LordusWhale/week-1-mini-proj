
/*
    Used for 'a' tag for contact form. Had to add delay as it was not focusing correctly
*/

async function focusOnInput() {
    await new Promise(r => setTimeout(r, 200))
    document.getElementById('name').focus();
}


/*
    Custom form validation
*/

async function submitForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    if (nameInput.value === ""){
        nameInput.focus();
        await showBanner("Please enter a valid name", 5000, true);
        return;
    }
    if (emailInput.value === ""){
        emailInput.focus();
        await showBanner("Please enter a valid email", 5000, true);
        return;
    }
    await showBanner("Success", 2000);
}
async function showBanner(message, time, error = false){
    const banner = document.getElementById('banner');
    const button = document.getElementById('submit-button');
    button.setAttribute('disabled', true);
    const bannerMessage = document.getElementById('banner-message');
    if (error) {
        banner.style.backgroundColor = "red"
    }
    bannerMessage.innerText = message;
    banner.style.top = '100px';
    await new Promise(r=>setTimeout(r, time));
    button.removeAttribute('disabled', false)
    banner.style.top = '0'
    banner.style.backgroundColor = "#F28C28"
}
let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
  }
  document.addEventListener('mousemove', onMouseMove)