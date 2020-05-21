<template>
  <v-dialog
    v-model="isActive"
    max-width="500"
  >
    <v-card>
      <v-row align="center" justify="center">
        <v-col>
          <v-card-title class="headline" align="center" style="background: none; box-shadow: none; font-weight: bold; display: block;">{{ data.status ? '대여가능' : data.rentalName }}</v-card-title>
        </v-col>
        <v-img
          class="white--text align-end"
          :src="data.status ? require('~/assets/images/able_card.png') : require('~/assets/images/disable_card.png')"
          width="100%"></v-img>
        <v-btn
          absolute
          dark
          fab
          right
          color="pink"
          style="top: 15%; font-weight: bold; font-size: large;">
          {{ data.id }}
        </v-btn>
          <v-card-actions>
            <v-col>
              <div class="my-2">
                <v-btn large dark block class="ma-2 white--text" color="success" style="font-weight: bold; font-size: large;" @click="rentalCard()">대여</v-btn>
              </div>
            </v-col>
            <v-col>
              <v-spacer></v-spacer>
            </v-col>
            <v-col>
              <v-spacer></v-spacer>
            </v-col>
            <v-col>
              <v-spacer></v-spacer>
            </v-col>
            <v-col>
              <div class="my-2">
                <v-btn large dark block class="ma-2 white--text" color="error" @click="returnCard()" style="font-weight: bold; font-size: large;">반납</v-btn>
              </div>
            </v-col>
          </v-card-actions>
      </v-row>
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
        rentalCard () {
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
