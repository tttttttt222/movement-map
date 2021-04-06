<template>
  <div class="search">
    <headback/>
    <div class="search-cascader">
      <el-cascader
        v-model="selectKeys"
        :options="provinces"
        :props="props"
        @change="showCityCenter"></el-cascader>
    </div>
  </div>
</template>

<script>
  import headback from "../components/headback";

  export default {
    name: "search",
    components: {headback},
    data() {
      const _this = this;
      return {
        provinces: [],
        citys: [],
        selectKeys: [],
        props: {
          children: 'children',
          lazy: true,
          lazyLoad(node, resolve) {
            if (node.level == 1) {
              _this.queryCityById(node.value, resolve);
            }
            // resolve(nodes);
          }
        }
      }
    },
    mounted() {
      this.queryProvinces();
    },
    methods: {
      async queryProvinces() {
        const {data: res} = await this.$http.post(`provinces/queryProvincesAll`);
        if (res.meta.status !== 1) {
          return this.$message.error('获取省份信息失败');
        }
        this.provinces = res.data;
        this.provinces.forEach(item => {
          item.children = [];
          item.label= item.province;
          item.value= item.provinceId;
        });
      },
      async queryCityById(pid, resolve) {
        const {data: res} = await this.$http.post(`provinces/queryCityById/${pid}`);
        if (res.meta.status !== 1) {
          return this.$message.error('获取城市信息失败');
        }
        this.citys = res.data;
        var nodes = [];
        this.citys.forEach(item => {
          var city = {
            label: item.city,
            value: item.cityId,
            leaf: true,
          };
          nodes.push(city);
        })
        // console.log(nodes);
        resolve(nodes);
      },
      showCityCenter(value) {
        //获取经纬度
        var selectCity = {};
        this.citys.forEach(item => {
          if(item.cityId === value[1]){
            selectCity = item;
          }
        });
        var location = [0,0];
        console.log(selectCity.lng + ":"+ selectCity.lat);
        if(selectCity.lng != null){
          location = [selectCity.lng , selectCity.lat];
        }
        this.$router.push({name: "Index",params: { location: location }});
      }

    },
  }
</script>

<style scoped>

</style>
