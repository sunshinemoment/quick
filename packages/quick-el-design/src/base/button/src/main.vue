<template>
  <el-button class="y-button" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-button>
</template>

<script>
import { Button } from 'element-ui'

export default {
  name: 'y-button',
  $originals: [Button],
  components: {
    [Button.name]: Button
  }
}
</script>
