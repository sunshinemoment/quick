<template>
  <el-input v-bind="$attrs" v-on="$listeners">
    <slot slot="prefix" name="prefix"></slot>
    <slot slot="suffix" name="suffix"></slot>
    <slot slot="prepend" name="prepend"></slot>
    <slot slot="append" name="append"></slot>
  </el-input>
</template>

<script>
import { Input } from 'element-ui'

export default {
  name: 'y-input',
  $originals: [Input],
  components: {
    [Input.name]: Input
  }
}
</script>
