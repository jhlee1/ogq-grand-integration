<template>
  <v-row justify="center">
    <v-dialog v-model="active" width="400">
      <v-card>
        <v-card-title class="headline">{{ title }}</v-card-title>
        <v-card-text>
          <v-spacer></v-spacer>
          {{ content }}
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
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
