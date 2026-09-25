"use client";
import { useRef, useState } from "react";
import Script from "next/script";
import { apiUrl } from "@/lib/api";

export default function QuoteForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const widgetContainer = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function submitQuote(formData: FormData) {
    if (!siteKey) {
      setStatus("error");
      setStatusMessage("Biểu mẫu chưa được cấu hình xác minh. Vui lòng liên hệ qua điện thoại/Zalo.");
      return;
    }
    if (!turnstileToken) {
      setStatus("error");
      setStatusMessage("Vui lòng hoàn tất xác minh trước khi gửi.");
      return;
    }
    setStatus("sending");
    setStatusMessage("");

    const service = String(formData.get("service") || "");
    const payload = {
      name: String(formData.get("name") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service_slug: service || null,
      message: String(formData.get("message") || "").trim() || null,
      area: String(formData.get("area") || "").trim() || null,
      stone_type: String(formData.get("stone_type") || "").trim() || null,
      expected_size: String(formData.get("expected_size") || "").trim() || null,
      turnstile_token: turnstileToken,
    };

    try {
      const response = await fetch(apiUrl("api/v1/leads"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = (await response.json().catch(() => null)) as
          | { detail?: string | { msg?: string }[] }
          | null;
        const detail = Array.isArray(error?.detail)
          ? error.detail.map((item) => item.msg).filter(Boolean).join(" ")
          : error?.detail;
        throw new Error(typeof detail === "string" ? detail : "Không gửi được yêu cầu. Vui lòng thử lại.");
      }

      setStatus("success");
      setStatusMessage("Đã gửi yêu cầu thành công. Xưởng sẽ liên hệ với bạn sớm.");
      (document.querySelector("#quote-form") as HTMLFormElement | null)?.reset();
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof TypeError
          ? "Không kết nối được máy chủ. Vui lòng kiểm tra API đang chạy rồi thử lại."
          : error instanceof Error
            ? error.message
            : "Đã xảy ra lỗi. Vui lòng thử lại hoặc liên hệ xưởng qua điện thoại/Zalo.",
      );
    } finally {
      setTurnstileToken("");
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }

  return (
    <>
    {siteKey && (
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onError={() => {
          setStatus("error");
          setStatusMessage("Không tải được bước xác minh. Vui lòng tải lại trang và thử lại.");
        }}
        onReady={() => {
          if (!widgetContainer.current || widgetId.current || !window.turnstile) return;
          widgetId.current = window.turnstile.render(widgetContainer.current, {
            sitekey: siteKey,
            callback: setTurnstileToken,
            "expired-callback": () => setTurnstileToken(""),
            "error-callback": () => setTurnstileToken(""),
          });
        }}
      />
    )}
    <form
      id="quote-form"
      className="quote-form"
      onSubmit={async (e) => {
        e.preventDefault();
        await submitQuote(new FormData(e.currentTarget));
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
          <option value="bep-da">Bếp đá</option>
          <option value="cau-thang-da">Cầu thang đá</option>
          <option value="mat-tien-da">Mặt tiền đá</option>
          <option value="lavabo-ban-da">Lavabo / bàn đá</option>
          <option value="thi-cong-theo-yeu-cau">Khác</option>
        </select>
      </label>
      <label>
        Khu vực thi công
        <input name="area" autoComplete="address-level2" placeholder="Ví dụ: Tư Nghĩa, Quảng Ngãi" />
      </label>
      <label>
        Loại đá dự kiến
        <input name="stone_type" placeholder="Ví dụ: granite, marble, quartz" />
      </label>
      <label>
        Kích thước dự kiến
        <input name="expected_size" placeholder="Ví dụ: 3m x 0,6m" />
      </label>
      <label>
        Mô tả nhu cầu
        <textarea name="message" placeholder="Mô tả thêm hạng mục hoặc yêu cầu của bạn..." />
      </label>
      <div ref={widgetContainer} />
      {!siteKey && <p className="notice">Biểu mẫu chưa được cấu hình xác minh. Vui lòng liên hệ qua điện thoại/Zalo.</p>}
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu ↗"}
      </button>
      {statusMessage && (
        <p className="notice" role="status" aria-live="polite">
          {statusMessage}
        </p>
      )}
      <p className="notice">
        Thông tin sẽ được gửi tới xưởng để phản hồi yêu cầu báo giá. Vui lòng chỉ cung cấp thông tin
        cần thiết cho việc tư vấn.
      </p>
      <p className="notice">Thông tin liên hệ được dùng để xử lý báo giá và được rà soát xóa sau 180 ngày. Bạn có thể liên hệ xưởng để yêu cầu xóa sớm hơn.</p>
    </form>
    </>
  );
}
