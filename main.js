'use strict'

import * as Variables from "./main_Variables.js"



let this_data = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 13:'', 14:'', 15:'',
    16:{1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', 10:'', 11:'', 12:'', 'other':''},
    'idea':''
}

window.addEventListener('load',event=>{

    fetch('https://test-a7f0a-default-rtdb.firebaseio.com/survay_result.json')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))


})
