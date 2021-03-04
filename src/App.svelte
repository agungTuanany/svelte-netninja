<script>
    let inputName = "black";
    let firstName = "Aroon";
    let lastName = "Swatch";

    // reactive-value
    $: fullName = `${firstName} ${lastName}`

    // reactive-statement
    $: {
            console.log(inputName);
            // You can use reactive-value in reactive-statement
            console.log(fullName);
        }

    const handleClick = () => {
            inputName = "orange";
        };

    const handleInput = (e) => {
            inputName = e.target.value;
        };
</script>


<main>
    <h1>Hello {fullName} - {inputName}!</h1>
    <p>{inputName}</p>
    <button on:click={handleClick}>Update Color</button>

    <input type="text" bind:value={firstName}>
    <input type="text" bind:value={lastName}>
    <input type="text" bind:value={inputName}>

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
