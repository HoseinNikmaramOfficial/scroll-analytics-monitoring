<!-- frontend/src/components/Dashboard.vue -->

<template>
  <div class="dashboard">
    <h1>Scroll Network Metrics</h1>
    <ChartComponent />
  </div>
</template>

<script>
import ChartComponent from './ChartComponent';

export default {
  components: {
    ChartComponent,
  },
};
</script>

<style>
.dashboard {
  text-align: center;
}
</style>
