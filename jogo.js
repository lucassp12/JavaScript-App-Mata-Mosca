
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
	criaMosquitoTempo = 1500
}else if (nivel === 'dificil'){
	criaMosquitoTempo = 1000
}else if (nivel === 'chucknorris'){
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){
	altura = window.innerHeight
	largura = window.innerWidth

	//console.log(altura, largura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)


//criar o elemento html
function posicaoRandomica(){

	//remover o mosquito anterior (caso exista)
	
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		if(vidas >=  3){
			window.location.href = 'fim_de_jogo.html'
		}else{
		document.getElementById('v' + vidas).src="img/coracao_vazio.png"
		vidas ++
	}

	}



	var posicaoX = Math.floor(Math.random()* largura) - 90
	var posicaoY = Math.floor(Math.random()* altura) - 90

	posicaoX = posicaoX < 0 ? 0: posicaoX
	posicaoY = posicaoY < 0 ? 0: posicaoY
	//console.log(posicaoX, posicaoY)
	
	var mosca = document.createElement('img')
	mosca.src = 'img/mosca.png'
	mosca.className = tamanhoAleatorio() + ladoAleatorio()
	mosca.style.left = posicaoX + 'px'
	mosca.style.top = posicaoY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosquito'
	mosca.onclick = function(){
		this.remove()

	}
	document.body.appendChild(mosca)
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio(){

	var lado = Math.floor(Math.random()* 2)

	switch(lado){
		case 0:
			return ' ladoA'
		case 1:
			return ' ladoB'	
	}

}


function iniciarJogo(){
	var nivel = document.getElementById('nivel').value

		if(nivel === ''){
			alert('Selecione um nível para iniciar o jogo')
			return false
		}
		window.location.href = "app.html?" + nivel
}