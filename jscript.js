const alimentos = {
    "melancia": { "carboidratos": 8, "proteinas": 0.6, "gorduras": 0.2, "IG": 72, "fibras": 0.4 },
    "melão": { "carboidratos": 9, "proteinas": 0.8, "gorduras": 0.1, "IG": 65, "fibras": 0.9 },
    "banana prata": { "carboidratos": 22, "proteinas": 1.3, "gorduras": 0.3, "IG": 51, "fibras": 2.6 },
    "laranja": { "carboidratos": 12, "proteinas": 1, "gorduras": 0.2, "IG": 43, "fibras": 2.4 },
    "linguiça calabresa": { "carboidratos": 2, "proteinas": 14, "gorduras": 27, "IG": 0, "fibras": 0 },
    "arroz branco cozido": { "carboidratos": 28, "proteinas": 2.1, "gorduras": 0.2, "IG": 73, "fibras": 0.4 },
    "arroz integral cozido": { "carboidratos": 23, "proteinas": 2.6, "gorduras": 0.9, "IG": 50, "fibras": 1.8 },
    "arroz parbolizado cozido": { "carboidratos": 25, "proteinas": 2.3, "gorduras": 0.4, "IG": 58, "fibras": 1.4 },
    "aveia em flocos": { "carboidratos": 66, "proteinas": 16, "gorduras": 6.9, "IG": 55, "fibras": 10.6 },
    "macarrao cozido": { "carboidratos": 25, "proteinas": 5, "gorduras": 1, "IG": 49, "fibras": 1.8 },
    "feijão cozido": { "carboidratos": 14, "proteinas": 5, "gorduras": 0.5, "IG": 28, "fibras": 8.3 },
    "batata doce": { "carboidratos": 20, "proteinas": 1.6, "gorduras": 0.1, "IG": 44, "fibras": 3 },
    "pão francês": { "carboidratos": 55, "proteinas": 9, "gorduras": 3, "IG": 95, "fibras": 2.7 },
    "frango grelhado": { "carboidratos": 0, "proteinas": 27, "gorduras": 3, "IG": 0, "fibras": 0 },
    "ovo cozido": { "carboidratos": 1.1, "proteinas": 13, "gorduras": 10, "IG": 0, "fibras": 0 },
    "leite integral": { "carboidratos": 4.7, "proteinas": 3.3, "gorduras": 3.2, "IG": 30, "fibras": 0 },
    "banana": { "carboidratos": 22, "proteinas": 1.1, "gorduras": 0.3, "IG": 51, "fibras": 2.6 },
    "maçã": { "carboidratos": 14, "proteinas": 0.3, "gorduras": 0.2, "IG": 38, "fibras": 2.4 },
    "abacate": { "carboidratos": 9, "proteinas": 2, "gorduras": 15, "IG": 15, "fibras": 6.7 },
    "tomate": { "carboidratos": 4, "proteinas": 1, "gorduras": 0.2, "IG": 15, "fibras": 1.2 },
    "cenoura": { "carboidratos": 9, "proteinas": 1, "gorduras": 0.2, "IG": 47, "fibras": 2.8 },
    "alface": { "carboidratos": 2, "proteinas": 1, "gorduras": 0.1, "IG": 15, "fibras": 1.3 },
    "brócolis": { "carboidratos": 7, "proteinas": 3.7, "gorduras": 0.4, "IG": 15, "fibras": 2.6 },
    "abóbora": { "carboidratos": 7, "proteinas": 1, "gorduras": 0.1, "IG": 75, "fibras": 0.5 },
    "couve": { "carboidratos": 7, "proteinas": 3, "gorduras": 0.4, "IG": 15, "fibras": 3.6 },
    "couve-flor": { "carboidratos": 5, "proteinas": 2, "gorduras": 0.3, "IG": 15, "fibras": 2.5 },
    "pepino": { "carboidratos": 3, "proteinas": 1, "gorduras": 0.1, "IG": 15, "fibras": 0.5 },
    "espinafre": { "carboidratos": 4, "proteinas": 2.9, "gorduras": 0.4, "IG": 15, "fibras": 2.2 },
    "beterraba": { "carboidratos": 10, "proteinas": 1.6, "gorduras": 0.2, "IG": 64, "fibras": 2.8 },
    "pimentão": { "carboidratos": 6, "proteinas": 1, "gorduras": 0.2, "IG": 15, "fibras": 2.1 },
    "manga": { "carboidratos": 25, "proteinas": 0.8, "gorduras": 0.6, "IG": 56, "fibras": 1.6 },
    "pera": { "carboidratos": 15, "proteinas": 0.4, "gorduras": 0.1, "IG": 38, "fibras": 3.1 },
    "kiwi": { "carboidratos": 15, "proteinas": 1, "gorduras": 0.5, "IG": 52, "fibras": 3 },
    "morango": { "carboidratos": 7, "proteinas": 0.8, "gorduras": 0.3, "IG": 41, "fibras": 2 },
    "amêndoas": { "carboidratos": 22, "proteinas": 21, "gorduras": 49, "IG": 0, "fibras": 12.5 },
    "castanha de caju": { "carboidratos": 30, "proteinas": 18, "gorduras": 43, "IG": 22, "fibras": 3.3 },
    "castanha do pará": { "carboidratos": 12, "proteinas": 14, "gorduras": 66, "IG": 22, "fibras": 7.5 },
    "noz": { "carboidratos": 14, "proteinas": 15, "gorduras": 60, "IG": 15, "fibras": 6.7 },
    "amendoim": { "carboidratos": 16, "proteinas": 25, "gorduras": 49, "IG": 14, "fibras": 8.5 },
    "chia": { "carboidratos": 42, "proteinas": 16, "gorduras": 31, "IG": 1, "fibras": 34.4 },
    "linhaça": { "carboidratos": 29, "proteinas": 18, "gorduras": 42, "IG": 0, "fibras": 27.3 },
    "abóbora de inverno": { "carboidratos": 6, "proteinas": 1, "gorduras": 0.1, "IG": 75, "fibras": 0.5 },
    "feijão preto cozido": { "carboidratos": 22, "proteinas": 8, "gorduras": 0.9, "IG": 30, "fibras": 8.7 },
    "feijão branco cozido": { "carboidratos": 26, "proteinas": 9, "gorduras": 0.9, "IG": 31, "fibras": 6.3 },
    "lentilha cozida": { "carboidratos": 20, "proteinas": 9, "gorduras": 0.8, "IG": 29, "fibras": 7.9 },
    "grão-de-bico cozido": { "carboidratos": 27, "proteinas": 9, "gorduras": 2.6, "IG": 28, "fibras": 7.6 },
    "noz-pecã": { "carboidratos": 14, "proteinas": 9, "gorduras": 72, "IG": 10, "fibras": 9.6 },
    "groselha": { "carboidratos": 10, "proteinas": 0.5, "gorduras": 0.2, "IG": 24, "fibras": 4.3 },
    "cabeludo de castanha": { "carboidratos": 19, "proteinas": 10, "gorduras": 63, "IG": 35, "fibras": 6.7 },
    "tâmara": { "carboidratos": 75, "proteinas": 2, "gorduras": 0.2, "IG": 103, "fibras": 8 }
};

