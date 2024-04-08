<template>
    <div class="article" :id="article.id" :key="article.id">
        <img :src="article.img" class="article__img" />
        <span class="article__tag">{{ article.tag[0] }}</span>
        <h2 class="article__name">{{ article.name }}</h2>
        <time v-if="isTime" class="article__date">{{ getDateToString(article.date) }}</time>
        <aLink :link="home" />
    </div>
</template>

<script>
import aLink from './UI/ALink.vue';
export default {

    name: 'ArticleComponent',
    props: {
        isTime: Boolean,
        article: Object
    },
    components: {
        aLink
    },
    data() {
        return {
            home: '/home',
            filters: [],
            month: [
                'December',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'January',
            ],
        }
    },
    methods: {
        getDateToString(timestamp) {
            const date = new Date(timestamp * 1000);
            return `${date.getDate()} ${this.month[date.getMonth()]
                } ${date.getFullYear()}`;
        },
        addFilter(e) {
            if (this.filters.includes(e.target.textContent)) {
                this.filters = this.filters.filter(
                    (elem) => elem != e.target.textContent
                );
                e.target.classList.toggle("selected");
            } else {
                this.filters.push(e.target.textContent);
                e.target.classList.toggle("selected");
            }
        },

    },

}
</script>
<style lang="scss" scoped>
.article {
    position: relative;
    width: 382px;
    height: 521px;
    padding: 21px;
    border: 1px #e7e7e7 solid;
    border-radius: 62px;

    &:hover {
        background-color: var(--achivments-background-color);

        .link {
            background-color: #fff;
        }
    }

    .article__img {
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
        width: 100%;

    }

    .article__tag {
        position: absolute;
        top: 249px;
        left: 41px;
        width: 118px;
        height: 29px;
        background-color: #fff;
        border-radius: 8px;
        border-bottom-left-radius: 0px;

        font-family: 'Jost';
        text-align: center;
        font-size: 16px;
        line-height: 29px;
        letter-spacing: 0.01em;
        text-transform: capitalize;
        color: #4d5053;
    }

    .article__name {
        width: 305px;
        height: 100px;
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

    .article__link {
        position: absolute;
        bottom: 37px;
        right: 21px;
        width: 52px;
        height: 52px;
        line-height: 60px;
        text-align: center;
        border-radius: 50%;
        background-color: var(--link-color);
        cursor: pointer;
    }

    .article__date {
        position: absolute;
        height: 33px;
        bottom: 37px;
    }
}
</style>