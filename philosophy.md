Chúng ta cần tạo ra một kiến trúc dễ dàng tích hợp công nghệ mới, có khả năng tái sử dụng cao và quan trọng là dễ hiểu dễ đào tạo và truyền đạt cho thành viên trong nhóm.
MVC là mô hình chia vòng đời request ra các phần để quản lý. Ngoài ra còn có kiến trúc 3 lớp, đa lớp.
Giữa các lớp cần giao tiếp với nhau và tồn lại một khái niệm là DTO (Data transfer object) cũng tương tự như HTTP API, API khai báo lớp mặt của đối tượng của còn DTO cũng cấp định nghĩa các thông điệp có thể giao tiếp với nhau.
Dựa vào đó ta định nghĩa và chia dự án thành các phần sau:

sairtable:
