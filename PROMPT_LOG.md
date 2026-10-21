# NHẬT KÝ PROMPT ENGINEERING (VIBE CODING LOG)

- **Họ và tên:** Nguyễn Hoài Tấn
- **MSSV:** ✏️ *[SV điền MSSV]*
- **Tên đề tài Website:** TANAS - Website bán phụ kiện điện thoại (ốp lưng, tai nghe, dây sạc, sạc dự phòng)
- **Công cụ AI đã sử dụng:** Claude (Anthropic)

## 1. Yêu cầu ban đầu (System/Initial Prompt)

> Đính kèm file đề thi PDF và gửi: "bạn hãy đọc kỹ những yêu cầu có trong file và làm đúng những yêu cầu đó. tôi đang muốn tạo một wedsite bán phụ kiện điện thoại (ốp lưng, tai nghe, dây sạc, sạc dự phòng,....) hãy tạo wedsite theo yêu cầu có trong file và bám sát những gì file yêu cầu"

## 2. Quá trình tinh chỉnh & Giải quyết sự cố (Iteration Iterations)

### Lần 1: Dựng khung Semantic HTML & CSS Variable

- **Prompt đã dùng:** Prompt ở mục 1, có đính kèm file đề thi PDF.
- **Kết quả AI tạo ra:** Claude làm ra `index.html`, `style.css`, thư mục `assets/img/` và file `PROMPT_LOG.md`. Trang có `<header>` (logo + giỏ hàng), `<nav>`, `<main>` chia 5 `<section>`, mỗi sản phẩm là một `<article>`, và `<footer>` có `<address>`. CSS có khai báo biến trong `:root` (màu, font, khoảng cách...), dùng Grid cho lưới sản phẩm, Flexbox cho header/footer/form. Màu tím và vàng lấy theo logo.
- **Nhận xét & Tinh chỉnh của SV:** Kiểm tra lại thì bản đầu chỉ có 3 thẻ `<div>` (khối chữ ở hero, lưới sản phẩm, khối thương hiệu ở footer), còn lại dùng thẻ ngữ nghĩa nên không phải nhắc AI sửa nhiều. Mỗi `<section>` đều có `<h2>`. Sau này thêm hiệu ứng thì số `<div>` bị tăng lên, chuyện đó ở Lần 5.

### Lần 2: Tích hợp thư viện Animate.css & AOS

- **Prompt đã dùng:** Đề bắt buộc hai thư viện này nên yêu cầu nằm luôn trong prompt ở mục 1.
- **Kết quả AI tạo ra:** Animate.css dùng cho chữ eyebrow, tiêu đề, đoạn mô tả, nút CTA, số liệu và logo ở hero. AOS dùng cho tiêu đề từng khối, thẻ danh mục, thẻ sản phẩm, phần ưu điểm và form. Có thêm đoạn dự phòng để nếu AOS không tải được thì nội dung vẫn hiện. Hiệu ứng `:hover`, `:focus` thì viết tay bằng CSS: nút có `:hover`, `:focus-visible`, `:active`; thẻ có `:hover`, `:focus-within`; ô email có `:hover`, `:focus`.
- **Thách thức gặp phải:** Khi làm màn mở đầu ở Lần 4 thì hiệu ứng Animate.css ở hero chạy luôn lúc màn đang che, người xem không thấy. Ngoài ra Claude không tải được Animate.css/AOS từ CDN trong môi trường của nó nên không xem được hai thư viện chạy thật, chỉ kiểm tra được là nếu thư viện không tải thì trang vẫn hiển thị bình thường.
- **Cách sửa prompt (Debug prompt):** Claude cho hiệu ứng của hero tạm dừng cho tới khi màn mở đầu mở xong thì mới chạy. Còn việc xem hai thư viện chạy thật thì cần mở trang trên trình duyệt có mạng để kiểm tra. Rút kinh nghiệm: lần sau nên ghi luôn trong prompt là "thêm hiệu ứng nhưng đừng làm hỏng Animate.css/AOS đã có, và phải có phương án dự phòng nếu thư viện không tải được".

### Lần 3: Đưa sản phẩm thật từ Thế Giới Di Động vào web

