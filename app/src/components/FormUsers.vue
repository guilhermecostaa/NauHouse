<template>
  <div class="container-fluid">
    <b-form @submit.prevent="addUser">
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
              v-model="avatar"
              :state="Boolean(avatar)"
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-6 col-sm-12">
          <b-form-group
            id="input-userType"
            label="Tipo de Utilizador"
            label-for="input-userType"
          >
            <div class="form-group">
              <select
                class="form-control"
                name
                id="input-userType"
                v-model="form.userType"
              >
                <option disabled>Selecione Uma</option>
                <option>Admistrador</option>
                <option>Consultor</option>
              </select>
            </div>
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
              :pickerOptions="pickerOptions"
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
              :pickerOptions="pickerOptions"
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
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
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
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
            label="Elementos"
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
              type="number"
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
            label="Elementos"
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
  data() {
    return {
      form: {
        name: "",
        password: "",
        email: "",
        avatar: null,
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
    };
  },
  methods: {},
};
</script>

<style>
</style>