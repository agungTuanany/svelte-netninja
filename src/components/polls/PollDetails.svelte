<script>

    import Cart from "../shared/Cart.svelte";
    import PollStore from "../../stores/PollStore.js";
    import Button from "../shared/Button.svelte";

    export let poll;

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $: percentA = Math.floor(100 / totalVotes * poll.votesA)
    $: percentB = Math.floor(100 / totalVotes * poll.votesB)

    // handling votes
    const handleVote = (option, id) => {

        PollStore.update((currentPolls) => {

            let copiedPolls = [...currentPolls];
            let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

            if (option === "a") {
                upvotedPoll.votesA++;
            };

            if (option === "b") {
                upvotedPoll.votesB++;
            };

            return copiedPolls;
        });
    };

    /* {{{ NOTE:
     * ===== Why use inline function on a button? =====
     * We not just pass in a function on <Button />, because we need to pass in
     * 'data to the function'. If we just write 'on:click={handleDelete}' it's
     * going to automatically invoke 'handleDelete()' when code runs.
     *
     * We need to surround with 'inline-function' in order not to fire up
     * directly.
     *
     * ===== how handleDelete works? =====
     * in 'handleDelete()' we call a Store method 'update()'. Inside that Store
     * method we want to return an 'updated filtered array*, where we filter out
     * the poll which has the 'id'.
     *
     * we use 'filter()' method to check does the 'pollId' is 'not equal' to the
     * 'id'; if they 'don't equal' then the condition will be true. We'll keep
     * that poll in; if they do 'equal' then the condition will be false,
     * therefore it filters it out of the array.
     *
     * So it will return filtered array where we take out the poll with the same
     * 'id', which is what want and it returns it;
     *
     * Therefore, since we returned that value the Store now contains that value
     * in it.
      }}}*/

    // handling delete
    const handleDelete = (id) => {

        PollStore.update(currentPolls => {

            return currentPolls.filter(poll => poll.id != id);
        });
    };
</script>


<Cart >
    <div class="poll">
        <h3> { poll.question } </h3>
        <p>Total Votes: { totalVotes }</p>
        <div class="answer" on:click={() => handleVote("a", poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%"></div>
            <span>{ poll.answerA } ({ poll.votesA})</span>
        </div>
        <div class="answer" on:click={() => handleVote("b", poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%"></div>
            <span>{ poll.answerB } ({ poll.votesB})</span>
        </div>
        <div class="delete">
            <Button inverse={true} on:click={() => handleDelete(poll.id)}>Delete</Button>
        </div>
    </div>
</Cart>


<style>
    h3 {
        margin: 0 auto;
        color: #555;
    }

    p {
        margin-top: 6px;
        font-size: 14px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #FAFAFA;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover {
        opacity: 0.6;
    }

    span {
        display: inline-block;
        padding: 10px 20px;
    }

    .percent {
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }

    .percent-a {
        /*width: 25%; */
        background: rgba(217, 27, 66, 0.2);
        border-left: 4px solid #D91B42;
    }

    .percent-b {
        /*width: 75%; */
        background: rgba(69, 196, 150, 0.2);
        border-left: 4px solid #45C496;
    }

    .delete {
        margin-top: 30px;
        text-align: center;
    }


</style>
