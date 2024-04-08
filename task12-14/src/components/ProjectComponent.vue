<template>
    <div class="project">
        <router-link to="/projectDetails"><img :src="project.img" class="project__img" /></router-link>
        <h2 class="project__name">{{ project.name }}</h2>
        <span class="project__tag">{{ project.tag[0] }}</span>
        <ALink />
    </div>
</template>

<script>
import ALink from './UI/ALink.vue';

export default {

    name: 'ProjectComponent',
    props: {
        isTime: Boolean,
        project: Object,
    },
    components: {
        ALink
    },

}
</script>
<style lang="scss" scoped>
.project {
    break-inside: avoid;
    position: relative;
    box-sizing: border-box;
    min-height: 600px;
    max-height: 950px;

    &:hover {
        background-color: var(--achivments-background-color);

        .project__link {
            background-color: #fff;
        }
    }

    a {
        bottom: 20px;
    }

    .project__tag {

        width: 118px;
        height: 29px;
        background-color: #fff;
        border-radius: 8px;
        border-bottom-left-radius: 0px;

        font-family: 'Jost';
        text-align: center;
        font-size: 16px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #4d5053;
    }

    .project__name {
        margin-top: 22px;
        width: 305px;
        font-family: 'DM Serif Display';
        text-transform: capitalize;
        font-size: 25px;
        line-height: 1.25;
        letter-spacing: 0.02em;
        color: #292f36;

        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .project__link {
        position: absolute;
        bottom: 0px;
        right: 21px;
        width: 52px;
        height: 52px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        background-color: var(--link-color);
        cursor: pointer;
    }

    .project__date {
        position: absolute;
        height: 33px;
        bottom: 37px;
    }
}
</style>