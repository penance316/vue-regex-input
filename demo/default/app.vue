<template>
  <div>
    <h3>VueRegexInput</h3>
    <div>
      <h4>Currency demo</h4>
      £
      <child
              v-model="val"
              :regExp="/^\d*(\.\d{0,2})?$/g"
      />
      val: {{val}}
    </div>

    <div>
      <h4>Alpha Characters demo</h4>
      £
      <child
              v-model="val2"
              :regExp="/^[a-zA-Z]*$/g"
      />
      val: {{val2}}
    </div>
  </div>
</template>

<script>
	import VueRegexInput from 'vue-regex-input'; // eslint-disable-line

	export default {
  components: {
    child: VueRegexInput,
  },
  data() {
    return {
      val: '',
      val2: '',
    };
  },
};
</script>