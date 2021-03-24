<template>
    <div class="admin_user_edit">
        <h1>{{TypeName.type}}评论编辑</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.user_id.username"></el-input>
            </el-form-item>
            <el-form-item label="评论id">
                <el-input  v-model="model.tid"></el-input>
            </el-form-item>
            <el-form-item label="评论内容">
                <el-input  v-model="model.content"></el-input>
            </el-form-item>
            <el-form-item label="收藏数量">
                <el-input  v-model="model.likecount"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "AdminUserEdit",
        data(){
            return {
                model:{},
                type:'',
                TypeName:{
                    'song':"歌曲",
                    'mv':'MV',
                    'collection':'专辑',
                },
                id:'',
            }
        },
        methods:{
           async save(){
               if(this.type == 'song'){
                   await this.$http.put(`/comment/song/${this.id}`,this.model)
                   this.$router.push('/comment/song/list')
               }
               else if(this.type == 'mv'){
                   await this.$http.put(`/comment/mv/${this.id}`,this.model)
                   this.$router.push('/comment/mv/list')
               }
               else if(this.type == 'collection'){
                   await this.$http.put(`/comment/album/${this.id}`,this.model)
                   this.$router.push('/comment/collection/list')
               }

                this.$message({
                   type:'success',
                   message:'保存成功'
               })

            },
            async fetch(){
                if(this.type == 'song'){
                    const res = await this.$http.get(`/comment/singer/song/${this.id}`)
                    this.model = res.data
                }
                else if(this.type == 'mv'){
                    this.model = {}
                    const res = await this.$http.get(`/comment/singer/mv/${this.id}`)
                    this.model = res.data
                }
                else if(this.type == 'collection'){
                    this.model = {}
                    const res = await this.$http.get(`/comment/singer/album/${this.id}`)
                    this.model = res.data
                }
            }
        },
        created() {
            this.type = this.$route.query.type
            this.id = this.$route.query.id
            this.fetch()
        }
    }
</script>

<style scoped>

</style>
