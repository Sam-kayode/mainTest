<template>
  <div class="newCard-contain">
    <h1 class="add-new">Add New Card</h1>
    <p class="status">The status of a client or freelancer is based on</p>
    <BasicInput :placeholder="'Name on Card'" />
    <div class="cardNumber-contain"><BasicInput :placeholder="'Card Number'" class="card-number" />
    <img src="/mastercard.svg" alt="">
    </div>
    
    <div class="row">
      <div class="col pr-2">
        <BasicInput :placeholder="'CVV'" />
      </div>
      <div class="col pl-2">
        <BasicInput :placeholder="'Expiry Date'" />
      </div>
    </div>
    <BlueButton :button-content="'Add Card'" class="addCard-btn mx-auto mt-4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style lang="scss" scoped>
.newCard-contain {
  padding: 44px 5%;

  .add-new {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: center;
    color: $dark-text;
  }

  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: $light-text;
  }

  .card-number {
    padding-right: 58px;
  }

  .addCard-btn{
    max-width:190px;
    
  }

  .cardNumber-contain{
    position:relative;
    img{
      display: inline-block;
      position:absolute;
      top:30px;
      right:18px;
    }
  }
}
</style>
