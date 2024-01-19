'use strict'

import * as Variables from "./main_Variables.js"

const color_dark = '#171717'
let this_data = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 13:'', 14:'', 15:'',
    16:{1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 'other':''},
    'idea':''
}
let touchType = 'immobile'
// rgba(0, 0, 0, 0)
// rgb(255, 228, 196)   بیسکوییتی



//*******************************************************************************
Variables.btns_q1.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })



    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q1.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[1] === event.target.innerHTML){
                this_data[1] = ''
            }else {
                this_data[1] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'




    })
})


//*******************************************************************************

    Variables.input_q2.addEventListener('blur',event=>{

        this_data[2] = Variables.input_q2.value

    })

//*******************************************************************************

    Variables.input_q3.addEventListener('blur',event=>{

        this_data[3] = Variables.input_q3.value

    })

//*******************************************************************************

Variables.btns_q4.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })



    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q4.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[4] === event.target.innerHTML){
                this_data[4] = ''
            }else {
                this_data[4] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'


    })
})


//*******************************************************************************

    Variables.input_q5.addEventListener('blur',event=>{

        this_data[5] = Variables.input_q5.value

    })

//*******************************************************************************

    Variables.input_q6.addEventListener('blur',event=>{

        this_data[6] = Variables.input_q6.value

    })

//*******************************************************************************

Variables.btns_q7.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q7.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[7] === event.target.innerHTML){
                this_data[7] = ''
            }else {
                this_data[7] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'


    })
})


//*******************************************************************************

Variables.btns_q8.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q8.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[8] === event.target.innerHTML){
                this_data[8] = ''
            }else {
                this_data[8] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'


    })
})


//*******************************************************************************

Variables.btns_q9.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){


            Variables.btns_q9.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[9] === event.target.innerHTML){
                this_data[9] = ''
            }else {
                this_data[9] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'


    })
})



//*******************************************************************************

Variables.btns_q10.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q10.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[10] === event.target.innerHTML){
                this_data[10] = ''
            }else {
                this_data[10] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'


    })
})


//*******************************************************************************

Variables.btns_q11.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q11.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[11] === event.target.innerHTML){
                this_data[11] = ''
            }else {
                this_data[11] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************
    Variables.textarea_q12.addEventListener('blur',event=>{

        this_data[12] = Variables.textarea_q12.value

    })

//*******************************************************************************

    Variables.textarea_q13.addEventListener('blur',event=>{

        this_data[13] = Variables.textarea_q13.value

    })

//*******************************************************************************

    Variables.textarea_q14.addEventListener('blur',event=>{

        this_data[14] = Variables.textarea_q14.value

    })

//*******************************************************************************

Variables.btns_q15.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q15.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[15] === event.target.innerHTML){
                this_data[15] = ''
            }else {
                this_data[15] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})



//*******************************************************************************

Variables.btns_q16_1.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_1.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][1] === event.target.innerHTML){
                this_data[16][1] = ''
            }else {
                this_data[16][1] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_2.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_2.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][2] === event.target.innerHTML){
                this_data[16][2] = ''
            }else {
                this_data[16][2] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_3.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_3.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][3] === event.target.innerHTML){
                this_data[16][3] = ''
            }else {
                this_data[16][3] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_4.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_4.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][4] === event.target.innerHTML){
                this_data[16][4] = ''
            }else {
                this_data[16][4] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_5.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_5.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][5] === event.target.innerHTML){
                this_data[16][5] = ''
            }else {
                this_data[16][5] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_6.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q16_6.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][6] === event.target.innerHTML){
                this_data[16][6] = ''
            }else {
                this_data[16][6] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_7.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_7.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][7] === event.target.innerHTML){
                this_data[16][7] = ''
            }else {
                this_data[16][7] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_8.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_8.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][8] === event.target.innerHTML){
                this_data[16][8] = ''
            }else {
                this_data[16][8] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_9.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q16_9.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][9] === event.target.innerHTML){
                this_data[16][9] = ''
            }else {
                this_data[16][9] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})



//*******************************************************************************

Variables.btns_q16_10.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_10.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][10] === event.target.innerHTML){
                this_data[16][10] = ''
            }else {
                this_data[16][10] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})

//*******************************************************************************

Variables.btns_q16_11.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{


        if (touchType==='immobile'){

            Variables.btns_q16_11.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][11] === event.target.innerHTML){
                this_data[16][11] = ''
            }else {
                this_data[16][11] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }

        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

Variables.btns_q16_12.forEach(item=>{


    item.addEventListener('touchmove',event=>{

        touchType = 'mobile'

    })


    item.addEventListener('touchend',event=>{

        if (touchType==='immobile'){

            Variables.btns_q16_12.forEach(item=>{
                item.style.cssText = 'background-color: transparent;color: rgb(255, 228, 196);'
            })

            // --------------------

            if (this_data[16][12] === event.target.innerHTML){
                this_data[16][12] = ''
            }else {
                this_data[16][12] = event.target.innerHTML
                event.target.style.cssText = `background-color: rgb(255, 228, 196);color: ${color_dark};`
            }
            
        }

        touchType = 'immobile'

    })
})


//*******************************************************************************

    Variables.textarea_q16_other.addEventListener('blur',event=>{

        this_data[16]['other'] = Variables.textarea_q16_other.value

    })

//*******************************************************************************

    Variables.textarea_q17.addEventListener('blur',event=>{
        // --------------------
        this_data[17] = Variables.textarea_q17.value

    })

//*******************************************************************************













Variables.submit_EL.addEventListener('touchstart',event=>{
    Variables.thankPage_EL.style.cssText = 'z-index: 1;animation: show-thankPage 500ms;animation-fill-mode: forwards;'
    console.log(this_data)
})






Variables.thankPage_EL.addEventListener('animationend',event=>{
    Variables.text_thankPage_EL.style.cssText = 'animation: show-message-thankPage 800ms;animation-fill-mode:forwards;'
    Variables.img_thankPage_EL.style.cssText = 'animation: show-message-thankPage 800ms;animation-fill-mode:forwards;'
})