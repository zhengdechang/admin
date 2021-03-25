<template>
    <div class="admin_user_edit">
        <h1>{{TypeName[type]}}收藏编辑</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="用户名">
                <el-input v-model="model.user_id.username"></el-input>
            </el-form-item>
            <el-form-item label="评论id">
                <el-input  v-model="model.tid"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "LikedEdit",
        data(){
            return {
                model:{},
                type:'',
                TypeName:{
                    'song':"歌曲",
                    'album':'歌单',
                    'artist':'歌手',
                    'collection':'专辑',
                },
                id:'',
            }
        },
        methods:{
           async save(){
               if(this.type == 'song'){
                   await this.$http.put(`/liked/song/${this.id}`,this.model)
                   this.$router.push('/liked/song/list')
               }
               else if(this.type == 'album'){
                   await this.$http.put(`/liked/album/${this.id}`,this.model)
                   this.$router.push('/liked/album/list')
               }
               else if(this.type == 'artist'){
                   await this.$http.put(`/liked/artist/${this.id}`,this.model)
                   this.$router.push('/liked/artist/list')
               }
               else if(this.type == 'collection'){
                   await this.$http.put(`/liked/collection/${this.id}`,this.model)
                   this.$router.push('/liked/collection/list')
               }

                this.$message({
                   type:'success',
                   message:'保存成功'
               })

            },
            async fetch(){
                if(this.type == 'song'){
                    const res = await this.$http.get(`/liked/single/song/${this.id}`)
                    this.model = res.data
                }
                else if(this.type == 'album'){
                    this.model = {}
                    const res = await this.$http.get(`/liked/single/album/${this.id}`)
                    this.model = res.data
                }
                else if(this.type == 'artist'){
                    this.model = {}
                    const res = await this.$http.get(`/liked/single/artist/${this.id}`)
                    this.model = res.data
                }
                else if(this.type == 'collection'){
                    this.model = {}
                    const res = await this.$http.get(`/liked/single/collection/${this.id}`)
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
