let wrapper = document.querySelector(".wrapper"),
lineLoading = document.querySelector(".line"),
welcome = document.querySelector(".welcome"),
connectButton = document.querySelector(".connect"),
text = document.querySelector(".text"),
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



document.querySelector('.social').addEventListener('click', function() {
    wrapper.classList.add('error');
    text.innerHTML = "Sorry, you are not eligible...But Wait! </br> There are only 3 small steps to claim your NFT FAME PASS 16";
})

document.querySelector('.adress').addEventListener('click', function() {
    wrapper.classList.add('success');
})
