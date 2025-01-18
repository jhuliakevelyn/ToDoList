const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = []




function adicionarNovaTarefa(){
    minhaListaDeItens.push({

        tarefa:input.value,
        concluida: false
    })


    input.value = ''
    mostrarTarefas()



}

function mostrarTarefas(){
    let novaLi = ''
    minhaListaDeItens.forEach((item,posicao) => {

        novaLi = novaLi + `
         <li class="task ${item.concluida && "done"}">
            <img src="./checked.png" alt="Check-na-tarefa" onclick="concluirTarefa(${posicao})">
             <p>${item.tarefa}</p>
             <img src="./trash.png" alt="Tarefa-para-lixo" onclick="deletarItem(${posicao})"  >
        </li>    
            `


    })

    listaCompleta.innerHTML = novaLi


    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))



}


function concluirTarefa(posicao){

    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida
    mostrarTarefas()
}





function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1)
    

    mostrarTarefas()

}

function recarregarTarefas(){

    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    mostrarTarefas()
}


button.addEventListener('click', adicionarNovaTarefa);
