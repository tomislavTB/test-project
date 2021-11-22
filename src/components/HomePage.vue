<template>
  <div align="center" justify="center" class="hello">
    <h1 style="margin-top: 4%; margin-bottom: 4%">
      Dobrodošli na informativnu stranicu o
      <p style="color: red">COVID-19</p>
    </h1>
    <div>
      <img height="400" width="1000" crop="fill" :src="image" />
    </div>
  </div>
</template>

<script>
const images = [
  "https://www.who.int/images/default-source/health-topics/coronavirus/health-care-facilities_8_1-01.png?sfvrsn=823c9ad5_18",
  "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-19-1400x693_0.jpg?itok=kNHMlUl0",
  "https://nascireland.org/sites/default/files/styles/full_width/public/2021-01/Covid-19%20World%20Service%20%281%29.png?itok=zUutWhN_",
];

export default {
  name: "Datalist",
  data() {
    return {
      index: 0,
      image: images[0],
    };
  },
  created() {},

  methods: {
    next() {
      this.index = (this.index + 1) % images.length;
      this.image = images[this.index];
    },
    autoChangeSlide() {
      setInterval(() => {
        this.next();
      }, 3000);
    },
  },
  beforeMount() {
    this.autoChangeSlide();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
