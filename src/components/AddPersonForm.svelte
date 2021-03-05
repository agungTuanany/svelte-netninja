<script>
    let name;
    let beltColour;
    let age;

    const handleSubmit = () => {
            console.log(name, beltColour, age);
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
        <input type="text" placeholder="belt colour" bind:value={beltColour}>
        <input type="number" placeholder="age" bind:value={age}>
        <br>
        <button>Add Person</button>
    </form>
</div>

<style>
</style>
