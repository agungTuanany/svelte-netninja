<script>
    ///import { onMount, onDestroy } from "svelte";

    import PollStore from "../../stores/PollStore.js"
    import  PollDetails from "./PollDetails.svelte";


    /* {{{
     * It is always a good idea to unsubscribe from a Store when you no longer
     * need it; when the component destroyed.
     *
     * Every time we want to 'subscribe' to a 'Store' and 'unsubscribe' to
     * a 'Store' we call 'subscribe()' and store it into a variable; and then we
     * call it in 'onDestroy' lifecycle-hooks. There's an easy way to do this.
     *
     * An easy way to subscribe to the data and automatically unsubscribe to the
     * data when the component is destroyed is just to refer to the 'PollStore'
     * instead of 'let polls = []'.
     *
     * We put `$` in front of `PollStore' name that we imported; it's assumes
     * then that we want to get the 'data' from that Store, which is the list of
     * the array of polls.
     *
     * So '$PollStore' is now the 'array of polls'. We cycle through as before
     * and refer to each one as a 'poll'.
     *
     * So, with '$PollStore', it's automatically subscribe us to that data.
    }}}*/

    /* {{{ the convection method to unsubscribe the store.
    // export let polls = [];

    // const unsub = PollStore.subscribe((data) => {
    //     polls = data;
    // });


    // onDestroy(() => {
    //     // unsub from store
    //     unsub;
    // });

    }}} */

</script>


<div class="poll-list">
    {#each $PollStore as poll (poll.id)}
        <div>
            <PollDetails {poll} />
        </div>
    {/each}
</div>


<style>
    .poll-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }

</style>
