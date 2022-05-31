<template>
  <div class="table-container">
    <table>
      <tr
        v-for="(transaction, index) in transactions"
        :key="index"
        class="transac-row"
      >
        <td class="p-0">
          <span
            class="profile-pic"
            :class="[transaction.status === 'CREDIT' ? 'credit' : 'debit']"
          >
            <img :src="'/members/' + transaction.icon + '.svg'" alt="" />
          </span>
        </td>
        <td class="name p-0 px-4">
          <h2>Aspire Power Solutions</h2>
          <p>CREDIT</p>
        </td>
        <td class="px-5"><p class="date">Aug 10, 2012</p></td>
        <td class="">
          <p class="cash pl-4">₦ 340,000 <span>.78</span></p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contracts',
  components: {},
  data() {
    return {
      transactions: [
        {
          projectName: 'Smarg Mobile App',
          Date: 'Aug 10, 2012',
          status: 'CREDIT',
          icon: 'ade',
        },
        {
          projectName: 'Mechoautotech',
          Date: 'Nov 13, 2001',
          status: 'DEBIT',
          icon: 'eny',
        },
        {
          projectName: 'Mechoautotech',
          Date: 'Sep 30, 1892',
          status: 'CREDIT',
          icon: 'jay',
        },
      ],
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
  p {
    margin-bottom: 0;
  }
}
table {
  border-collapse: separate;
  width: 100%;
  border-spacing: 0 33px;
  margin-top: -30px;
}

td {
  white-space: nowrap;
  text-align: left;
}

th {
  font-family: Sofia Pro, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: $light-text;
  padding: 0 20px;
  height: 48px;
}

td {
  font-family: Sofia Pro, sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 20px;
  height: 70px;
}

.project-name {
  font-family: Sofia Pro, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  text-align: left;
  color: $dark-text;
}

.view-contract {
  max-width: 120px;
}

.profile-pic {
  width: 18px;
  height: 20px;
  position: relative;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
  }
}

.name {
  h2 {
    font-family: Sofia Pro, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
  }

  p {
    font-family: Visuelt Pro, sans-serif;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.055em;
    text-align: left;
    color: $light-text;
  }
}
.credit::before {
  content: ' ';
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #07a055;
  border: 2px solid #ffffff;
}

.debit::before {
  content: ' ';
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 23px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #d71920;
  border: 2px solid #ffffff;
}

.cash {
  font-family: Visuelt Pro, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: right;
  span {
    font-weight: 300;
  }
}
</style>
