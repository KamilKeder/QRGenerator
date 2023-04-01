var input_tekst = document.querySelector("#input_tekst");
var button_generuj = document.querySelector("#button_generuj");
var img_qr = document.querySelector("#img_qr");
button_generuj.addEventListener("click",generuj);
function generuj(){
	if(input_tekst.value == ""){
		alert("Wprowadz tekst do któego ma zostać utworzony kod QR.")
	}else{
	img_qr.classList.remove("ukryty")
	img_qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input_tekst.value
}
}
