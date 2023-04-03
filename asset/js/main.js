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
            activechat: 0,
            messageNew: '',
            data : '',
            newobjet: {
                date: '',
                message: '',
                status: 'sent'
            },
            datelastaccess: [],
            search: '',
            activeSearch: false,
            showMenus : false,
            lastAcces : '',
            last_enter : ''
        }
    },
    methods: {
        chage_activeChat(index) {
            this.activechat = index
        },
        genereted_new_mess() {
            let now = this.datenow()
            let lastenter2 = String(now)
            lastenter2 = lastenter2.substring(11,16)
           
            this.datelastaccess.splice(this.activechat,1,lastenter2);
            this.newobjet.date = now
            this.newobjet.message = this.messageNew
            this.contacts[this.activechat].messages.push({ ...this.newobjet });
            this.messageNew = ''
        },
        ask_new_mess() {
            this.newobjet.message = 'ok'
            this.newobjet.status = 'received'
            this.contacts[this.activechat].messages.push({ ...this.newobjet });
            this.newobjet.message = ''
            this.newobjet.status = 'sent'
        },
        new_mess_full(index) {
            this.genereted_new_mess(index);
            setTimeout(() => { this.ask_new_mess() }, 1000);
        },
        
        
    
        
        showmenu(){
            this.showMenus = !this.showMenus
            
        },
        removemess(i){
            this.contacts[this.activechat].messages.splice(i,1)
        },
        logremove(i){
            console.log(i);
            console.log(this.contacts[this.activechat].messages);
            console.log(this.contacts[this.activechat].messages[i]);
        },
        lastenter(){
            this.contacts.forEach((contatto,index) => {
                let position_last_mess = (contatto.messages.length) - 1
                let lastenter2 = String(contatto.messages[position_last_mess].date)
                lastenter2 = lastenter2.substring(11,16)
                this.lastAcces = lastenter2
                this.datelastaccess.splice(index,1,lastenter2)
                return this.lastAcces

            })
        },
        
       
        datenow(){
            
            let giorno = new Date().getDate()
            if(giorno <= 9 ){
                giorno = '0' + giorno
            }
            let mese = (new Date().getMonth()) + 1
            
            let anno = new Date().getFullYear()
            let ora = new Date().getHours()
            let minuti = new Date().getMinutes()
            if(minuti <= 9 ){
                minuti = '0' + minuti
            }
            return ` ${giorno}/0${mese}/${anno} ${ora}:${minuti}:00 `
           
        },
        showLastAccess(){
            if(this.contacts[this.activechat].messages.length < 1){
                return this.datelastaccess[this.activechat]
            }else{
                return this.last_acces
            }
        },
        showLastEnter(contatto,index){
            if(contatto.messages.length < 1){
                return this.datelastaccess[index]
            }else{
                return this.lastenter(contatto)
            }
        },
        last_acces(){
            let position_last_mess = (this.contacts[this.activechat].messages.length) - 1
            let lastenter2 = String(this.contacts[this.activechat].messages[position_last_mess].date)
            lastenter2 = lastenter2.substring(11,16)
           
            this.datelastaccess.splice(this.activechat,1,lastenter2)
            return lastenter2
        },
    },
    
    computed:{
        search_name() {
            if(this.search != '' && this.contacts[this.activechat].messages.length > 1){
                this.confronto()
            
            }else{
                this.contacts.forEach(contatto => {
                    contatto.visible = true
                    
                })
            }
            
        },
        confronto(){
            /* if(this.search != ''){ */
            this.contacts.forEach(contatto => {
                if (contatto.name.toLowerCase().includes(this.search.toLowerCase())) {
                    console.log('la parola cercata si trova dentro array');
                    console.log(contatto.name.toLowerCase().substring(0,this.search.length) + '  ' + contatto.name);
                    console.log(contatto.visible);
                    contatto.visible = true
                    console.log(contatto.visible);
                }else{
                    console.log(this.search.toLowerCase() + '=' + contatto.name.toLowerCase().substring(0,this.search.length) + '  ' + contatto.name);
                    console.log('non è uguale');
                    console.log(contatto.visible);
                    contatto.visible = false
                    console.log(contatto.visible);
                }
            })
            return true
            /*} else{
                return  false
            } */
    },
    },
    mounted() {
        this.last_acces(),
        this.lastenter()
    }
})

app.mount('#app')