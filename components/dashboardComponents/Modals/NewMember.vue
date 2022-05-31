<template>
  <div class="invite-new text-center">
    <p class="new-member pt-2 text-center">Invite New Member</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
  <BasicInput placeholder="Enter Email Address"/>
   
   <BlueButton button-content="Invite Member" class="invite-btn"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NewMember',
  props:{
  
  }
})
</script>

<style lang="scss" scoped>
.invite-new {
  max-width: 523px;
  padding: 44px 71px 64px 71px;

  .success {
    width: 102px;
  }

  .new-member {
    font-family: Visuelt Pro, sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    color: $light-text;
  }

  .invite-btn{
      max-width:190px;
     margin:60px auto 0 auto;
  }
  
}

@include mobile {
  .invite-new{
    padding: 20px 10px;
  }
}
</style>
