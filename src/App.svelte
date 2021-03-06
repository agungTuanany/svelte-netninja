<script>
    import Header from "./components/headers/Header.svelte";
    import Footer from "./components/footers/Footer.svelte";
    import Tabs from "./components/shared/Tabs.svelte";
    import CreatePollForm from "./components/forms/CreatePollForm.svelte";
    import PollList from "./components/polls/PollList.svelte";


    // tabs
    let items  = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const tabChangeHandler = (event) => {

        activeItem = event.detail;
        //console.log(activeItem);
        //console.log(event);
    };

    const handleAdd = (event) => {
        activeItem = "Current Polls"

        console.log(polls);
    };

</script>

<Header />
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChangeHandler} />
    {#if activeItem === "Current Polls"}
        <PollList />
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm on:add={handleAdd} />
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
