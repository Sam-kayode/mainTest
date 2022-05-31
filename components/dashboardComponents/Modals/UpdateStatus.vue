<template>
  <div class="update-status text-center ">
    <p class="new-member pt-2 text-center">Update Status</p>
    <p class="status mt-2 text-center">
      The status of a client or freelancer is based on who created the contract
      or who
    </p>
    <SelectStatus/>
    <div class="update-info">
      <p>
        The status of a client or freelancer is based on who created the
        contract or who the role is assigned to. In that regard, no separate
        client
      </p>
    </div>

    <BlueButton button-content="Update Status" class="update-btn" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SelectStatus from '@/components/dashboardComponents/SelectStatus.vue'
export default Vue.extend({
  name: 'UpdateStatus',
  components:{  SelectStatus},
  props: {
    
  },
})
</script>

<style lang="scss" scoped>
.update-status {
  max-width: 523px;
  padding: 44px 71px 64px 71px;

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

  .update-btn {
    max-width: 190px;
    margin: 71px auto 0 auto;
  }

  .update-info {
    border-left: 4px solid $info-yellow;
    margin-top:39px;

    p {
      padding: 14px 28px;
      background: #fffcee;
      border-radius: 7px;
      font-family: Visuelt Pro, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 300;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: left;
      color: $dark-text;
    }
  }
}

@include mobile {
  .update-status {
    padding: 20px 10px;
  }
}
</style>
