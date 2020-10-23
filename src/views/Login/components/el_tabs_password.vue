<!--
 * @Author: Lijiahui
 * @Date: 2020-10-19 22:04:38
 * @LastEditors: Lijiahui
 * @LastEditTime: 2020-10-20 00:30:44
-->

<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm">
            <el-row :gutter="20">
                <el-col :span="20" :offset="0">
                    <el-form-item prop="name">
                        <el-input placeholder="账号" prefix-icon="el-icon-user" v-model="ruleForm.name">
                        </el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="20" :offset="0" style='position:relative'>
                    <el-form-item prop="password">
                        <el-input :type="typepsd" placeholder="密码" prefix-icon="el-icon-lock" v-model="ruleForm.password">
                        </el-input>
                    </el-form-item>
                    <img @click="handleclose" class="typepsd_img" :src="imgsrc" alt="">
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="15">
                    <el-form-item prop="number">
                        <el-input placeholder="验证码" v-model="ruleForm.number">
                        </el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple-light">
                        <img src="../../../assets/images/yanzhengma.png" alt="" />
                    </div>
                </el-col>
            </el-row>
            <!-- <el-row :gutter="20">
                <el-col :span="20" :offset="0">

                </el-col>
            </el-row> -->
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <div class="forgetPass">
                        <el-checkbox v-model="forgetChecked">记住密码</el-checkbox>
                        <div class="forget" @click="handleforget">忘记密码</div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="18" :offset="3">
                    <el-button class="tabsPsd_btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
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
            forgetChecked: true,
            typepsd: 'password',
            flag:true,
            imgsrc:require( "../../../assets/images/denglu_ic_biyan.png"),
            ruleForm: {
                name: '',
                password: '',
                number: '',
            },
            rules: {
                name: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                number: [
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
            }
        };
    },
    computed: {},
    watch: {},
    created() {

    },
    methods: {
        handleclose(){
            this.flag=!this.flag;
            if(this.flag){
                this.typepsd='password';
                 this.imgsrc = require( "../../../assets/images/denglu_ic_biyan.png")
            }else{
                this.typepsd='text';
                this.imgsrc = require( "../../../assets/images/denglu_ic_zhangkai.png")
            }
           
        },
        handleforget(){
            
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
</script>
<style lang='less' scoped>
.typepsd_img {
  position: absolute;
  right: 22px;
  top: 18px;
}
.tabsPsd_btn {
  width: 100%;
}
/deep/.el-tabs__content {
  margin-top: 30px;
  /deep/.el-input {
    margin-bottom: 20px;
  }
  /deep/.el-input__inner {
    width: 85%;
    height: 40px;
  }
  /deep/.el-input--mini .el-input__inner {
    width: 60%;
  }
  /deep/.el-input--prefix .el-input__inner {
    padding-left: 45px;
  }
  /deep/.el-icon-view:before {
    position: absolute;
    right: 75px;
    color: black;
  }
  /deep/.el-input__icon {
    color: #3264feff;
    position: relative;
  }
  /deep/.el-input__icon:after {
    content: " ";
    position: absolute;
    width: 1px;
    height: 21px;
    background: #b2b2b2;
    right: 0;
    bottom: 10px;
    left: 25px;
  }
  /deep/.el-col-offset-3{
      margin-left: 10.33%;
  }
}
.imgBox {
  width: 24%;
  height: 38px;
  position: absolute;
  bottom: 49.5%;
  right: 60px;
}

.forgetPass {
  display: flex;
  justify-content: space-between;
  line-height: 40px;
  /deep/.el-checkbox__input.is-checked + .el-checkbox__label {
    color: #000;
  }
  .forget {
    font-size: 12px;
    color: #3264fe;
    margin-right: 5px;
  }
}
/deep/.el-col-18 {
    width: 73%;
}
/deep/.el-col-offset-3 {
    margin-left: 10.33%;
}
</style>