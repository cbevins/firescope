<script>
  import Tab from './Tab.svelte'
  import Tabs from './Tabs.svelte'
  import TabList from './TabList.svelte'
  import TabPanel from './TabPanel.svelte'

  import FireScope from '../scope/Scope.svelte'
  import FireTable from '../table/FireTable.svelte'
  import Reels from '../reels/Reels.svelte'

  export let _input
  export let _output
</script>

<Tabs>
	<TabList>
		<Tab>Firescope</Tab>
		<Tab>Reels</Tab>
		<Tab>Table</Tab>
	</TabList>

	<TabPanel>
    <FireScope width=300 height=300 _output={_output} _input={_input}/>
	</TabPanel>

	<TabPanel>
    <Reels _input={_input} _output={_output} />
	</TabPanel>

	<TabPanel>
    <FireTable _input={_input} _output={_output} />
	</TabPanel>
</Tabs>