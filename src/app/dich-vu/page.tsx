import type { Metadata } from "next";
import { Cards, CTA } from "@/components/Blocks";
import { services } from "@/data/content";
export const metadata: Metadata = {
  title: "Dịch vụ thi công đá",
  description:
    "Các dịch vụ gia công và thi công đá bếp, cầu thang, mặt tiền, lavabo tại Quảng Ngãi.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Dịch vụ</span>
          <h1>Gia công và thi công đá</h1>
          <p>
            Các hạng mục cho nhà ở và công trình dân dụng. Trao đổi hiện trạng để được tư vấn phương
            án phù hợp.
          </p>
        </div>
      </header>
      <section className="section wrap">
        <Cards items={services} />
      </section>
      <CTA />
    </>
  );
}
