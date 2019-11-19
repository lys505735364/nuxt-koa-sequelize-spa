<template>
  <div class="mainpage">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>请选择您的身份登录此系统</h2>
    <ul>
      <li>
        <div>我是小区业委会</div>
        <div>
          <router-link to="/community">点击登录</router-link>
        </div>
      </li>
      <li>
        <div>我是小区业主</div>
        <div>
          <router-link to="/owner">点击登录</router-link>
        </div>
      </li>
      <li>
        <div>我是物业公司</div>
        <div>
          <router-link to="/enterprise">点击登录</router-link>
        </div>
      </li>
      <li>
        <div>我是政府管理员</div>
        <div>
          <router-link to="/goverment">点击登录</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      msg: "欢迎使用物业管家物业管理系统"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mainpage {
  display: flex;
  -webkit-box-flex: 1;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
</style>
