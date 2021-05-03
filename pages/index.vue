<template>
  <div>
    <Foo />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Foo from '../Foo'

export default defineComponent({
  components: {
    Foo
  }
})
</script>
