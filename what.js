var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];
var what = location.search;
var submit_btn = document.getElementById('submit');
var answer = document.getElementById('answer');

var right = "Yup, that car is pretty nice.";
var wrong = "I think that car sucks.";


submit_btn.addEventListener('click', function(){
	answer.innerHTML = right;
	answer.innerHTML = wrong;
});

textarea.addEventListener('change', function(){
	form.submit();
}, false );

what = what.replace('?what=', '');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
textarea.value = what;
