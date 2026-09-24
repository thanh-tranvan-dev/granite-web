import type { Metadata } from "next";
import { site } from "@/config/site";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Liên hệ xưởng",
  description: "Thông tin liên hệ xưởng gia công và thi công đá.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Liên hệ</span>
          <h1>Trao đổi với xưởng</h1>
          <p>Cho xưởng biết hạng mục, kích thước dự kiến và khu vực thi công.</p>
        </div>
      </header>
      <section className="section wrap">
        <div className="form-layout">
          <div>
            <h2>Thông tin xưởng</h2>
            <p>{site.businessName}</p>
            <p>{site.address}</p>
            <p>Khu vực: {site.serviceAreas.join(", ")}</p>
            <p>Email: {site.email}</p>
          </div>
          <div>
            <p>
              <a className="button button-light" href={`tel:${site.phone}`}>
                Gọi {site.phone}
              </a>
            </p>
            <p>
              <a className="button button-light" href={site.zalo}>
                Chat Zalo ↗
              </a>
            </p>
            <p>
              <a className="text-link" href={site.googleMapsUrl}>
                Mở bản đồ ↗
              </a>
            </p>
            <Link className="text-link" href="/bao-gia">
              Gửi yêu cầu báo giá ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
