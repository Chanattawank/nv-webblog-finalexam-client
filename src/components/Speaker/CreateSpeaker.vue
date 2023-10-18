<template>
  <div>
    <h1>Create Speaker</h1>
    <form v-on:submit.prevent="createSpeaker">
      <p>model: <input type="text" v-model="speaker.model" /></p>
      <p>brand: <input type="text" v-model="speaker.brand" /></p>
      <p>watt: <input type="text" v-model="speaker.watt" /></p>
      <p>power_input: <input type="text" v-model="speaker.power_input" /></p>
      <p>status: <input type="text" v-model="speaker.status" /></p>
      <p>type: <input type="text" v-model="speaker.type" /></p>
      <p><button type="submit">create speaker</button></p>
    </form>
    <hr />
    <div>
      <p>model: {{ speaker.model }}</p>
      <p>brand: {{ speaker.brand }}</p>
      <p>watt: {{ speaker.watt }}</p>
      <p>power_input: {{ speaker.power_input }}</p>
      <p>status: {{ speaker.status }}</p>
      <p>type: {{ speaker.type }}</p>
    </div>
  </div>
</template>
<script>
import SpeakersService from "@/services/SpeakerService";

export default {
  data() {
    return {
      speaker: {
        model: "",
        brand: "",
        watt: "",
        power_input: "",
        type: "",
        status: "active"
      }
    };
  },
  methods: {
    async createSpeaker() {
      try {
        await SpeakersService.post(this.speaker);
        this.$router.push({
          name: "speaker"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
