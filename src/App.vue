<template>
  <div id="app" class="box">

    <div v-if="toggle === false">
      <button class="searchbar searchtab" @click="toggle = !toggle">Add More Items</button>
      <h1 style="margin-bottom: 1.5%;" class="caloriecounter">Calories:</h1>
      <h1 style="margin-top: 1.5%;" :style="{color: rgbs}" class="caloriecounter">
        {{calories}}
      </h1>

      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Fat:</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbs}" class="caloriecounter">{{ calories }}</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Sugar:</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbs}" class="caloriecounter">{{ calories }}</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Sodium:</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbs}" class="caloriecounter">{{ calories }}</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Carbs:</p>
      <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbs}" class="caloriecounter">{{ calories }}</p>

      <h1 class="caloriecounter">Remove Items:</h1>

      <div v-for="i in total" :key=i.total class="forcontainer containermod">

        <button @click.left="removeTotal(i)" class="menuitems removeitem">{{ i.name }}</button>
        
      </div>
      
      <p v-if="total.length === 0" class="caloriecounter">Selected Items Show Up Here!</p>


    </div>

    <div v-if="toggle">

      <header class="box xborder">

          <button class="searchbar" @click="toggle = !toggle">Total</button>

          <input type="text"
          class="searchbar" 
          placeholder="Search Menu Items" 
          v-model="raw_query" />


          <button class="searchbar lr" @click.left="reset()">CE</button>

          <p class="caloriecounter">Calories:</p>
          
          <div class="decision">

          <h1 :style="{color: rgbs}" class="caloriecounter">
            {{calories}}
          </h1>

        </div>

      </header>



      <div style="margin-bottom: 16px;"></div>


      <div v-for="i in temp_menu" :key=i.item class="forcontainer">

        <button @click.left="appendTotal(i)" class="menuitems">{{ i.name }}</button>

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
      total: [],
      raw_query: '',
      calories: 0,
      rgb: [0, 255, 0],
      rgbs: 'rgb(0, 0, 0)',
      toggle: true, // for toggling between tabs in later versions
      // categories: meal periods(ie lunch)/station+cuisine type/dietary(gluten free, vegetarian, vegan)
      menu: [
        {item: 'cesaersalad', cals: '350', category: 'lunch/saladbar/gf/vegan',
        sodium: '30', carbs: '10', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: '500', category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: '400', category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: '300', category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: '250', category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: '600', category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: '690', category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: '700', category: 'dinner/italian', name: 'Penne w/ Sauce'},
        {item: 'test', cals: '20', category: 'breakfast/dessert/vegan/italian', name: 'Test Case'},
        ],
      temp_menu: [
        // place a copy of the menu in here
        {item: 'cesaersalad', cals: '350', category: 'lunch/saladbar/gf', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: '500', category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: '400', category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: '300', category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: '250', category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: '600', category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: '690', category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: '700', category: 'dinner/italian', name: 'Penne w/ Sauce'},
        {item: 'test', cals: '20', category: 'breakfast/dessert/vegan/italian', name: 'Test Case'},
        ],
    }
  },
  watch: {
    raw_query() {
      this.update()
    }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    // add n calories to total
    async increase(n) { 
     
      for (let i = 0; i < n; i++) {
        await this.sleep(.1)
        this.calories++
        this.colorCalc(this.calories)
      }
    },
    // remove n calories from total
    async decrease(n) { 
      if ((this.calories - n) >= 0) {
        for (let i = 0; i < n; i++) {
        await this.sleep(.1)
        this.calories--
        this.colorCalc(this.calories)
        }
      }
      else {
        this.rgbs = `rgb(150, 0, 0)`;
      }
    },
    // CE (clear) button
    reset() { 
      location.reload();
      // this.calories = 0,
      // this.rgb = [0, 255, 0]
      // this.rgbs = 'rgb(0, 0, 0)'
      // this.raw_query = ''
    },
    print(x) {
      console.log(x)
    },
    appendTotal(obj) {
      this.increase(obj.cals)
      this.total.push(obj)
    },
    removeTotal(obj) {
      this.decrease(obj.cals)
      this.total.splice(this.findIndex(this.total, obj), 1)
    },
    findIndex(arr, item) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i
        }
      }
    },
    all(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === false) {
          return false
        }
      }
      return true
    },
    getOccurrence(array, value) {
      let count = 0;
      array.forEach((v) => (v === value && count++));
      return count;
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
      output = output.toLowerCase()
      if (output.includes('&')) {
        output = output.split('&')
      }
      else {
        output = [output]
      }
      return output
    },
    // updates a revolving subset of menu objects; gives the searchbar functionality
    update() { 
      let call_query = this.query(this.raw_query)
      let range = []
      let final = []
      let cart = []
      this.temp_menu = []
      for (let t = 0; t < call_query.length; t++) {

        let verdict = false

        for (let i = 0; i < this.menu.length; i++) {

          switch (true) {

            case this.menu[i].item.includes(call_query[t]):
              verdict = true
              cart.push(this.menu[i])
              break

            case this.menu[i].category.includes(call_query[t]):
              verdict = true
              cart.push(this.menu[i]) 
              break
        
            case this.menu[i].cals.includes(call_query[t]):
              verdict = true
              cart.push(this.menu[i])
              break

            case call_query[t][0] === '<':
              if (parseInt(this.menu[i].cals) < parseInt(call_query[t].slice(1))) {
                verdict = true
                cart.push(this.menu[i])
              }
              break

            case call_query[t][0] === '>':
              if (parseInt(this.menu[i].cals) > parseInt(call_query[t].slice(1))) {
                verdict = true
                cart.push(this.menu[i])
              }
              break

            case call_query[t].includes('-'):

              range = call_query[t].split('-')

              if (parseInt(this.menu[i].cals) >= range[0] && parseInt(this.menu[i].cals) <= range[1]) {
                verdict = true
                cart.push(this.menu[i])
              }
              break  
          }

        }
        if (verdict) {
          final.push(true)
        }
        else {
          final.push(false)
        }
        
      }
      console.log(`Query '${this.raw_query}' Returns: `)
      if (this.all(final)) {
        let verified = []
        for (let i = 0; i < cart.length; i++) {
          if (this.getOccurrence(cart, cart[i]) === call_query.length) {
            console.log(cart[i].name)
            verified.push(cart[i])
          }
        }
        let uniq = [...new Set(verified)]

        this.temp_menu = [...uniq]
      }
    }
  }
}

</script>

<style>

.searchbar {
  margin-top: 5%;
  margin-left: 4%;
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
  width: 40px;
}
.removeitem {
  background-color: rgb(253, 122, 122);
}
.removeitem:hover {
  background-color: rgb(250, 84, 84);
}
.searchtab {
  background-color: khaki;
}
.searchtab:hover {
  background-color: rgb(241, 227, 93);
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
  width: 320px;
  padding-bottom: 400px;
  border: 3px solid black;
  margin: 0px;
}
.xborder {
  border-left: none;
  border-right: none;
  border-top: none;
  padding-bottom: 3%;
}
body {
  margin: 3px;
}
.tab {
  margin-top: 1%;
  margin-left: 4%;
  margin-bottom: 1%
}
.containermod {
  margin-left: 7px;
}
header {
  position: sticky;
  top: 0; 
  width: 320px;
}
template {
  margin: none;
}

</style>
