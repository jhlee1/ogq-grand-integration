<template>
  <div>
    <Editor
      mode="Rendered"
      ref="editor"
      hint="Test"
      nativeEmoji
      :outline="false"
      :preview="true"
      v-model="text"
    />
  </div>
</template>

<script>
import { Editor } from 'vuetify-markdown-editor'
import 'vuetify-markdown-editor/dist/vuetify-markdown-editor.css'
export default {
    name: 'releaseNoteEditor',
    components: {
        Editor
    },
    data() {
        return {
            text: ''
        };
    },
    mounted() {
        // Access properties or methods using $refs
        this.$refs.editor.focus();
        // this.$refs.editor.upload();

        // Dark theme
        //this.$vuetify.theme.dark = true;
    }
}
</script>

<style scoped>

</style>
