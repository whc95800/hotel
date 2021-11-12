<template>
  <div class="main-top">
    <el-carousel  :height="bannerHeight.valueOf() + 'px'"
                  direction="vertical"
                  :autoplay="true"
                  :interval="7000"
                  :pause-on-hover="false"
                  indicator-position="none"
                  >
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="date-picker">
    <div class="reserveTab">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon-p_rili"></use>
      </svg>
        <span>宿泊予約</span>
      <div class="block">
        <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            value-format="MM-D-d"
            @change="setData"
            :clearable="false"
            :disabled-date="disabledDate"
        >
        </el-date-picker>
      </div>
      <el-input-number v-model="numRoom" :min="1" :max="10" size="small"  @change="handleChangeRoom"/>
      <a>部屋</a>
      <el-input-number v-model="numPeople" :min="1" :max="10" size="small"  @change="handleChangePeople"/>
      <a>大人</a>
    </div>
  </div>
  <div class="date-show">
    <div class="data-show-in1">
      <a style="font-size:16px;">チェックイン日</a>
      <div class="data-show-in2">
        <div class="data-show-in3">
          <div>
            <a style="font-size:16px;">{{dataInWeek}}</a>
          </div>
          <div>
            <a style="font-size:16px;">{{dataInMonth}}月</a>
           </div>
        </div>
        <div>
          <a style="font-size:45px;">{{dataInDay}}日</a>
        </div>
      </div>
    </div>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-youjiantou1"></use>
    </svg>
    <div class="data-show-out1">
      <a style="font-size:16px;">チェックアウト日</a>
      <div class="data-show-out2">
        <div class="data-show-out3">
          <div>
          <a style="font-size:16px;">{{dataOutWeek}}</a>
          </div>
          <div>
            <a style="font-size:16px;">{{dataOutMonth}}月</a>
          </div>
      </div>
        <a style="font-size:45px;">{{dataOutDay}}日</a>
      </div>
    </div>
    <div class="show-room" style="margin-left: 15px;">
      <div style="display:flex; justify-content: center;">
        <a style="font-size:16px;">部屋数</a>
      </div>
      <div style="margin-top: 5px; display:flex; justify-content: center;">
        <a style="font-size:35px;">{{numRoom}}部屋</a>
      </div>
    </div>
    <div class="show-people" style=" margin-left: 45px;">
      <div style="display:flex; justify-content: center;">
        <a style="font-size:16px;">宿泊人数</a>
      </div>
      <div style="margin-top: 5px; display:flex; justify-content: center;">
        <a style="font-size:35px;">{{numPeople}}人</a>
      </div>
    </div>
    <el-button>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuoxiao"></use>
        </svg>
        <a>検索する</a>
      </div>
    </el-button>
  </div>
  <div class="wrapper">
    <h2 class="secTitle center"><span>Topics</span>トピックス</h2>
  </div>
  <div class="swiper">
    <swiper
        :slides-per-view="4"
        :space-between="0"
        :autoplay="{disableOnInteraction: false,delay: 4000,}"
        :speed="1500"
        :loop="true"
  >
    <swiper-slide v-for="(item,index) in imgList01" :key="index">
      <img :src="item.img" alt="">
    </swiper-slide>
    ...
  </swiper>
  </div>
  <div class="slick-track">
    <el-carousel :interval="4000" type="card"
                 :height="slickHeight.valueOf() + 'px'"
                 indicator-position="none"
    >
      <el-carousel-item v-for="(item,index) in imgList02" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="wrapper">
    <h2 class="secTitle center"><span>Hotel Brand</span>ホテルブランド</h2>
  </div>
  <div class="brand-rapper">
    <div class="brand-img" v-for="(item,index) in imgList03" :key="index">
      <img :src="item.img" alt="">
    </div>
  </div>
  <div class="wrapper">
    <h2 class="secTitle center"><span>Hotel Address</span>ホテルアドレス</h2>
  </div>
  <div class="google-map" style="width:90%;height:380px;">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d675.4712647108053!2d139.77466639740948!3d35.67235438178726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018895fc9fe99e1%3A0x7420c8f1727e454c!2z44CSMTA0LTAwNDEg5p2x5Lqs6YO95Lit5aSu5Yy65paw5a-M77yR5LiB55uu77yR77yV4oiS77yR77yRIOODnuOCreODl-ODqeOCtg!5e0!3m2!1sja!2sjp!4v1636529267475!5m2!1sja!2sjp" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</template>

