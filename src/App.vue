<template>
  <div id="nav">
    <div id="view" :class="[{ collapsed: collapsed }]">
      <router-view />
    </div>
    <sidebar-menu class="sidebar" :menu="menu" :collapsed="collapsed" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: "COVID-19 info",
          hiddenOnCollapse: true,
        },
        {
          href: "/",
          title: "Naslovna stranica",
        },
        {
          href: "", 
          title: "Podaci",
          child: [
            {
              href: "/Countries",
              title: "Sve države",
            },
            {
              href: "/SelectCountryA",
              title: "Aktivni slučajevi po državi",
            },
            {
              href: "/SelectCountryR",
              title: "Broj oporavljenih po državi",
            },
            {
              href: "/SelectCountryD",
              title: "Smrtni slučajevi po državi",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
#view {
  padding-left: 350px;
}
#view.collapsed {
  padding-left: 50px;
}

.v-sidebar-menu .vsm--toggle-btn_default:before {
  height: 0px !important;
}
</style>
