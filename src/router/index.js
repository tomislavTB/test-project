import { createWebHistory, createRouter } from "vue-router"
import Countries from "@/components/AllCountriesComponent.vue"
import CountriesA from "@/components/CountriesComponentA.vue"
import CountriesR from "@/components/CountriesComponentR.vue"
import CountriesD from "@/components/CountriesComponentD.vue"

import Home from "@/components/HomePage.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Countries",
    name: "Countries",
    component: Countries,
  },
  {
    path: "/SelectCountryA",
    name: "CountriesA",
    component: CountriesA,
  },
  {
    path: "/SelectCountryR",
    name: "CountriesR",
    component: CountriesR,
  },
  {
    path: "/SelectCountryD",
    name: "CountriesD",
    component: CountriesD,
  },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router