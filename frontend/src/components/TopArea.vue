<template>
    <section>
        <div class="feature-photo">
            <figure><img src="/src/assets/images/resources/timeline-1.jpg" alt=""></figure>
            <div class="add-btn">
                <span>1205 followers</span>
                <a href="#" title="" data-ripple="">Add Friend</a>
            </div>
            <form class="edit-phto">
                <i class="fa fa-camera-retro"></i>
                <label class="fileContainer">
                    Edit Cover Photo
                    <input type="file" />
                </label>
            </form>
            <div class="container-fluid">
                <div class="row merged">
                    <div class="col-lg-2 col-sm-3">
                        <div class="user-avatar">
                            <figure>
                                <img src="/src/assets/images/resources/user-avatar.jpg" alt="">
                                <form class="edit-phto">
                                    <i class="fa fa-camera-retro"></i>
                                    <label class="fileContainer">
                                        Edit
                                        <input type="file" />
                                    </label>
                                </form>
                            </figure>
                        </div>
                    </div>
                    <div class="col-lg-10 col-sm-9">
                        <div class="timeline-info">
                            <ul>
                                <li class="admin-name">
                                    <h5>Janice Griffith</h5>
                                    <span>Group Admin</span>
                                </li>
                                <li>
                                    <a class="active" href="time-line.html" title="" data-ripple="">time line</a>
                                    <a class="" href="timeline-photos.html" title="" data-ripple="">Photos</a>
                                    <a class="" href="timeline-videos.html" title="" data-ripple="">Videos</a>
                                    <a class="" href="timeline-friends.html" title="" data-ripple="">Friends</a>
                                    <a class="" href="timeline-groups.html" title="" data-ripple="">Groups</a>
                                    <a class="" href="about.html" title="" data-ripple="">about</a>
                                    <a class="" href="#" title="" data-ripple="">more</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section><!-- top area -->
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TopArea',
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
