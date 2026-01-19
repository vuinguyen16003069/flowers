# Dự Án Hoa Nở Đêm

Một dự án web đơn giản tạo ra cảnh hoa nở đẹp mắt với hiệu ứng hoạt hình CSS và JavaScript.

## Mô Tả

Dự án này hiển thị một cảnh đêm với 10 bông hoa nở dần, kèm theo hiệu ứng sao lấp lánh và cỏ mọc. Người dùng có thể tương tác với các nút để khởi động lại hoạt hình hoặc chuyển đổi giữa chế độ ban đêm và ban ngày.

## Cấu Trúc Dự Án

```
flowers/
├── index.html          # File HTML chính
├── src/
│   ├── css/
│   │   └── style.css   # Stylesheet chính
│   └── js/
│       ├── main.js     # Script chính (ES6 module)
│       └── modules/
│           └── ui.js   # Module xử lý giao diện
├── .gitignore          # File bỏ qua Git
├── README.md           # Tài liệu này
└── LICENSE             # Giấy phép MIT
```

## Cách Chạy

1. Mở file `index.html` trong trình duyệt web.
2. Hoặc chạy máy chủ local:
   - Sử dụng Python: `python -m http.server 8000`
   - Sau đó truy cập `http://localhost:8000`

## Tính Năng

- Hoạt hình hoa nở tự động
- Hiệu ứng sao lấp lánh trên nền trời đêm
- Nút khởi động lại hoạt hình
- Chuyển đổi chế độ ban đêm/ban ngày
- Hiệu ứng hover trên hoa

## Công Nghệ Sử Dụng

- HTML5
- CSS3 (với hoạt hình và chuyển tiếp)
- JavaScript ES6 Modules

## Cấu Trúc Module

Dự án sử dụng ES6 Modules để tổ chức code:

- `main.js`: Điểm nhập chính, khởi tạo ứng dụng
- `ui.js`: Xử lý tương tác người dùng (nút restart, toggle mode)

## Cải Tiến Tương Lai

- Thêm âm thanh
- Hiệu ứng tương tác nhiều hơn
- Tối ưu hóa hiệu suất cho thiết bị di động

## Giấy Phép

Dự án này được phân phối dưới giấy phép MIT. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.
