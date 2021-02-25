<template>
  <div>
    <div class="login-info">
      <!--表单区域-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password"></el-input>
        </el-form-item>
        <!--按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginFormRules: {
          //验证用户名是否合法
          username: [
            {required: true, message: '请输入登录名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'}
          ],
          //验证密码是否合法
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      //点击重置按钮，重置登录
      resetLoginForm() {
        // console.log(this);
        this.$refs.loginFormRef.resetFields();
      },
      login() {
        this.$refs.loginFormRef.validate(async (valid) => {
          // console.log(valid);
          if (!valid) return;
          const {data: res} = await this.$http.post('login', this.loginForm);
          if (res.meta.status !== 1) return this.$message.error('登录失败');
          this.$message.success('登陆成功');
          //保存进sessionStorage中
          window.sessionStorage.setItem('token', res.data.token);
          //跳转到后台主页，地址/home 编程式导航
          this.$router.push("/user");

        });
      }
    }
  }
</script>

<style lang="scss">
  .login-info {
    padding: 64px 10px 0 10px;
  }

</style>
