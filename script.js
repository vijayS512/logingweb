const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const logingLink = document.querySelector('.loging-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}