<script>
import {reactive, toRefs, ref,onMounted} from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css'
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
SwiperCore.use([Autoplay, EffectCoverflow]);
export default {
  name: "Main",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const weekArr = ["日", "月", "火", "水", "木", "金", "土"]
    const dataList = ref()
    const dataInMonth = ref()
    const dataOutMonth = ref()
    const dataInDay = ref()
    const dataOutDay = ref()
    const dataInWeek = ref()
    const dataOutWeek = ref()
    const bannerHeight = ref(100)
    const slickHeight = ref(100)
    const screenWidth = ref(0)
    const imgList = [
      {img: require('@/assets/img/1.jpg')},
      {img: require('@/assets/img/2.jpg')},
      {img: require('@/assets/img/3.jpg')},
      {img: require('@/assets/img/4.jpg')},
      {img: require('@/assets/img/5.jpg')},
      {img: require('@/assets/img/6.jpg')},
      {img: require('@/assets/img/7.jpg')},
      {img: require('@/assets/img/8.jpg')},
      {img: require('@/assets/img/9.jpg')},
      {img: require('@/assets/img/10.jpg')},
      {img: require('@/assets/img/11.jpg')},]
    const imgList01 = [
      {img: require('@/assets/img01/1.jpg')},
      {img: require('@/assets/img01/2.jpg')},
      {img: require('@/assets/img01/3.jpg')},
      {img: require('@/assets/img01/4.jpg')},
      {img: require('@/assets/img01/5.jpg')},]
    const imgList02 = [
      {img: require('@/assets/img02/1.jpg')},
      {img: require('@/assets/img02/2.jpg')},
      {img: require('@/assets/img02/3.jpg')},
      {img: require('@/assets/img02/4.jpg')},]
    const imgList03 = [
      {img: require('@/assets/img03/1.jpg')},
      {img: require('@/assets/img03/2.jpg')},
      {img: require('@/assets/img03/3.jpg')},
      {img: require('@/assets/img03/4.jpg')},]
    const state = reactive({
      disabledDate(time) {
        return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
      },
      value1: '',
      value2: '',
    })
    const numRoom = ref(1)
    const numPeople = ref(1)

    const handleChangeRoom = (value) => {
      console.log(value)
    }
    const handleChangePeople = (value) => {
      console.log(value)
    }


    function getToday() {
      let MM = (new Date().getMonth() + 1);
      let D = new Date().getDate();
      let wk = new Date().getDay();
      dataInMonth.value = MM
      dataInDay.value = D
      dataInWeek.value = weekArr[wk]
    }

    function getTomorrow() {
      let myDate = new Date();
      myDate.setDate(myDate.getDate() + 1);
      let endDate = myDate.getDate();
      let endMonth = myDate.getMonth() + 1;
      let endWk = myDate.getDay();
      dataOutMonth.value = endMonth
      dataOutDay.value = endDate
      dataOutWeek.value = weekArr[endWk]
    }

    function setData(t) {
      dataList.value = t
      dataInMonth.value = dataList.value[0].split('-')[0]
      dataInDay.value = dataList.value[0].split('-')[1]
      dataInWeek.value = weekArr[dataList.value[0].split('-')[2]]
      dataOutMonth.value = dataList.value[1].split('-')[0]
      dataOutDay.value = dataList.value[1].split('-')[1]
      dataOutWeek.value = weekArr[dataList.value[1].split('-')[2]]
    }

    function setSize() {
      bannerHeight.value = 800 / 1920 * screenWidth.value;
      slickHeight.value = 380 / 1920 * screenWidth.value;
    }

    onMounted(() => {
      screenWidth.value = window.innerWidth;
      setSize();
      window.onresize = () => {
        screenWidth.value = window.innerWidth;
        setSize();
      };
      getToday();
      getTomorrow();
    })

    return {
      imgList, imgList01, imgList02, imgList03, ...toRefs(state), bannerHeight, setData, dataInMonth, dataInDay,
      dataOutMonth, dataOutDay, dataInWeek, dataOutWeek, weekArr, numRoom, numPeople, handleChangePeople, handleChangeRoom,
      slickHeight,
    }
  },
}
</script>

<style lang="less" scoped>

img{
  width: 100%;
}

  .date-picker {
    height: auto;
    width: 100%;

    .reserveTab {
      height: 70px;
      width: 100%;
      background: #1d3449;
      color: white;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      .block {
        margin-left: 120px;
      }
      .icon {
        width: 35px;
        height: 70px;
        padding-right: 10px;
      }
      .el-input-number{
        margin-right:10px;
        margin-left: 80px;
      }
    }
  }

.date-show{
  background-color: #b08d38;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  .data-show-in1{
    margin: 0 30px;
    align-items: center;
    .data-show-in2{
      display: flex;
      align-items: center;
      justify-items: center;
      .data-show-in3{
        margin-right: 15px;
      }
    }
  }
  .icon{
    width: 40px;
    position:relative;
    top:2px;
  }
  .data-show-out1{
    margin:0 30px;
    .data-show-out2{
      display: flex;
      align-items: center;
      .data-show-out3{
        margin-right: 15px;
      }
    }
  }
  .el-button{
    background-color: rgba(15, 32, 44, 0.99);
    width: 20%;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 70px;
    border-radius: 0;
    font-size: 20px;
    display: flow;
    .icon{
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
}
.wrapper{
  width: auto;
  height: 100px;
  margin: 0 auto;
  padding: 50px 0;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  .secTitle.center{
    text-align: center;
  }
  .secTitle span {
    display: block;
    margin-bottom: 5px;
    font-family: "PT Serif", serif;
    font-weight: 400;
    font-style: italic;
    font-size: 60px;
    letter-spacing: 3px;
    line-height: 1.2;
    color: #121b27;
  }
}
.slick-track{
  margin-top: 8%;
  padding: 0 20%;
}
.brand-rapper{
  display: flex;
  align-items: center;
  .brand-img {
    display: flex;
    overflow:hidden;
    img {
      cursor: pointer;
      transition: all 0.5s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
}
.google-map{
  border:10px solid white;
  margin: auto auto 100px;
}
.google-map:hover{
  border-radius: 7px;
  border:10px solid #b08d38;
  -webkit-transition:1000ms;
}
</style>
