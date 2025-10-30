members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {instrument: "Bass"}
        }
    },

    methods: {
        addMember: function(fname, lname, instrument) {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember)
                this.newMember = {instrument: "Bass"}
            }
            else {
                alert("All fields are mandatory!")
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
