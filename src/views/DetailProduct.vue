<template>
    <div class="detail-product">
        <HeaderShayna/>
        <!-- Breadcrumb Section Begin -->
        <div class="breacrumb-section text-left">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="breadcrumb-text product-more">
                            <router-link to="/">
                                <i class="fa fa-home"></i> Home
                            </router-link>
                            <span>Detail</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Breadcrumb Section Begin -->
        <!-- Product Shop Section Begin -->
        <section class="product-shop spad page-details">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="product-pic-zoom">
                                    <img class="product-big-img" :src="product_img" alt=""/>
                                </div>
                                <div class="product-thumbs">
                                    <carousel class="product-thumbs-track ps-slider" :nav="false" :dots="false">
                                        <div class="pt" @click="changeImage(product_info[0])" :class="product_info[0] == product_img ? 'active' : '' ">
                                            <img src="img/mickey1.jpg" alt=""/>
                                        </div>

                                        <div class="pt" @click="changeImage(product_info[1])" :class="product_info[1] == product_img ? 'active' : '' ">
                                            <img src="img/mickey2.jpg" alt=""/>
                                        </div>

                                        <div class="pt" @click="changeImage(product_info[2])" :class="product_info[2] == product_img ? 'active' : '' ">
                                            <img src="img/mickey3.jpg" alt=""/>
                                        </div>

                                        <div class="pt" @click="changeImage(product_info[3])" :class="product_info[3] == product_img ? 'active' : '' ">
                                            <img src="img/mickey4.jpg" alt=""/>
                                        </div>
                                    </carousel>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="product-details text-left">
                                    <div class="pd-title">
                                        <span>oranges</span>
                                        <h3>Pure Pineapple</h3>
                                    </div>
                                    <div class="pd-desc">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error
                                            officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum
                                            iure natus quos non a sequi, id accusantium! Autem.
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus
                                            quisquam animi, commodi, nihil voluptate nostrum neque architecto illo
                                            officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi
                                            expedita animi nulla aspernatur.
                                            Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint
                                            molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum
                                            dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                            Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non
                                            laudantium, id dolorem atque perferendis enim ducimus? A exercitationem
                                            recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                            impedit praesentium veritatis quis beatae ea atque perferendis voluptates
                                            velit architecto?
                                        </p>
                                        <h4>$495.00</h4>
                                    </div>
                                    <div class="quantity">
                                        <router-link to="/shopping-cart" class="primary-btn pd-cart">Add To Cart</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Shop Section End -->
        <RelatedProductShayna/>
        <FooterShayna/>

    </div>
</template>

<script>
    import carousel from "vue-owl-carousel";
    import HeaderShayna from "../components/HeaderShayna";
    import FooterShayna from "../components/FooterShayna";
    import RelatedProductShayna from "../components/RelatedProductShayna";

    export default {
        name: 'DetailProduct',
        components: {
            RelatedProductShayna,
            carousel,
            HeaderShayna,
            FooterShayna,
        },
        data() {
            return {
                product_img: "img/mickey1.jpg",
                product_info: [
                    "img/mickey1.jpg",
                    "img/mickey2.jpg",
                    "img/mickey3.jpg",
                    "img/mickey4.jpg"
                ]
            }
        },
        methods: {
            changeImage(urlImage) {
                this.product_img = urlImage
            }
        }
    }
</script>

<style scoped>
    .product-thumbs .pt {
        margin-right: 12px;
    }
</style>
