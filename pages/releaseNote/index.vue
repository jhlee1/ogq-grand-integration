<template>
  <div>
    <div class="my-2">
      <v-btn color="primary" to="/releaseNote/edit" :nuxt="true">작성</v-btn>
    </div>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-center">날짜</th>
          <th class="text-center">제목</th>
          <th class="text-center">설명</th>
          <th class="text-center">상태</th>
          <th class="text-center">작성일</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.date }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.createdAt }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
    name: 'releaseNote',
    components: {
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>
