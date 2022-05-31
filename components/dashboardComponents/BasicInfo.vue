<template>
  <div class="basic-cont">
    <h1 class="basic text-center">Basic Information</h1>
    <p class="status text-center">
      The status of a client or freelancer is based on
    </p>

    <div class="mx-auto form">
      <p class="contract-info mb-2">Contract Information</p>
      <div class="row m-0 pb-2">
        <div class="col-12 col-sm p-0 pr-sm-1">
          <BasicInput v-model="contract_name" :placeholder="'Contract Name'" />
        </div>

        <div class="col-12 col-sm p-0 pl-sm-1 amount-cont">
          <select id="currency">
            <option value="NGN">NGN</option>
            <option value="USDT">USDT</option>
            <option value="GBP">GBP</option>
          </select>
          <BasicInput
            v-model="contract_amount"
            class="amount"
            placeholder="Amount"
            type="number"
          />
        </div>
      </div>
      <textarea
        v-model="description"
        class="contact-desc mb-5"
        name="subject"
        placeholder="Contact Description"
      ></textarea>

      <p class="contract-info mb-2">Add Client</p>
      <div class="row m-0 pb-2">
        <div class="p-0 pr-sm-1 col-12 col-md-6">
          <BasicInput
            v-model="collaborator_name"
            :placeholder="'Client Name'"
          />
        </div>
        <div class="p-0 pl-sm-1 col-12 col-md-6">
          <BasicInput
            v-model="collaborator_mail"
            :placeholder="'Client Email Address'"
          />
        </div>
        <div class="p-0 col-12 col-md-6">
          <BasicInput v-model="collaborator_role" :placeholder="'Role'" />
        </div>
      </div>

      <BlueButton
        :button-content="'Continue'"
        class="continue mx-auto"
        @click.native="nextForm()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'BasicInfo',
  data() {
    return {
      contract_name: '',
      contract_amount: '',
      currency: 'Naira',
      description: '',
      collaborator_name: '',
      collaborator_role: '',
      collaborator_mail: '',
      error: '',
    }
  },
  methods: {
    nextForm() {
      this.$emit('nextForm', 'UploadContract')
      this.$emit('nextView', 2)
      this.setRoleState()
    },
    setRoleState() {
      const today = new Date()
      // const date =
      //   today.getFullYear() +
      //   '-' +
      //   (today.getMonth() + 1) +
      //   '-' +
      //   today.getDate()
      // const time =
      //   today.getHours() +
      //   ':' +
      //   today.getMinutes() +
      //   ':' +
      //   today.getSeconds() +
      //   '.' +
      //   today.getMilliseconds()
      // const dateTime = date + 'T' + time + 'Z'
      const data = {
        contract_name: this.contract_name,
        contract_amount: parseInt(this.contract_amount, 10),
        currency: 'Naira',
        deadline: today.toISOString(),
        description: this.description,
        collaborator: [
          {
            default_role: this.collaborator_role,
            name: this.collaborator_name,
            email: this.collaborator_mail,
          },
        ],
      }
      try {
        this.$store.commit('contract/setContract', data)
      } catch (error: any) {
        if (error) {
          const err = error.response.data.message
          this.error = err
        }
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.basic-cont {
  padding: 0 20px;
  .basic {
    font-family: Visuelt Pro, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: center;
  }

  .status {
    font-family: Sofia Pro, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
  .amount-cont {
    position: relative;
  }
  #currency {
    font-family: Sofia Pro, sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: $dark-text;
    width: 50px;
    border: none;
    background: $light;
    outline: none;
    cursor: pointer;
    position: absolute;
    top: 29px;
    left: 10px;
    margin-bottom: 10px;
  }

  .form {
    max-width: 660px;
    padding: 50px 0px;
  }

  .amount {
    padding-left: 80px;
  }

  .contact-desc {
    width: 100%;
    min-height: 190px;
    border: 0.5px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 7px;
    padding: 21px 28px;
    outline: none;
  }

  .contract-info {
    font-family: Visuelt Pro, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
  }

  .continue {
    width: 180px;
    margin: 90px 0px;
  }
}
</style>
