const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            titleApp: 'To Do list Vue',
            //// oggetto con proprietà text e done
            list:[

                {
                    text:'cose da fare',
                    done: false,
                },
                {
                    text:'cose da fare',
                    done: true,
                },
                {
                    text:'cose da fare',
                    done: false,
                },
                {
                    text:'cose da fare',
                    done: true,
                },
                {
                    text:'cose da fare',
                    done: false,
                },
                {
                    text:'cose da fare',
                    done: true,
                },
            ],

            newToDo: {
                text:'',
                done: false,
            },
        };
    },

    methods: {
        /*
        * M3: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
        * che quindi viene aggiunto alla lista dei todo esistenti.
        */
        addNewTodo() {
            const copyNewTodo = {...this.newToDo}; 
            if (copyNewTodo.text.length == 0){
                alert('inserisci cosa devi fare')
                return
            } else {
                this.list.push(copyNewTodo); 
                this.newToDo.text= ''
            }
        },
        /*
        * M2: Visualizzare a fianco ad ogni item ha una "x" 
        * cliccando su di essa, il todo viene rimosso dalla lista
        */
        removeTodo(toDo){
            this.list = this.list.filter((t) => t !== toDo)
        },

        /*
        * //TODO: cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
        *  (se done era uguale a false, impostare true e viceversa)
        */
       changeDone(){
        
       }
    },

    mounted() {},
});

app.mount('#app')