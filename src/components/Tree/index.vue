<template>
  <div class="tree">
    <div class="tree-node" v-for="(item, index) in treeData" :key="index">
      <div class="tree-node__content">
        <span class="tree-node__expand-icon"></span>
        <span class="tree-node__label">{{ item.label }}</span>
      </div>
      <el-collapse-transition>
        <div class="tree-node__children">
          <tree :data="item.children"></tree>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tree',
  props: ['data'],
  setup (props) {
    return {
      treeData: props.data
    }
  }
}
</script>

<style lang='scss' scoped>
.tree {
  position: relative;
  cursor: default;
  background: #fff;
  color: #606266;
  &-node {
    white-space: nowrap;
  }
}
</style>
