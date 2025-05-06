## ARRAY METHODS
### ✅ Giới thiệu
Trong JavaScript, **Array methods** (phương thức mảng) là những hàm tích hợp sẵn giúp bạn làm việc với mảng dễ dàng và hiệu quả hơn. Để dễ hiểu thì trong chương này, tôi chia thành các nhóm:

### ✅ Thêm/Xóa mục
`arr.push(...items)` - thêm các mục vào cuối,
`arr.pop()` - trích xuất một mục từ cuối,
`arr.shift()` - trích xuất một mục từ đầu,
`arr.unshift(..items)` - thêm các mục vào phần đầu.

### ✅ Cắt/Chèn/Thay thế mục
`arr.splice(start,end,..items)` - cắt mục từ vị trí thứ start đến vị trí thứ end. Sau đó, tùy vào số start, số end mà ..items có thể cắt/chèn/thay thế mục.

**Một số cách sử dụng:**
1. Cắt mục
```js
let arr = ["I", "love", "HCMUTE"];
arr.splice(1, 1); // Cắt mục thứ 1 (index = 1)
console.log(arr); // ["I", "HCMUTE"]
```
2. Thay thế mục
```js
let arr = ["I", "love", "HCMUTE"];
arr.splice(1, 2, "like", "UTE", "everyday"); // Xóa mục vị trí 1 đến vị trí 2, thay bằng các mục khác
console.log(arr); // ["I", "like", "UTE", "everyday"]
```
3. Chèn mục 
```js
let arr = ["I", "love", "HCMUTE"];
arr.splice(1, 0, "and", "her"); // Chèn mục các mục khác tại sau vị trí 0
console.log(arr); // "I", "and", "her", "love", "HCMUTE"
```

### ✅ Lặp lại mục
`arr.forEach(function(item, index, array)` cho phép chạy một hàm cho mọi phần tử của mảng.
```js
var arr = ["Bilbo", "Gandalf", "Nazgul"];
arr.forEach((item, index, array) => {
    console.log(`Phần tử ${item} ở ví trí thứ ${index} trong mảng: ${array}`);
});
```

### ✅ Tìm kiếm
`arr.indexOf(item, from)` - tìm kiếm item bắt đầu từ chỉ mục from và trả về chỉ mục nơi tìm thấy, nếu không thì -1 (không tìm được NaN).
`arr.includes(item, from)` - tìm kiếm item bắt đầu từ chỉ mục from, trả về true nếu tìm thấy (tìm được cả NaN).
`arr.find(function(item, index, array))` - tìm kiếm item thỏa điều kiện function. Trả về giá trị tìm thấy đầu tiên trong arr.
```js
var users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

var use = users.find(item => item.id == 2 )
console.log(use.name) // Pete
```

### ✅ Lọc

### ✅ Bản đồ

### ✅ Sắp xếp

### ✅ Tính toán giá trị duy nhất dựa trên mảng


