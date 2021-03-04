<script>
    let people = [
            { name: "bruono", beltcolor: "black", age:25, id: 1 },
            { name: "mario", beltcolor: "orange", age:45, id: 2 },
            { name: "lugi", beltcolor: "brown", age:35, id: 3 },
            { name: "kingpin", beltcolor: "blue", age:25, id: 4 }
        ];

    // 'e' is the 'event-object' we pass on the 'inline-event-handler' to know what button was fired up
    // you can unassigned the `event-object' as well.
    // in here is just an example to passing event object on 'inline-event-handler'.
    const handleClick = (e, id) => {
            // delete the person from people
            people = people.filter((person) => person.id != id);
            console.log(e);
        };
</script>


<main>
    {#each people as person (person.id)}
        <div>
            <h4>{person.name}</h4>
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

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
