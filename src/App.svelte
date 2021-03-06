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

    // polls
    let polls = [
        {
            id: 1,
            question: "Python or JavaScript?",
            answerA: "Python",
            answerB: "JavaScript",
            votesA: 9,
            votesB: 15,
        },
    ];

    const handleAdd = (event) => {
        const poll =  event.detail;
        polls = [poll, ...polls];
        activeItem = "Current Polls"

        console.log(polls);
    };

    const handleVote = (event) => {
        const { id, option } = event.detail;

        let copiedPolls = [...polls];
        let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

        if (option === "a") {
            upvotedPoll.votesA++;
        };

        if (option === "b") {
            upvotedPoll.votesB++;
        };

        polls = copiedPolls;
    };
</script>

<Header />
<main>
    <Tabs {activeItem} {items} on:tabChange={tabChangeHandler} />
    {#if activeItem === "Current Polls"}
        <PollList {polls} on:vote={handleVote} />
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
