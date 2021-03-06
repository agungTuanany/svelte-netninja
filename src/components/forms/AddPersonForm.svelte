<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();

    let name;
    let beltColour;
    let age;
    let skills = [];

    // XXX NOTE: change 'id' with 'randomID generator' on production-env. XXX
    const handleSubmit = () => {
        const person = {
            name,
            beltColour,
            age,
            skills,
            id: Math.random()
        };

        dispatch("addPerson", person);
    };
</script>


<div>
    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="name" bind:value={name}>

        <!-- XXX TODO: age value not be minus XXX -->
        <input type="number" placeholder="age" bind:value={age}>


        <!-- regular checkbox | disadvantage: use many binding attributes
        <input class="checkbox" type="checkbox" bind:checked={fighting} />Fighting<br>
        <input class="checkbox" type="checkbox" bind:checked={sneaking} />Sneaking<br>
        <input class="checkbox" type="checkbox" bind:checked={running} />Running<br>
        <input class="checkbox" type="checkbox" bind:checked={jumping} />Jumping<br>
        -->

        <label for="skills"><strong>Skills:</strong></label>
        <input class="checkbox" type="checkbox" bind:group={skills} value="fighting" />Fighting<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="sneaking" />Sneaking<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="running" />Running<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="jumping" />Jumping<br>

        <label for="belt"><strong>Belt colour:</strong></label>
        <select bind:value={beltColour}>
            <option value="black">black</option>
            <option value="orange">orange</option>
            <option value="brown">brown</option>
            <option value="white">white</option>
        </select>
        <br>
        <button><strong>Add Person</strong></button>
    </form>
</div>

<style>
    .checkbox {
        margin: 0.50rem;
    }

    label {
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
    }

    button,
    select,
    input {
        border-radius: 0.375rem;
    }

    button {
        background: orangered;
        color: white;
        text-transform: capitalize;
        padding: 0.25rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border: none;
        margin-top: 0.75rem;
        margin-bottom: 0.75rem;
    }
</style>
