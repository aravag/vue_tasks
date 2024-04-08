<template>
    <a class="link">
        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </a>
</template>
<script>
export default {
    name: 'aLink',
    props: {
        link: String
    }
}
</script>
<style lang="scss" scoped>
.link {
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
</style>