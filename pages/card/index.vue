<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-5"
          style="height: 100%">
          <v-card
            v-for="card in cardList"
            :key="card.id"
            class="ma-5 pa-12"
            outlined
            tile>
            {{ card.id }}
            <v-card-actions>
              <v-btn text>{{ card.rentalName }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as cardStore from '@/store/card'
import * as cardGetters from '@/store/card/getters'

export default {
  name: 'Card',
  data () {
    return {
      alignment: 'center',
      justify: 'center'
    }
  },
  computed: {
    ...cardStore.mapGetters({
      cardList: cardGetters.LOAD_CARD_LIST
    })
    // cardList () {
    //   // return this.$store.getters['card/loadCardList']
    //   return [{
    //     id: 1,
    //     rentalName: '김연희'
    //   }]
    //   // return this.$store.getters.card.loadCardList
    // }
  },
  fecth ({ store }) {
    store.dispatch('card/initCardList')
  }
}
</script>

<style scoped>

</style>
