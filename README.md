# Discord Clone - Frontend

Ứng dụng chat giống Discord với nhiều tính năng, được xây dựng bằng các công nghệ web hiện đại.


## ✨ Tính năng


## 🛠 Công nghệ sử dụng

| Danh mục       | Công nghệ                          |
|----------------|------------------------------------|
| Frontend       | React 18, TypeScript               |
| Công cụ build  | Vite                               |
| Giao diện      | Tailwind CSS, ShadCN UI            |
| Quản lý state  | React Context, Zustand             |
| API Client     | Axios                              |


# 📂 Cấu trúc dự án
src/
├── @types/               # Lưu trữ định nghĩa kiểu dữ liệu trả về từ API
│   └── api.ts            # Định nghĩa kiểu dữ liệu trả về từ API
│
├── assets/               # Lưu trữ ảnh, icon, font,...
│
├── components/           # Chứa các thành phần UI để tái sử dụng
│   ├── ui/               # Lưu trữ các thư viện của Shadcn/ui
│   ├── common/           # Các thành phần UI chung
│        └── home/         # Component của trang Home
│
├── constants/            # Lưu trữ các hằng số
│   ├── path.ts           # Định nghĩa các API URL
│
├── context/              # Lưu trữ các context để quản lý state
│
├── hooks/                # Custom hooks để tái sử dụng logic gọi API
│   └── useAuth.ts        # Auth hook
│
├── lib/                  # Utilities (không cần quan tâm)
│   └── utils.ts          # Helper functions
│
├── pages/                # Các trang web
│   └── Home.tsx          # Trang Home ví dụ
│
├── services/i18n/        # Dịch đa ngôn ngữ với i18n
│   ├── vi.json           # Dịch tiếng Việt
│   └── en.json           # Dịch tiếng Anh
│
├── utils/                # Các file tiện ích
│   └── helper.ts         # Các hàm tiện ích
│
├── App.tsx               # Quy định và setup router với react-router-dom
│
├── main.tsx              # File chính khi chạy biên dịch (không cần quan tâm)
│
└── index.css             # Quy định CSS toàn bộ web
    


## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn



### Yêu cầu

- Node.js (khuyến nghị v18+)
- npm hoặc yarn

### Cài đặt

1. Clone repository
2. Cài đặt dependencies:
```bash
npm install
```
3. Khởi chạy server phát triển:
```bash
npm run dev
```
## Scripts có sẵn
- dev : Khởi chạy server phát triển
- build : Build cho production
- preview : Xem trước bản production
- lint : Chạy ESLint
- format : Định dạng code với Prettier

## ⚙ Cấu hình
- vite.config.ts - Cấu hình Vite
- tailwind.config.js - Cấu hình Tailwind CSS
- tsconfig.json - Cấu hình TypeScript
- components.json - Cấu hình ShadCN UI


## Đóng góp
Vui lòng tuân thủ chuẩn code của dự án và gửi pull request tới nhánh develop.

README này cung cấp:

1. Giải thích cấu trúc dự án
2. Thông tin công nghệ
3. Hướng dẫn cài đặt
4. Lệnh phát triển
5. Hướng dẫn đóng góp

