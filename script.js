// A Soma que Virou Texto
const numero1 = 50;
const numero2 = 10;
const textoNumero = "10"

// Aqui ele faz a soma com o numero
console.log(numero1 + numero2)

// Aqui ele contatena com o texto
console.log(numero1 + textoNumero)

// O Problema do Carrinho de Compras
const quantidade = 3;
const quantidadeDigitada = "3";

console.log(quantidade == quantidadeDigitada);
console.log(quantidade === quantidadeDigitada);
console.log(quantidade !== quantidadeDigitada);

// Par ou Ímpar?
const numeroParaTestar = 7;
const resto = numeroParaTestar % 2;

console.log(resto === 0);

// Sistema de Lotação
const capacidadeMaxima = 500;
let ingressosVendidos = 499;

console.log(ingressosVendidos < capacidadeMaxima);

ingressosVendidos = 500;
console.log(ingressosVendidos >= capacidadeMaxima);

// Autorização de Acesso

const idadeUsuario = 20;
const temCNH = true

console.log(idadeUsuario >= 18 && temCNH);

//Promoção da Loja
const valorDaCompra = 150;
const isClienteVIP = false

console.log(valorDaCompra > 200 || isClienteVIP);

// O Verificador de Férias
const temDinheiroGuarda = true;
const mesAtual = "dezembro";

console.log(temDinheiroGuarda && mesAtual === "dezembro");

// Painel de Administração
const perfilUsuario = "visitante"
console.log(perfilUsuario != "admin");

let acessoBloqueado = 0;
console.log(acessoBloqueado !== "0");

// Atualização de Dados
let statusPedido = "pendente";

statusPedido == "enviado";
console.log(statusPedido);

statusPedido = "enviado"
console.log(statusPedido);

// O Grande Validador
const anoNascimento = 2003;
const email = "mangarosa@gmail.com";
const termosAceitos = true;
const anoAtual = 2026;

const idade = anoAtual - anoNascimento;

console.log(idade >= 18 && termosAceitos === true && email !== "");
