<template>
  <input @input="updateValue($event.target.value)"
         @change="emitChange"
         v-model="val"
         ref="input"
  />
</template>

<script type="text/ecmascript-6">
	export default {
	  mounted() {
	    this.updateValue(this.value);
	  },
	  name: 'vue-regex-input',
	  props: {
	    value: {
	      required: true,
	      type: [Number, String],
	    },
	    regExp: {
	      type: RegExp,
	      default: null,
	    },
	  },
	  data() {
	    return {
	      val: '',
	      oldVal: '',
	    };
	  },
	  methods: {
	    isValid(val) {
	      return val.toString().match(this.regExp);
	    },

	    // update the value of input
	    updateValue(val) {
	      const newValue = this.isValid(val) ? val : this.oldVal;
	      this.val = this.oldVal = newValue;

	      this.emitInput(newValue);
	    },

	    // emit input event
	    emitInput(val) {
	      this.$emit('input', val);
	    },

	    // emit change event
	    emitChange() {
	      this.$emit('change', this.val);
	    },
	  },
	  watch: {
	    // watch value prop
	    value(val) {
	      this.updateValue(val);
	    },
	  },
	};
</script>

<style>
</style>
