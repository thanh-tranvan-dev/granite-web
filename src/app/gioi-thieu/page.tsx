import type { Metadata } from "next";
import { site } from "@/config/site";
import { CTA } from "@/components/Blocks";
export const metadata: Metadata = {
  title: "Giới thiệu xưởng",
  description: "Thông tin về xưởng gia công và thi công đá hoa cương.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Giới thiệu</span>
          <h1>{site.businessName}</h1>
          <p>
            Xưởng gia công và lắp đặt đá cho nhà ở, công trình dân dụng tại{" "}
            {site.serviceAreas.join(" và ")}.
          </p>
        </div>
      </header>
      <section className="section wrap">
        <div className="split-copy" style={{ maxWidth: 760 }}>
          <h2>Tư vấn rõ hạng mục trước khi gia công.</h2>
          <p>
            Xưởng nhận các hạng mục như mặt bếp, cầu thang, mặt tiền, lavabo và bàn đá. Mỗi công
            trình được trao đổi theo vật liệu, vị trí sử dụng, kích thước và hiện trạng thực tế.
          </p>
          <p>
            Thông tin về địa chỉ, hình ảnh đội ngũ và công trình sẽ được bổ sung sau khi xưởng xác
            nhận nội dung chính thức. Ảnh mẫu trên website hiện chỉ dùng để minh họa.
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
