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
              :elevation="0"
              class="mx-auto"
              max-width="400"
              tile>
              <v-img
                class="white--text align-end"
                :src="card.status ? require('../../assets/images/able_card.png') : require('../../assets/images/disable_card.png')"
              >
                <v-btn
                  absolute
                  dark
                  fab
                  top
                  left
                  color="pink"
                  style="top: 3%; font-weight: bold; font-size: large;">
                  {{ card.id }}
                </v-btn>
                    <v-btn v-if="card.status" @click="clickCard(card)" style="background: none; box-shadow: none; font-size: xxx-large; font-weight: bold;">대여가능</v-btn>
                    <v-img
                      v-else
                      class="white--text align-end"
                      :src="require('../../assets/images/sticker.png')"
                      max-width="200"
                      style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"
                    >
                      <v-btn large @click="clickCard(card)" style="background: none; box-shadow: none; font-size: xxx-large; font-weight: bold;">{{ card.rentalName }}</v-btn>
                    </v-img>
              </v-img>
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
