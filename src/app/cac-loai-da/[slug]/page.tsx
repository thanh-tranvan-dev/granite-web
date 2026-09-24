import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { stones } from "@/data/content";
import { Photo, CTA } from "@/components/Blocks";
import Link from "next/link";
export function generateStaticParams() {
  return stones.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = stones.find((i) => i.slug === slug);
  return { title: x?.title ?? "Vật liệu", description: x?.desc };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = stones.find((x) => x.slug === slug);
  if (!item) notFound();
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Trang chủ</Link> / <Link href="/cac-loai-da">Các loại đá</Link> /{" "}
            {item.title}
          </div>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      </header>
      <section className="detail wrap">
        <div className="detail-grid">
          <Photo src={item.image} alt={`Ảnh minh họa ${item.title}`} priority />
          <div className="detail-copy">
            <span className="eyebrow">Chọn vật liệu</span>
            <h2>Đối chiếu mẫu đá với vị trí sử dụng.</h2>
            <p>
              Màu và vân trên ảnh có thể khác mẫu thực tế. Nên xem mẫu trực tiếp, hỏi cách vệ sinh
              và bảo dưỡng, đồng thời xác nhận độ dày và hoàn thiện cạnh trong báo giá.
            </p>
            <Link className="button button-light" href="/bao-gia">
              Hỏi về vật liệu ↗
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
