import contacts from './db.js'

const {createApp} = Vue;

createApp({

data(){
return{
    contacts,
    index: 0,


    }
},

methods: {
    

}


}).mount("#app")