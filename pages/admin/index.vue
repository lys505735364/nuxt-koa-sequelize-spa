<template>
  <div class="contenter">
    <div style="display:flex;">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div id="routerBox">
      <div style="width:200px;heigt:100%;overflow:auto;">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          :filter-node-method="filterNode"
          ref="tree"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
      <div style="width:200px;">
        <input type="button" value="获取树" @click="getTreeData" />
      </div>
    </div>
  </div>
</template>
<script>
import toTreeData from "../../static/utils/toTreeData";
export default {
  name: "OwnerLogin",
  props: [],
  components: {},
  data() {
    return {
      form: {
        name: "",
        region: ""
      },
      data: [],
      filterText: "",
      defaultProps: {
        children: "children",
        label: "name"
      }
    };
  },
  computed: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    onSubmit() {},
    initTreeData(arr) {
      let treeNode = toTreeData(arr, { id: "id", parentId: "ParentId" });
      this.data = treeNode;
    },
    getTreeData() {
      this.$http.get("/web/getTreeNode").then(response => {
        this.initTreeData(response.data);
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.name.indexOf(value) !== -1;
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  created() {
    // this.getTreeData();
  },
  mounted() {}
};
</script>
<style scoped>
#routerBox {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>