const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        console.log('Exclusão dos dados confirmada');
        alert('Exclusão dos dados confirmada', 'primary');
    })
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger2 = document.getElementById('liveAlertBtn2')
if (alertTrigger2) {
    alertTrigger2.addEventListener('click', () => {
        console.log('Exclusão dos dados NÃO confirmada');
        alert('Exclusão dos dados NÃO confirmada', 'danger')
    })
}

const alertPlaceholder2 = document.getElementById('liveAlertPlaceholder2')

const alert2 = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'].join('')


    alertPlaceholder2.append(wrapper)
}

const lista = [
    {
        codigo: '#01',
        nome: 'Terminar as tarefas.',
        detalhamento: 'Fazer todos os trabalhos e tarefas pendentes.'
    },
    {
        codigo: '#02',
        nome: 'Aprender JavaScript',
        detalhamento: 'Olhar os vídeos de js.'
    },
    {
        codigo: '#03',
        nome: 'Terminar o trabalho de módulo final !',
        detalhamento: 'Colocar animações e Bootstrap'

    }]

for (const item of lista) {
    document.getElementById('accordionFlushExample').innerHTML +=

        `
    <div class="accordion-item">
    <h2 class="accordion-header" id="${item.codigo}">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>${item.nome} ${item.codigo}</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="${item.codigo}" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${item.detalhamento} .</div>
    </div>
  </div>
    `

    // `   
    // <div class="accordion-item">
    //       <h2 class="accordion-header" id="flush-headingOne">
    //         <button class="accordion-button collapsed  ${item.cor1}" type="button" data-bs-toggle="collapse"
    //           data-bs-target="${item.codigo}" aria-expanded="false" aria-controls="flush-collapseOne">
    //           <strong>${item.nome} ${item.codigo}</strong>
    //         </button>
    //       </h2>
    //       <div id="id${item.codigo}" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
    //         data-bs-parent="#accordionFlushExample">
    //         <div class="accordion-body  ${item.cor1} ${item.opacidade}">${item.detalhamento}
    //         </div>
    //       </div>
    //     </div>

    // `
}





