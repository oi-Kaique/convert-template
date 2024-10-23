//cotação de moedas do dia 

const USD = 4.87
const EUR = 5.37
const GBP = 6.28


// Obtendo so elementos do Formulario
const form = document.querySelector("form");

// Vamos olhar o Input no HTML
const amount = document.getElementById("amount"); // SELECIONAR OS ELEMENTOS (CHAMAR DO HTML)

//Vamos pegar o valor selecionado  input
const currency = document.getElementById("currency"); //  SELECIONAR OS ELEMENTOS (CHAMAR DO HTML) USD, EUR, GBP esses são os valores selecionados

//vamos pegar o Footer dentro da main
const footer = document.querySelector("main footer");

// vamos pegar o ID do footer
const description = document.getElementById("description");

// VAMOS PEGAR O ID DO RESULTADO
const result = document.getElementById("result");

// Vamos Capturar agora o valor do input conforme o usuário digita

// Manipulando o input amout para receber somente numeros
amount.addEventListener("input", () => {
    // expressão regular para aceitar somente numeros
    
    const hasCharactersRegex = /\D+/g //ele vai procurar tudo que não é numero
    
    amount.value = amount.value.replace(hasCharactersRegex, "") // replace ele vai pegar o padrão e substituir por nada

})

// Capturando o evento de submit (ENVIAR) do formulario 
form.onsubmit = (event) => {
    event.preventDefault(); // evita que a pagina recarregue

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// função para converter a moeda
function convertCurrency (amount, price, symbol){
    try{
    
        //aqui esta fazendo com que  o valor que o usuario digitou seja convertido para o valor que ele escolheu
    
         // Exibindo a cotacao da moeda selecionada    
        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`
       
        // calcular o valor total
        let total = amount * price 
        
       // verifica se o valor total nao é um numero
        if(isNaN(total)){

           alert("Não foi possível converter. Tente novamente mais tarde.")
        }


        //FORMATAR O VALOR TOTAL
        total = formatCurrency(total).replace ("R$", "")


        // Exibindo o resultado
        result.textContent =` ${total} Reais`

        // Aplica a classe que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    }catch(error){
        
       // Remove a classe do footer removendo ele da tela 
        footer.classList.remove("show-result")
        
        console.error(error)
        
        alert("Não foi possível converter. Tente novamente mais tarde.")
    }

}

// Formata a moeda para o padrão REAL brasileiro
function formatCurrency (value){
    //converte para numero para utilizar o toLocaleString para formatar no pabrão brasileiro BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}