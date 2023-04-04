

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
            ultimomessaggio: '',
            optionvalue: '',
            active_chat: 0,
            messageNew: null,
            data: '',
            newobjet: {
                date: '',
                message: '',
                status: 'sent'
            },
            newaccountpannelshow: false,
            date_last_access: [],
            input:'',
            search: '',
            search2: '',
            newNameContact: '',
            activeSearch: false,
            showMenus: false,
            last_acces: '',
            last_enter: '',
            nowWriting: false,
            accounstWriting: false,
            online: false,
            random_answers: ['ok', 'va Bene', 'no!', 'vai a farmi un frappè']
        }
    },
    methods: {
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

            //cambia lo stato di showMenus con il suo opposto
            this.showMenus = !this.showMenus

            },
        /**Genereted new mess
         * 
         */
            genereted_new_mess() {

            //crea una variabile e ha come contenuto la data attuale
            let now = this.date_now();
            //crea una variabile il cui contenuto è la variabile di prima a stringa
            let lastenter2 = String(now);
            //prende dalla stringa solo gli elementi in posizione 11 fino alla 16
            lastenter2 = lastenter2.substring(11, 16);
            //sostituisce negli ultimi accessi l'orario appena creato 
            this.date_last_access.splice(this.active_chat, 1, lastenter2);
            //sostituisce il valore della variabile now al valore della key data dell'ogetto modello
            this.newobjet.date = now;
            //sostituisce il valore della key messageNew  al valore della key message dell'ogetto modello
            this.newobjet.message = this.messageNew;
            //inserisce all'interno dell'array contacts l'oggetto modello appena modificato
            this.contacts[this.active_chat].messages.push({ ...this.newobjet });
            //reseta i valori d'input di messageNew
            this.messageNew = null;
            //cambia il valore di nowWriting in true
            this.nowWriting = true;

            },
        /**Ask new mess
         * 
         */
            ask_new_mess() {

            //cambia il valore di accounstWriting
            this.accounstWriting = false;
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
            //cambia il valore di accounstWriting
            this.accounstWriting = false;
            //cambia il valore di online
            this.online = true;

            },
        /**New mess full
         * 
         */
            new_mess_full() {

            //condizione:se la parola inserita non è null
            if (this.messageNew.trim() != null) {
                //usa la funzione genereted_new_mess per la creazione del nuovo messaggio 
                this.genereted_new_mess();
                //cambia il valore di accounstWriting
                this.accounstWriting = true
                //inizia un timeout di 5s
                setTimeout(() => {

                    //al termi del timeout resetta il valore di online
                    this.online = false 

                }, 5000)
                //inzia un timeout di 1s
                setTimeout(() => {

                    //al termi del timeout usa la funzione ask_new_mess per la creazione del  messaggio di risposta
                    this.ask_new_mess()
                    //resetta il valore di accounstWriting
                    this.accounstWriting = false

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
                this.date_last_access.splice(index, 1, data_last_enter )
                //ritorna il valore di last_acces
                return this.last_acces

            })

            },
        /**Date now
         * 
         * @returns 
         */
            date_now() {

            //crea una variabile e inserisce il valore di getDate()
            let giorno = new Date().getDate()
            //condizione :se il valore della variabile è uguale o inferiore a nove
            if (giorno <= 9) {

                //aggiunge 0 prima del suo valore
                giorno = '0' + giorno

            }

            //crea una variabile e inserisce il valore di .getMonth() + 1
            let mese = (new Date().getMonth()) + 1
            //condizione :se il valore della variabile è uguale o inferiore a nove
            if (mese <= 9) {

                //aggiunge 0 prima del suo valore
                mese = '0' + mese

           }
            //crea una variabile e inserisce il valore di .getFullYear()
            let anno = new Date().getFullYear()
            //crea una variabile e inserisce il valore di getHours()
            let ora = new Date().getHours()
            //crea una variabile e inserisce il valore di getMinutes()
            let minuti = new Date().getMinutes()
            //condizione :se il valore della variabile è uguale o inferiore a nove
            if (minuti <= 9) {

                 //aggiunge 0 prima del suo valore
                 minuti = '0' + minuti

            }

            //ritorna la stringa con la data completa
            return ` ${giorno}/${mese}/${anno} ${ora}:${minuti}:00 `



            },
        showLastEnter(contatto, index) {
            if (contatto.messages.length < 1) {
                return this.date_last_access[index]
            } else {
                return this.lastenter(contatto)
            }
        },
        last_acces_Methods() {
            let position_last_mess = (this.contacts[this.active_chat].messages.length) - 1
            let lastenter2 = String(this.contacts[this.active_chat].messages[position_last_mess].date)
            lastenter2 = lastenter2.substring(11, 16)

            this.date_last_access.splice(this.active_chat, 1, lastenter2)
            return lastenter2
        },
        lastmess(user) {
            if (user.messages.length != 0) {
                return user.messages[(user.messages.length) - 1].message
            } else {
                return null
            }

        },
        deleteAllMessages() {
            const arrayvuoto = []
            this.contacts[this.active_chat].messages = arrayvuoto
        },
        deleteChat() {

            this.contacts.splice(this.active_chat, 1)
        },
        addNew_Contact() {
            let newAccount = {
                name: '',
                avatar: '',
                visible: true,
                messages: []
            }
            newAccount.name = this.newNameContact
            newAccount.avatar = this.optionvalue
            this.contacts.unshift(newAccount)
            this.newNameContact = ''
            this.optionvalue = ''


        },
        showpannelnewaccount() {
            this.newaccountpannelshow = !this.newaccountpannelshow
        },
    },

    computed: {
        
        
        lunghezzamessaggio() {
            return Number((this.contacts[this.active_chat].messages.length) - 1)
        },
        lastAccesView() {
            if (this.online || this.accounstWriting) {
                return false
            } else {
                return true
            }
        },
        writing() {
            if (this.messageNew != null) {
                this.nowWriting = true
            }
        },
        search_name() {
            if (this.search != '' && this.contacts[this.active_chat].messages.length > 1) {
                this.confronto()

            } else {
                this.contacts.forEach(contatto => {
                    contatto.visible = true

                })
            }

        },
        confronto() {
            this.contacts.forEach(contatto => {
                if (contatto.name.toLowerCase().includes(this.search.toLowerCase())) {

                    contatto.visible = true

                } else {

                    contatto.visible = false

                }
            })

        },

    },
    mounted() {
        this.last_acces_Methods()
        this.last_enter_Methods()
    }
})

app.mount('#app')