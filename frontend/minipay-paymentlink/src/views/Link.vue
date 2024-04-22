<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const userId = router.currentRoute.value.params.id;
</script>

<template>
<h1 class="py-6">Make the payment on Celo</h1>
<h4>Payments are safe and accurate</h4>
<v-btn 
 class="my-6 mx-6"
 color="primary"
 variant="outlined"
 elevation="12"
 >Pay now</v-btn>   
</template>

<style scoped>

</style>
