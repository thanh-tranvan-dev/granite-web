import type { Metadata } from "next";
import { Cards } from "@/components/Blocks";
import { stones } from "@/data/content";
export const metadata: Metadata = {
  title: "Các loại đá",
  description: "Tìm hiểu granite, marble, quartz và các loại đá dùng trong hạng mục nhà ở.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Vật liệu</span>
          <h1>Các loại đá thường dùng</h1>
          <p>
            Đặc điểm vật liệu chỉ là điểm bắt đầu. Mẫu thực tế, vị trí lắp và cách sử dụng đều cần
            được cân nhắc.
          </p>
        </div>
      </header>
      <section className="section wrap">
        <Cards items={stones} />
      </section>
    </>
  );
}
