<template>
    <div class="container">
      <header class="header">
      </header>
      <div class="content">
        <div class="column" v-for="(block, index) in blocks" :key="index" :class="{ 'fade-in': showAnimation }">
          <h3>{{ block.title }}</h3>
          <ul>
            <li v-for="(item, idx) in block.items" :key="idx" class="list-item">
              <span class="list-icon">•</span>{{ item }}
            </li>
          </ul>
          <router-link v-if="block.title === '板块一'" to="/HotCategory" class="button">前往</router-link>
          <router-link v-if="block.title === '板块二'" to="/HotPoint" class="button">前往</router-link>
          <router-link v-if="block.title === '板块三'" to="/GoodList" class="button">前往</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blocks: [
          { title: '板块一', items: ['当季热门类目', '农产品供需走势', '农产品价格走势'] },
          { title: '板块二', items: ['热门供应','热门资讯'] },
          { title: '板块三', items: ['采购大厅','供应大厅'] },
        ],
        showAnimation: false,
      };
    },
    mounted() {
      setTimeout(() => {
        this.showAnimation = true;
      }, 200);
    },
  };
  </script>
  
  <style scoped>
  .container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
  
  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../views/image/HomeBackgroud.jpg');
    background-size: cover;
    background-position: center;
    filter: blur(5px);
    z-index: -1;
  }
  
  .header {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
    font-size: 2rem;
    color: white;
  }
  
  .content {
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    position: relative;
    z-index: 1;
    filter: none;
    height: calc(100vh - 100px);
    padding-top: 60px;
  }
  
  .column {
    background-color: #5b8c3a;
    color: white;
    padding: 40px;
    width: 280px;
    height: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }
  
  .column.fade-in {
    opacity: 1;
  }
  
  .list-item {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin: 10px 0;
  }
  
  .list-icon {
    margin-right: 8px;
    font-size: 1.5rem;
    color: #ffffff;
  }
  
  .button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: white;
    color: #5b8c3a;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    align-self: center;
  }
  
  .button:hover {
    background-color: #f0f0f0;
  }
  </style>
  