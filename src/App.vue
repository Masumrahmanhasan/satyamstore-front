
<template>
  <RouterView />
</template>
<script>


export default {
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    NProgress.done();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    NProgress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {


      //  start the progress bar
      NProgress.start()
      //  continue to next page
      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      NProgress.done();
    });
  },
};
</script>

