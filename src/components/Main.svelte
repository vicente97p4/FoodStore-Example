<script>
  import { foodStore } from "../store.js";
  let myMoney = 0;
  let foodList = $foodStore;
  /*
  console.log(foodStore);
  foodStore.subscribe((someThing) => {
    foodList = someThing;
  });

  foodStore.update((value) => {
    value.push({ name: "맥주", price: 2500 });
    return value;
  });

  const resetFoodList = function () {
    foodStore.set([]);
  };
  */
</script>

<style lang="scss">
  @import "../scss/_definition.scss";
  .container {
    .food-list {
      background-color: yellow;
      padding: 16px;
      .food {
        padding: 8px;
        border: 1px solid #707070;

        &.cant {
          opacity: 0.5;
        }
      }
    }
    width: 100%;
    min-height: 100%;

    p {
      font-size: 28px;
      font-weight: 900;
    }
  }
</style>

<div class="container">
  <input type="number" bind:value={myMoney} />
  <div class="food-list">
    {#each foodList as food}
      {#if food.price > myMoney}
        <div class="food cant">
          <p class="name">{food.name}</p>
          <p class="price">{food.price}</p>
        </div>
      {:else}
        <div class="food">
          <p class="name">{food.name}</p>
          <p class="price">{food.price}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>
