<template>
  <div class="field">
      <label :for="inputName">{{ label }}</label>
      <input :type="type" :value="value" @input="$emit('input', $event.target.value)">
  </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    computed: {
        inputName() {
            return this.label.toLowerCase().replace(/\s/g, '')
        }
    }
}
</script>

<style>

</style>