var textarea = document.getElementById('what');
var form = document.getElementsByTagName('form')[0];
var what = location.search;
var submit_btn = document.getElementById('submit');
var div = document.getElementById('car');
var answer = document.getElementById('answer');
var right = "Yup, that car is pretty nice.";
var wrong = "Nope, try again.";
var nothing = "You didn't enter a make and model, try again."
var correctAnswers = [
	'mazda rx7',
	'mazda rx8',
	'mazda rx3',
	'mazda miata',
	'mazda mx5',
	'nissan silvia',
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
	'subaru sti',
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

for(var i = 0; i < 25; i++){
	if (what == correctAnswers[i]){
		var correct = true;
	}
}
var div = document.getElementById('car');
 submit_btn.addEventListener('click', function() {
	 if (what == correctAnswers[0]){
		 div.innerHTML = '<img src="rx7.jpg">';
	 }
	 if (what == correctAnswers[1]){
		 div.innerHTML = '<img src="rx8.jpg">';
	 }
	 if (what == correctAnswers[2]){
		 div.innerHTML = '<img src="rx3.jpg">';
	 }
	 if (what == correctAnswers[3] || what == correctAnswers[4]){
		 div.innerHTML = '<img src="miata.jpg">';
	 }
	 if (what == correctAnswers[5]){
		 div.innerHTML = '<img src="s15.jpg">';
	 }
	 if (what == correctAnswers[6]){
		 div.innerHTML = '<img src="240.jpg">';
	 }
	 if (what == correctAnswers[7]){
		 div.innerHTML = '<img src="300zx.jpg">';
	 }
	 if (what == correctAnswers[8]){
		 div.innerHTML = '<img src="fairlady.jpg">';
	 }
	 if (what == correctAnswers[9] || what == correctAnswers[10] || what == correctAnswers[11]){
		 div.innerHTML = '<img src="240z.jpg">';
	 }
	 if (what == correctAnswers[12]){
		 div.innerHTML = '<img src="celica.jpg">';
	 }
	 if (what == correctAnswers[13]){
		 div.innerHTML = '<img src="celicaSupra.jpg">';
	 }
	 if (what == correctAnswers[14]){
		 div.innerHTML = '<img src="mkiii.jpg">';
	 }
	 if (what == correctAnswers[15]){
		 div.innerHTML = '<img src="corolla.jpg">';
	 }
	 if (what == correctAnswers[16]){
		 div.innerHTML = '<img src="mr2.jpg">';
	 }
	 if (what == correctAnswers[17]){
		 div.innerHTML = '<img src="s2k.jpg">';
	 }
	 if (what == correctAnswers[18] || what == correctAnswers[19]){
		 div.innerHTML = '<img src="nsx.jpg">';
	 }
	 if (what == correctAnswers[20] || what == correctAnswers[21]){
		 div.innerHTML = '<img src="sti.jpg">';
	 }
	 if (what == correctAnswers[22] || what == correctAnswers[23]){
		 div.innerHTML = '<img src="evo.jpg">';
	 }
 }, false);

submit_btn.addEventListener('click', function(){
	if(correct == true){
		answer.innerHTML = right;
	}
	else if(what == "" || what == " "){
		answer.innerHTML = nothing;
	}
	else{
		answer.innerHTML = wrong;
	}
});
