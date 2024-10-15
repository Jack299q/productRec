<template>
    <div class="header">
      <div class="logo">农产品推荐</div>
      <div class="search-bar">
        <el-input placeholder="搜索你想要的农产品" v-model="search" />
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="categories">
        <span v-for="category in categories" :key="category" class="category">
          {{ category }}
        </span>
      </div>
    </div>
    <div class="hot-category">
      <el-row gutter="20">
        <el-col v-for="item in products" :key="item.id" :span="6">
          <el-card :body-style="{ padding: '10px' }">
            <img :src="item.image" class="product-image" alt="product image">
            <div class="product-info">
              <h3>{{ item.name }}</h3>
              <p>价格: {{ item.price }}元</p>
              <p>{{ item.description }}</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      categories: ['猜你喜欢','新鲜水果', '有机蔬菜', '优质米粮', '干货零食', '特产美食'],
      products: [
        { id: 1, name: '新鲜苹果', price: 3.50, image: require('../views/image/apple.jpg'), description: '营养丰富，口感脆甜' },
        { id: 2, name: '有机胡萝卜', price: 2.80, image: require('../views/image/apple.jpg'), description: '自然生长，健康美味' },
        { id: 3, name: '优质大米', price: 25.00, image: require('../views/image/apple.jpg'), description: '颗粒饱满，口感香糯' },
        { id: 4, name: '农家干果', price: 15.00, image: require('../views/image/apple.jpg'), description: '精选干果，健康零食' },
      ]
    };
  },
}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: #f3f4f6;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.logo {
    font-size: 28px;
    font-weight: bold;
    color: #34c759;
    transition: transform 0.3s;
}

.logo:hover {
    transform: scale(1.1);
}

.search-bar .el-input {
    width: 400px;
    margin-right: 15px;
}

.categories {
    display: flex;
    gap: 15px;
}

.category {
    cursor: pointer;
    font-size: 16px;
    color: #555;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #fff;
    transition: all 0.3s;
}

.category:hover {
    color: #fff;
    background-color: #34c759;
}

.hot-category {
    padding: 40px;
    background-color: #fafafa;
}

.product-image {
    width: 50%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s;
}

.el-card:hover .product-image {
    transform: scale(1.05);
}

.product-info {
    text-align: center;
    font-size: 16px;
    color: #333;
    margin-top: 10px;
}

</style>
