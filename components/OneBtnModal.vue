<template>
  <v-dialog v-model="active" width="400">
    <v-card>
      <v-card-title></v-card-title>
      <v-card-text class="headline">
        {{ title }}
        <v-spacer></v-spacer>
        {{ content }}
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'OneBtnModal',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
