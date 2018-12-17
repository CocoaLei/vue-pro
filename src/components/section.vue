<template>
  <div
    class="section-box">
    <div
      class="section-title text"
      @click="showSectionRows"
    >
      <span>{{ section.title }}</span>
    </div>
    <div
      v-if="showRows"
      ref="rowBox"
      class="row-box"
    >
      <div
        v-for="(item, index) in section.rows"
        :key="index"
        class="row-content text"
        @click="$router.push(item.path)"
      >
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Section',
    props: {
      section: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        showRows: false,
      };
    },
    methods: {
      showSectionRows() {
        this.showRows = !this.showRows;
      },
    },
  }
</script>

<style lang="less" scoped>
  .section-box {
    margin: 0;
    padding: 0;
    .section-title {
      min-height: 44px;
      font-size: 14px;
      color: #000;
      padding-left: 8px;
    }
    .row-box {
      .row-content {
        margin: auto 16px;
        height: 44px;
        font-size: 14px;
        color: #a4a4a4;
        border-bottom: 1px solid #f5f5f5;
      }
    }
  }
  
  .text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 8px;
    text-align: left;
  }
</style>
