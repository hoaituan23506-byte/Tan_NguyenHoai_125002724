let diem = Number(prompt("Nhập điểm số (0 - 10):"));
let xepLoai;

if (diem > 8) {
  xepLoai = "Giỏi";
} else if (diem > 6.5) {
  xepLoai = "Khá";
} else if (diem >= 5) {
  xepLoai = "Trung bình";
} else {
  xepLoai = "Yếu";
}

alert("Điểm " + diem + ": xếp loại " + xepLoai);