const ShowMeTwo = function() {
    document.getElementById('two').classList.remove('hide-me');
    document.getElementById('one').classList.add('hide-me');
}

const ShowMeThree = function() {
    document.getElementById('two').classList.add('hide-me');
    document.getElementById('three').classList.remove('hide-me');
}