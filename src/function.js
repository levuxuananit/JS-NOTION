// 1. Function (Cú pháp hàm)
// function f(a, b) {
//   const sum = a + b;
//   return sum;
// }

// 2. Anonymous Function (Hàm ẩn)
// var f = function (a, b) {
//   const sub = a - b;
//   return sub;
// };

// 3. Immediately Invoked Function Expression (IIFE) (Hàm thực thi ngay lập tức)
// const result = (function(a,b){
//     const mul = a * b;
//     return mul;
// })(3,4);

// 4. Functions Within Functions (Hàm trong hàm)
// function createFucntion(){
//     function f(a,b){
//         const div = a/b;
//         return div;
//     }
//     return f;
// }

// 5. Closure
// Một chủ đề quan trọng trong JavaScript là khái niệm closure .
// Khi một hàm được tạo, nó có quyền truy cập vào tham chiếu đến tất cả các biến được khai báo xung quanh nó,
// còn được gọi là môi trường từ vựng của nó .
// Sự kết hợp của hàm và môi trường của nó được gọi là closure .
// Đây là một tính năng mạnh mẽ và thường được sử dụng của ngôn ngữ.
// function createAdder(a) {
//   function f(b) {
//       const sum = a + b;
//       return sum;
//   }
//   return f;
// }
// const x = createAdder(3);
// console.log(x(4)); // 7

// 6. Cú pháp mũi tên
// const f = (a, b) => {
//   const sum = a + b;
//   return sum;
// };
// console.log(f(3, 4)); // 7

// 7. Bỏ qua Trả về
const f = (a, b) => a + b;
console.log(f(3, 4)); // 7