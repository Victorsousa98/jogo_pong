//variaveis da bolinha
var xBolinha = 300;
var yBolinha = 200;
var diametro = 20;
var raio = diametro / 2;

//valocidade da bolinha
var velocidadeXBolinha = 5;
var velocidadeYBolinha = 5;

//variaveis minha raquete
var xRaquete = 5;
var yRaquete = 150;
var larguraRaquete = 10;
var alturaRaquete = 90

//Variaveis Raquete oponte
var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeYOponente;

//Placar
var meusPontos = 0;
var pontosDoOponente = 0;


var colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoComBorda();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente)
  movimentaRaquete();
  verificaColisaoComRaquete(xRaquete, yRaquete);
  movimentaRaqueteOponente();
  verificaColisaoComRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

//funções bolinha
function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);   
};
function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
};
function verificaColisaoComBorda(){
   
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1
     };
  if(yBolinha + raio > height || yBolinha - raio < 0){
    velocidadeYBolinha *= -1
  };    
};

//funções da raquete
function mostraRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);

};
function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  };
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  };
};
function verificaColisaoComRaquete(x, y){
  colidiu = collideRectCircle(x, y,       larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    
  if(colidiu){
    velocidadeXBolinha *= -1
  }
}

//funções da raquete do oponente
function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
};

//funções placar
function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26);
  text(pontosDoOponente, 321, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos++
  }
  if(xBolinha < 10){
    pontosDoOponente++
  }
}