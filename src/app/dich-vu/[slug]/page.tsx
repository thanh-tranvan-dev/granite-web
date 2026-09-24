import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/content";
import { Photo, CTA } from "@/components/Blocks";
import Link from "next/link";
export function generateStaticParams() {
  return services.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = services.find((i) => i.slug === slug);
  return { title: x?.title ?? "Dịch vụ", description: x?.desc };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = services.find((x) => x.slug === slug);
  if (!item) notFound();
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Trang chủ</Link> / <Link href="/dich-vu">Dịch vụ</Link> / {item.title}
          </div>
          <h1>Thi công {item.title.toLowerCase()}</h1>
          <p>{item.desc}</p>
        </div>
      </header>
      <section className="detail wrap">
        <div className="detail-grid">
          <Photo src={item.image} alt={`Hình minh họa ${item.title}`} priority />
          <div className="detail-copy">
            <span className="eyebrow">Tư vấn theo hiện trạng</span>
            <h2>Một hạng mục hoàn thiện bắt đầu từ đo đạc chính xác.</h2>
            <p>
              Trao đổi vị trí sử dụng, mẫu đá mong muốn và kích thước. Xưởng sẽ tư vấn vật liệu,
              cách gia công và các chi tiết cần thống nhất trước khi lắp đặt.
            </p>
            <ul className="check-list">
              <li>Chọn vật liệu theo công năng và ngân sách</li>
              <li>Xác nhận kích thước, cạnh hoàn thiện và mối nối</li>
              <li>Báo rõ phạm vi thi công</li>
            </ul>
            <Link className="button button-light" href="/bao-gia">
              Yêu cầu báo giá ↗
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
