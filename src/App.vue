<template>
  <center>
  <div id="app" class="box">
    <div v-if="startmenu" class="wborder">
        <h1 class="caloriecounter">Personalize:</h1>
        <div :class="'r '+crate">
          <p class="caloriecounter smalldecision" style="margin-top: 4%;">Sex:</p>
            <button class="crate reduced" style="background-color: rgb(73, 197, 255);" v-if="userSex === 'male'" @click.left="userSex = 'male'" :value="'male'">Male</button>
            <button class="crate reduced" style="background-color: rgb(255,255,255);" v-else @click.left="userSex = 'male'" :value="'male'">Male</button>
            <button class="crate reduced" style="background-color: rgb(253, 63, 158);" v-if="userSex === 'female'" @click.left="userSex = 'female'" :value="'female'">Female</button>
            <button class="crate reduced" style="background-color: rgb(255,255,255);" v-else @click.left="userSex = 'female'" :value="'female'">Female</button>
          <p class="caloriecounter smalldecision">Age:</p>
          <input type="number" class="searchbar smalldecision" placeholder="Enter Age" v-model="userAge" />
          <p class="caloriecounter smalldecision" style="width: 200px">Weight (In Pounds):</p>
          <input type="number" style="margin-bottom: 4%; display: inline;" class="searchbar smalldecision" placeholder="Enter Weight" v-model="userWeight" />
        </div>
      <button v-if="crate === 'crate'" @click.left="error = true"
      style="margin-top:0%" :class="'total r '+crate">Submit</button>
      <button v-else @click.left="calibrate()" :class="'total w '+crate">Submit</button>
      <button @click.left="startmenu = false" class="total crate">Skip</button>
      <p class="caloriecounter" style="color: red; margin-top: 4%; margin-bottom: 0%;"
      v-if="error && crate === 'crate'">Incomplete Info</p>
    </div>
    <div v-if="toggle === false && startmenu === false">
    <header class="box xborder">
      <button class="searchbar searchtab" style="margin-top: 3%;" @click="toggle = !toggle">Add More Items</button>
      <button class="searchbar searchtab" style="margin-top: 3%;" @click="startmenu = true">Personalize...</button>
    </header>
      <h1 style="margin-bottom: 1.5%;" class="caloriecounter">Calories:</h1>   
      <div class="decision">
        <h1 :style="{color: rgbCals}" class="caloriecounter">
          {{calories}}
        </h1>
      </div>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Total Fat(g):</p>
      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbFat}" class="caloriecounter">{{ fat }}</p>
      </div>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Added Sugar(g):</p>
      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbSugar}" class="caloriecounter">{{ sugar }}</p>
      </div>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Sodium(mg):</p>
      <div class="decision smalldecision">
        <p style="margin-bottom: 1%; margin-top: 1%;" :style="{color: rgbSodium}" class="caloriecounter">{{ sodium }}</p>
      </div>
      <p style="margin-bottom: 1%; margin-top: 1%;" class="caloriecounter">Carbohydrates(g):</p>
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
          <Search v-bind:menu="menu" v-on:update_temp_menu="display($event)" />
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
</center>
</template>

