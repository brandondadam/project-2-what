var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];
var what = location.search;
var submit_btn = document.getElementById('submit');
var answer = document.getElementById('answer');
var right = "Yup, that car is pretty nice.";
var wrong = "I think that car sucks.";

var correctAnswers = [
	'mazda rx7',
	'mazda rx7',
	'mazda rx3',
	'mazda miata',
	'mazda mx5',
	'nissan silva',
	'nissan 240sx',
	'nissan 300zx',
	'nissan fairlady',
	'datsun 240z',
	'datsun 260z',
	'datsun 280z',
	'toyota celica',
	'toyota celica supra',
	'toyota supra',
	'toyota corolla',
	'toyota mr2',
	'honda s2000',
	'honda nsx',
	'acura nsx',
	'subaru impreza sti',
	'subaru sti,',
	'mitsubishi lancer evolution',
	'mitsubishi evo'
];

what = what.replace('?what=', '');
what = what.replace(/\+/g, ' ');
what = decodeURIComponent(what);
textarea.value = what;
console.log(what);

textarea.addEventListener('change', function(){
	form.submit();
}, false );


	if (correctAnswers[0] == what){
		var correct = true;
	}


submit_btn.addEventListener('click', function(){
	if(correct == true){
		answer.innerHTML = right;
	}
	else{
		answer.innerHTML = wrong;
	}
});
