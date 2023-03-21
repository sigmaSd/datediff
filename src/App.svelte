<script lang="ts">
  import SelectDates from "./lib/SelectDates.svelte";
  import AddDates from "./lib/AddDates.svelte";

  let appOption: "selectDates" | "addDates" = "addDates";
</script>

<main>
  <label>
    <input
      type="radio"
      bind:group={appOption}
      name="appOption"
      value="selectDates"
    />
    Select dates
  </label>
  <label>
    <input
      type="radio"
      bind:group={appOption}
      name="appOption"
      value="addDates"
    />
    Add dates
  </label>
  {#if appOption === "selectDates"}
    <SelectDates />
  {:else if appOption === "addDates"}
    <AddDates />
  {/if}
</main>

<style>
  main {
    text-align: center;
    justify-content: center;
  }
  label {
    font-size: 20px;
  }
</style>
