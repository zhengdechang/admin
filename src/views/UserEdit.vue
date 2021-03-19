<template>
    <div class="categories-edit">
        <h1>{{id?'编辑':'新建'}}用户</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="model.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item  label="性别" prop="sex">
                <el-radio-group v-model="model.sex">
                    <el-radio label="0">女</el-radio>
                    <el-radio label="1">男</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item  label="手机">
                <el-input  v-model="model.phoneNum" placeholder="手机"></el-input>
            </el-form-item>
            <el-form-item  label="邮箱">
                <el-input  v-model="model.email" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item  label="生日">
                <el-date-picker v-model="model.birth" placeholder="选择日期" style="width:100%;" @change="change(model.birth)"></el-date-picker>
            </el-form-item>
            <el-form-item  label="签名">
                <el-input  v-model="model.introduction" placeholder="签名"></el-input>
            </el-form-item>
            <el-form-item  label="地区">
                <el-select  v-model="model.location" placeholder="地区" style="width:100%;">
                    <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"> </el-option>
                </el-select>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {cities}  from "../assets/data/form"
    export default {
        name: "UserEdit",
        props:{
            id:{}
        },
        data(){
            return {
                model:{},
                cities:[],                  //所有的地区--省

            }
        },
        methods:{
           async save(){
               if(this.id){
                   await this.$http.put(`rest/users/${this.id}`,this.model)
               }else{
                   await this.$http.post('rest/users',this.model)
               }
                this.$router.push('/users/list')
                this.$message({
                   type:'success',
                   message:'保存成功'
               })
            },
            async fetch(){
                const res = await this.$http.get(`rest/users/${this.id}`)
                this.model = res.data

            },
            change(value1){
                    let src = new Date(value1);
                    let dest = new Date(src.getTime() + 8*3600*1000);
                    this.model.birth=dest
                    console.log(dest);
            }
        },

        created() {
            this.id && this.fetch();
            this.cities = cities
        }
    }
</script>

<style scoped>

</style>