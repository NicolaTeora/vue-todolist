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
                    done: false,
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
        * cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, 
        * che quindi viene aggiunto alla lista dei todo esistenti.
        */
        addNewTodo() {
            const copyNewTodo = {...this.newToDo}; 
            // TODO: if (copyNewTodo.length == 0) 
            if (copyNewTodo.text.length == 0){
                alert('inserisci cosa devi fare')
                return
            } else {
                this.list.push(copyNewTodo); 
                this.newToDo.text= ''
            }
        }
    },

    mounted() {},
});

app.mount('#app')