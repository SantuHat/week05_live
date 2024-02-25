const { defineStore } = Pinia;

const cardStore = defineStore('card', {
  // state 概念同「data」，在此可以使用箭頭函式
  state: () => {
    return {
      number: 0,
    }
  },
  // actions 概念同「methods」
  actions: {
    // 可使用 this 使用 state 的資料內容
    updateNumber(num) {
      this.number = num;
    }
  },
  // getters 概念同「computed」
  getters: {
    // 解構資料來自於 state
    doubleNumber({number}) {
      return number * 2;
    }
  }
});

export default cardStore;