<script>
import Search from './components/Search'
export default {
  name: 'App',
  components: {
    Search
  },
  data: function() {
    return {
      crate: 'crate',
      userSex: '',
      userAge: '',
      userWeight: '',
      error: false, 
      startmenu: true,
      total: [],
      calories: 0,
      calrange: [0, 2000, 3000], // range array low, fade green, high * high range calculated by adding 50% to the recommended FDA DV *
      carbs: 0,
      carbrange: [0, 275, 412.5], // DV 275g
      sodium: 0,
      sodrange: [0, 2300, 3450], // DV 2300mg
      fat: 0,
      fatrange: [0, 78, 117], // DV 78g
      sugar: 0,
      sugrange: [0, 50, 75], // DV 50g
      fiber: 0,
      fibrange: [0, 28, 42], // DV 28g
      rgb: [0, 255, 0],
      rgbCals: 'rgb(0, 0, 0)',
      rgbCarbs: 'rgb(0, 0, 0)',
      rgbSodium: 'rgb(0, 0, 0)',
      rgbSugar: 'rgb(0, 0, 0)',
      rgbFat: 'rgb(0, 0, 0)',
      toggle: true,
      // categories: meal periods(ie lunch)/station+cuisine type/dietary(gluten free, vegetarian, vegan)
      // info array: cals, sodium, carbs, sugar, fat, (fiber(to be added))
      menu: [
        {item: 'cesaersalad', cals: '470', info: [470, 1070, 12, 4, 40], category: 'lunch/saladbar/gf/vegan', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: '400', info: [400, 548, 32, 27, 28], category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: '450', info: [450, 985, 71, 0, 12], category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: '240', info: [240, 540, 34, 1, 7], category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: '380', info: [380, 534, 57, 9, 11], category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: '350', info: [350, 300, 50, 44, 15], category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: '670', info: [670, 940, 66, 0, 35], category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: '300', info: [300, 710, 60, 6, 4], category: 'dinner/italian', name: 'Penne w/ Sauce'},
        ],
      temp_menu: [
        {item: 'cesaersalad', cals: '470', info: [470, 1070, 12, 4, 40], category: 'lunch/saladbar/gf/vegan', name: 'Cesaer Salad'},
        {item: 'cheesecake', cals: '400', info: [400, 548, 32, 27, 28], category: 'dessert/justdesserts/vegetarian', name: 'Cheese Cake'},
        {item: 'veggieburrito', cals: '450', info: [450, 985, 71, 0, 12], category: 'lunch/dinner/mexican/vegetarian/vegan', name: 'Veggie Burrito'},
        {item: 'cheesepizza', cals: '240', info: [240, 540, 34, 1, 7], category: 'lunch/dinner/italian/vegetarian', name: 'Cheese Pizza'},
        {item: 'bagelwithcreamcheese', cals: '380', info: [380, 534, 57, 9, 11], category: 'breakfast/jewish/vegetarian', name: 'Bagel w/ CC.'},
        {item: 'chocolatecake', cals: '350', info: [350, 300, 50, 44, 15], category: 'dessert/justdesserts/vegetarian', name: 'Chocolate Cake'},
        {item: 'homestylechickenbowl', cals: '670', info: [670, 940, 66, 0, 35], category: 'dinner/millcitygrill/gf', name: 'Chicken Bowl'},
        {item: 'pastapennewithsauce', cals: '300', info: [300, 710, 60, 6, 4], category: 'dinner/italian', name: 'Penne w/ Sauce'},
      ]
    }
  },
  watch: {
    userAge() {
      if (this.userAge <= 0) this.userAge = ''
      if (this.userSex != '' && this.userWeight != '' && this.userAge != '') this.crate = 'crate g'
      else this.crate = 'crate'
    },
    userWeight() {
      if (this.userWeight <= 0) this.userWeight = ''
      if (this.userSex != '' && this.userWeight != '' && this.userAge != '') this.crate = 'crate g'
      else this.crate = 'crate'
    },
    userSex() {
      if (this.userSex != '' && this.userWeight != '' && this.userAge != '') this.crate = 'crate g'
      else this.crate = 'crate'
    },
    async error() {
      await this.sleep(5000)
      this.error = false
    }
    },
  methods: {
    display(x) {
      this.temp_menu = x;
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    // add n calories to total
    async increase(key, n) { 
    
      for (let i = 0; i < n; i++) {

        await this.sleep(1)

        switch (key) {
          case 'calories':
            this.calories++
            this.colorCalc(key, this.calrange, this.calories)
            break
          case 'carbs':
            this.carbs++
            this.colorCalc(key, this.carbrange, this.carbs)
            break
          case 'sodium':
            this.sodium++
            this.colorCalc(key, this.sodrange, this.sodium)
            break
          case 'sugar':
            this.sugar++
            this.colorCalc(key, this.sugrange, this.sugar)
            break
          case 'fat':
            this.fat++
            this.colorCalc(key, this.fatrange, this.fat)
            break
        }
        
      }
    },
    // remove n calories from total
    async decrease(key, n) { 

      for (let i = 0; i < n; i++) {

          await this.sleep(1)

          switch (key) {
          case 'calories':
            this.calories--
            this.colorCalc(key, this.calrange, this.calories)
            break
          case 'carbs':
            this.carbs--
            this.colorCalc(key, this.carbrange, this.carbs)
            break
          case 'sodium':
            this.sodium--
            this.colorCalc(key, this.sodrange, this.sodium)
            break
          case 'sugar':
            this.sugar--
            this.colorCalc(key, this.sugrange, this.sugar)
            break
          case 'fat':
            this.fat--
            this.colorCalc(key, this.fatrange, this.fat)
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
    calibrate() { // change dv nutrition ranges based on personalization form
      this.startmenu = false
      // put formula here for range calibrations
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
    // adjusts color on nutrition info display
    colorCalc(key, range, n) { 
      this.rgb = [0, 255, 0]
      let percentagegreen = ((range[2]-n)/(range[2]-range[1])) * 255;
      let percentagered = (n/range[1]) * 255;
      this.rgb[0] = percentagered;

      if (n > range[1]) {
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
   
    
  }
}

</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  background-color: rgb(214, 212, 221);
}
.searchbar {
  margin-top: 5%;
  margin-left: 4%;
  border-radius: 2px;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  font-weight: bold;
}
.forcontainer {
  display: inline-flex;
  padding: 1%;
}
.searchbar:hover {
  background-color: khaki;
}
.caloriecounter {
  font-weight: bold;
  margin: 5%;
}
.decision {
  border: 3px solid #000000;
  margin-top: none;
  margin: 5%;
  border-radius: 6px;
  background-color: rgb(102, 102, 102);
}
.smalldecision {
  width: 100px;
  margin-top: 1%;
  margin-bottom: 1%;
}
.menuitems {
  
  margin: 3%;
  border-color: black;
  height: 40px;
  width: 130px;
  border-radius: 3px;
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
.lr:hover {
  background-color: rgb(255, 116, 116);
}
.total {
  margin-top: 3%;
  margin-bottom: 3%;
  margin-left: 5%;
  height: 35px;
  width: 134px;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  background-color: rgb(255, 72, 40)
}
.box {
  background-color: rgb(214, 212, 221);
  width: 320px;
  padding-bottom: 400px;
  /* border: 3px solid black; */
  border-top: 0px;
  margin: 0px;
}
.wborder {
  /* border-top: 3px solid black; */
  top: 0;
  border-collapse: separate;
}
.xborder {
  border-left: none;
  border-right: none;
  border-bottom: 3px solid black;
  padding-bottom: 3%;
  
}
body {
  margin: 0px;
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
#search::-webkit-search-cancel-button{
  position: relative;
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: rgb(251, 102, 102)
}
.crate {
  margin: 4%;
  padding: auto;
  border: black solid 3px;
  border-radius: 3px;
  font-weight: bold;
}
.r {
  background-color: rgb(255, 126, 126);
}
.g {
  background-color: rgb(122, 212, 122);
}
.reduced {
  margin-top: 1%;
  margin-bottom: 1%;
  margin-right: 1%;
}

</style>
