<template>
  <div>
    <h1>Read Speaker</h1>
    <p>model: {{ speaker.model }}</p>
    <p>brand: {{ speaker.brand }}</p>
    <p>watt: {{ speaker.watt }}</p>
    <p>power_input: {{ speaker.power_input }}</p>
    <p>status: {{ speaker.status }}</p>
    <p>type: {{ speaker.type }}</p>
  </div>
</template>
<script>
import SpeakerService from "@/services/SpeakerService";

export default {
  data() {
    return {
      speaker: null
    };
  },
  async created() {
    let speakerId = this.$route.params.speakerId;
    this.speaker = (await SpeakerService.show(speakerId)).data
    console.log(this.speakerId)
  }
};
</script>
<style scoped></style>
