<script lang="ts">
  export let text: string;
</script>

<p>{text}</p>

<style>
  p {
    color: #0056b3; /* Darker blue for better contrast */
    font-weight: bold;
    font-style: italic;
    font-size: 24px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1); /* Subtle text shadow for depth */
  }
</style>
