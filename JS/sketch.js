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

//sons do jogo
var raquetada;
var ponto;
var trilha;

function preload(){
    trilha = loadSound("ponto.mp3")
    raquetada = loadSound('raquetada.mp3')
    tilha = load('tilha.mp3')

}


var colidiu = false;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
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
    raquetada.play()
  }
}

//funções da raquete do oponente
function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
};

//funções placar
function incluiPlacar(){
  textAlign(CENTER)
  textSize(20)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(meusPontos, 170, 28);
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(pontosDoOponente, 470, 28);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos++
    ponto.play()
  }
  if(xBolinha < 10){
    pontosDoOponente++
    ponto.play()
  }
}