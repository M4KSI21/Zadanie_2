
import {Modal} from "../../classess/modal";
import {toursDataArray} from "../../index";
import {ITour} from "../../models/ticket/ticket"; // ссылка на массив с данными


// Определить типы для метода (возвращающие и для переменных в теле функции)

export function openModal(type, i: number): void {

    const data:ITour = toursDataArray[i];
    const tourId:string = data?.id;


    function transitionToPage():void{
        localStorage.setItem('tourId', tourId)
        location.href = '/ticket.html'
    }
    let modalInfo = {};
    switch (type) {
        case "order":
            const modalTemplate:string = `
      <div class = "modal-element"> 
      <p data-moda-id="tour-modal" class="close-modal">x</p>
      <p>${data.name}</p>
      <p>${data.description}</p>
       <div data-tour-id=${tourId} class="ticket-submit">
       <a href="/ticket.html">Купить билет</a>
</div>
     </div>
  `
            const modal = new Modal('tour-modal');
            modal.open(modalTemplate);

            modal.modalHTML.addEventListener('click', (event)=> {
                if(event.target.tagName === 'A') {
                    transitionToPage()
                }
            })
            break;
    }
}


