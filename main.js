const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            onSale: true,
            selectedVariantIndex: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariantIndex = index
        }
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        saleMessage() {
            return `${this.brand} ${this.product} is on sale.`
        },
        image() {
            return this.variants[this.selectedVariantIndex].image
        },
        inStock() {
            return this.variants[this.selectedVariantIndex].quantity
        }
    }
})
