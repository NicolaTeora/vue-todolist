const { createApp } = Vue;

const app = createApp({
    data() {
        return {
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

            listToDo: [],

            titleApp: 'To Do list Vue',
        };
    },

    methods: {},

    mounted() {},
});

app.mount('#app')