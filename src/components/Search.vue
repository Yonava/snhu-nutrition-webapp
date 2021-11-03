<template>

    <input type="search"
    id="search"
    class="searchbar" 
    placeholder="Search Menu Items" 
    v-model="raw_query" />

</template>

<script>
export default {

    name: 'Search',
    props: [
        "menu"
    ],
    data: function() {
        return {
            raw_query: '',
    
                }

    },
    watch: {
        raw_query() {
            this.update()
        }
    },
    methods: {
        getOccurrence(array, value) {
            let count = 0;
            array.forEach((v) => (v === value && count++));
            return count;
            },
        all(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === false) {
                    return false
                }
            }
            return true
            },
        // sanitizes user provided search query
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
    // updates a revolving subset of menu objects; search functionality

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
            this.$emit("update_temp_menu", this.temp_menu)

        }
        
    }

}
</script>

<style>

</style>