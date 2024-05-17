

//PROJETO - PESQUISAR CONTATOS//

let p = document.querySelector ('p')
let input = document.querySelector ('input')
const searchButton = document.querySelector ('button')

const contacts = [
   {name: 'Rodolfo', number: '98434 4343'},
   {name: 'Joaquim', number: '98334 3344'},
   {name: 'rafaela', number: '98456 7899'},
   {name: 'Miraildes', number: '98897 6543'}
]

function search(){
    console.log(input.value)

    for(let i = 0; i < contacts.length; i++){

        if(input.value.toLowerCase === contacts[i].name.toLowerCase){
            p.innerHTML = `Contato encontrato. Nome: ${contacts[i].name}; Telefone: ${contacts[i].number}`
                break
         }

         else {
            p.innerHTML = "Contato não encontrado."
        }
           
    }
}

searchButton.addEventListener('click', search) 