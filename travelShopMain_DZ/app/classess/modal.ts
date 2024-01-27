export class Modal {
    modalId = ''
    modalHTML = null
    constructor(modalId: string) {
        this.modalId = modalId
}
    open(modalTemplate: string) {
        const wrap = document.createElement('div')
        wrap.innerHTML = modalTemplate
        this.modalHTML = wrap
        document.body.append(wrap)
        this.close()
    }

    close() {
        this.modalHTML.addEventListener('click', (event) => {
         if(event.target.classList.contains('close-modal')) {
             this.modalHTML.remove()
         }
        })
    }
}