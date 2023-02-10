// Я, Бутко Денис Васильвич, студент університету.




'use strict';

window.addEventListener('DOMContentLoaded', () =>{
	
	const message ={
		msg: " ",
		shift: 0,
		isDecrypt: " ",
		inc: 0
		}
	const alphabet = "_АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ ,.";

	



	const input = document.querySelectorAll(".input"),
				selectButton = document.querySelectorAll('.box__buttons'),
				resultButton = document.querySelectorAll('.result__buttons'),
				form = document.querySelector('.form');

for (let i = 0; i < selectButton.length; i++) {
	selectButton[i].addEventListener("click", () => {
		selectButton[i].classList.toggle("red");
	});
}

function CeasarsCipher(obj){
	let result = "";
	if(obj.shift === 0){
		obj.msg = result;
		return result;
	}else if (obj.isDecrypt === "encrypt"){
		for(let i = 0; i < obj.msg.length; i++){
			for(let j = 0; j < alphabet.length; j++){				
				if(obj.msg[i] === alphabet[j]){
					result += alphabet[(j+obj.shift)%alphabet.length];
				}else{
					continue;
				}
			}
		}
		obj.msg = result;
		return result;
	}else if(obj.isDecrypt === "decrypt"){
		for(let i = 0; i < obj.msg.length; i++){
			for(let j = alphabet.length; j > 0; j--){
				if(obj.msg[i] === alphabet[j]){
					result +=alphabet[(j+alphabet.length - obj.shift)%alphabet.length];
					
				}else{
					continue;
				}
			
		}
	}
		obj.msg = result;
		return result;
	
	}else{
		return "error";
	}
	
}
function modInverse(k, n) {
		for (let i = 1; i < n; i++) {
			if ((k * i) % n === 1)
				return i;
		}
		return 1;
}




 function affineEncrypt(obj) {
		if (typeof(obj.msg) ==="string" && typeof(obj.shift) ==="number" && typeof(obj.inc) ==="number") {
			let result = "";
			let m = parseInt(obj.shift);
			let b = parseInt(obj.inc);			
				for (let i = 0; i < obj.msg.length; i++) {
					for(let j = 0; j < alphabet.length; j++){				
						if(obj.msg[i] === alphabet[j]){
							result += alphabet[((m * j + b)%alphabet.length)];
						}else{
							continue;
						}
					}
				}

				return result;
			
		} else {
			return "error";
		}
	}

	 function affineDecrypt(obj) {
		if (typeof(obj.msg) ==="string" && typeof(obj.shift) ==="number" && typeof(obj.inc) ==="number") {
			let result = "";
			let m = obj.shift;
			let b = obj.inc;
			
			
			console.log(modInverse(m,alphabet.length));
				for (let i = 0; i < obj.msg.length; i++) {
					for(let j = 0; j < alphabet.length; j++){				
						if(obj.msg[i] === alphabet[j]){
							result += alphabet[((modInverse(m,alphabet.length) * (j + alphabet.length - b)) % alphabet.length)];
						}else{
							continue;
						}
					}
				}
				return result;
			
		} else {
			return "error";
		}
	}



selectButton[0].addEventListener('click', () =>{
	resultButton[0].addEventListener('click', () =>{
		message.msg = input[0].value.toUpperCase();
		message.shift = Number(input[1].value);
		message.isDecrypt = "encrypt";
		if(message.shift === 0){
			input[3].value = message.msg;
		}else{
			input[3].value = CeasarsCipher(message);
		}
		});
		resultButton[1].addEventListener('click', () =>{
			message.msg = input[3].value;
			message.shift = Number(input[1].value);
			message.isDecrypt = "decrypt";
			
			if(message.shift === 0){
				input[3].value = message.msg;
			}else{
				input[3].value = CeasarsCipher(message);
			}
			});
	});
	
	
	
	selectButton[1].addEventListener('click', () =>{
		message.inc = 0;
		resultButton[0].addEventListener('click', () =>{
		message.msg = input[0].value.toUpperCase();
		message.shift = Number(input[1].value);
			
			
			if(message.shift === 0){
				input[3].value = "error";
			}else{
				message.isDecrypt = "encrypt";
				input[3].value = affineEncrypt(message);
			}
			});
			resultButton[1].addEventListener('click', () =>{
				message.msg = input[3].value;
				message.shift = Number(input[1].value);
				
				if(message.shift === 0){
					input[3].value = "error";
				}else{
					message.isDecrypt = "decrypt";
					input[3].value = affineDecrypt(message);
				}
				});
		});


		selectButton[2].addEventListener('click', () =>{
		
		resultButton[0].addEventListener('click', () =>{
		message.msg = input[0].value.toUpperCase();
		message.shift = Number(input[1].value);
		message.inc = Number(input[2].value);
			
			if(message.shift === 0){
				input[3].value = "error";
			}else{
				message.isDecrypt = "encrypt";
				input[3].value = affineEncrypt(message);
			}
			});
			resultButton[1].addEventListener('click', () =>{
				message.msg = input[3].value;
				message.shift = Number(input[1].value);
				message.inc = Number(input[2].value);
				
				if(message.shift === 0){
					input[3].value = "error";
				}else{
					message.isDecrypt = "decrypt";
					input[3].value = affineDecrypt(message);
				}
				});
			});
			
			


	});	
	

