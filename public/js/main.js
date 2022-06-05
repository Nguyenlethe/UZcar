
const UZcar = {


    
    handleEventsShowPRD: function (e) {
        const $ = document.querySelector.bind(document)
        const $$ = document.querySelectorAll.bind(document)

        const product = $$('.content-show-boder.script')
        
        product.forEach((item, index) => {
            
            item.onclick = (e) => {
               
                const hidden = $('.content-hidden')
                const showHidden = $('.content-detail')

                hidden.style.display = 'none'
                showHidden.style.display = 'flex'
            
            }
        })
        
        

    },


    start: function(){ 
        this.handleEventsShowPRD(); 
       
    }
}

UZcar.start();