<template>
  <div class="text-center">
      <v-dialog max-width="600px" v-model="dialog">
       <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on" flat> Add new project </v-btn>
    </template>
    <v-card>
        <v-card-title>
           Add a new project 
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="myForm">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Content" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                
                <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
                >
                <template v-slot:activator="{ on }">
                    <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
        </v-menu>

                <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
                
            </v-form>
        </v-card-text>
    </v-card>
  </v-dialog>
  </div>
</template>

<script>
import db from '../fb'
export default {

    data(vm){
        return {
            title:'',
            content:'',
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
            menu2: false,
            inputRules:[
                val => val.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading:false,
            dialog:false 
        }
    },
    methods:{
        submit(){

            if(this.$refs.myForm.validate()){
            
                this.loading = true
                const project = {
                    title : this.title,
                    content:this.content,
                    dateFormatted : this.dateFormatted,
                    person:'Hooman_Sarv',
                    status:'ongoing'
                }
                db.collection('projects').add(project)
                    .then((res)=>{
                        this.loading = false
                        this.dialog = false
                        console.log('finish');
                        console.log(res);
                        this.$emit('projectAdded')
                    })
            }

            
        },
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
        },
        parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }, 
    },
    computed:{
        computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
}
</script>

<style>

</style>