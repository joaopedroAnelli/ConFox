import Vue from 'vue'
import ConFoxNavbar from "~/components/ConFoxNavbar";
import GroupCard from "~/components/GroupCard";
import ChatCard from "~/components/ChatCard";
import Multiselect from 'vue-multiselect'



Vue.component('confox-navbar', ConFoxNavbar);
Vue.component('group-card', GroupCard);
Vue.component('chat-card', ChatCard);
Vue.component('vue-multiselect', Multiselect);
