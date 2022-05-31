<template>
  <div class="table-container">
    <table>
      <tr class="contract-header">
        <th v-for="head in contractHead" :key="head" class="text-left">
          {{ head }}
        </th>
      </tr>
      <tr
        v-for="(contract, index) in allContracts"
        :key="index"
        class="contract-row"
        @click="contractPage(contract.id)"
      >
        <td class="project-name">{{ contract.contract_name }}</td>
        <td>Freelancer</td>
        <td>{{contract.contract_status }}</td>
        <td><Members :members="['kay', 'tom']" /></td>
        <td class="pr-0">
          <LightButton button-content="View Contract" class="view-contract" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Members from '@/components/dashboardComponents/Members.vue'
export default Vue.extend({
  name: 'Contracts',
  components: { Members },
  data() {
    return {
      contractHead: [
        'Project Name',
        'Role',
        'Status',
        'Team Members',
        'Action',
      ],
      contracts: [
        {
          projectName: 'Smarg Mobile App',
          role: 'Client',
          status: 'Ongoing',
          teamMembers: ['ade', 'dami', 'tom', 'eny'],
        },
        {
          projectName: 'Mechoautotech',
          role: 'Freelancer',
          status: 'Completed',
          teamMembers: ['kay', 'eny'],
        },
        {
          projectName: 'Mechoautotech',
          role: 'Freelancer',
          status: 'Cancelled',
          teamMembers: ['kay', 'tom'],
        },
        {
          projectName: 'Love-hate Relationship',
          role: 'Clients',
          status: 'Completed',
          teamMembers: ['kay', 'zuby', 'eny'],
        },
        {
          projectName: 'Aspire Power Solutions',
          role: 'Freelancer',
          status: 'Cancelled',
          teamMembers: ['zuby', 'kay', 'eny'],
        },
        {
          projectName: 'Love-hate Relationship',
          role: 'Clients',
          status: 'Completed',
          teamMembers: ['kay', 'eny'],
        },
      ],
    }
  },
  computed: {
    allContracts() {
      return this.$store.state.contract.contracts
    },
  },
  methods: {
    contractPage(id: string) {
      this.$router.push({ path: `contract/id/${id}` })
    },
  },
})
</script>

<style lang="scss" scoped>
.table-container {
  overflow-x: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
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

td:first-child,
th:first-child {
  border-radius: 8px 0 0 8px;
}
td:last-child,
th:last-child {
  border-radius: 0 8px 8px 0;
}

.contract-row {
  cursor: pointer;
  &:hover {
    td {
      -moz-box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 20px 70px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}
</style>
