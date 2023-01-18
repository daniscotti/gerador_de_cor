let arrayDeCoresDaFunção = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]

function trocaCor () {
    corAleatória = "#";
    for (let i=0; i < 6; i++) {
        let algarismo = Math.floor(Math.random() * 16);
        let valor = arrayDeCoresDaFunção[algarismo];
        corAleatória += valor;
    }
    document.querySelector("body").style.background = corAleatória;
    document.querySelector("p").textContent = corAleatória;
}