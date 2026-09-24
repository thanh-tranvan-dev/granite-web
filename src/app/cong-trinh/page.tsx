import type { Metadata } from "next";
import { ProjectCards, SectionTitle } from "@/components/Blocks";
export const metadata: Metadata = {
  title: "Công trình tham khảo",
  description:
    "Danh mục hạng mục đá tham khảo. Ảnh mẫu cần được thay bằng ảnh công trình thực tế của xưởng.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Danh mục tham khảo</span>
          <h1>Công trình thực tế</h1>
          <p>
            Các thẻ dưới đây là mẫu bố cục với ảnh minh họa, không đại diện cho công trình xưởng đã
            thi công. Sẽ cập nhật ảnh thực tế trước khi ra mắt.
          </p>
        </div>
      </header>
      <section className="section wrap">
        <SectionTitle eyebrow="Hạng mục phổ biến" title="Xem theo loại công việc" />
        <ProjectCards prioritizeStairs />
      </section>
    </>
  );
}
