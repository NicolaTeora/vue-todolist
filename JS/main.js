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
            const copyNewTodo = {...this.newToDo}; // !
            // TODO: if (copyNewTodo.length == 0) 
            console.log(this.newToDo) 
            console.log(copyNewTodo)

            this.list.push(this.copyNewTodo); // ! provare a passare la copia non reattiva non funziona
            this.newToDo.text= ''
        }
    },

    mounted() {},
});

app.mount('#app')