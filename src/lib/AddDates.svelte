<script lang="ts">
  import ResultP from "./ResultP.svelte";

  let d1 = new Date().toISOString().split("T")[0];
  let numInput = 1;
  let offsetType: "Day" | "Week" | "Month" = "Day";
  $: calcDate = () => {
    const dateWithDaysOffset = (date: string | number | Date, days: number) => {
      const newDate = new Date(date);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    };
    let currentOffset = numInput;
    switch (offsetType) {
      case "Day":
        break;
      case "Week":
        currentOffset *= 7;
        break;
      case "Month":
        currentOffset *= 30;
        break;
    }
    return dateWithDaysOffset(d1, currentOffset)
      .toUTCString()
      .split(" ")
      .slice(0, -2)
      .join(" ");
  };
</script>

<main>
  <input bind:value={d1} type="date" />
  <div id="daysDiv">
    <input bind:value={numInput} min={1} type="range" />
    <input bind:value={numInput} min={1} type="number" />
    <select bind:value={offsetType}>
      <option>Day</option>
      <option>Week</option>
      <option>Month</option>
    </select>
  </div>
  <ResultP text={`Date: ${calcDate()}`} />
</main>

<style>
  * {
    font-size: 18px;
    margin: 2px;
  }
  #daysDiv {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 5px;
  }
  input {
    text-align: center;
  }
</style>
