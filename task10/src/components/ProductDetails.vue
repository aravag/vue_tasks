<template>
    <div>
        <h3>{{ isAvailable }}</h3>
        <p>{{ getProductName }} - {{ formattedPrice }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',

    data() {
        return {
            product: {
                name: 'Product Good',
                price: 12,
                available: true,
            },
        };
    },
    computed: {
        formattedPrice() {
            let formatter = new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "USD"
            });
            return formatter.format(this.product.price);
        },
        isAvailable() {
            return this.product.available ? 'Available' : 'Out of stock';
        },
        getProductName() {
            return this.product.name;
        }
    }
};
</script>