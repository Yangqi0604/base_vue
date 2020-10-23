<!--
 * @Author: Lijiahui
 * @Date: 2020-10-19 22:09:52
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-19 22:10:08
-->

<template>
<div>
    <el-form :model="phoneForm" :rules="phonerules" ref="phoneForm" label-width="60px" class="login-phoneForm">
            <el-row :gutter="20">
                <el-col :span="20" :offset="0">
                    <el-form-item prop="phoneNumber">
                        <el-input placeholder="手机号" prefix-icon="el-icon-mobile" v-model="phoneForm.phoneNumber">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        
            <el-row :gutter="20">
                <el-col :span="16">
                    <el-form-item prop="Pnumber">
                        <el-input placeholder="验证码" v-model="phoneForm.Pnumber">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-button class="tabsPsd_btn" type="primary">获取验证码</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                  <el-button type="primary" class="tabsPhone_btn">登录</el-button>
                </el-col>
            </el-row>
            
        </el-form>
</div>
</template>

<script>

export default {
components: {},
data() {
return {
   phoneForm: {
                phoneNumber: '',
                Pnumber: '',
            },
              phonerules: {
                phoneNumber: [
                    { required: true, message: '请输入手机号码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 11 个字符', trigger: 'blur' }
                ],
             
                Pnumber: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在4个字符', trigger: 'blur' }
                ],
            }
};
},
computed: {},
watch: {},
created() {

},
methods: {

},
}
</script>
<style lang='less' scoped>
.tabsPsd_btn{
    margin-left: -40%;
}
.tabsPhone_btn {
  width: 100%;
}
/deep/.el-col-18 {
    width: 73%;
}
/deep/.el-col-offset-3 {
    margin-left: 10.33%;
}

</style>