<template>
  <div ref="element">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, reactive, ref, toRefs} from "vue"

export default defineComponent({
  emits: ["update:intersection", "show", "hide"],
  setup(props, ctx) {
    const intObs = ref<IntersectionObserver | null>(null)
    onMounted(() => {
      intObs.value = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          ctx.emit("update:intersection", entry)
          ctx.emit(entry.isIntersecting ? "show" : "hide")
        })
      })
      if (refs.element) intObs.value.observe(refs.element)
    })
    onBeforeUnmount(() => {
      if (refs.element && intObs.value) intObs.value.unobserve(refs.element)
    })

    // refs
    const refs = reactive({
      element: null as (HTMLDivElement | null),
    })

    return {
      ...toRefs(refs),
    }
  },
})
</script>
