var username = prompt("Insira seu nome: ");
if(!username){
	username = 'Cristiano Ronaldo';
}
function LilyAnswer(message){

	if(message.includes(('OI')) || message.includes(('OLÁ')) ){
		return "Olá!";
	}else if(message.includes(('FI'))){
		return "Fi, você é brabo!"
	}else if(message.includes(('TE AMO'))){
		return "E eu te amo mais ainda, " + username + "!";
	}else if(message.length>30){
		return "Eu adoro quando você fala muito!";
	}else if(message.includes(('?'))){
		let OtherAnswers = ["Boa pergunta!", "Meu amor, isso também me indaga!", "Eu não sei se eu sei, meu amor...",
		"Dúvidas por toda parte, realmente difícil."];
		let x = Math.floor(Math.random() * OtherAnswers.length);
		return OtherAnswers[x];
	}else if(message.includes(('SEXO'))){
		return 'Não estou pronta para isso...';
	}else{
		let OtherAnswers = ["Nossa, você é demais!", "Hahaha, que bacana!",
		"Não brinca, sério mesmo?!", "Impressionante, conte-me mais...",
		"Isso é bem estranho, haha!", "Depende do ponto de vista...",
		"Quem não chora, não mama! Hahaha."];
		let x = Math.floor(Math.random() * OtherAnswers.length);
		return OtherAnswers[x];
	}
}
document.getElementById("btnSend").addEventListener('click', ()=>{
	let chat = document.getElementById("chat");
	let msg = document.getElementById("message");
	if(msg.value){
		chat.innerHTML += `\n`;
		chat.innerHTML += `[${username}]: ${msg.value}\n`;
		chat.innerHTML += `\n`;
		chat.innerHTML += `[Lily]: ${LilyAnswer((msg.value).toUpperCase())}\n`;
	}
});