// Função personalizada para arredondar números
function round(num, decimalPlaces) {
    return +(Math.round(num + "e+" + decimalPlaces) + "e-" + decimalPlaces);
}

function exibirInfo() {
    let alimento = document.getElementById('alimento').value;
    let grama = parseInt(document.getElementById('gramas').value); // Convertendo para inteiro

    if (isNaN(grama)) {
        alert("Por favor, insira um valor válido para as gramas.");
        return;
    }

    if (alimento in alimentos) {
        let c_alimento = round(grama * alimentos[alimento]["carboidratos"] / 100, 2);
        let p_alimento = round(grama * alimentos[alimento]["proteinas"] / 100, 2);
        let g_alimento = round(grama * alimentos[alimento]["gorduras"] / 100, 2);
        let carga_g = round(alimentos[alimento]["IG"] * c_alimento / 100, 2);
        let calorias = round(c_alimento * 4 + p_alimento * 4 + g_alimento * 9, 2);
        let fibras = round(grama * alimentos[alimento]["fibras"]/100,2);

        let Cg;
        if (carga_g <= 10) {
            Cg = "Baixa";
            document.getElementById("cg").style.color = "#ffffff";

        } else if (carga_g > 10 && carga_g < 19) {
            Cg = "Média";
            document.getElementById("cg").style.color = "#f7e91e";
        } else {
            Cg = "Alta";
            document.getElementById("cg").style.color = "#f50400";
        }

        let indiceG;
        if (alimentos[alimento]["IG"] <= 55) {
            indiceG = "Baixo";
            document.getElementById("ig").style.color = "#ffffff";

        } else if (alimentos[alimento]["IG"] > 55 && alimentos[alimento]["IG"] <= 69) {
            indiceG = "Moderado";
            document.getElementById("ig").style.color = "#f7e91e";
        } else {
            indiceG = "Alto";
            document.getElementById("ig").style.color = "#f50400";
        }

        document.getElementById("alim").innerHTML = alimento;
        document.getElementById("gram").innerHTML = grama + " g";
        document.getElementById("calorias").innerHTML = calorias + " Kcal";
        document.getElementById("carbo").innerHTML = c_alimento + " g";
        document.getElementById("prot").innerHTML = p_alimento + " g";
        document.getElementById("gord").innerHTML = g_alimento + " g";
        document.getElementById("ig").innerHTML = alimentos[alimento]["IG"] + " / "+ indiceG;
        document.getElementById("cg").innerHTML = carga_g + " / "+ Cg;
        document.getElementById("fib").innerHTML = fibras + " g";

        document.getElementById("alim").style.borderRadius = "0 0 10px 0";
        document.getElementById("gram").style.borderRadius = "0 0 10px 0";
        document.getElementById("calorias").style.borderRadius = "0 0 10px 0";
        document.getElementById("carbo").style.borderRadius = "0 0 10px 0";
        document.getElementById("prot").style.borderRadius = "0 0 10px 0";
        document.getElementById("gord").style.borderRadius = "0 0 10px 0";
        document.getElementById("ig").style.borderRadius = "0 0 10px 0";
        document.getElementById("cg").style.borderRadius = "0 0 10px 0";
        document.getElementById("fib").style.borderRadius = "0 0 10px 0";

        document.getElementById("mudarradio").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio2").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio3").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio4").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio5").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio6").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio7").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio8").style.borderRadius = "10px 0 0 0";
        document.getElementById("mudarradio9").style.borderRadius = "10px 0 0 0";

        // Exibe o resultado
        document.getElementById("result").style.display = "block";

        // Oculta a mensagem de erro, se houver
        document.getElementById("span").style.display = "none";
    } else {
        document.getElementById("span").innerHTML = "Nenhuma informação sobre <ins>" + alimento + "</ins>";

        // Exibe a mensagem de erro
        document.getElementById("span").style.display = "block";

        // Limpa o conteúdo de resultado
        document.getElementById("alim").innerHTML = "";
        document.getElementById("gram").innerHTML = "";
        document.getElementById("calorias").innerHTML = "";
        document.getElementById("carbo").innerHTML = "";
        document.getElementById("prot").innerHTML = "";
        document.getElementById("gord").innerHTML = "";
        document.getElementById("ig").innerHTML = "";
        document.getElementById("cg").innerHTML = "";
        document.getElementById("fib").innerHTML = "";

        document.getElementById("mudarradio").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio2").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio3").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio4").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio5").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio6").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio7").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio8").style.borderRadius = "10px 0 10px 0";
        document.getElementById("mudarradio9").style.borderRadius = "10px 0 10px 0";

        // Oculta o resultado
        document.getElementById("result").style.display = "none";
    }
}
