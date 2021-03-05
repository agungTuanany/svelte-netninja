<script>
    import Modal from "./components/Modal.svelte";

    // https://svelte.dev/docs#on_element_event
    // event-modifiers are basically modifiers that we can tack on to the end of event on certain elements
    // once - makes sure the event only fire once (removes handles)
    // preventDefault - prevent the default action (run e.preventDefault())
    // self - only fires when the event if the clicked element is the target.

    let showModal = false;

    const toggleModal = () => {
            showModal = !showModal;
        }

    let people = [
            { name: "bruono", beltcolor: "black", age:25, id: 1 },
            { name: "mario", beltcolor: "orange", age:45, id: 2 },
            { name: "lugi", beltcolor: "brown", age:35, id: 3 },
            { name: "kingpin", beltcolor: "blue", age:25, id: 4 },
            { name: "liam", beltcolor: "", age:25, id: 5 }
        ];

    const handleClick = (e, id) => {
            // delete the person from people
            people = people.filter((person) => person.id != id);
            console.log(e);
        };
</script>

<Modal message="this is message from props value" showModal={showModal} ispromo={true} on:click={toggleModal} />
<main>
    <button class="modal" on:click|once={toggleModal}>open modal</button>
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
            {#if person.beltcolor === "black"}
                <strong>Master Ninja</strong>
            {:else if person.beltcolor === "orange"}
                <strong>Tanker Ninja</strong>
            {:else if person.beltcolor === "blue"}
                <strong>Warrior Ninja</strong>
            {:else if person.beltcolor === "brown"}
                <strong>Solid Ninja</strong>
            {:else}
                <strong>'{person.name}' don't have any belt yet</strong>
            {/if}
            <p>{person.age} years old, {person.beltcolor} belt.</p>

            <!-- XXX pass the data with inline function  XXX -->
            <button on:click={(e) => handleClick(event, person.id)}>delete</button>
        </div>
    {:else}
        <p>There are no people to show ..</p>
    {/each}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: capitalize;
        font-size: 4em;
        font-weight: 100;
    }

    .modal {
        background: orangered;
        color: white;
        border-radius: 0.375rem;
        text-transform: capitalize;
        padding: 0.25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
