<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse}>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        padding: 3.25%;
        margin: 3%;
        border-radius: 0.25rem;
        font-weight: bold;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    }

    .primary {
        background: #D91B42;
        color: white;
        border: 1px solid #D91B42;
    }

    .primary:hover {
        background: white;
        color: #D91B42;
        border: 1px solid #D91B42;
    }

    .secondary {
        background: #45C496;
        color: white;
        border: 1px solid #D91B42;
    }

    .secondary:hover {
        background: white;
        color: #45C496;
        border: 1px solid #45C496;
    }

    .flat {
        box-shadow: none;
    }

    .primary.inverse {
        background: white;
        color: #D91B42;
        border: 1px solid #D91B42;
    }

    .primary.inverse:hover {
        background: #d91b42;
        color: white;
    }

    .secondary.inverse {
        background: white;
        color: #45C496;
        border: 1px solid #45C496;
    }

    .secondary.inverse:hover {
        background: #45C496;
        color: white;
    }


</style>
