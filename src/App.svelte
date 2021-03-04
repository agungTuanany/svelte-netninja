<script>
    let inputName = "black";

    const handleClick = () => {
            inputName = "orange";
        };

    const handleInput = (e) => {
            inputName = e.target.value;
        };
</script>


<main>
    <h1 style="color:{inputName}" >Hello {inputName}!</h1>
    <p style="color:{inputName}">{inputName}</p>
    <button on:click={handleClick}>Update Color</button>

    <!-- XXX one-way data-binding XXX -->
    <!-- <input type="text" on:input={handleInput} /> -->

    <!-- XXX two-way data-binding XXX -->
    <!-- <input type="text" on:input={handleInput} value=inputName} /> -->

    <!-- OR -->
    <input type="text" bind:value={inputName} />
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
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
