//import {ITours} from "../models/tours";


// указать возвращающий тип
export function initTicketElementTemplate(data, i) {
    const tmpl = `
       <div  data-item-index=${i} class="ticket-block">
           <p>${data}</p>
       </div>
    `
    return tmpl;
}