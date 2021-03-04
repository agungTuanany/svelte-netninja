<script>
    let showModal = true;
    let ispromo = true;
</script>

{#if showModal}
    <div class="backdrop" class:promo={ispromo}>
    <div class="modal">
        <p>Sign up for offers!</p>
    </div>
</div>
{/if}

<style>
    .backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.7)
    }

    .modal {
        padding: 10px;
        border-radius: 10px;
        max-width: 400px;
        margin: 10% auto;
        text-align: center;
        background: white;
    }

    .promo .modal {
        background: crimson;
        color: white;
    }
</style>
