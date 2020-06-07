<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-card-title>{{restaurant.name}}</v-card-title>
    <v-card-text class="text--primary">
      {{restaurant.address}}
    </v-card-text>
    <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">

        <v-card-text>
          {{restaurant.menu}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    props: {
      restaurant: {
        type: Object,
        required: true
      }
    },
    data: () => ({
      show: false,
    }),
  }
</script>
