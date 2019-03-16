<template>
    <div class="about-US">
        <div class="intro">
            <img src="http://www.webqd.org/68dd28e972c49ffc16a6d070daa31251.jpg" alt="">
            <p>唯创网讯是黑龙江省内最早最专业最权威的WEB全栈培训机构,自2012年以来培养了大批高质量学员，我们不断努力，不断创造奇迹，我们每一年都培养出大量的优秀高新就业学员，平均每年有超过72%~80%的学生都就业于互联网企业，平均工资超过14万，在省内拥有超高的口碑。</p>
        </div>

        <div class="teacher">
            <h2>金牌导师阵容</h2>
            <div class="list">
                <div class="detail">
                    <div class="circle">
                        <img src="" alt="">
                    </div>
                    <h3>单老师</h3>
                    <span></span>

                </div>
                <div class="detail"></div>
                <div class="detail"></div>
                <div class="detail"></div>
                <div class="detail"></div>
                <div class="detail"></div>
                <div class="detail"></div>
                <div class="detail"></div>


            </div>


        </div>
        
        <div class="contact">
            <img src="http://www.webqd.org/35eb2d392e5b5eaa7f957b169fd811b1.png" alt="">
            <div class="inner">
                <div>
                    <p>学府总校：学府书城写字楼822室内</p>
                    <p>咨询热线/微信</p>
                    <p>18545859788 18545857988</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>

    export default {
        name: "Abuout-US",
        components: {
        },
        data() {
            return{


            }

        },

    }
</script>

<style scoped>
    .about-US{
        margin: 0 auto;
        width: 1200px;
    }
    .about-US .intro{
        margin: 10px auto;
        width: 1160px;
        padding: 20px;
        background-color: white;
    }
    .about-US .intro>img,.about-US .contact>img{
        width: 100%;
    }
    .about-US .intro>p{
        margin-top: 12px;
        font-size: 18px;
        font-weight: 400;
        height: 54px;
        line-height: 30px;
    }
    .about-US .teacher{
        margin: 30px auto;
        background-color: rgb(249,250,254);
    }
    .about-US .teacher h2{
        margin: 0 auto;
        text-align: center;
    }
    .about-US .teacher .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .about-US .teacher .list .detail{
        background-color: white;
        margin-top: 14px;
        width: 24%;
        height: 400px;
        border: 1px solid rgb(223,224,226);
    }
    .about-US .teacher .list .detail .circle{
        margin:25px auto 0;
        border: 1px solid black;
        width: 100px;
        height: 100px;
        border-radius: 50px;
    }
    .about-US .teacher .list .detail>h3{
        font-size: 22px;
        text-align: center;
        margin: 0;
        padding: 0;
    }



    .about-US .contact{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px auto;
        width: 1160px;
        padding: 20px;
        background-color: white;

    }
    .about-US .contact .inner{
        background: #fff;
        position: absolute;
        height: 85%;
        opacity: .8;
        width: 93%;
    }
    .about-US .contact .inner>div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .about-US .contact .inner>div>p{
        text-align: center;
        color: black;
        font-size: 18px;
        font-weight: 700;
    }

</style>