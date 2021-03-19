<template>
    <div>
        <h1>分类列表</h1>
        <el-table :data="items">
            <el-table-column prop="_id" label="ID" width="220"></el-table-column>
            <el-table-column prop="username" label="用户名" ></el-table-column>
            <el-table-column fixed="right" label="操作" width="180">
                <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="toEdit(scope.row._id)">编辑</el-button>
                    <el-button type="primary" size="small" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "UserList",
        data(){
            return{
                items:[]
            }
        },
        methods:{
            async fetch(){
                const res = await this.$http.get('/rest/users')
                console.log(res.data);
                this.items = res.data
            },
            toEdit(scope_id){
                this.$router.push(`/users/edit/${scope_id}`);
            },
            async remove(row){
                this.$confirm(`是否确认删除分类"${row.username}"` , '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(async () => {
                        await this.$http.delete(`rest/users/${row._id}`)
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.fetch()
                    })
            },
        },
        created() {
            this.fetch();
        }
    }
</script>

<style scoped>

</style>