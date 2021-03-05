<script>
    import Header from "./components/headers/Header.svelte";
    import Footer from "./components/footers/Footer.svelte";
</script>

<Header />
<main>
    <p>
    Anyone with write permissions to a project board can link repositories owned
    by that organization or user account to the project board. For more
    information, see "Project board permissions for an organization" or
    "Permission levels for user-owned project boards."
    </p>
</main>
<Footer />

<style>
    main {
        max-width: 960px;
        margin: 40px auto;
    }
</style>
