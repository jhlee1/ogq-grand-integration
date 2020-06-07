<template>
  <div>
    <restaurant-card v-for="r in restaurants" :key="r.restaurantId" :restaurant="r" />
  </div>
</template>

<script>
  import RestaurantCard from '~/components/RestaurantCard';

  export default {
    name: 'restaurants',
    data: () => ({
      page: 0
    }),
    components: {
      RestaurantCard
    },
    computed: {
      restaurants() {
        return this.$store.state.restaurants.restaurantList;
      },
      hasMoreRestaurant() {
        return this.$store.state.restaurants.hasMoreRestaurant;
      }
    },
    fetch({store}) {
      store.dispatch('restaurants/loadRestaurants',
        {
          page: 0
        });
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll());
    },
    methods: {
      onScroll() {
        if( window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 100) {

          if (this.$store.state.restaurants.hasMoreRestaurant) {
            this.$data.page++;
            this.$store.dispatch('restaurants/loadRestaurants',
              {
                page: this.$data.page
              }
            );
          }
        }
      }
    }

  }
</script>

<style scoped>

</style>
