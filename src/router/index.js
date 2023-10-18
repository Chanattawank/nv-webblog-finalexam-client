import Vue from 'vue'
import Router from 'vue-router'
import SpeakerIndex from '@/components/Speakers/Index'
import SpeakerUpdate from '@/components/Speakers/UpdateSpeaker'
import SpeakerRead from '@/components/Speakers/ReadSpeaker'
import SpeakerCreate from '@/components/Speakers/CreateSpeaker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/speaker/create',
      name: 'speakers-create',
      component: speakerCreate
    },
    {
      path: '/speaker/update/:speakerId',
      name: 'speaker-update',
      component: speakerUpdate
    },
    {
      path: '/speaker/:speakerId',
      name: 'speaker',
      component: speakerRead
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: speakerIndex
    },
  ]
})
