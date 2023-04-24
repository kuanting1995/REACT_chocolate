const data = [
  {
    id: '1',
    picture: 'https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg',
    stock: 5,
    name: '焦糖杏仁方形牛奶巧克力',
    price: 90,
    tags: '牛奶巧克力',
  },
  {
    id: '2',
    picture: 'https://www.seescandies.com.tw/upload/20210903134110jw6wg1.jpeg',
    stock: 5,
    name: '核桃焦糖黑巧克力',
    price: 250,
    tags: '黑巧克力',
  },
  {
    id: '3',
    picture: 'https://www.seescandies.com.tw/upload/202109031310239hml51.jpg',
    stock: 10,
    name: '摩卡椰子白巧克力',
    price: 350,
    tags: '白巧克力',
  },
  {
    id: '4',
    picture: 'https://www.seescandies.com.tw/upload/20210831152727dmxr01.png',
    stock: 10,
    name: '糖蜜脆片牛奶巧克力',
    price: 150,
    tags: '牛奶巧克力',
  },
  {
    id: '5',
    picture: 'https://www.seescandies.com.tw/upload/202108311510202a90f1.jpg',
    stock: 6,
    name: '海鹽焦糖黑巧克力',
    price: 550,
    tags: '黑巧克力',
  },
  {
    id: '6',
    picture: 'https://www.seescandies.com.tw/upload/20210903131137gyjn61.jpg',
    stock: 6,
    name: '太妃腰果白巧克力',
    price: 150,
    tags: '白巧克力',
  },
  {
    id: '7',
    picture: 'https://www.seescandies.com.tw/upload/20210609131647dky5c1.jpeg',
    stock: 6,
    name: '杏仁太妃牛奶巧克力',
    price: 199,
    tags: '牛奶巧克力',
  },
  {
    id: '8',
    picture: 'https://www.seescandies.com.tw/upload/20210630183146rci1f1.png',
    stock: 1,
    name: '咖啡歐蕾黑巧克力',
    price: 550,
    tags: '黑巧克力',
  },
  {
    id: '1',
    picture: 'https://www.seescandies.com.tw/upload/20210630183146rci1f1.png',
    stock: 5,
    name: '咖啡歐蕾黑巧克力',
    price: 90,
    tags: '黑巧克力',
  },
  {
    id: '2',
    picture: 'https://www.seescandies.com.tw/upload/20210609131647dky5c1.jpeg',
    stock: 5,
    name: '杏仁太妃牛奶巧克力',
    price: 350,
    tags: '牛奶巧克力',
  },
  {
    id: '3',
    picture: 'https://www.seescandies.com.tw/upload/20210903131137gyjn61.jpg',
    stock: 10,
    name: '太妃腰果白巧克力',
    price: 90,
    tags: '白巧克力',
  },
  {
    id: '4',
    picture: 'https://www.seescandies.com.tw/upload/202108311510202a90f1.jpg',
    stock: 10,
    name: '海鹽焦糖黑巧克力',
    price: 150,
    tags: '黑巧克力',
  },
  {
    id: '5',
    picture: 'https://www.seescandies.com.tw/upload/20210831152727dmxr01.png',
    stock: 6,
    name: '糖蜜脆片牛奶巧克力',
    price: 550,
    tags: '牛奶巧克力',
  },
  {
    id: '6',
    picture: 'https://www.seescandies.com.tw/upload/202109031310239hml51.jpg',
    stock: 6,
    name: '摩卡椰子白巧克力',
    price: 350,
    tags: '白巧克力',
  },
  {
    id: '7',
    picture: 'https://www.seescandies.com.tw/upload/20210903134110jw6wg1.jpeg',
    stock: 6,
    name: '核桃焦糖黑巧克力',
    price: 199,
    tags: '黑巧克力',
  },
  {
    id: '8',
    picture: 'https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg',
    stock: 1,
    name: '焦糖杏仁方形牛奶巧克力',
    price: 250,
    tags: '牛奶巧克力',
  },
  {
    id: '9',
    picture: 'https://www.seescandies.com.tw/upload/20210630183146rci1f1.png',
    stock: 5,
    name: '咖啡歐蕾黑巧克力',
    price: 90,
    tags: '黑巧克力',
  },
  {
    id: '10',
    picture: 'https://www.seescandies.com.tw/upload/20210609131647dky5c1.jpeg',
    stock: 5,
    name: '杏仁太妃牛奶巧克力',
    price: 350,
    tags: '牛奶巧克力',
  },
  {
    id: '11',
    picture: 'https://www.seescandies.com.tw/upload/20210903131137gyjn61.jpg',
    stock: 10,
    name: '太妃腰果白巧克力',
    price: 90,
    tags: '白巧克力',
  },
  {
    id: '12',
    picture: 'https://www.seescandies.com.tw/upload/202108311510202a90f1.jpg',
    stock: 10,
    name: '海鹽焦糖黑巧克力',
    price: 250,
    tags: '黑巧克力',
  },
  {
    id: '13',
    picture: 'https://www.seescandies.com.tw/upload/20210831152727dmxr01.png',
    stock: 6,
    name: '糖蜜脆片牛奶巧克力',
    price: 550,
    tags: '牛奶巧克力',
  },
  {
    id: '14',
    picture: 'https://www.seescandies.com.tw/upload/202109031310239hml51.jpg',
    stock: 6,
    name: '摩卡椰子白巧克力',
    price: 550,
    tags: '白巧克力',
  },
  {
    id: '15',
    picture: 'https://www.seescandies.com.tw/upload/20210903134110jw6wg1.jpeg',
    stock: 6,
    name: '核桃焦糖黑巧克力',
    price: 250,
    tags: '黑巧克力',
  },
  {
    id: '16',
    picture: 'https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg',
    stock: 1,
    name: '焦糖杏仁方形牛奶巧克力',
    price: 350,
    tags: '牛奶巧克力',
  },
]

export { data }
