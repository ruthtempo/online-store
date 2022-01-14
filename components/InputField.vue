<template>
  <div class="field">
        <label :for="inputName">{{ label }}</label>
        <ValidationProvider :rules="veeValidateRules" v-slot="{ errors }">
            <input 
                :type="type"
                :autocomplete="autocomplete"
                :name="inputName"
                :value="value"
                @input="$emit('input', $event.target.value)">
            <span class="errors">{{ errors[0] }}</span>
        </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
export default {
    components: {
        ValidationProvider
    },
    props: {
        autocomplete: {
            type: String,
            required: true
        },
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
        },
        veeValidateRules: {
            type: String
        }
    },
    computed: {
        inputName() {
            return this.label.toLowerCase().replace(/\s/g, '')
        }
    }
}
</script>

<style scoped>
.field input {
    width: 100%;
}

.errors {
    color: red;
}

</style>