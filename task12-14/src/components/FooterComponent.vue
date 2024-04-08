<template>
    <footer>
        <section class="logo">
            <img src="@/assets/logo.png" class="logo__img" />
            <h3 class="logo__description">It is a long established fact that a
                reader will be distracted lookings.</h3>
            <a class="logo__brand">&#xf099;</a>
            <a class="logo__brand"></a>
        </section>
        <section class="nav">
            <h2 class="nav__head">pages</h2>
            <a class="nav__link">home</a>
            <a class="nav__link">project</a>
            <a class="nav__link">blog</a>
        </section>
        <section class="contacts">
            <h2 class="contacts__head">contact</h2>
            <address class="contacts__address">55 East Birchwood Ave. Brooklyn, New York 11201 </address>
            <a href="mailto:contact@interno.com" class="contacts__mail">contact@interno.com</a>
            <a href="tel:+1234567890" class="contacts__phone">(123) 456 - 7890</a>
        </section>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',

}
</script>
<style lang="scss">
@import url('@/assets/scss-modules/_footer.scss');
</style>