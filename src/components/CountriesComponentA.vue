<template>
    <h1>Podaci o aktivnim slučajevima</h1>
    <div id="v-model-select" class="demo">
      <select
        style="font-size: 18px"
        v-model="selected"
        @change="onChange($event)"
      >
        <option disabled value="">Odaberite državu</option>
        <option v-for="item in countries" :key="item.Country">
          {{ item.Country }}
        </option>
      </select>
    </div>
    <br />

    <table>
      <tr>
        <th>Naziv države</th>
        <th>Datum</th>
        <th>Aktivni slucajevi</th>
      </tr>

      <tr v-for="item in data" :key="item.Country">
        <td>{{ item.Country }}</td>
        <td>{{ item.Date }}</td>
        <td style="color: blue">{{ item.Active }}</td>
      </tr>
    </table>
</template>

<script>
import DataService from "../DataService";
import moment from "moment";

export default {
  name: "Datalist",
  data() {
    return {
      countries: [],
      data: [],
      selected: "",
    };
  },
  created() {
    this.retrieveData("Croatia");
    this.retrieveDataCountries();
  },

  methods: {
    onChange(event) {
      this.retrieveData(event.target.value);
    },

    retrieveDataCountries() {
      DataService.getCountries()
        .then((response) => {
          this.countries = response.data;
          this.countries = response.data;
        })
    },
    retrieveData(name) {
      DataService.getActive(name)
        .then((response) => {
          this.data = response.data;
          response.data.forEach((element) => {
            element.Date = moment(String(element.Date)).format("DD/MM/YYYY");
          });
          this.data = response.data;
        })
    },
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
