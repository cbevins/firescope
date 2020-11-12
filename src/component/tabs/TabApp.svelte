<script>
  import Tab from './Tab.svelte'
  import Tabs from './Tabs.svelte'
  import TabList from './TabList.svelte'
  import TabPanel from './TabPanel.svelte'

  import FireScope from '../scope/Scope.svelte'
  import Graph from '../graph/Graph.svelte'
  import Inputs from '../table/Inputs.svelte'
  import Outputs from '../table/Outputs.svelte'
  import Reels from '../reels/Reels.svelte'

  export let _input
  export let _output
</script>

<Tabs>
	<TabList>
		<Tab>Firescope</Tab>
		<Tab>Reels</Tab>
		<Tab>Inputs</Tab>
		<Tab>Outputs</Tab>
		<Tab>Graph</Tab>
	</TabList>

	<TabPanel>
    <FireScope width=300 height=300 _output={_output} _input={_input}/>
	</TabPanel>

	<TabPanel>
    <Reels _input={_input} _output={_output} />
	</TabPanel>

	<TabPanel>
    <Inputs _input={_input} />
	</TabPanel>

	<TabPanel>
    <Outputs _input={_input} _output={_output} />
	</TabPanel>

	<TabPanel>
    <Graph _input={_input} _output={_output} />
	</TabPanel>
</Tabs>