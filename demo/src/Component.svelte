<script lang="ts">
  export let type: string = 'button';
  export let bg: string = 'red';
  export let color: string = 'white';
</script>

<button {type} style={`color: ${color}; background-color: ${bg};`}>
  hello
  <slot />
</button>
