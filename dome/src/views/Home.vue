<!--
 * @Author: your name
 * @Date: 2020-12-26 20:57:39
 * @LastEditTime: 2020-12-26 21:10:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dome - 带自适应布局\src\views\Home.vue
-->
<template>
  <div class="home">
    <!-- 整体的大盒子   包裹背景图片 -->
    <div class="item-body">
      <!-- 登录  的盒子 -->
      <div class="item-div">
        <!-- 标签 -->
        <h1>
          <b>HCR污水管理系统</b>
        </h1>
        <div class="item-setion">
          <!-- input框 -->
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <!-- 账号框 -->
              <a-input
                v-model="userName"
                v-decorator="[
                  '账号框',
                  {
                    rules: [{ required: true, message: '账号不能为空!' }],
                  },
                ]"
                placeholder="请输入您的账号"
              >
                <!-- 账号前面的icon图片 -->
                <a-icon
                  class="item-icon"
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model="passWord"
                v-decorator="[
                  '密码框',
                  {
                    rules: [{ required: true, message: '密码不能为空!' }],
                  },
                ]"
                type="password"
                placeholder="请输入密码"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                  class="item-icon"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-checkbox
                class="login-check"
                v-decorator="[
                  'remember',
                  {
                    valuePropName: 'checked',
                    initialValue: true,
                  },
                ]"
              >
                记住用户名
              </a-checkbox>
              <a class="login-form-forgot" href=""> 用户注册/忘记密码 </a>
              <a-button
                type="primary"
                html-type="submit"
                class="login-form-button"
                @click="Butclick"
              >
                登录
              </a-button>

              <!-- Or
            
            <a href=""> 用户注册 </a> -->
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      userName: "", //账号
      passWord: "", //密码
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log(values);
        }
      });
    },
    async Butclick() {
      var formData = new FormData();
      formData.append("account", this.userName);
      formData.append("password", this.passWord);

      let { data } = await this.$HRC.HcrLogin({
        formData
      });
      console.log(data);
    },
  },
};
</script>
<style lang="scss">
/* 整体的大盒子   包裹背景图片 */
.item-body {
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgb(72, 240, 6); */
  background: url("../assets/beijinh.png");
  background-size: 100% 100%;
}
/*  登录  的盒子  */
.item-div {
  width: 500px;
  height: 320px;
  /* border: 2px solid rgba(0, 0, 0, 0.3); */
  background: url("../assets/grey.png");
}
.item-setion {
  width: 250px;
  /* height: 280px; */
  margin: 0 auto;
  /* border: 1px solid rgb(222, 238, 6); */
}
/* 头部标签 */
h1 {
  width: 100%;
  height: 70px;
  line-height: 100px;
  text-align: center;
  font-size: 35px;
  color: #ffffff;
  /* border: 1px solid rgb(236, 16, 16); */
}
.login-check {
  color: #ffffff;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.ant-form-item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: "tnum";
  margin-bottom: 14px;
  vertical-align: top;
}
.ant-input-affix-wrapper .ant-input-prefix,
.ant-input-affix-wrapper .ant-input-suffix {
  position: absolute;
  top: 50%;
  z-index: 2;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
  transform: translateY(-50%);
  background: #176f7d;
}
// input框里面的icon图片
.item-icon{
  width: 20px;
  height: 20px;
}
</style>