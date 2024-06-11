<template>
    <div class="log-reg-area reg">
        <h2 class="log-title">Register</h2>
        <p>
            Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join
                now</a>
        </p>
        <form method="post">
            <div class="form-group">
                <input type="text" required="required" />
                <label class="control-label" for="input">First name</label><i class="mtrl-select"></i>
            </div>
            <div class="form-group">
                <input type="text" required="required" />
                <label class="control-label" for="input">Last name</label><i class="mtrl-select"></i>
            </div>
            <div class="form-radio">
                <div class="radio">
                    <label>
                        <input type="radio" name="radio" /><i class="check-box"></i>Male
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input type="radio" name="radio" /><i class="check-box"></i>Female
                    </label>
                </div>
            </div>
            <div class="form-group">
                <input type="email" required="required" />
                <label class="control-label" for="input">Email Address</label><i class="mtrl-select"></i>
            </div>
            <div class="form-group">
                <input type="password" required="required" />
                <label class="control-label" for="input">Password</label><i class="mtrl-select"></i>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" checked="checked" />
                    <i class="check-box"></i>
                    Accept terms & conditions ?
                </label>
            </div>
            <div class="submit-btns">
                <button class="mtr-btn signup me-2" type="button"><span>Register</span></button>
                <a href="#login" title="" class="already-have">Already have an account</a>
            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Register',
    data() {
        return {};
    },

    props: {},

    emits: {},

    components: {},

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
