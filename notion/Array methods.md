## ARRAY METHODS
### Giới thiệu
Trong JavaScript, **Array methods** (phương thức mảng) là những hàm tích hợp sẵn giúp bạn làm việc với mảng dễ dàng và hiệu quả hơn. Để dễ hiểu thì trong chương này, tôi chia thành các nhóm:

### Thêm/Xóa mục
`arr.push(...items)` - thêm các mục vào cuối,
`arr.pop()` - trích xuất một mục từ cuối,
`arr.shift()` - trích xuất một mục từ đầu,
`arr.unshift(..items)` - thêm các mục vào phần đầu.

### Cắt/Chèn/Thay thế mục
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

