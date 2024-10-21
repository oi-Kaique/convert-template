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
    
}