<script>
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

    let num = 2;
</script>


{#if num >  20}
    <p>{num} greater than 20 </p>
{:else if num > 5}
    <p>{num} greater than 5</p>
{:else if num === 5}
    <p>{num} is equal 5</p>
{:else if num < 5}
    <p>{num} less than 5</p>
{:else}
    <p>please input some number</p>
{/if}
<input type="text" bind:value={num}/>

<main>
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

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
