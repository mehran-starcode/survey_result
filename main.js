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
        
            <div class="survey" itemid="${key}">
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
                //==========================    Set Animation and Styles   =======================================
                mainPage_EL.style.cssText = 'animation: showMainPage 300ms;animation-fill-mode:forwards;'
                mainPage_EL.addEventListener('animationend',event=>{
                    if (event.animationName === 'showMainPage'){
                        backBtn_EL.style.cssText = 'animation: showBackBtn 200ms;animation-fill-mode:forwards;'
                    }
                })

                //========================  *** Set any data for any Section  ***  ==================================

                let dataTarget = dataBase[item.getAttribute('itemid')]

                switch (dataTarget[1]) {
                    case 'مرد':
                        Variables.btns_q1[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'زن':
                        Variables.btns_q1[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }

                Variables.input_q2.value = dataTarget[2]
                Variables.input_q3.value = dataTarget[3]

                switch (dataTarget[4]) {
                    case 'متاهل':
                        Variables.btns_q4[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مجرد':
                        Variables.btns_q4[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }

                Variables.input_q5.value = dataTarget[5]
                Variables.input_q6.value = dataTarget[6]

                switch (dataTarget[7]) {
                    case 'بله':
                        Variables.btns_q7[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیر':
                        Variables.btns_q7[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[8]) {
                    case 'زندگی هیجان انگیز':
                        Variables.btns_q8[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'زندگی آرام':
                        Variables.btns_q8[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[9]) {
                    case 'کمتر از یک ساعت':
                        Variables.btns_q9[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case '۱ تا ۲ ساعت':
                        Variables.btns_q9[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case '۲ تا ۴ ساعت':
                        Variables.btns_q9[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'بیش از ۴ ساعت':
                        Variables.btns_q9[3].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[10]) {
                    case 'کمتر از یک ساعت':
                        Variables.btns_q10[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case '۱ تا ۲ ساعت':
                        Variables.btns_q10[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case '۲ تا ۴ ساعت':
                        Variables.btns_q10[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'بیش از ۴ ساعت':
                        Variables.btns_q10[3].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'اصلا از کامپیوتر استفاده نمیکنم':
                        Variables.btns_q10[4].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[11]) {
                    case '۱ تا ۵ کالا':
                        Variables.btns_q11[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case '۵ تا ۱۵ کالا':
                        Variables.btns_q11[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'بیش از ۱۵ کالا':
                        Variables.btns_q11[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'هیچ خریدی انجام نمیدهم':
                        Variables.btns_q11[3].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }

                Variables.textarea_q12.value = dataTarget[12]
                Variables.textarea_q13.value = dataTarget[13]
                Variables.textarea_q14.value = dataTarget[14]

                switch (dataTarget[15]) {
                    case 'روشن (Light)':
                        Variables.btns_q15[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'تیره (Dark)':
                        Variables.btns_q15[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'رنگ های با کنتراست بالا<br> (پررنگ) (High Contrast)':
                        Variables.btns_q15[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'رنگ های با کنتراست پایین <br> (کم رنگ) (Low Contrast)':
                        Variables.btns_q15[3].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }

                switch (dataTarget[16][1]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_1[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_1[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_1[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][2]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_2[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_2[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_2[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][3]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_3[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_3[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_3[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][4]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_4[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_4[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_4[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][5]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_5[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_5[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_5[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][6]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_6[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_6[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_6[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][7]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_7[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_7[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_7[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][8]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_8[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_8[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_8[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][9]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_9[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_9[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_9[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][10]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_10[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_10[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_10[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][11]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_11[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_11[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_11[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }
                switch (dataTarget[16][12]) {
                    case 'بی اهمیت':
                        Variables.btns_q16_12[0].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'مهم':
                        Variables.btns_q16_12[1].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    case 'خیلی مهم':
                        Variables.btns_q16_12[2].style.cssText = 'background-color: bisque;color: #131313;'
                        break;
                    default:
                        break;

                }

                Variables.textarea_q16_other.value = dataTarget[16]['other']
                Variables.textarea_q17.value = dataTarget[17]










            }


            touchType = 'immobile'

        })
    })


}


backBtn_EL.addEventListener('touchstart',event=>{
    mainPage_EL.style.cssText = 'animation: hideMainPage 300ms;animation-fill-mode:forwards;'
    backBtn_EL.style.display = 'none'

    Variables.allBtnsMainPage.forEach(item=>{
        item.style.cssText = 'background-color: transparent;color:bisque'
    })
    Variables.allInputMainPage.forEach(item=>{
        item.value = ''
    })
    Variables.allTextAreaMainPage.forEach(item=>{
        item.value = ''
    })

})




