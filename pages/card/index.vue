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
            :color="card.status ? '#26c6da' : 'pink darken-1'"
            class="ma-5 pa-12"
            max-width="200"
            outlined
            tile>
            <v-avatar
              color="orange">
              <span class="white--text headline">{{ card.id }}</span>
            </v-avatar>
            <v-card-title>
              <v-btn v-if="card.status" text>대여가능</v-btn>
              <v-btn v-else text>{{ card.rentalName }}</v-btn>
            </v-card-title>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as cardStore from '@/store/card'
import * as cardGetters from '@/store/card/getters'
import * as cardActions from '@/store/card/actions'

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
  },
  mounted () {
    this.getTest()
  },
  methods: {
    ...cardStore.mapActions([
      cardActions.INIT_CARD_LIST
    ]),
    async getTest () {
      await this[cardActions.INIT_CARD_LIST]()
    }
  }
}
</script>

<style scoped>

</style>
