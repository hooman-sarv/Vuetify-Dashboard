<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-10 mx-10">
      
      <v-layout row class="mb-3">

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By Project Name</span>
            </v-btn>
          </template>
            <span>Sort project by project name</span>
        </v-tooltip>
        
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
            <span>Sort by person</span>
        </v-tooltip>

      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text my-2 caption`" >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
   
  </div>
</template>

<script>
import db from '../fb'
export default {
  data() {
    return {
      projects: []
    }
  },
  methods:{
    sortBy(item){
      this.projects.sort((a,b) => a[item] < b[item] ? -1 : 1)
    }
  },
  mounted(){
    db.collection('projects').onSnapshot((res) => {
      
      const changes = res.docChanges()
      changes.forEach((change) => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid #ffaa2c;
}
.project.overdue{
  border-left: 4px solid #f83e70;
}
.v-chip.complete{
  background: #3cd1c2;
}
.v-chip{
    background: orange;
}
.v-chip.overdue{
  background: #f83e70;
}
</style>