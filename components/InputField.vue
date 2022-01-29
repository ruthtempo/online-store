<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="field">
    <label :for="inputName">{{ label }}</label>
    <ValidationProvider :rules="veeValidateRules" v-slot="{ errors }">
      <input
        :type="type"
        :autocomplete="autocomplete"
        :name="inputName"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <span class="errors">{{ errors[0] }}</span>
    </ValidationProvider>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
import { ValidationProvider } from "vee-validate";
export default {
  components: {
    ValidationProvider,
  },
  props: {
    autocomplete: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    veeValidateRules: {
      type: String,
    },
  },
  computed: {
    inputName() {
      return this.label.toLowerCase().replace(/\s/g, "");
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>

.field input {
  box-sizing: border-box;
  width: 100%;
  height: 20px;
  margin: .1rem 0;
  border-radius: 5px;
  border-style: none;
  padding: 20px 10px;
  font-size: 15px;
}

.errors {
  color: red;
}
</style>
