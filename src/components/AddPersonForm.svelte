<script>
    let name;
    let beltColour;
    let age;

    /*
    let fighting =  false;
    let sneaking =  false;
    let running =  false;
    let jumping =  false;
   */

    let skills = [];

    const handleSubmit = () => {
            console.log(name, beltColour, age, skills);
        }
</script>


<div>
    <!--
    <div slot="title">
        <h3>Add a new Person</h3>
    </div>
    -->

    <form on:submit|preventDefault={handleSubmit}>
        <input type="text" placeholder="name" bind:value={name}>
        <input type="number" placeholder="age" bind:value={age}>


        <!-- regular checkbox | weakness: use many binding attribute
        <input class="checkbox" type="checkbox" bind:checked={fighting}>Fighting<br>
        <input class="checkbox" type="checkbox" bind:checked={sneaking}>Sneaking<br>
        <input class="checkbox" type="checkbox" bind:checked={running}>Running<br>
        <input class="checkbox" type="checkbox" bind:checked={jumping}>Jumping<br>
        -->

        <label for="skills">Skills:</label>
        <input class="checkbox" type="checkbox" bind:group={skills} value="fighting">Fighting<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="sneaking">Sneaking<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="running">Running<br>
        <input class="checkbox" type="checkbox" bind:group={skills} value="jumping">Jumping<br>

        <label for="belt">Belt colour:</label>
        <select bind:value={beltColour}>
            <option value="black">black</option>
            <option value="orange">orange</option>
            <option value="brown">brown</option>
            <option value="white">white</option>
        </select>
        <br>
        <button>Add Person</button>
    </form>
</div>

<style>
    .checkbox {
        margin-right: 0.75rem;
</style>
