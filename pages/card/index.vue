<template>
  <div>
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
                <v-btn @click="clickCard(card)">{{ card.status ? '대여가능' : card.rentalName }}</v-btn>
              </v-card-title>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <modal :isActive="isActiveModal" :data="card" @close="toggleModal"></modal>
  </div>
</template>

<script>
import * as cardStore from '@/store/card'
import * as cardGetters from '@/store/card/getters'
import * as cardActions from '@/store/card/actions'

import Modal from '@/components/modal'

export default {
  name: 'Card',
  components: { Modal },
  data () {
    return {
      alignment: 'center',
      justify: 'center',
      isActiveModal: false,
      card: {}
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
    },
    clickCard (card) {
      this.toggleModal()
      // 해당 카드 정보 저장
      this.card = card
    },
    toggleModal () {
      this.isActiveModal = !this.isActiveModal
    }
  }
}
</script>

<style scoped>

</style>
