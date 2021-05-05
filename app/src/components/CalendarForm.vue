<template>
  <div class="container-fluid mt-3">
    <h3 class="subtitle mt-4">Agenda</h3>
    <b-button @click="addEvent()" variant="danger" class="mt-3 mb-3"
      >Adicionar Evento</b-button
    >
    <Fullcalendar :options="calendarOptions" />

    <b-modal title="Adicionar Evento" v-model="modal" hide-footer>
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Title" label-for="title">
          <b-form-input
            v-model="form.title"
            type="text"
            required
            name="title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Start" label-for="start">
          <VueCtkDateTimePicker
            format='YYYY-MM-DD HH:mm:ss'
            input-class="form-control"
            v-model="form.start"
            name="start"
          ></VueCtkDateTimePicker>
        </b-form-group>
        <b-form-group label="End" label-for="end">
          <VueCtkDateTimePicker
            format='YYYY-MM-DD HH:mm:ss'
            input-class="form-control"
            v-model="form.end"
            name="end"
          ></VueCtkDateTimePicker>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          style="justify-content: center"
          >Adicionar</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Fullcalendar from "@fullcalendar/vue";
import DayGridPlugin from "@fullcalendar/daygrid";
import TimeGridPlugin from "@fullcalendar/timegrid";
import InteractionPlugin from "@fullcalendar/interaction";
import ListPlugin from "@fullcalendar/list";

export default {
  data() {
    return {
      calendarOptions: {
        plugins: [DayGridPlugin, TimeGridPlugin, InteractionPlugin, ListPlugin],
        headerToolbar: {
          left: "prev today next",
          center: "title",
          right: "dayGridMonth, timeGridWeek, timeGridDay, list",
        },
        locale: "pt",
        buttonText: {
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          list: "Lista",
        },
        selectable: "true",
        select: this.handleSubmit,
        events: [],
      },
      form: {
        title: "",
        start: "",
        end: "",
      },
      modal: false,
    };
  },
  components: {
    Fullcalendar,
  },
  created() {
    this.loadEvents();
  },
  methods: {
    handleSubmit(selectInfo) {
      this.modal = true;
      this.form.start = selectInfo.start
      this.form.end = selectInfo.end
    },
    addEvent() {
      this.modal = true;
    },
    async onSubmit() {
      try {
        const response = await this.$http.post("/events", {
          title: this.form.title,
          startDate: this.form.start,
          endDate: this.form.end,
        });
        console.log(response);
        this.$swal({
          text: `Evento Adicionado!`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
        this.modal = false
      } catch (err) {
        console.log(err);
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }
    },
    async loadEvents() {
      try {
        const response = await this.$http.get(`/events`);
        if (response.status === 200) {
          this.calendarOptions.events = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
};
</script>

<style>
</style>