<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 92 92"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <g :fill="strokeColor">
      <slot></slot>
    </g>
  </svg>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "icon",
    },
    width: {
      type: [Number, String],
      default: 30,
    },
    height: {
      type: [Number, String],
      default: 30,
    },
    strokeColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>
