window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(){
		var input = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = input;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}
	//Izvedi prijavo
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	var dodajOpomnik = function(){
		var nazivInput = document.querySelector("#naziv_opomnika").value;
		var casInput = document.querySelector("#cas_opomnika").value;
		document.querySelector("#naziv_opomnika").value="";
		document.querySelector("#cas_opomnika").value="";
		document.querySelector("#opomniki").innerHTML += " \
			<div class='opomnik rob senca'> \
				<div class = 'naziv_opomnika'>" + nazivInput + "</div> \
				<div class = 'cas_opomnika'>Opomnik čez <span>" + casInput + "</span> sekund.</div> \
			</div>"
				
	}
	document.querySelector("#dodajGumb").addEventListener('click', dodajOpomnik);
	
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});