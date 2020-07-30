<template>
  <div>
    <client-only>
      <bar-chart :data="chartData"/>
    </client-only>
  </div>
</template>

<script>

	export default {
    name: 'dashboard-chart',
    data() {
      return {
        chartData: { // for 'data' prop of 'bar-chart'
          categories: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
          series: [
            {
                name: 'Budget',
                data: [3000, 5000, 7000, 6000, 4000]
            },
            {
                name: 'Income',
                data: [1000, 7000, 2000, 5000, 3000]
            }
          ]
        }
      }
    },
		mounted() {},
		methods: {
		}
	}
</script>

<style scoped>

</style>
