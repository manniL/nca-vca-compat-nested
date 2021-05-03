import { ref } from '@vue/composition-api'

const foo = ref('')
export default function useFoo () {
  const setFoo = v => foo.value = v
  return { foo, setFoo }
}
