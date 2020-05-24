<template>
  <div class="team">
    <h1 class="subheading grey--text">team</h1>

    <v-container class="my-5">
      <v-layout class="row wrap">
        <v-flex xs12 sm6 md4  lg3 v-for="(person , index) in team" :key="index">
          <v-card flat class="text-center ma-3 grey lighten-2">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey lighten-2">
                <v-icon small left >mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      team: [
        { name: 'The Net Ninja', role: 'Web developer', avatar:'/avatar-1.png' },
        { name: 'Ryu', role: 'Graphic designer', avatar:'/avatar-2.png' },
        { name: 'Chun Li', role: 'Web developer', avatar:'/avatar-3.png' },
        { name: 'Gouken', role: 'Social media maverick', avatar:'/avatar-4.png' },
        { name: 'Yoshi', role: 'Sales guru', avatar:'/avatar-5.png'}
      ]
    }
  }
}
</script>