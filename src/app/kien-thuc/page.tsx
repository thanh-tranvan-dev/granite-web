import type { Metadata } from "next";
import { ArticleList } from "@/components/Blocks";
export const metadata: Metadata = {
  title: "Kiến thức về đá",
  description: "Bài viết tham khảo cách chọn vật liệu và thi công đá cho nhà ở.",
};
export default function Page() {
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <span className="eyebrow">Kiến thức</span>
          <h1>Thông tin trước khi chọn đá</h1>
          <p>
            Các bài viết mẫu để giúp gia chủ chuẩn bị câu hỏi khi chọn vật liệu và đơn vị thi công.
          </p>
        </div>
      </header>
      <section className="section wrap">
        <ArticleList />
        <p className="notice">
          Nội dung tham khảo mẫu; cần được rà soát và mở rộng theo kinh nghiệm thực tế của xưởng.
        </p>
      </section>
    </>
  );
}
