// frontend/src/ChartComponent.js

import { Line } from 'vue-chartjs';
import { Chart as ChartJS } from 'chart.js/auto';

export default {
  extends: Line,
  props: {
    data: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
};
