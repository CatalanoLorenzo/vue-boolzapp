/* import Picker from './emoji-picker.js';
console.log(Picker); */
const { createApp } = Vue


const app = createApp({


    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            logo_show : true,
            show_banner: true,
            option_value: '',
            active_chat: 0,
            message_new: null,
            data: '',
            newobjet: {
                date: '',
                message: '',
                status: 'sent'
            },
            new_account_pannel_show: false,
            date_last_access: [],
            search: '',
            new_name_contact: '',
            show_menus: false,
            last_acces: '',
            last_enter: '',
            now_writing: false,
            account_writing: false,
            online: false,
            showEmoji: false,
            random_answers: ['ok', 'va Bene', 'no!', 'vai a farmi un frappè']
        }
    },
    methods: {
        onSelectEmoji(emoji) {
            console.log(emoji)
            this.messageText += emoji.i;
            /*
              // result
              { 
                  i: "😚", 
                  n: ["kissing face"], 
                  r: "1f61a", // with skin tone
                  t: "neutral", // skin tone
                  u: "1f61a" // without tone
              }
              */
        },
        /** Chage_active_chat
         * 
         * @param {Number} index 
         */
        chage_active_chat(index) {

            //cambia il valore di active_chat con l'index
            this.active_chat = index

        },
        /**Showmenu
         * 
         */
        showmenu() {

            //cambia lo stato di show_menus con il suo opposto
            this.show_menus = !this.show_menus

        },
        /**Genereted new mess
         * 
         */
        genereted_new_mess() {

            //implemento la libreria luxon
            const DateTime = luxon.DateTime;
            //crea una variabile e ha come contenuto la data attuale
            let now = DateTime.now().toLocaleString(DateTime.TIME_24_SIMPLE)
            //sostituisce negli ultimi accessi l'orario appena creato 
            this.date_last_access.splice(this.active_chat, 1, now);
            //sostituisce il valore della variabile now al valore della key data dell'ogetto modello
            this.newobjet.date = now;
            //sostituisce il valore della key message_new  al valore della key message dell'ogetto modello
            this.newobjet.message = this.message_new;
            //inserisce all'interno dell'array contacts l'oggetto modello appena modificato
            this.contacts[this.active_chat].messages.push({ ...this.newobjet });
            //reseta i valori d'input di message_new
            this.message_new = null;
            //cambia il valore di now_writing in true
            this.now_writing = true;

        },
        /**Ask new mess
         * 
         */
        ask_new_mess() {

            //cambia il valore di account_writing
            this.account_writing = false;
            //crea una variabile con contenuto la quantità di stringe dell'array random_answers meno uno
            let message_index = this.random_answers.length - 1;
            //crea una variabile con contenuto un numero random compreso tra  0 e  message_index
            let random_index = Math.floor(Math.random() * message_index);
            //inserisce una stringa in modo random dell'array random_answers al valore della key message dell'ogetto modello
            this.newobjet.message = this.random_answers[random_index];
            //inseriresce in valore received   al valore della key status dell'ogetto modello
            this.newobjet.status = 'received';
            //inserisce all'interno dell'array contacts l'oggetto modello appena modificato
            this.contacts[this.active_chat].messages.push({ ...this.newobjet });
            //resetta il valore della key message dell'ogetto modello
            this.newobjet.message = '';
            //resetta il valore della key status dell'ogetto modello
            this.newobjet.status = 'sent';
            //cambia il valore di account_writing
            this.account_writing = false;
            //cambia il valore di online
            this.online = true;

        },
        /**New mess full
         * 
         */
        new_mess_full() {

            //condizione:se la parola inserita non è null
            if (this.message_new.trim() != null) {
                //usa la funzione genereted_new_mess per la creazione del nuovo messaggio 
                this.genereted_new_mess();
                //cambia il valore di account_writing
                this.account_writing = true
                //inizia un timeout di 5s
                setTimeout(() => {

                    //al termi del timeout resetta il valore di online
                    this.online = false

                }, 5000)
                //inzia un timeout di 1s
                setTimeout(() => {

                    //al termi del timeout usa la funzione ask_new_mess per la creazione del  messaggio di risposta
                    this.ask_new_mess()
                    //resetta il valore di account_writing
                    this.account_writing = false

                }, 1000);

            }

        },
        /**Message deletion
         * 
         * @param {Number} i 
         */
        message_deletion(i) {

            //cancellazione messaggio in posizione i
            this.contacts[this.active_chat].messages.splice(i, 1)

        },
        /**Last Enter
         * 
         * @returns 
         */
        last_enter_Methods() {

            //cicla nell Array prendendo con elemento e indice
            this.contacts.forEach((contatto, index) => {

                //crea una variabile con valore l'indice dell'ultimo messaggio 
                let position_last_mess = (contatto.messages.length) - 1
                //crea una variabile con la data dell messaggio con indice position_last_mess
                let data_last_enter = String(contatto.messages[position_last_mess].date)
                //sovrascrive il valore con solo gli elementi in posizione 11 fino alla 16
                data_last_enter = data_last_enter.substring(11, 16)
                //sostituisce il valore di last_acces con data_last_enter
                this.last_acces = data_last_enter
                //inserisce il valore di data_last_enter dentro date_last_access in posizione index
                this.date_last_access.splice(index, 1, data_last_enter)
                //ritorna il valore di last_acces
                return this.last_acces

            })

        },
        /**Last acces Methods
         * 
         * @returns 
         */
        last_acces_Methods() {
            //crea una variabile e le assegna i numero di messaggi contacts[this.active_chat]
            let position_last_mess = (this.contacts[this.active_chat].messages.length) - 1
            // crea una variabile e le asseggna la data dell'ultimo messaggio di contacts[this.active_chat]
            let last_enter_let = String(this.contacts[this.active_chat].messages[position_last_mess].date)
            //sostituisce il valore della variabile con gli elementi in posizione 11 fino alla 16
            last_enter_let = last_enter_let.substring(11, 16)
            //inserisce in date_last_access la varibile creata per la posizione della chat attiva
            this.date_last_access.splice(this.active_chat, 1, last_enter_let)
            //ritorna il valore sella variabile last_enter
            return last_enter_let
        },
        /**Last mess
         * 
         * @param {String} user 
         * @returns 
         */
        last_mess(user) {

            //condizione: se il numero di messaggi è diverso da zero 
            if (user.messages.length != 0) {

                //ritorna il il valore dell messagio in ultima posizione
                return user.messages[(user.messages.length) - 1].message

                //condizione:sennò   
            } else {

                //ritorna un valore null
                return null
            }

        },
        /**Delete all messages
         * 
         */
        delete_all_messages() {

            //crea una variabile con un array vuoto
            const arrayvuoto = []
            //cositutisce il valore di messages della chat attiva con la variabile appena creata
            this.contacts[this.active_chat].messages = arrayvuoto

        },
        /**Delete chat
         * 
         */
        delete_chat() {

            //elimina l'intero oggetto(account) dall'array contacts
            this.contacts.splice(this.active_chat, 1)
        },
        /**Add new contact
         * 
         */
        add_new_contact() {

            //crea una variabile con valore l'oggetto di un account di default
            let new_account = {

                name: '',
                avatar: '',
                visible: true,
                messages: []

            }
            //sostituisce il valore della key name dell'oggetto default con new_name_contact
            new_account.name = this.new_name_contact
            //sostituisce il valore della key avatar dell'oggetto default con option_value
            new_account.avatar = this.option_value
            //inserisce all'inizio dell'array contacts la variabile new_account
            this.contacts.unshift(new_account)
            //resetta i valori di new_name_contact
            this.new_name_contact = ''
            //resetta i valori di option_value
            this.option_value = ''


        },
        /**Show pannel new account
         * 
         */
        show_pannel_new_account() {

            //inverte il valore di new_account_pannel_show
            this.new_account_pannel_show = !this.new_account_pannel_show

        },
        /**Confrontation
         * 
         */
        confrontation() {

            //cicla all'interno dell'array e prende l'elemento
            this.contacts.forEach(contatto => {

                //condizione:se il valore della key name dell'elemento include il valore della key search
                if (contatto.name.toLowerCase().includes(this.search.toLowerCase())) {

                    //allora cambia il valore della key visible dell'elemnto 
                    contatto.visible = true
                
                //condizione:sennò
                } else {

                    //cambia il valore della key visible dell'elemnto 
                    contatto.visible = false

                }

            })

        },
        /**Chage show banner
         * 
         */
        chage_show_banner(){

            //inverte il valore di show_banner
            this.show_banner = !this.show_banner

        },
        /**Show splash page
         * 
         */
        show_splash_page (){

            //inizia un timeout di 1,8s
            setTimeout(() => {

                //disabilita logo_show
                this.logo_show = false

            },1850)

        },
        /**Search name
         * 
         */
        search_name() {

            //condizione: se il valore della key search è diverso da '' e in numero di messaggi della chat attiva è maggiore di 1
            if (this.search != '' && this.contacts[this.active_chat].messages.length > 1) {
                
                //usa la funzione confrontatio
                this.confrontation()

            //condizione:sennò
            } else {

                //cicla dell'array contacts prendendo l'elemento
                this.contacts.forEach(contatto => {

                    //resetta il valore della key visible dell'elemento
                    contatto.visible = true

                })

            }

        },
   /*      // Inserts emojis
    onSelectEmoji(emoji) {
      this.newMessage += emoji.i;
    }, */
    },
    computed: {

        /**Message length
         * 
         * @returns 
         */
        message_length() {

            //ritorna la lunghezza del messagio 
            return Number((this.contacts[this.active_chat].messages.length) - 1)

        },
        /**Last acces view
         * 
         * @returns 
         */
        last_acces_view() {

            //condizione: se il valore di online o di account_writing e vero
            if (this.online || this.account_writing) {

                //ritorna il valore false
                return false

            //   condizione:sennò 
            } else {

                //ritorna il valore true
                return true

            }
        },
        /**Writing
         * 
         */
        writing() {

            //condizione: se il valore di message_new è diverso da null
            if (this.message_new != null) {

                //inverte il valore di now_writing
                this.now_writing = true

            }
        },

    },
    mounted() {
        this.show_splash_page ()
        //utilizza la funzione last_acces_Methods
        this.last_acces_Methods()
        //utilizza la funzione last_enter_Methods
        this.last_enter_Methods()
    }
})/* .component('Picker', Picker) */.mount('#app')

