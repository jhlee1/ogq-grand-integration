<template>
  <v-dialog
    v-model="isActive"
    max-width="500">
    <v-card>
      <template v-for="item in data">

<!--        <v-list-item :key="item.title">-->
<!--          <template v-slot:default="{ active, toggle }">-->
<!--            <v-list-item-content>-->
<!--              <v-list-item-title v-text="item.title"></v-list-item-title>-->
<!--              <v-list-item-subtitle class="text&#45;&#45;primary" v-text="item.headline"></v-list-item-subtitle>-->
<!--              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>-->
<!--            </v-list-item-content>-->

<!--            <v-list-item-action>-->
<!--              <v-list-item-action-text v-text="item.action"></v-list-item-action-text>-->
<!--              <v-icon-->
<!--                v-if="!active"-->
<!--                color="grey lighten-1"-->
<!--              >-->
<!--                star_border-->
<!--              </v-icon>-->

<!--              <v-icon-->
<!--                v-else-->
<!--                color="yellow"-->
<!--              >-->
<!--                star-->
<!--              </v-icon>-->
<!--            </v-list-item-action>-->
<!--          </template>-->
<!--        </v-list-item>-->


        <v-list-item :key="item.cardNum">
<!--          cardNum, name, borrowed-->
<!--          <template></template>-->
          <v-list-item-content>
            <v-list-item-title v-text="item.cardNum"></v-list-item-title>
            <v-list-item-subtitle class="text--primary" :class="item.borrowed ? 'pink--text ' : ''" v-text="item.borrowed ? '대여 중' : '반납'"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
    export default {
      name: 'ListModal',
      props: {
        isActive: {
          type: Boolean,
          default: false
        },
        data: {
          type: Array,
          default: () =>[]
        }
      }
    }
</script>

<style scoped>

</style>
