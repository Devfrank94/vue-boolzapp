import contacts from './db.js'

const {createApp} = Vue;

// inizializzo un oggetto globale luxon
const dt = luxon.DateTime

createApp({

data(){
return{
    contacts,
    index: 0,
    clock: '',

    }
},

methods: {
printClock(){
    this.clock=dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
},

},

mounted() {
    this.printClock()

},


}).mount("#app")