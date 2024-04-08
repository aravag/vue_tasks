<template>
    <section class="big-article">
        <div class="content">
            <p class="content__name">{{ article.name }}</p>
            <div class="img-container">
                <img :src=article.img class="img-container__img">
                <time class="img-container__date">26 December, 2022</time>
                <p class="img-container__tags"><span v-for="tag in article.tags" :key="tag">{{ tag }}</span></p>
            </div>
            <p class="content__text">{{ article.main }}</p>
            <ol v-if="article.points != []" class="list">
                <li v-for="point, index in article.points" :key="index" class="list__element"> {{ point }}</li>
            </ol>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BigArticle',
    props: {
        article: Object,
    }
}
</script>
<style lang="scss" scoped>
.big-article {
    grid-column: 1 / span 2;
    margin-inline: auto;


    .content {
        width: 100%;

        .content__name {
            font-family: 'DM Serif Display';
            text-transform: capitalize;
            font-size: 50px;
            line-height: 1.25;
            letter-spacing: 0.02em;
            color: var(--main-text-color);
            margin: 27px 0 20px;
        }

        .content__text {
            font-family: 'Jost';
            display: block;
            font-size: 22px;
            line-height: 1.5;
            letter-spacing: 0.01em;
            color: #4d5053;
        }

        .content__img {
            border-radius: 45px;
            margin: 44px 0 35px;
        }
    }
}

.img-container {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: fit-content fit-content;
    row-gap: 46px;
    margin-bottom: 45px;

    .img-container__img {
        border-radius: 45px;
        grid-row: 1;
    }

    .img-container__date {
        font-family: 'Jost';
        grid-column: 1;
        grid-row: 2;
    }

    .img-container__tags {
        grid-column: 3;
        grid-row: 2;
    }
}

.list {
    counter-reset: lis;


    .list__element {
        margin-top: 24px;
        font-family: 'Jost';
        width: 95%;
        position: relative;
        margin-left: 1em;
        font-size: 22px;
        line-height: 1.5;
        letter-spacing: 0.01em;
        color: var(--secondary-text-color);

        &::marker {
            content: '';
        }

        &::before {
            position: absolute;
            left: -1em;
            counter-increment: lis;
            content: counter(lis);
            font-family: 'DM Serif Display';

            font-size: 20px;
            line-height: 1.25;
            letter-spacing: 0.02em;
            color: var(--achivement-text-color);
        }
    }
}
</style>