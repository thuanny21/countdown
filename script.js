import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown('24 December 2021 23:59:59 GMT-0300');
const tempoParaMeuAniversario = new Countdown('20 November 2021 23:59:59 GMT-0300');

console.log(tempoParaONatal.total);

setInterval(() => {
    console.log(tempoParaMeuAniversario.total);
}, 1000)
