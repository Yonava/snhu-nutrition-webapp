<template>
  <div id="app" class="box">


    <div v-if="startmenu">
      <button @click.left="startmenu = false" class="menuitems">Submit</button>
      <button @click.left="startmenu = false" style="background-color: rgb(255, 100, 100)" class="menuitems">Skip</button>

      <input type="number" />
    </div>

    <div v-if="toggle === false && startmenu === false">
      <button class="searchbar searchtab" @click="toggle = !toggle">Add More Items</button>
      <h1 style="margin-bottom: 1.5%;" class="caloriecounter">Calories:</h1>
      
      <div class="decision">
        <h1 :style="{color: rgbCals}" class="caloriecounter">
          {{calories}}
        </h1>
      </div>

      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Fat:</p>

      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbFat}" class="caloriecounter">{{ fat }}</p>
      </div>

      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Sugar:</p>

      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbSugar}" class="caloriecounter">{{ sugar }}</p>
      </div>

      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Sodium:</p>

      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbSodium}" class="caloriecounter">{{ sodium }}</p>
      </div>

      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Carbs:</p>

      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbCarbs}" class="caloriecounter">{{ carbs }}</p>
      </div>

      <h1 class="caloriecounter">Remove Items:</h1>

      <div v-for="i in total" :key=i.total class="forcontainer containermod">

        <button @click.left="removeTotal(i)" class="menuitems removeitem">{{ i.name }}</button>
        
      </div>
      
      <p v-if="total.length === 0" class="caloriecounter">Selected Items Show Up Here!</p>


    </div>

    <div v-if="toggle && startmenu === false">

      <header class="box xborder">

          <button class="searchbar" @click="toggle = !toggle">Total</button>

          <input type="search"
          id="search"
          class="searchbar" 
          placeholder="Search Menu Items" 
          v-model="raw_query" />


          <button class="searchbar lr" @click.left="reset()">CE</button>

          <p class="caloriecounter">Calories:</p>
          
          <div class="decision">

          <h1 :style="{color: rgbCals}" class="caloriecounter">
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
      userSex: '',
      userAge: '',
      userWeight: '',
      startmenu: true,
      total: [],
      raw_query: '',
      calories: 0,
      carbs: 0,
      sodium: 0,
      fat: 0,
      sugar: 0,
      rgb: [0, 255, 0],
      rgbCals: 'rgb(0, 0, 0)',
      rgbCarbs: 'rgb(0, 0, 0)',
      rgbSodium: 'rgb(0, 0, 0)',
      rgbSugar: 'rgb(0, 0, 0)',
      rgbFat: 'rgb(0, 0, 0)',
      toggle: true, // for toggling between tabs in later versions
      // categories: meal periods(ie lunch)/station+cuisine type/dietary(gluten free, vegetarian, vegan)
      // info array: cals, sodium, carbs, sugar, fat
      menu: [
        {item: 'cesaersalad', cals: '350', info: [350, 30, 50, 10, 50], category: 'lunch/saladbar/gf/vegan', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: '500', info: [500, 50, 100, 300, 100], category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: '400', info: [400, 20, 70, 0, 40], category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: '300', info: [300, 300, 500, 10, 200], category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: '250', info: [250, 30, 50, 10, 200], category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: '600', info: [600, 30, 50, 250, 100], category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: '690', info: [690, 30, 50, 20, 100], category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: '700', info: [700, 30, 50, 20, 100], category: 'dinner/italian', name: 'Penne w/ Sauce'},
        {item: 'test', cals: '20', info: [20, 30, 50, 10, 10], category: 'breakfast/dessert/vegan/italian', name: 'Test Case'},
        ],
      temp_menu: [
        // place a copy of the menu in here
        
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
    async increase(key, n) { 
    
      for (let i = 0; i < n; i++) {

        await this.sleep(.1)

        switch (key) {
          case 'calories':
            this.calories++
            this.colorCalc(key, this.calories)
            break
          case 'carbs':
            this.carbs++
            this.colorCalc(key, this.carbs)
            break
          case 'sodium':
            this.sodium++
            this.colorCalc(key, this.sodium)
            break
          case 'sugar':
            this.sugar++
            this.colorCalc(key, this.sugar)
            break
          case 'fat':
            this.fat++
            this.colorCalc(key, this.fat)
            break
        }
        
      }
    },
    // remove n calories from total
    async decrease(key, n) { 

      for (let i = 0; i < n; i++) {

          await this.sleep(.1)

          switch (key) {
            case 'calories':
              this.calories--
              this.colorCalc(key, this.calories)
              break
            case 'carbs':
              this.carbs--
              this.colorCalc(key, this.carbs)
              break
            case 'sodium':
              this.sodium--
              this.colorCalc(key, this.sodium)
              break
            case 'sugar':
              this.sugar--
              this.colorCalc(key, this.sugar)
              break
            case 'fat':
              this.fat--
              this.colorCalc(key, this.fat)
              break
          }
          
        }
      
    },
    // CE (clear) button
    reset() { 
      location.reload();
      // this.calories = 0,
      // this.rgb = [0, 255, 0]
      // this.rgbCals = 'rgb(0, 0, 0)'
      // this.raw_query = ''
    },
    print(x) {
      console.log(x)
    },
    appendTotal(obj) {

      let keyArray = ['calories', 'sodium', 'carbs', 'sugar', 'fat']
      for (let i = 0; i < keyArray.length; i++) {
        this.increase(keyArray[i], obj.info[i])
      }

      this.total.push(obj)
    },
    removeTotal(obj) {
     
      let keyArray = ['calories', 'sodium', 'carbs', 'sugar', 'fat']
      for (let i = 0; i < keyArray.length; i++) {
        this.decrease(keyArray[i], obj.info[i])
      }

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
    colorCalc(key, n) { 
      this.rgb = [0, 255, 0]
      let percentagegreen = ((1200-n)/700) * 255;
      let percentagered = (n/500) * 255;
      this.rgb[0] = percentagered;

      if (n > 500) {
        this.rgb[1] = percentagegreen;
      }

      switch (key) {
        case 'calories':
          this.rgbCals = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`
          break
        case 'sodium':
          this.rgbSodium = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`
          break
        case 'carbs':
          this.rgbCarbs = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`
          break
        case 'sugar':
          this.rgbSugar = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`
          break
        case 'fat':
          this.rgbFat = `rgb(${this.rgb[0]}, ${this.rgb[1]}, 0)`
          break

      }
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
  border: 3px solid #000000;
  margin-top: none;
  margin: 5%;
  border-radius: 6px;
  background-color: rgb(102, 102, 102);
}
.smalldecision {
  width: 100px;
  margin-top: auto;
  margin-bottom: auto;
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
#search::-webkit-search-cancel-button{
  position: relative;
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: rgb(251, 102, 102)
}

</style>
