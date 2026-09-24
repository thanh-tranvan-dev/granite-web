"use client";
import { useState } from "react";
export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="quote-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        Họ và tên
        <input name="name" autoComplete="name" required placeholder="Tên của bạn" />
      </label>
      <label>
        Số điện thoại
        <input name="phone" autoComplete="tel" type="tel" required placeholder="09xx xxx xxx" />
      </label>
      <label>
        Hạng mục
        <select name="service" defaultValue="">
          <option value="" disabled>
            Chọn hạng mục cần làm
          </option>
          <option>Bếp đá</option>
          <option>Cầu thang đá</option>
          <option>Mặt tiền đá</option>
          <option>Lavabo / bàn đá</option>
          <option>Khác</option>
        </select>
      </label>
      <label>
        Mô tả nhu cầu
        <textarea name="message" placeholder="Kích thước, loại đá dự kiến, khu vực thi công..." />
      </label>
      <button className="button" type="submit">
        Gửi yêu cầu ↗
      </button>
      {sent && (
        <p className="notice" role="status">
          Đây là biểu mẫu giao diện mẫu và chưa gửi dữ liệu. Vui lòng liên hệ xưởng qua điện thoại
          hoặc Zalo.
        </p>
      )}
      <p className="notice">
        Biểu mẫu hiện chỉ chạy ở trình duyệt, chưa kết nối máy chủ. Không nhập thông tin nhạy cảm.
      </p>
    </form>
  );
}
