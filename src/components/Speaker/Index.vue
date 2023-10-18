<template>
  <div>
    <h1>Get All Users</h1>
    <div>จํานวนผู้ใช้งาน {{ speaker.length }}</div>
    <div v-for="speaker in speakers" v-bind:key="speaker.id">
      <div>model: {{ speaker.model }} </div>
      <div>brand: {{ speaker.brand }} </div>
      <div>watt: {{ speaker.watt }} </div>
      <div>power_input: {{ speaker.power_input }} </div>
      <div>status: {{ speaker.status }} </div>
      <div>type: {{ speaker.type }} </div>
      <p>
        <button v-on:click="navigateTo('/speaker/' + speaker.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/speaker/update/' + speaker.id)">
          แก้ไขข้อมูล
        </button>
        <button v-on:click="deleteSpeaker(speaker)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import SpeakerServices from "@/services/SpeakerService";
export default {
  data() {
    return {
      speakers: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteSpeaker(speaker) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await SpeakerServices.delete(speaker);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.speakers = (await UserServices.index()).data;
    }
  },
  async created() {
    this.speakers = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>