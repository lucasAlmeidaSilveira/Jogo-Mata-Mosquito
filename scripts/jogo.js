const dados = {
    largura: 0,
    altura: 0,
    posicaoX: 0,
    posicaoY: 0,

    ajustaTamanhoPalcoJogo() {
        this.altura = window.innerHeight;
        this.largura = window.innerWidth;
        return this.altura, this.largura;
    },

    posicaoXY() {
        this.posicaoX = Math.floor(Math.random() * dados.largura) - 90;
        this.posicaoY = Math.floor(Math.random() * dados.altura) - 90;
        return this.posicaoX, this.posicaoY;
    },
};

const DOM = {
    createImg() {
        if(document.getElementById('mosquito')) {
            document.getElementById('mosquito').remove()
        }

        posicaoX = dados.posicaoX < 0 ? 0 : dados.posicaoX
        posicaoY = dados.posicaoY < 0 ? 0 : dados.posicaoY

        const div = document.createElement('div')
        div.innerHTML = `
        <img id="mosquito" class="${this.tamanhoRandom()} ${this.ladoRandom()}" style="left:${posicaoX}px; top:${posicaoY}px" src="./assets/img/mosca.png">
        `
        document.body.appendChild(div)
    },

    tamanhoRandom(){
        var classe = Math.floor(Math.random() * 3)
        switch(classe){
            case 0:
                return 'mosquito1'
            case 1:
                return 'mosquito2'
            case 2:
                return 'mosquito3'
        }
    },

    ladoRandom(){
        var classe = Math.floor(Math.random() * 2)
        if(classe == 1){
            return 'ladoB'
        }
    },
    
};

const jogo = {
    init() {
        setInterval(()=>{
            dados.ajustaTamanhoPalcoJogo();
            dados.posicaoXY();
            DOM.createImg()
        }, 1000)

    },
};


