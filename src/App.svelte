<script>
    import Modal from "./components/Modal.svelte";
    import AddPersonForm from "./components/AddPersonForm.svelte";

    let showModal = false;

    const toggleModal = () => {

            showModal = !showModal;
        };

    let people = [
            { name: "bruno",    beltColour: "black",    age:25, id: 1 },
            { name: "mario",    beltColour: "orange",   age:45, id: 2 },
            { name: "lugi",     beltColour: "brown",    age:35, id: 3 },
            { name: "kingpin",  beltColour: "white",    age:25, id: 4 },
            { name: "liam",     beltColour: "",         age:25, id: 5 }
        ];

    const handleClick = (e, id) => {

            // delete the person from people
            people = people.filter((person) => person.id != id);
            console.log(e);
        };

    const addPerson = (event) => {

            //console.log(event.detail);
            const person = event.detail;
            people = [person, ...people];
            showModal = false;
        };
</script>

<Modal showModal={showModal} ispromo={true} on:click={toggleModal}>
    <div slot="title">
        <h3><strong>New Ninja</strong></h3>
    </div>
    <AddPersonForm on:addPerson={addPerson}/>
</Modal>

<main>
    <button class="modal" on:click={toggleModal}><strong>open modal</strong></button>
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
            {#if person.beltColour === "black"}
                <strong>Master Ninja</strong>
            {:else if person.beltColour === "orange"}
                <strong>Tanker Ninja</strong>
            {:else if person.beltColour === "brown"}
                <strong>Warrior Ninja</strong>
            {:else if person.beltColour === "white"}
                <strong>Solid Ninja</strong>
            {:else}
                <strong>'{person.name}' don't have any belt yet</strong>
            {/if}
            <p>{person.age} years old, {person.beltColour} belt.</p>
            <p>your skills are: <strong>{person.skills}</strong></p>

            <!-- XXX pass the data with inline function  XXX -->
            <button on:click={(e) => handleClick(e, person.id)}>delete</button>
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
        padding: 0.5rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
