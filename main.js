'use strict'

import * as Variables from "./main_Variables.js"
const $ = document;
const resultCont_EL = $.querySelector('body  div.resultCont')
const mainPage_EL = $.querySelector('body  div.main-page')
const backBtn_EL = $.querySelector('body  div.backBtn')

let dataBase = null
let touchType = 'immobile'


window.addEventListener('load', getData)



async function getData(){

    await fetch('https://test-a7f0a-default-rtdb.firebaseio.com/survey_result.json')
        .then(res => res.json())
        .then(data => dataBase = data)
        .catch(err => console.log(err))


    for (const key in dataBase) {

        await resultCont_EL.insertAdjacentHTML('afterbegin',`
        
            <div class="survey">
                <div class="specs id">
                    <div class="key">ID</div>
                    <div class="value">${key}</div>
                </div>
                <div class="specs dateTime">
                    <div class="key">DateTime</div>
                    <div class="value">${dataBase[key]['userInfo']['DateTime']}</div>
                </div>
                <div class="specs mainIP">
                    <div class="key">Main IP</div>
                    <div class="value">${dataBase[key]['userInfo']['mainIP']}</div>
                </div>
                <div class="specs mainCountry">
                    <div class="key">Main Country</div>
                    <div class="value">${dataBase[key]['userInfo']['mainCountry']}</div>
                </div>
                <div class="specs proxyIP">
                    <div class="key">Proxy IP</div>
                    <div class="value">${dataBase[key]['userInfo']['proxyIP']}</div>
                </div>
                <div class="specs proxyCountry">
                    <div class="key">Proxy Country</div>
                    <div class="value">${dataBase[key]['userInfo']['proxyCountry']}</div>
                </div>
            </div>
        
        
        `)


    }

    const survey = document.querySelectorAll('.survey')

    survey.forEach(item=>{
        item.addEventListener('touchmove',event=>{
            touchType = 'mobile'
        })
        item.addEventListener('touchend',event=>{

            if (touchType==='immobile'){

                mainPage_EL.style.cssText = 'animation: showMainPage 300ms;animation-fill-mode:forwards;'
                mainPage_EL.addEventListener('animationend',event=>{
                    if (event.animationName === 'showMainPage'){
                        backBtn_EL.style.cssText = 'animation: showBackBtn 200ms;animation-fill-mode:forwards;'
                        console.log(2020)
                    }
                })


            }


            touchType = 'immobile'

        })
    })


}


backBtn_EL.addEventListener('touchstart',event=>{
    mainPage_EL.style.cssText = 'animation: hideMainPage 300ms;animation-fill-mode:forwards;'
    backBtn_EL.style.display = 'none'
})




