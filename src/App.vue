<template>
  <div id="app" class="box">

    <div v-if="toggle">

      <input type="text" 
      class="searchbar" 
      placeholder="Search Menu Items" 
      @keyup.enter="print(raw_query)" 
      v-model="raw_query" />

      <div v-if="update()" />

      <button class="searchbar lr" @click.left="reset()">CE</button>

      <p class="caloriecounter">Calories:</p>

      <div class="decision">

          <h1 :style="{color: rgbs}" class="caloriecounter">
            {{calories}}
          </h1>

      </div>

      <div v-for="i in temp_menu" :key=i.item class="forcontainer">

        <button @click.left="increase(i.cals)" class="menuitems">{{ i.name }}</button>

      </div>
      
      <p v-if="temp_menu.length === 0" class="caloriecounter">No Items Found</p>

    </div>

  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: function() {
    return {
      temp_menu: [],
      raw_query: '',
      calories: 0,
      rgb: [0, 255, 0],
      rgbs: 'rgb(0, 0, 0)',
      toggle: true, // for toggling between tabs in later versions
      // categories: meal periods(ie lunch)/station+cuisine type/dietary(gluten free, vegetarian, vegan)
      menu: [
        {item: 'cesaersalad', cals: 350, category: 'lunch/saladbar/gf', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: 500, category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: 400, category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: 300, category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: 250, category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: 600, category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: 690, category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: 700, category: 'dinner/italian', name: 'Penne w/ Sauce'}
        ]
    }
  },
  methods: {
    // add n calories to total
    increase(n) { 
      this.calories += n
      this.colorCalc(this.calories)
    },
    // remove n calories from total
    decrease(n) { 
      if ((this.calories - n) >= 0) {
        this.calories -= n
        this.colorCalc(this.calories)
      }
      else {
        this.rgbs = `rgb(150, 0, 0)`;
      }
    },
    // CE (clear) button
    reset() { 
      this.calories = 0,
      this.rgb = [0, 255, 0]
      this.rgbs = 'rgb(0, 0, 0)'
      this.raw_query = ''
    },
    print(x) {
      console.log(x)
    },
    // adjusts color on calorie number display
    colorCalc(calories) { 
      let percentagegreen = ((1200-calories)/700) * 255;
      let percentagered = (calories/500) * 255;
      this.rgb[0] = percentagered;

      if (calories > 500) {
        this.rgb[1] = percentagegreen;
      }
      this.rgbs = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`;
    },
    // sanitizes user inputted search query
    query(raw) { 
      let output = raw.replace(/\s/g, '')
      return output.toLowerCase()
    },
    // updates a revolving subset of menu objects; gives the searchbar functionality
    update() { 
      let call_query = this.query(this.raw_query)
      this.temp_menu = []
      for (let i = 0; i < this.menu.length; i++) {
        if (this.menu[i].item.includes(call_query) ||
            this.menu[i].category.includes(call_query) || 
            this.menu[i].name.includes(this.raw_query)) 
            {
            this.temp_menu.push(this.menu[i])
            }
      }
    }
  }
}

</script>

<style>

.searchbar {
  margin-top: 5%;
  margin-left: 5%;
  border-radius: 4px;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  font-family: consolas;
  font-weight: bold;
}
.forcontainer {
  display: inline-flex;
  padding: 1%;
  margin-left: 4%;
}
.searchbar:hover {
  background-color: khaki;
}
.caloriecounter {
  font-weight: bold;
  font-family: consolas;
  margin: 5%;
}
.decision {
  font-family: consolas;
  border: 3px solid #ffffff;
  border-color: black;
  margin-top: none;
  margin: 5%;
  border-radius: 6px;
  background-color: rgb(204, 204, 204);
}
.menuitems {
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 5%;
  border-color: black;
  height: 40px;
  width: 130px;
  border-radius: 3px;
  font-family: consolas;
  font-weight: bold;
  background-color: white;
  cursor: pointer;
}
.menuitems:hover {
  background-color: rgb(105, 168, 219);
}
.mgood {
  background-color: limegreen;
}
.mok {
  background-color: rgb(255, 255, 0);
}
.lr {
  background-color: rgb(252, 78, 78);
  width: 50px;
}
.lr:hover {
  background-color: rgb(255, 116, 116);
}
.total {
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 5%;
  border-radius: 5px;
  border-color: rgb(0, 0, 0);
  height: 50px;
  width: 150px;
  font-size: xx-large;
  font-weight: bold;
  font-family: monospace;
  cursor: pointer;
  background-color: rgb(168, 191, 233);
}
.total:hover {
  background-color: khaki;
}
.box {
  background-color: rgb(214, 212, 221);
  height: 700px;
  width: 320px;
  margin: 0px;
}

</style>
