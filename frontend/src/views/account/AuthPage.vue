<template>
    <!--<div class="se-pre-con"></div>-->
    <div class="theme-layout">
        <div class="container-fluid pdng0">
            <div class="row merged">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="land-featurearea">
                        <div class="land-meta">
                            <h1>Winku</h1>
                            <p>
                                Winku is free to use for as long as you want with two active projects.
                            </p>
                            <div class="friend-logo">
                                <span><img src="/src/assets/images/wink.png" alt=""></span>
                            </div>
                            <a href="#" title="" class="folow-me">Follow Us on</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="login-reg-bg" id="account-bg">
                        <login />
                        <register />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Login from '../../components/account/Login.vue';
import Register from '../../components/account/Register.vue';

export default defineComponent({
    name: 'AuthPage',
    data() {
        return {};
    },

    props: {},

    emits: {},

    components: { Register, Login },

    created() { },

    mounted() { },

    methods: {},

    computed: {},

    watch: {},

    filters: {},

    directives: {}
});
</script>

<style lang="scss" scoped></style>
