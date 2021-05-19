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
            format="YYYY-MM-DD HH:mm:ss"
            input-class="form-control"
            v-model="form.start"
            name="start"
          ></VueCtkDateTimePicker>
        </b-form-group>
        <b-form-group label="End" label-for="end">
          <VueCtkDateTimePicker
            format="YYYY-MM-DD HH:mm:ss"
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

    <b-modal title="Editar Evento" v-model="editModal" hide-footer>
      <b-form @submit.prevent="onSubmitEdit">
        <b-form-group label="Title" label-for="title">
          <b-form-input
            v-model="form.edit.title"
            type="text"
            required
            name="title"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Start" label-for="start">
          <VueCtkDateTimePicker
            format="YYYY-MM-DD HH:mm:ss"
            input-class="form-control"
            v-model="form.edit.start"
            name="start"
          ></VueCtkDateTimePicker>
        </b-form-group>
        <b-form-group label="End" label-for="end">
          <VueCtkDateTimePicker
            format="YYYY-MM-DD HH:mm:ss"
            input-class="form-control"
            v-model="form.edit.end"
            name="end"
          ></VueCtkDateTimePicker>
        </b-form-group>
        <b-button
          class="mr-2"
          type="submit"
          variant="primary"
          style="justify-content: center"
          >Editar</b-button
        >
        <b-button
          @click="onSubmitDelete"
          variant="danger"
          style="justify-content: center"
          >Apagar</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
          right: "dayGridMonth,timeGridWeek,timeGridDay,listYear",
        },
        locale: "pt",
        buttonText: {
          today: "Hoje",
          month: "Mês",
          week: "Semana",
          day: "Dia",
          list: "Lista",
        },
        themeSystem: "simplex",
        selectable: "true",
        select: this.handleSubmit,
        eventClick: this.eventClick,
        events: [],
        eventRender: this.events,
      },
      form: {
        title: "",
        start: "",
        end: "",
        edit: {
          title: "",
          start: "",
          end: "",
        },
      },
      modal: false,
      editModal: false,
      eventId: 0,
    };
  },
  components: {
    Fullcalendar,
  },
  created() {
    this.loadEvents();
    this.$store.subscribe((mutation) => {
      switch (mutation.type) {
        case "ADD_EVENT":
          this.loadEvents();
          break;
        case "DELETE_EVENT":
          this.loadEvents();
          break;
        case "EDIT_EVENT":
          this.loadEvents();
          break;
      }
    });
  },
  methods: {
    eventClick(arg) {
      this.eventId = arg.event.id;
      this.form.edit.title = arg.event.title;
      this.form.edit.start = arg.event.startStr;
      this.form.edit.end = arg.event.endStr;
      this.editModal = true;
    },
    handleSubmit(selectInfo) {
      this.modal = true;
      this.form.start = selectInfo.startStr;
      this.form.end = selectInfo.endStr;
    },
    addEvent() {
      this.modal = true;
    },
    async onSubmitDelete() {
      try {
        this.$swal({
          title: "Tem a certeza?",
          text: "Não vai conseguir reverter!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((result) => {
          if (result) {
            const response = this.$http.delete(`/events/${this.eventId}`);
            console.log(response);
            this.$swal({
              text: `Evento Apagado!`,
              icon: "success",
              button: false,
              timer: 2000,
            });
            this.editModal = false;
            this.$store.commit("DELETE_EVENT", "Evento Apagado");
          }
        });
      } catch (err) {
        console.log(err);
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        }
      }
    },
    async onSubmitEdit() {
      try {
        const today = new Date().toISOString().slice(0, 10);
        if (this.form.edit.start > this.form.edit.end) {
          this.$swal({
            text: `A data de inicio tem de ser antes da final!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else if (this.form.edit.start <= today) {
          this.$swal({
            text: `O evento tem de ser no futuro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else {
          const response = this.$http.put(`/events/${this.eventId}`, {
            title: this.form.edit.title,
            startDate: this.form.edit.start,
            endDate: this.form.edit.end,
          });
          console.log(response);
          this.$swal({
            text: `Evento Editado!`,
            icon: "success",
            button: false,
            timer: 2000,
          });
          this.editModal = false;
          this.$store.commit("EDIT_EVENT", "Evento Editado");
        }
      } catch (err) {
        console.log(err);
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        }
      }
    },
    async onSubmit() {
      try {
        const today = new Date().toISOString().slice(0, 10);
        if (this.form.start > this.form.end) {
          this.$swal({
            text: `A data de inicio tem de ser antes da final!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else if (this.form.start <= today) {
          this.$swal({
            text: `O evento tem de ser no futuro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        } else {
          const response = await this.$http.post("/events", {
            title: this.form.title,
            startDate: this.form.start,
            endDate: this.form.end,
            userId: this.getLoggedUser.id_user,
          });
          console.log(response);
          this.$swal({
            text: `Evento Adicionado!`,
            icon: "success",
            button: false,
            timer: 2000,
          });
          this.modal = false;
          this.$store.commit("ADD_EVENT", "Evento adicionado");
        }
      } catch (err) {
        console.log(err);
        if (err) {
          this.$swal({
            text: `Ups occoreu um erro!`,
            icon: "error",
            timer: 2000,
            button: false,
          });
        }
      }
    },
    async loadEvents() {
      try {
        const response = await this.$http.get(
          `/events/${this.getLoggedUser.id_user}`
        );
        if (response.status === 200) {
          this.calendarOptions.events = response.data.content;
          this.calendarOptions.events = this.calendarOptions.events.map(
            (event) => {
              return {
                id: event.id_event,
                title: event.title,
                start: event.start_date,
                end: event.end_date,
                allDay: false,
              };
            }
          );
        }
      } catch (err) {
        console.log(err.response);
      }
    },
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<style>
</style>