<template>
    <div class="log-reg-area sign">
        <h2 class="log-title">Login</h2>
        <p>
            Don’t use Winku Yet? <a href="#" title="">Take the tour</a> or <a href="#" title="">Join
                now</a>
        </p>
        <form method="post">
            <div class="form-group">
                <input type="text" id="input" required="required" />
                <label class="control-label" for="input">Username</label><i class="mtrl-select"></i>
            </div>
            <div class="form-group">
                <input type="password" required="required" />
                <label class="control-label" for="input">Password</label><i class="mtrl-select"></i>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" checked="checked" /><i class="check-box"></i>Always
                    Remember Me.
                </label>
            </div>
            <a href="#" title="" class="forgot-pwd">Forgot Password?</a>
            <div class="submit-btns">
                <button class="mtr-btn signin" type="button"><span>Login</span></button>
                <button class="mtr-btn signup" type="button"><span>Register</span></button>
            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Login',
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

<style scoped>
.signin {
    margin-right: 20px;
}
</style>
