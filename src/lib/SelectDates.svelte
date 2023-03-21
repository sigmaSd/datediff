<script lang="ts">
  import ResultP from "./ResultP.svelte";

  let d1: string;
  let d2: string;

  $: calcDiff = () => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  };
</script>

<main>
  <div>
    <p>Select Dates:</p>
    <input bind:value={d1} type="date" />
    <input bind:value={d2} type="date" />
    {#if d1 && d2}
      <ResultP text={`Days: ${calcDiff()}`} />
    {/if}
    <div />
  </div>
</main>

<style>
  * {
    font-size: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>
