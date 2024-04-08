<template>
    <div class="tags">
        <span class="tags__name">Tags</span>
        <span v-for="tags, index in ARTICLES[0].tag" class="tags__element" @click="addFilter" :key="index">{{ tags
            }}</span>

        <section class="articles">
            <div class="palette">
                <ArticleComponent v-for="post, index in filteredArticles.slice(0, 6)" class="article" :isTime="true"
                    :article="post" :key="index"></ArticleComponent>
            </div>
        </section>
    </div>

</template>
<script>
import ArticleComponent from '../ArticleComponent.vue';
export default {
    name: 'TagFilter',
    components: {
        ArticleComponent,
    },

    data() {
        return {
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
    mounted() {
        this.$store.dispatch('GET_ARTICLES')

    },
    computed: {
        ARTICLES() {
            return this.$store.getters.ARTICLES[0]
        },
        filteredArticles() {
            if (this.filters.length === 0) {
                return this.ARTICLES;
            }
            return this.ARTICLES.filter((elem) => {
                let find = false;
                this.filters.forEach((tag) => {
                    if (elem.tag.includes(tag)) {
                        find++;
                    }
                });
                if (find === this.filters.length) {
                    return true;
                } else {
                    return false;
                }
            });
        },

    },

}
</script>