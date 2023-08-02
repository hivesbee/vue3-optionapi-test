<template>
    <div>
        ほげふが
        <div>
            count : {{ this.count }}
        </div>
        <div>
            <button type="button" @click="increment">増える</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}
</script>