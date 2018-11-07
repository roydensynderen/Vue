<template>
    <div class="row">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }})</small>
                </h3>
            </div>
            <div class="card-body">
                <div class="pull-left">
                    <input type="number" 
                           class="form-control" 
                           placeholder="Quantity"
                           v-model="quantity">
                </div>

                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock"
                            :disabled="quantity<= 0 || !Number.isInteger(quantity)">
                            Buy
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.quantity = 0
            }
        }
    }
</script>

