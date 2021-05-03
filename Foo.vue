<template>
  <div>
    {{ foo }}
  </div>
</template>

<script>
import useFoo from './useFoo'

export default {
  setup () {
    const { foo, setFoo } = useFoo()
    setFoo('a')
    return { foo }
  }
}
</script>
