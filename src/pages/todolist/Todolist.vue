<template>
    <div class="todolist">
      <!--头部-->
      <div class="title">
        <div class="title_l">X</div>
        <div class="title_c">直租预审进件</div>
        <div class="title_r"><span></span><span></span><span></span></div>
      </div>
      <!--中间-->
      <div class="todo_content">
        <h1 class="per_desc">个信息填写</h1>
        <div class="per_btn">
          <div class="per_l" >
            <span>+</span>
            上传身份证照片
          </div>
          <div class="per_r">
            <span>+</span>
            上传征信照片
          </div>
        </div>
      </div>

      <div class="per_name">
        <h1>姓名</h1>
        <input placeholder="请输入姓名"/>
      </div>

      <div class="per_name">
        <h1>身份证号码</h1>
        <input placeholder="请输入身份证号码"/>
      </div>

      <div class="per_name">
        <h1>手机号码</h1>
        <input placeholder="请请输入手机号码"/>
      </div>

      <div class="per_name">
        <h1>婚姻状况</h1>
        <input placeholder="请选择婚姻情况>"/>
      </div>

      <div class="per_btns">
        <div class="btn">下一步</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Todolist"
    }
</script>

<style scoped lang="stylus">
  .todolist
    width 100%
    .title
      background #eaeaea
      width 100%
      display flex
      height 60px
      line-height 60px
      .title_l
        float left
        padding 0 .2rem
        font-size .4rem
      .title_c
        flex 1
        text-align center
        font-size .4rem
      .title_r
        float right
        margin-right  .4rem
        span
          display inline-block
          width .16rem
          height  .16rem
          border-radius 50%
          background #333
          margin 0 .04rem
    .todo_content
      padding-top .6rem
      padding-left .4rem
      background #fff
      .per_desc
        font-size .4rem
        color #403f3f
        margin-bottom .6rem
      .per_btn
        display flex
        div
          width 2.8rem
          height 1.2rem
          color #ffffff
          border-radius .13rem
          text-align center
          line-height 1.2rem
          font-size .4rem
          padding 0 .2rem
          margin-right .3rem
          span
            font-size .5rem
        .per_r
            background #6993f6

        .per_l
            background #fa9f58

    .per_name
      margin-top .6rem
      margin-left .4rem
      display flex
      height 1.3rem
      line-height 1.3rem
      border-bottom 1px solid #ececec
      h1
        font-size .4rem
      input
        float right
        text-align right
        flex 1
        padding-right .3rem
        font-size .35rem
        color #bdbdbd


    .per_btns
      padding .6rem .44rem
      .btn
        background #697185
        color white
        text-align center
        border-radius .14rem
        height .9rem
        line-height .9rem
        font-size .34rem




</style>
