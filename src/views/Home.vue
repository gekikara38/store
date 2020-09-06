<template>
    <div class="home">
        <HeaderShayna/>
        <HeroShayna/>
        <ProductShayna/>
        <GaleryShayna/>
        <PartnerShayna/>
        <FooterShayna/>
    </div>
</template>

<script>
    import HeaderShayna from "../components/HeaderShayna";
    import HeroShayna from "../components/HeroShayna";
    import ProductShayna from "../components/ProductShayna";
    import GaleryShayna from "../components/GaleryShayna";
    import PartnerShayna from "../components/PartnerShayna";
    import FooterShayna from "../components/FooterShayna";

    export default {
        name: 'Home',
        components: {
            FooterShayna,
            PartnerShayna,
            GaleryShayna,
            ProductShayna,
            HeaderShayna,
            HeroShayna,
        }
    }
</script>
