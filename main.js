const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: '2234', color: 'Blue' },
                { id: '2235', color: 'Green' }
            ],
            sizes: ['S/P', 'L', 'XL']
        }
    }
})
