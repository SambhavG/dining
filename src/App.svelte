<script>
  import { onMount } from "svelte";

  //Query https://general-backend-db.onrender.com/polls
  let data = {};
  let dhalls = [];

  async function getData() {
    const response = await fetch("https://general-backend-db.onrender.com/polls");
    let result = await response.text();
    data = JSON.parse(result);
    console.log(data);
    processData(data);
    sortByDhFrequency();
  }

  let mealFoods = {};

  function processData(foodData) {
    dhalls = Object.keys(foodData);
    let meals = Object.keys(foodData[dhalls[0]]);

    mealFoods = {};

    meals.forEach((meal) => {
      let foods = [];
      dhalls.forEach((dhall) => {
        Object.values(foodData[dhall][meal]).forEach((foodObj) => {
          if (!foods.some((f) => f.name === foodObj.name)) {
            foods.push(foodObj);
          }
        });
      });

      foods.forEach((food) => {
        food.dhalls = [];
        dhalls.forEach((dhall) => {
          if (Object.values(foodData[dhall][meal]).some((f) => f.name === food.name)) {
            food.dhalls.push(dhall);
          }
        });
      });

      mealFoods[meal] = foods;
    });
  }

  function sortByDhFrequency() {
    //For each meal, sort the foods by the number of dhalls they are served at
    Object.keys(mealFoods).forEach((meal) => {
      mealFoods[meal].sort((a, b) => {
        if (a.dhalls.length - b.dhalls.length != 0) {
          return a.dhalls.length - b.dhalls.length;
        } else {
          //Sort by whichever has the earliest dhall
          for (let i = 0; i < dhalls.length; i++) {
            if (a.dhalls.includes(dhalls[i]) && !b.dhalls.includes(dhalls[i])) {
              return -1;
            } else if (b.dhalls.includes(dhalls[i]) && !a.dhalls.includes(dhalls[i])) {
              return 1;
            }
          }
          return 1;
        }
      });
    });
  }

  onMount(() => {
    getData();
  });
</script>

<main>
  <h1>Dining</h1>
  <!-- <div>
    {#if data != {}}
      {#each Object.entries(data) as [dhall, meals]}
        <h2>{dhall}</h2>
        <ul>
          {#each Object.entries(meals) as [meal, foods]}
            <li>{meal}</li>
            <ul>
              {#each foods as food}
                <li>{food.name}</li>
                <ul>
                  <li>{food.ingredients}</li>
                  <li>{food.vegetarian}</li>
                </ul>
              {/each}
            </ul>
          {/each}
        </ul>
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div> -->
  <div>
    {#if mealFoods != {}}
      {#each Object.entries(mealFoods) as [meal, foods]}
        <h2>{meal}</h2>
        {#each foods as food}
          <div class="mealCard">
            <div class="mealCardContent">
              <h3>{food.name}</h3>
              <p>{food.dhalls}</p>
            </div>
            <div class={"vegLight " + "isVeg" + food.vegetarian}></div>
          </div>
        {/each}
      {/each}
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</main>

<style>
  ul,
  li {
    text-align: left;
  }

  .mealCard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid black;
    margin: 10px;
  }

  .mealCardContent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
  }

  .mealCardContent > * {
    margin: 5px;
  }

  .vegLight {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .isVegtrue {
    background-color: green;
  }

  .isVegfalse {
    background-color: red;
  }
</style>
