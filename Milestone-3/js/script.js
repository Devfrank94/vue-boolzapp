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
    inpMessage: ''

    }
},

methods: {

// Funzione stampa orario attuale
printClock(){
    this.clock = dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE);
},

// Funzione stampa nuovo messaggio in send
newMess(){

  const newMess = {
    message: this.inpMessage,
    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
    status: 'sent'
    }
    this.inpMessage= ''
    this.contacts[this.index].messages.push(newMess);
    }
},


mounted() {
    this.printClock()
    

},


}).mount("#app")