import type { Metadata } from "next";
import { site } from "@/config/site";
import QuoteForm from "@/components/QuoteForm";
export const metadata: Metadata = {
  title: "Yêu cầu báo giá",
  description: "Gửi thông tin hạng mục đá cần thi công để được tư vấn báo giá.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Bắt đầu trao đổi</span>
          <h1>Yêu cầu báo giá</h1>
          <p>Mô tả sơ bộ hạng mục hoặc gửi kích thước để xưởng có thông tin tư vấn ban đầu.</p>
        </div>
      </header>
      <section className="section wrap">
        <div className="form-layout">
          <div>
            <span className="eyebrow">Thông tin liên hệ</span>
            <h2 className="section-title">Liên hệ trực tiếp với xưởng</h2>
            <p>{site.address}</p>
            <p>Khu vực phục vụ: {site.serviceAreas.join(", ")}</p>
            <p>
              <a className="text-link" href={`tel:${site.phone}`}>
                Gọi {site.phone}
              </a>
            </p>
            <p>
              <a className="text-link" href={site.zalo}>
                Nhắn Zalo ↗
              </a>
            </p>
            <p className="notice">
              Để ước tính sát hơn, vui lòng chuẩn bị ảnh hiện trạng, kích thước và địa chỉ công
              trình.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
