<template>
  <div class="container-fluid">
    <b-form @submit.prevent="addUser" enctype="multipart/form- data">
      <h4 class="subtitle mt-4">Dados Pessoais</h4>
      <!-- Nome password-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group id="input-name" label="Nome" label-for="input-name">
            <b-form-input
              id="input-name"
              v-model="form.name"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-password"
            label="Password"
            label-for="input-password"
          >
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Email Avatar-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group id="input-email" label="Email" label-for="input-email">
            <b-form-input
              id="input-email"
              v-model="form.email"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-avatar"
            label="Avatar"
            label-for="input-avatar"
          >
            <b-form-file
              v-model="form.avatar"
              :state="Boolean(form.avatar)"
              @change="selectFile"
              ref="file"
              required
            ></b-form-file>
          </b-form-group>
        </div>
      </div>
      <!-- Telemóvel TipoUtilizador-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-phone"
            label="Telemóvel"
            label-for="input-phone"
          >
            <b-form-input
              id="input-phone"
              v-model="form.phone"
              type="tel"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-userType"
            label="Tipo de Utilizador:"
            label-for="input-userType"
          >
            <b-form-select
              id="input-userType"
              v-model="form.userType"
              :options="
                userTypes.map((userType) => {
                  return {
                    value: userType.id_user_type,
                    text: userType.user_type,
                  };
                })
              "
            ></b-form-select>
          </b-form-group>
        </div>
      </div>
      <!-- Nacionalidade DataNascimento-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-nacionality"
            label="Nacionalidade"
            label-for="input-nacionality"
          >
            <b-form-input
              id="input-nacionality"
              v-model="form.nacionality"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-birthday"
            label="Data de Nascimento"
            label-for="input-birthday"
          >
            <b-form-datepicker
              id="input-birthday"
              v-model="form.birthday"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              type="date"
              class="mb-2"
              required
            ></b-form-datepicker>
          </b-form-group>
        </div>
      </div>
      <!-- Naturalidade IdCivil Validade-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-placeOfBirth"
            label="Naturalidade"
            label-for="input-placeOfBirth"
          >
            <b-form-input
              id="input-placeOfBirth"
              v-model="form.placeOfBirth"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-civilId"
            label="Id Civil"
            label-for="input-civilId"
          >
            <b-form-input
              id="input-civilId"
              v-model="form.civilId"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-validity"
            label="Validade"
            label-for="input-validity"
          >
            <b-form-datepicker
              id="input-validity"
              v-model="form.validity"
              :date-format-options="{
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
              }"
              type="date"
              class="mb-2"
              required
            ></b-form-datepicker>
          </b-form-group>
        </div>
      </div>
      <!-- Morada-->
      <div class="row">
        <div class="col-sm-12">
          <b-form-group
            id="input-address"
            label="Morada"
            label-for="input-address"
          >
            <b-form-input
              id="input-address"
              v-model="form.address"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- EstadoCivil CodPostal IdFiscal-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-maritalStatus"
            label="Estado Civil"
            label-for="input-maritalStatus"
          >
            <b-form-input
              id="input-maritalStatus"
              v-model="form.maritalStatus"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-postalCode"
            label="Cód. Postal"
            label-for="input-postalCode"
          >
            <b-form-input
              id="input-postalCode"
              v-model="form.postalCode"
              type="text"
              pattern="[0-9]{4}-[0-9]{3}"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-fiscalId"
            label="Id Fiscal"
            label-for="input-fiscalId"
          >
            <b-form-input
              id="input-fiscalId"
              v-model="form.fiscalId"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- NISS HabLit ÁreaFormação-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group id="input-niss" label="NISS" label-for="input-niss">
            <b-form-input
              id="input-niss"
              v-model="form.niss"
              patern="[0-9]*"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-academicQualification"
            label="Habilitações Literárias"
            label-for="input-academicQualification"
          >
            <b-form-input
              id="input-academicQualification"
              v-model="form.academicQualification"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-academicArea"
            label="Área de formação"
            label-for="input-academicArea"
          >
            <b-form-input
              id="input-academicArea"
              v-model="form.academicArea"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- ContactoPessoal ContactoEmergencia SituaçãoLaboral-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-personalContact"
            label="Contacto Pessoal"
            label-for="input-personalContact"
          >
            <b-form-input
              id="input-personalContact"
              v-model="form.personalContact"
              type="tel"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-emergencyContact"
            label="Contacto de Emegência"
            label-for="input-emergencyContact"
          >
            <b-form-input
              id="input-emergencyContact"
              v-model="form.emergencyContact"
              type="tel"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-employmentSituation"
            label="Situação laboral"
            label-for="input-employmentSituation"
          >
            <b-form-input
              id="input-employmentSituation"
              v-model="form.employmentSituation"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!--Emai Pessoal-->
      <div class="row">
        <div class="col-sm-12">
          <b-form-group
            id="input-personalEmail"
            label="Email Pessoal"
            label-for="input-personalEmail"
          >
            <b-form-input
              id="input-personalEmail"
              v-model="form.personalEmail"
              type="email"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Regime Horário NIF-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-regime"
            label="Regime"
            label-for="input-regime"
          >
            <b-form-input
              id="input-regime"
              v-model="form.regime"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-schedule"
            label="Horário"
            label-for="input-schedule"
          >
            <b-form-input
              id="input-schedule"
              v-model="form.schedule"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group id="input-nif" label="NIF" label-for="input-nif">
            <b-form-input
              id="input-nif"
              v-model="form.nif"
              type="text"
              pattern="[0-9]{9}"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <h4 class="subtitle mt-4">Informação Relevante</h4>
      <!-- Experiência Tempo Agência/Marca-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-experience"
            label="Experiência"
            label-for="input-experience"
          >
            <b-form-input
              id="input-experience"
              v-model="form.experience"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-time"
            label="Quanto tempo"
            label-for="input-time"
          >
            <b-form-input
              id="input-time"
              v-model="form.time"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-agency"
            label="Agência/Marca"
            label-for="input-agency"
          >
            <b-form-input
              id="input-agency"
              v-model="form.agency"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Viatura ZonaAtuação Equipa-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-ownCar"
            label="Viatura Própria"
            label-for="input-ownCar"
          >
            <b-form-input
              id="input-ownCar"
              v-model="form.ownCar"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-actingZone"
            label="Zona de atuação"
            label-for="input-actingZone"
          >
            <b-form-input
              id="input-actingZone"
              v-model="form.actingZone"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group id="input-team" label="Equipa" label-for="input-team">
            <b-form-input
              id="input-team"
              v-model="form.team"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Elementos Angariações Transações-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-elements"
            label="Elementos"
            label-for="input-elements"
          >
            <b-form-input
              id="input-elements"
              v-model="form.elements"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-acquisition"
            label="Angariações"
            label-for="input-acquisition"
          >
            <b-form-input
              id="input-acquisition"
              v-model="form.acquisition"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-transaction"
            label="Transação"
            label-for="input-transaction"
          >
            <b-form-input
              id="input-transaction"
              v-model="form.transaction"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- VolumeFaturação Anotações-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-faturationVolume"
            label="Volume Faturação"
            label-for="input-faturationVolume"
          >
            <b-form-input
              id="input-faturationVolume"
              v-model="form.faturationVolume"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-8 col-sm-12">
          <b-form-group
            id="input-anotation"
            label="Anotações"
            label-for="input-anotation"
          >
            <b-form-input
              id="input-anotation"
              v-model="form.anotation"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <h4 class="subtitle mt-4">
        Disponibilidade E Objetivos profissionais a que se Propõe
      </h4>
      <!--disponibilidade Dias-->
      <div class="row">
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-availability"
            label="Disponibilidade"
            label-for="input-availability"
          >
            <b-form-input
              id="input-availability"
              v-model="form.availability"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-availabilityDays"
            label="Dias"
            label-for="input-availabilityDays"
          >
            <b-form-input
              id="input-availabilityDays"
              v-model="form.availabilityDays"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Horário ReuniaoGeral ReuniãoAcompanhamento-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-availabilitySchedule"
            label="Horário"
            label-for="input-availabilitySchedule"
          >
            <b-form-input
              id="input-availabilitySchedule"
              v-model="form.availabilitySchedule"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-generalMeeting"
            label="Reunião Geral"
            label-for="input-generalMeeting"
          >
            <b-form-input
              id="input-generalMeeting"
              v-model="form.generalMeeting"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-suportMeeting"
            label="Reunião de Acompanhamento"
            label-for="input-suportMeeting"
          >
            <b-form-input
              id="input-suportMeeting"
              v-model="form.suportMeeting"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Escala Publicidade Posicionamento-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group id="input-scale" label="Escala" label-for="input-scale">
            <b-form-input
              id="input-scale"
              v-model="form.scale"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-publicityZone"
            label="Publicidade Zona"
            label-for="input-publicityZone"
          >
            <b-form-input
              id="input-publicityZone"
              v-model="form.publicityZone"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-positioningZone"
            label="Zona de Posicionamento"
            label-for="input-positioningZone"
          >
            <b-form-input
              id="input-positioningZone"
              v-model="form.positioningZone"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- PublicidadeMensal FlyersRevista FaturaçãoMensal-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-mensalPublicity"
            label="Publicidade Mensal"
            label-for="input-mensalPublicity"
          >
            <b-form-input
              id="input-mensalPublicity"
              v-model="form.mensalPublicity"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-flyers"
            label="Flyers/Revista"
            label-for="input-flyers"
          >
            <b-form-input
              id="input-flyers"
              v-model="form.flyers"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-mensalInvoice"
            label="Valor Medio Faturação"
            label-for="input-mensalInvoice"
          >
            <b-form-input
              id="input-mensalInvoice"
              v-model="form.mensalInvoice"
              type="number"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Elementos Angariações Transações-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-mensalAcquisition"
            label="Angariações Mês"
            label-for="input-mensalAcquisition"
          >
            <b-form-input
              id="input-mensalAcquisition"
              v-model="form.mensalAcquisition"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-averageTransaction"
            label="Valor Médio Transação"
            label-for="input-averageTransaction"
          >
            <b-form-input
              id="input-averageTransaction"
              v-model="form.averageTransaction"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-mensalTransaction"
            label="Transação mês"
            label-for="input-mensalTransaction"
          >
            <b-form-input
              id="input-mensalTransaction"
              v-model="form.mensalTransaction"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>
      <!-- Zona1 Zona2 Zona3-->
      <div class="row">
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-firstZone"
            label="Zona 1"
            label-for="input-firstZone"
          >
            <b-form-input
              id="input-firstZone"
              v-model="form.firstZone"
              type="text"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-secondZone"
            label="Zona 2"
            label-for="input-secondZone"
          >
            <b-form-input
              id="input-secondZone"
              v-model="form.secondZone"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-4 col-sm-12">
          <b-form-group
            id="input-thirdZone"
            label="Zona 3"
            label-for="input-thirdZone"
          >
            <b-form-input
              id="input-thirdZone"
              v-model="form.thirdZone"
              type="text"
              class="mb-2"
              required
            ></b-form-input>
          </b-form-group>
        </div>
      </div>

      <div
        class="row align-items-center d-flex justify-content-center mt-5 mb-5"
      >
        <b-button class="btn-add mt-5 mb-5" type="submit" variant="danger"
          >Adicionar</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  created() {
    this.loadUserType();
    this.loadUsers();
    console.log(this.users);
  },
  data() {
    return {
      form: {
        name: "",
        password: "",
        email: "",
        avatar: "",
        phone: "",
        userType: "",
        nacionality: "",
        birthday: "",
        placeOfBirth: "",
        civilId: "",
        validity: "",
        address: "",
        maritalStatus: "",
        postalCode: "",
        fiscalId: "",
        niss: "",
        academicQualification: "",
        academicArea: "",
        personalContact: "",
        emergencyContact: "",
        employmentSituation: "",
        personalEmail: "",
        regime: "",
        schedule: "",
        nif: "",
        experience: "",
        time: "",
        agency: "",
        ownCar: "",
        actingZone: "",
        team: "",
        elements: "",
        acquisition: "",
        transaction: "",
        faturationVolume: "",
        anotation: "",
        availability: "",
        workType: "",
        availabilityDays: "",
        availabilitySchedule: "",
        generalMeeting: "",
        suportMeeting: "",
        scale: "",
        publicityZone: "",
        positioningZone: "",
        mensalPublicity: "",
        flyers: "",
        mensalInvoice: "",
        mensalAcquisition: "",
        mensalTransaction: "",
        firstZone: "",
        secondZone: "",
        thirdZone: "",
      },
      users: [],
      userTypes: [],
      verifyFields: false,
    };
  },
  methods: {
    selectFile() {
      this.form.avatar = this.$refs.file.files[0];
    },
    async loadUserType() {
      try {
        const response = await this.$http.get(`/userType`);
        if (response.status === 200) {
          this.userTypes = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async loadUsers() {
      try {
        const response = await this.$http.get(`/users`);
        if (response.status === 200) {
          this.users = response.data.content;
        }
      } catch (err) {
        console.log(err.response);
      }
    },
    async addUser() {
      try {
        this.verifyFields = false;
        for (let i = 0; i < this.users.length; i++) {
          if (this.form.email == this.users[i].email) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse email!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.phone == this.users[i].number) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse número!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.civilId == this.users[i].civil_id) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse id civil!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.niss == this.users[i].niss) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse niss!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.personalContact == this.users[i].personal_contact) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse contacto pessoal!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.emergencyContact == this.users[i].emergency_contact) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse contacto pessoal!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.personalEmail == this.users[i].personal_email) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse email pessoal!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
          if (this.form.nif == this.users[i].nif) {
            this.verifyFields = true;
            this.$swal({
              text: `Já existe um utilizador com esse nif!`,
              icon: "error",
              button: false,
              timer: 2000,
            });
          }
        }
        if (this.verifyFields == false) {
          const formData = new FormData();
          formData.append("file", this.form.avatar);
          const response = await this.$http.post("/users", {
            name: this.form.name,
            email: this.form.email,
            number: this.form.phone,
            password: this.form.password,
            nacionality: this.form.nacionality,
            avatar: this.form.avatar,
            birthday: this.form.birthday,
            userType: this.form.userType,
            placeOfBirth: this.form.placeOfBirth,
            civilId: this.form.civilId,
            validity: this.form.validity,
            address: this.form.address,
            maritalStatus: this.form.maritalStatus,
            postalCode: this.form.postalCode,
            fiscalId: this.form.fiscalId,
            niss: this.form.niss,
            academicQualification: this.form.academicQualification,
            academicArea: this.form.academicArea,
            personalContact: this.form.personalContact,
            emergencyContact: this.form.emergencyContact,
            employmentSituation: this.form.employmentSituation,
            personalEmail: this.form.personalEmail,
            regime: this.form.regime,
            schedule: this.form.schedule,
            nif: this.form.nif,
            experience: this.form.experience,
            time: this.form.time,
            agency: this.form.agency,
            ownCar: this.form.ownCar,
            actingZone: this.form.actingZone,
            team: this.form.team,
            elements: this.form.elements,
            acquisition: this.form.acquisition,
            transaction: this.form.transaction,
            faturationVolume: this.form.faturationVolume,
            anotation: this.form.anotation,
            availability: this.form.availability,
            workType: this.form.workType,
            days: this.form.availabilityDays,
            availabilitySchedule: this.form.availabilitySchedule,
            generalMeeting: this.form.generalMeeting,
            accomplishMeeting: this.form.suportMeeting,
            scale: this.form.scale,
            publicityZone: this.form.publicityZone,
            positioningZone: this.form.positioningZone,
            mensalPublicity: this.form.mensalPublicity,
            flyers: this.form.flyers,
            mensalInvoice: this.form.mensalInvoice,
            mensalAcquisition: this.form.mensalAcquisition,
            averageTransaction: this.form.mensalTransaction,
            firstZone: this.form.firstZone,
            secondZone: this.form.secondZone,
            thirdZone: this.form.title,
            active: 0,
            passive: 0,
          });
          console.log(response);
          this.$swal({
            text: `Utilizador Adicionado!`,
            icon: "success",
            button: false,
            timer: 2000,
          });
          this.$store.commit("ADD_USER", "User Adicionado");
          (this.form.name = ""),
            (this.form.password = ""),
            (this.form.email = ""),
            (this.form.avatar = ""),
            (this.form.phone = ""),
            (this.form.userType = ""),
            (this.form.nacionality = ""),
            (this.form.birthday = ""),
            (this.form.placeOfBirth = ""),
            (this.form.civilId = ""),
            (this.form.validity = ""),
            (this.form.address = ""),
            (this.form.maritalStatus = ""),
            (this.form.postalCode = ""),
            (this.form.fiscalId = ""),
            (this.form.niss = ""),
            (this.form.academicQualification = ""),
            (this.form.academicArea = ""),
            (this.form.personalContact = ""),
            (this.form.emergencyContact = ""),
            (this.form.employmentSituation = ""),
            (this.form.personalEmail = ""),
            (this.form.regime = ""),
            (this.form.schedule = ""),
            (this.form.nif = ""),
            (this.form.experience = ""),
            (this.form.time = ""),
            (this.form.agency = ""),
            (this.form.ownCar = ""),
            (this.form.actingZone = ""),
            (this.form.team = ""),
            (this.form.elements = ""),
            (this.form.acquisition = ""),
            (this.form.transaction = ""),
            (this.form.faturationVolume = ""),
            (this.form.anotation = ""),
            (this.form.availability = ""),
            (this.form.workType = ""),
            (this.form.availabilityDays = ""),
            (this.form.availabilitySchedule = ""),
            (this.form.generalMeeting = ""),
            (this.form.suportMeeting = ""),
            (this.form.scale = ""),
            (this.form.publicityZone = ""),
            (this.form.positioningZone = ""),
            (this.form.mensalPublicity = ""),
            (this.form.flyers = ""),
            (this.form.mensalInvoice = ""),
            (this.form.mensalAcquisition = ""),
            (this.form.mensalTransaction = ""),
            (this.form.firstZone = ""),
            (this.form.secondZone = ""),
            (this.form.thirdZone = "");
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
          console.log(err);
        }
      }
    },
  },
};
</script>

<style>
</style>