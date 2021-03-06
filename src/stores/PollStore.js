import { writable } from "svelte/store";

/* {{{ NOTE:
 *
 * At the minute we try to [1]'vote' it's noting works, and in fact we get an error.
 * and also if we try to [2]'add a new-poll' nothing works.
 *
 * That because currently when we try to do either on of those, we are emitting
 * custom-event; and we trying to send those back to App.svelte, when we handle
 * those; and add them to data in App.svelte.
 *
 * We don't want to sent data back, we just want to communicate directly with
 * the new Store that we created.
 *
 * So, either we can add a new poll to the Store via the form; or we can update
 * the 'votes' when click on of those options in a polls.
 *
 * We use 'PollStore' as the emitter, to the  'PollList' and 'CreatePollForm';
 * and not depend on App.svelte anymore.
  }}} */

const PollStore = writable([
    {
        id: 1,
        question: "Python or JavaScript?",
        answerA: "Python",
        answerB: "JavaScript",
        votesA: 9,
        votesB: 15,
    },
]);

export default PollStore;
