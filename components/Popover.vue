<!-- *************************************************************************
	TEMPLATE
	************************************************************************* -->

<template>
  <div class="popover-wrapper">
    <div class="popover-title">
      <slot name="face"></slot>
    </div>
    <div class="popover-content" :style="cssVars">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<!-- *************************************************************************
	SCRIPT
	************************************************************************* -->

<script>
export default {
  name: "Popover",
  props: {
    left: {
      type: [Number, String],
      default: -270,
    },
    top: {
      type: [Number, String],
      default: 65,
    },
  },
  computed: {
    cssVars() {
      return {
        "--left": this.left + "px",
        "--top": this.top + "px",
      };
    },
  },
};
</script>

<!-- *************************************************************************
	STYLE
	************************************************************************* -->

<style scoped>
.popover-wrapper {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
  background-color: transparent;
}
.popover-wrapper:hover .popover-content {
  opacity: 1;
  visibility: visible;
  z-index: 10;
  transform: translate(0, -20px);
  transition: all 0.5s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}
.popover-content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: var(--top);
  left: var(--left);
  width: 35ch;
  max-height: 70vh;
  overflow-y: auto;
  padding: 1.5rem;
  background: rgba(7, 7, 98, 1);
  border: 2px dashed #ffc04a;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
}
</style>
