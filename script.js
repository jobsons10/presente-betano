const ShowMeTwo = function() {
    document.getElementById('one').classList.add('hide-me');
    document.getElementById('two').classList.remove('hide-me');
    
}

const ShowMeThree = function() {
    document.getElementById('two').classList.add('hide-me');
    document.getElementById('three').classList.remove('hide-me');
}

const Page = function() {
    window.location.href = "http://www.devmedia.com.br";
}


const Redirect = function() {
    setTimeout(Page, 2000);
}

