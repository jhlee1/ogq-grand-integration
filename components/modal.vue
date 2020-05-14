<template>
  <v-dialog
    v-model="isActive"
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline" align="center">{{ data.status ? '대여가능' : data.rentalName }}</v-card-title>
      <v-img
        class="white--text align-end"
        :src="data.status ? require('~/assets/images/able_card.png') : require('~/assets/images/disable_card.png')"
        width="100%"></v-img>
      <v-avatar
        color="orange">
        <span class="white--text headline">{{ data.id }}</span>
      </v-avatar>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="rentalCard()"
        >
          대여
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="returnCard()"
        >
          반납
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
      name: 'modal',
      props: {
        isActive: {
          type: Boolean,
          default: false
        },
        data: {
          type: Object,
          default: () => {}
        }
      },
      methods: {
        rentalCard() {
          // 카드대여 actions
          this.$emit('close')
        },
        returnCard () {
          // 카드반납 actions
          this.$emit('close')
        }
      }
    }
</script>

<style scoped>
</style>
