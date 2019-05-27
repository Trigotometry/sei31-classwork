<template>
	<div>
		<h1>Edit Word</h1>
		<word-form :word=this.word></word-form>
	</div>
</template>

<script>
	import WordForm from '../components/WordForm.vue';
	import { api } from '../helpers/helpers';

	export default {
		name: 'edit',
		components: {
			// dependencies
			'word-form': WordForm
		},
		data() {
			return {
				words: {}
			}
		},
		async mounted () {
			this.word = await api.getWord( this.$route.params.id );
		}
	};
</script>