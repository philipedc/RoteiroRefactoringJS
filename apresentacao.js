const { formatarMoeda } = require('./util');

function gerarFaturaStr(fatura, calc) {
	let faturaStr = `Fatura ${fatura.cliente}\n`;
	for (let apre of fatura.apresentacoes) {
		faturaStr += `  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos)\n`;
	}
	faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
	faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
	return faturaStr;
}

// function geraFaturaHTML(fatura, calc) {
// 	let faturaHtml = `<html>\n<p> Fatura ${fatura.cliente} </p>\n<ul>\n`;
// 	for (let apre of fatura.apresentacoes) {
// 		faturaHtml += `<li>  ${calc.repo.getPeca(apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(apre))} (${apre.audiencia} assentos) </li>\n`;
// 	}
// 	faturaHtml += `</ul>\n<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))} </p>\n`;
// 	faturaHtml += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} </p>\n</html>`;
// 	return faturaHtml;
// }

module.exports = gerarFaturaStr;