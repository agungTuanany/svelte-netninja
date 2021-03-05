<script>
    import Header from "./components/headers/Header.svelte";
    import Footer from "./components/footers/Footer.svelte";
    import Tabs from "./components/shared/Tabs.svelte";
    import CreatePollForm from "./components/forms/CreatePollForm.svelte";


    // tabs
    let items  = ["Current Polls", "Add New Poll"];
    let activeItem = "Current Polls";

    const tabChangeHandler = (event) => {

            activeItem = event.detail;
            //console.log(activeItem);
            //console.log(event);
        };

</script>

<Header />
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChangeHandler} />
    {#if activeItem === "Current Polls"}
        <p>Poll list components goes here</p>
    {:else if activeItem === "Add New Poll"}
        <CreatePollForm />
    {/if}
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
