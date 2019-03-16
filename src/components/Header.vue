<template>
    <el-container>
        <el-header>

            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="rgb(0,144,255)" text-color="black" @select="handleSelect">
                <img src="./../../public/logo.png" alt="">
                <el-menu-item index="1">核心课程</el-menu-item>
                <el-menu-item index="2">成功案例</el-menu-item>
                <el-menu-item index="3">新闻资讯</el-menu-item>
                <el-menu-item index="4">关于我们</el-menu-item>

                <span>注册</span>
                <span class="split">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                <span>登录</span>
                <input type="text" placeholder="请输入要查找的内容">

            </el-menu>


        </el-header>
    </el-container>

</template>

<<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu--horizontal>.el-menu-item{
        height: 50px;
        line-height: 50px;
    }
    .el-menu-item{
        font-size: 16px;
        color: black;
    }

    .el-menu>img{
        float: left;
        margin-right: 30px;
        width: 150px;
    }
    .el-menu>span{
        float: right;
        position: relative;
        top: 13px;
    }
    .el-menu>input{
        float: right;
        position: relative;
        top: 10px;
        right: 60px;
        height: 27px;
        border:1px solid rgb(230,230,230);
        border-radius: 14px;
        padding: 0 14px;
        width: 210px;
    }
    .el-menu .split{
        font-size: 21px;
    }




</style>