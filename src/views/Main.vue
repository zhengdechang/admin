<template>
    <el-container style="height: 100vh;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu  router :unique-opened="true" :default-active="$route.path" >
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-user"></i>用户管理</template>
                    <el-menu-item-group>
                        <template slot="title">分类</template>
                            <el-menu-item index="/users/create">新建用户</el-menu-item>
                        <el-menu-item index="/users/list">用户列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-connection"></i>评论管理</template>
                    <el-menu-item-group>
                        <template slot="title">分类</template>
                        <el-menu-item index="/comment/song/list">歌曲评论</el-menu-item>
                        <el-menu-item index="/comment/mv/list">MV评论</el-menu-item>
                        <el-menu-item index="/comment/collection/list">专辑评论</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-collection"></i>收藏管理</template>
                    <el-menu-item-group>
                        <template slot="title">分类</template>
                        <el-menu-item index="">歌曲收藏</el-menu-item>
                        <el-menu-item index="">歌单收藏</el-menu-item>
                        <el-menu-item index="">歌手收藏</el-menu-item>
                        <el-menu-item index="">专辑收藏</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
                    <el-menu-item-group>
                        <template slot="title">管理员</template>
                        <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
                        <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>


<style>
</style>

<script>
    export default {

    }
</script>
