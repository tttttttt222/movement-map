<template>
    <div class="navbar">
        <ul>
            <li><i class="icon icon-search"></i></li>
            <li><i class="icon icon-location"></i></li>
            <li><i class="icon icon-user" @click="toUser"></i></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        data() {
            return {}
        },
        methods: {
            toUser() {
                const router = this.$route;
                if (router.name === "User") {
                  this.$router.push({name: "Index"});
                } else {
                  this.$router.push({name: "User"});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        position: fixed;
        left: 0;
        right: 0;
        top: 10px;
        z-index: 10;
        text-align: center;

        li {
            display: inline-block;
        }

        .icon {
            margin: 0 25px;
            vertical-align: middle;
            cursor: pointer;
        }
    }

    .select-car-btn {
        display: block;
        width: 240px;
        height: 84px;
        border-radius: 100px;
        line-height: 84px;
        text-align: center;
        color: #FFFFFF;
        background-color: #409EFF;
        font-size: 26px;
        font-weight: 300;
        margin: 0 17px;
    }
</style>
