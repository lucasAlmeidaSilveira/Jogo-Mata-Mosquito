const dados = {
    largura: 0,
    altura: 0,
    posicaoX: 0,
    posicaoY: 0,
    vidas: 1,
    tempo: 10,

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
        if (document.getElementById("box-mosquito")) {
            document.getElementById("box-mosquito").remove();
            if (dados.vidas > 3) {
                window.location.href = "fim_de_jogo.html";
            } else {
                document.getElementById("v" + dados.vidas).src =
                    "./assets/img/coracao_vazio.png";
                dados.vidas++;
            }
        }

        posicaoX = dados.posicaoX < 0 ? 0 : dados.posicaoX;
        posicaoY = dados.posicaoY < 0 ? 0 : dados.posicaoY;

        const div = document.createElement("div");
        div.id = "box-mosquito";
        div.innerHTML = `
        <img onclick="document.getElementById('box-mosquito').remove()" class="${this.tamanhoRandom()} ${this.ladoRandom()}" style="left:${posicaoX}px; top:${posicaoY}px" src="./assets/img/mosca.png">
        `;
        document.body.appendChild(div);
    },

    tamanhoRandom() {
        const classe = Math.floor(Math.random() * 3);
        switch (classe) {
            case 0:
                return "mosquito1";
            case 1:
                return "mosquito2";
            case 2:
                return "mosquito3";
        }
    },

    ladoRandom() {
        const classe = Math.floor(Math.random() * 2);
        if (classe == 1) {
            return "ladoB";
        }
    },
};

const jogo = {
    init() {
        document.getElementById('cronometro').innerHTML = dados.tempo
        const criarMosquito = setInterval(() => {
            dados.ajustaTamanhoPalcoJogo();
            dados.posicaoXY();
            DOM.createImg();
        }, 2000);
        this.cronometro(criarMosquito);
    },
    cronometro(criarMosquito) {
        let cronometro = setInterval(() => {
            dados.tempo -= 1;
            if (dados.tempo < 0) {
                clearInterval(cronometro)
                clearInterval(criarMosquito)
                alert("Vitória");
            } else {
                document.getElementById("cronometro").innerHTML = dados.tempo;
            }
        }, 1000);
    },
};
