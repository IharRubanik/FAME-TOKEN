let wrapper = document.querySelector(".wrapper"),
lineLoading = document.querySelector(".line"),
welcome = document.querySelector(".welcome"),
connectButton = document.querySelector(".connect"),
preloader = document.querySelector(".preloader");


lineLoading.classList.add('active')
    setTimeout(() => {
        wrapper.classList.add('active')
    }, 1800);

if(wrapper.classList.contains = 'active') {
    setTimeout(() => {
        preloader.style.display = "none"
        welcome.classList.add('active')
    }, 2700);
}

connectButton.addEventListener('click', function(){
    wrapper.classList.add('whitelisted')

})