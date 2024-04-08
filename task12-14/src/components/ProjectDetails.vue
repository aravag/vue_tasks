<template>
    <div class="details">
        <div class="details__name">
            {{ project.name }}
        </div>
        <div class="details__description" v-html="project.description">

        </div>
        <div class="carousel">
            <button @click="prevIMG" class="carousel__prevButton">&lt;</button>
            <button @click="nextIMG" class="carousel__nextButton">&gt;</button>
            <div class="carousel__images">
                <img :src="image" />
            </div>

            <ul class="carousel__navlinks">
                <input type="radio" v-for="points, index in project.img" v-model="selectedImg" :value="index"
                    name="images" :key="index" />
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProjectDetails",
    props: {
        project: Object,
    },
    data() {
        return {
            selectedImg: 0
        }
    },
    methods: {
        prevIMG() {
            console.log(this.project.img.length)
            if (this.selectedImg == 0) {
                this.selectedImg = this.project.img.length
            }
            this.selectedImg--
        },
        nextIMG() {
            if (this.selectedImg >= this.project.img.length - 1) {
                this.selectedImg = 0
                return
            }
            this.selectedImg++
        }
    },
    computed: {
        image() {
            return this.project.img.filter((elem, index) => index == this.selectedImg)
        }
    }
}
</script>
<style lang="scss">
.details {
    margin-top: 200px;
    max-width: var(--max-width);
    margin-inline: auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    &__name {
        width: 660px;
        font-family: "DM Serif Display";
        font-size: 50px;
        line-height: 125%;
        letter-spacing: 0.02em;
        color: #292f36;
    }

    &__description {
        margin-top: 11px;
        font-family: 'Jost';
        font-size: 22px;
        width: 660px;
        line-height: 150%;
        letter-spacing: 0.01em;
        color: #4d5053;
    }

    .carousel {
        display: flex;
        margin-top: 100px;
        position: relative;
        flex-direction: column;
        align-items: center;

        &__nextButton,
        &__prevButton {
            position: absolute;
            height: 30%;
            top: 35%;
            border: none;
            width: 50px;
            background-color: rgba($color: #000000, $alpha: 0.2);
            font-size: 25px;
            color: white;
            mix-blend-mode: overlay;
            cursor: pointer;
        }

        &__prevButton {
            left: 0;

        }

        &__nextButton {
            right: 0;
        }

        &__images {

            display: flex;
            flex-direction: row;
            width: fit-content;
            justify-content: center;
            align-items: flex-start;

            img {
                object-fit: cover;
            }
        }

        &__navlinks {
            margin-top: 25px;
            display: flex;
            gap: 25px;

            input {
                cursor: pointer;
            }

        }
    }
}
</style>