<script lang="ts">
  import DateDiff from "./lib/DateDiff.svelte";
  import AddDates from "./lib/AddDates.svelte";

  let appOption: "dateDiff" | "addDates" = "dateDiff";
</script>

<main>
  <label>
    <input
      type="radio"
      bind:group={appOption}
      name="appOption"
      value="dateDiff"
    />
    Date Diff
  </label>
  <label>
    <input
      type="radio"
      bind:group={appOption}
      name="appOption"
      value="addDates"
    />
    Add Dates
  </label>
  {#if appOption === "dateDiff"}
    <DateDiff />
  {:else if appOption === "addDates"}
    <AddDates />
  {/if}
</main>

<style>
  label {
    font-size: 22px;
    font-weight: bold;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
</style>
