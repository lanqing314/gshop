<template>
  <div class="home">
    <!-- 首页头部 -->
    <HeaderTop title="成华区龙光世纪中心">
      <a class="header_search" slot="left">
        <i class="iconfont icon-RectangleCopy"></i>
      </a>
      <router-link to="/login" class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </router-link>
    </HeaderTop>
    <!-- 首页导航 -->
    <nav class="home_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" alt="" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/3.jpg" alt="" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/4.jpg" alt="" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/5.jpg" alt="" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/6.jpg" alt="" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/7.jpg" alt="" />
              </div>
              <span>预定早饭</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/8.jpg" alt="" />
              </div>
              <span>土豪推荐</span>
            </a>
            
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/9.jpg" alt="" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/10.jpg" alt="" />
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/11.jpg" alt="" />
              </div>
              <span>美食</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/12.jpg" alt="" />
              </div>
              <span>简餐</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/13.jpg" alt="" />
              </div>
              <span>新店特惠</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/14.jpg" alt="" />
              </div>
              <span>准时达</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="" />
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/2.jpg" alt="" />
              </div>
              <span>商超便利</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        
      </div>
    </nav>
    <!-- 首页商家列表 -->
    <div class="home_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue"

export default {
  name: "Home",
  components: { HeaderTop, ShopList },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/less/mixins.less";
.home {
  width: 100%;
  .home_nav {
    .bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          .link_to_food {
            width: 25%;
            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;
              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }
      .swiper-pagination{
        /deep/.swiper-pagination-bullet-active{
          background-color:#02a774;
        }
      }
    }
  }
  .home_shop_list {
    .top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;
    .shop_header {
      padding: 10px 10px 0;
      .icon-xuanxiang {
        margin: 0 5px;
        color: #999;
      }
      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
    
  }
}
</style>