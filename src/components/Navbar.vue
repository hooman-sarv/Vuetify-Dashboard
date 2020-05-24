<template>
  <nav>

      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>You added a project successfuly ^_^</span>
          <v-btn small text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>

      <v-app-bar flat app >
          <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title class="text-uppercase grey--text">
              <span class="font-weight-black">Welcome</span>
              <span class="font-weight-light">--(^_^)-- Hooman_sarv</span>
          </v-toolbar-title>
          <v-spacer> </v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on }">
            <v-btn flat slot="activator" color="grey lighten-4" v-on="on">
                <v-icon left>mdi-chevron-down</v-icon>
                <span>menu</span>
            </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(link,index) in links" :key="index" router :to="link.route">
                    <v-list-item-title>
                        {{link.text}}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
            
        </v-menu>

          <v-btn text color="grey">
              <span>Signout</span>
              <v-icon right>mdi-exit-to-app</v-icon>
          </v-btn>
      </v-app-bar>

    <v-navigation-drawer app class="indigo lighen-4" v-model="drawer">  

        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="/avatar-2.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1">Hooman_Sarv</p>
            </v-flex>
            <v-flex class="mt-4 mb-3">
                <Popup @projectAdded ="snackbar = true"/>
            </v-flex>
        </v-layout>

    

        <v-list>
            <v-list-item v-for="(link,index) in links" :key="index" router :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text">{{link.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text" >{{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
import Popup from './Popup'
export default {
    
    components:{
        Popup
    },
    
    data(){
        return {
            drawer: false,
            links:[
                {icon : 'mdi-view-dashboard' , text: "Dashboard" , route : '/'},
                {icon : 'mdi-folder' , text: "My Projects" , route : '/projects'},
                {icon : 'mdi-account' , text: "Team" , route : '/team'}
            ],
            snackbar:false,
        }
    },
}
</script>

<style>

</style>