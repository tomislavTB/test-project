<template>
    <h1>Podaci po svim državama</h1>
    <table>
      <tr>
        <th>Naziv države</th>
        <th>Novi slučajevi</th>
        <th>Novi smrtni slučajevi</th>
        <th>Novi Oporavljeni</th>
        <th>Ukupni slučajevi</th>
        <th>Ukupno smrtnih slučajeva</th>
        <th>Ukupno ozdravljeno</th>
      </tr>
      <tr v-for="item in data.Countries" :key="item.Country">
        <td>{{ item.Country }}</td>
        <td>{{ item.NewConfirmed }}</td>
        <td style="color: red">{{ item.NewDeaths }}</td>
        <td style="color: green">{{ item.NewRecovered }}</td>
        <td>{{ item.TotalConfirmed }}</td>
        <td style="color: red">{{ item.TotalDeaths }}</td>
        <td style="color: green">{{ item.TotalRecovered }}</td>
      </tr>
    </table>
</template>

<script>
import DataService from "../DataService";
export default {
  name: "Datalist",
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.retrieveData();
  },
  methods: {
    retrieveData() {
      DataService.getAll()
        .then((response) => {
          this.data = response.data;
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
