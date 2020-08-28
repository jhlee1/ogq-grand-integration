<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            :align="alignment"
            :justify="justify"
            class="lighten-5"
            style="height: 100%">
            <v-card
              v-for="card in cardList"
              :key="card.cardNum"
              :elevation="0"
              class="mx-auto"
              max-width="400"
              tile>
              <v-img
                class="white--text align-end"
                :src="card.borrowed ? require('../../assets/images/disable_card.png') : require('../../assets/images/able_card.png')"
              >
                <v-btn
                  absolute
                  dark
                  fab
                  top
                  left
                  color="pink"
                  style="top: 3%; font-weight: bold; font-size: large;">
                  {{ card.cardNum }}
                </v-btn>
                  <v-btn v-if="!card.borrowed" @click="clickCard(card)" class="rental">대여가능</v-btn>
                  <v-btn v-else large @click="clickCard(card)" class="card_name">{{ card.name }}</v-btn>
              </v-img>
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <card-modal :isActive="isActiveModal" :data="card" @close="toggleModal" @return="returnCard" @rental="rentalCard"></card-modal>
  </div>
</template>

<script>
import * as cardStore from '@/store/card'
import * as cardGetters from '@/store/card/getters'
import * as cardActions from '@/store/card/actions'

import CardModal from '@/components/CardModal'
import {PUT_USE_CARD} from "../../store/card/actions";

export default {
  name: 'Card',
  components: { CardModal },
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
      cardList: cardGetters.LOAD_CARD_LIST,
      returned: cardGetters.RETURNED
    })
  },
  mounted () {
    this.getTest()
  },
  watch: {
    returned: 'getTest'
  },
  methods: {
    ...cardStore.mapActions([
      cardActions.INIT_CARD_LIST,
      cardActions.PUT_BACK_CARD,
      cardActions.PUT_USE_CARD
    ]),
    async getTest () {
      await this[cardActions.INIT_CARD_LIST]()
    },
    clickCard (card) {
      this.toggleModal()
      // 해당 카드 정보 저장
      console.log('card ', card)
      this.card = card
    },
    toggleModal () {
      this.isActiveModal = !this.isActiveModal
    },
    async returnCard (cardNum) {
      await this[cardActions.PUT_BACK_CARD](cardNum)
    },
    async rentalCard (cardNum) {
      await this[cardActions.PUT_USE_CARD](cardNum)
    }
  }
}
</script>

<style scoped>
  .rental {
    background: none !important;
    box-shadow: none;
    font-size: xxx-large;
    font-weight: bold;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    position: absolute;
}
/*.topheader h1 a { display: inline-block; width: 68px; height: 23px; background: url('~assets/images/toplogo2.png') no-repeat left top; background-size: 100% auto; vertical-align: top; }*/

  .card_name {
    background: none !important;
    box-shadow: none;
    font-size: xxx-large;
    font-weight: bold;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    height: 100% !important;
    position: absolute;
}
  /*hover 효과 지워주기*/
  .card_name:hover {
    opacity: 1;
  }

  .card_name:before {
    content: "";
    display: inline-block;
    background: url('../../assets/images/sticker.png') 0 0 no-repeat;
    background-size: 100% auto;
    width: 180px;
    height: 111px;
    opacity: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