- **Prompt đã dùng:** (gửi kèm file zip dự án và link https://www.thegioididong.com/phu-kien)
  > "bạn hãy đưa một số sản phẩm là phụ kiện điện thoại từ link tôi đã gửi vào trog file giúp tôi nhé"
- **Kết quả AI tạo ra:** Claude thay 16 sản phẩm mẫu bằng 16 sản phẩm thật từ trang đó, chia mỗi nhóm 4 sản phẩm, giữ đúng tên và giá. Ví dụ: ốp lưng TORRAS 935.000₫, tai nghe Sony WH-CH520 890.000₫, củ sạc Ugreen 65W 520.000₫, sạc dự phòng Golf P51 250.000₫.
- **Nhận xét & Tinh chỉnh của SV:** Trang gốc chỉ có 2 ốp lưng và 2 dây cáp, còn lại là miếng dán và củ sạc, nên Claude đổi tên 2 danh mục thành "Ốp lưng & miếng dán" và "Cáp & củ sạc" cho đúng với hàng thật (bộ lọc vẫn chạy bình thường). Trang gốc không lấy được ảnh sản phẩm nên mình vẫn dùng ảnh SVG minh họa có sẵn. Mô tả sản phẩm chỉ viết theo những gì có trong tên sản phẩm, còn mấy nhãn "Bán chạy", "-15%" của dữ liệu mẫu cũ thì bỏ hết vì không có thật.

### Lần 4: Thêm hiệu ứng "wow" khi mở trang

- **Prompt đã dùng:**
  > "vẫn giữ nền tím nhưng làm sao cho ng xem phải có cảm giác wow hoặc bất ngờ khi mở lên hay vô tình nhấn vào link"
- **Kết quả AI tạo ra:** Khi mở trang có màn mở đầu khoảng 2,5 giây: logo xoay trong vòng sáng vàng, chữ TANAS hiện từng chữ, có thanh nạp rồi hai cánh màn tách ra (nhấn chuột là bỏ qua được). Ở hero có bụi sáng bay theo chuột, logo nghiêng 3D theo chuột, 4 icon sản phẩm quay quanh, số liệu đếm từ 0, chữ "điện thoại" ánh vàng. Cả trang có thêm dải chữ chạy, thanh tiến trình khi cuộn, vệt sáng theo con trỏ, ảnh sản phẩm nghiêng khi rê chuột, pháo sáng khi bấm "Thêm vào giỏ" và viền vàng xoay ở khối đăng ký email. Nền tím và các biến CSS vẫn giữ nguyên.
- **Nhận xét & Tinh chỉnh của SV:** Đề có tiêu chí "không lạm dụng gây rối mắt" nên các hiệu ứng theo chuột chỉ chạy trên máy có chuột, và nếu máy bật chế độ giảm chuyển động thì bỏ qua màn mở đầu cùng các hiệu ứng nặng. Claude tự chụp ảnh thử ở khổ máy tính và điện thoại, không bị tràn ngang, không có lỗi JavaScript, và tự chừa thêm khoảng trống phía trên hero ở màn nhỏ vì icon quay quanh bị sát thanh menu.

### Lần 5: Kiểm tra lại phần II của đề và dọn thẻ div

- **Prompt đã dùng:** (gửi kèm file PDF đề thi)
  > "bạn đã đáp ứng đủ những yêu cầu ở phần 2 la mã trong file này chưa"
- **Kết quả AI tạo ra:** Claude đọc lại đề rồi đối chiếu từng ý với code: có đủ `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`; có CSS Variables; có Flexbox/Grid; có Animate.css, AOS và hover/focus viết tay.
- **Nhận xét & Tinh chỉnh của SV:** Lúc kiểm tra thì thấy sau khi thêm hiệu ứng ở Lần 4, số thẻ `<div>` từ 3 tăng lên 10, trái với yêu cầu "không lạm dụng div vô nghĩa" của đề. Claude sửa lại: thanh tiến trình và vệt sáng chuyển sang dùng `body::before` / `body::after`, màn mở đầu dùng `<aside>` và `<figure>`, các vòng tròn và khung logo dùng `<span>`. Giờ còn 3 `<div>`. Sau đó chạy lại ảnh chụp để chắc giao diện không bị đổi.

## 3. Đánh giá cá nhân về quá trình Vibe Coding

- **AI đã giúp bạn tiết kiệm thời gian ở phần nào nhất?** Phần nhập sản phẩm từ trang Thế Giới Di Động: đọc trang, chọn đủ 16 sản phẩm, ghi tên và giá rồi sửa luôn bộ lọc chỉ trong một lần. Phần hiệu ứng mở trang (màn mở đầu, bụi sáng, nghiêng 3D) mình tự viết thì chắc mất rất nhiều thời gian.
- **Bài học rút ra khi đặt câu hỏi (Prompt) cho AI trong thiết kế web?** Nói rõ cái gì phải giữ nguyên (như "vẫn giữ nền tím") thì AI thêm hiệu ứng mà không phá màu có sẵn. Nhưng AI làm theo ý "wow" của mình thì lại làm tăng số thẻ `<div>`, chỉ khi mình hỏi lại "đã đáp ứng phần II chưa" mới phát hiện và sửa được, nên làm xong phải đối chiếu lại với đề. Ngoài ra nên bắt AI chụp ảnh thử cả máy tính lẫn điện thoại, và tự mình mở trang thật để xem hai thư viện Animate.css/AOS vì AI không tải được chúng trong môi trường của nó.
