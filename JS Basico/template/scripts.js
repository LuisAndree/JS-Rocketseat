//obter o title da página
console.log("title", document.title)

//Acessar o elemento pelo ID
const guest = document.getElementById("guest-2")
console.log("Elemento pelo ID", guest)

//MOstra as propriedades do objeto
console.dir("Propriedades do objeto", guest)

//Acessar elementos com class
const guestByClass = document.getElementsByClassName("guest")
console.log("elementos com class", guestByClass)

//Exibir o prmeiro elemento da lista.
console.log("item (x) da lista de elementos", guestByClass.item(0))
console.log("posição [x] da lista de elementos", guestByClass[1])

//Selecionar lista elementos pela tag
const guestTag = document.getElementsByClassName("li")
console.log("elementos pela tag", guestTag)

//QuerySelector
const guest2 = document.querySelector("#guest-1")
console.log(guest2)

//pega dodos da classe so o 1°
const guest3 = document.querySelector(".guest")
console.log(guest3)

//pega dodos da classe todos os elementos
const guest4 = document.querySelectorAll(".guest")
console.log(guest4)

//Retorna o conteudo como texto
const guest5 = document.querySelector("#guest-1 span")
console.log(guest5.textContent)
guest5.textContent = "João da Silva"
console.log(guest5.textContent) // Retorna o conteúdo visivel e oculto
console.log(guest5.innerText) // Retorna somente o conteudo visivel
console.log(guest5.innerHTML) // Retorna o HTML como texto

const input = document.querySelector("#name")

// Adiciona a classe
// input.classList.add("input-error")

// Remove a classe
// input.classList.remove("input-error")

// Se não tiver a classe adiciona
// input.classList.toggle("input-error")

const button = document.querySelector("button")

// modificar as propriedades css do elemento
button.style.backgroundColor = "red" 

const guest6 = document.querySelector("ul")

// criando elementos
const newGuest = document.createElement("li")
const guestName = document.createElement("span")

guestName.textContent = "Luis"

console.log(guestName)

// adiciona apos o ultimo filho
newGuest.append(guestName)

// adiciona so 1 
newGuest.appendChild(guestName)

// adiciona antes do primeiro filho
newGuest.prepend(guestName)

// muda um atributo
const input2 = document.querySelector("input")
input2.setAttribute("disabled", true)

// remover atributo
input2.removeAttribute("id")

window.addEventListener("load", ()=> {
    console.log("a pagina foi carregada")
})

addEventListener("click", (event) => {
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    console.log(event.target.textContent)
})



