<script lang="ts">
	import Facebook from './Facebook.svelte';

	let icons = {
		facebook: Facebook,
		linkedin: '',
		instagram: ''
	};

	export let iconType: keyof typeof icons;
</script>
