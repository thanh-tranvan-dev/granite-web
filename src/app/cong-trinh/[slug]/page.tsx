import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/content";
import { Photo, CTA } from "@/components/Blocks";
import Link from "next/link";
export function generateStaticParams() {
  return projects.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = projects.find((i) => i.slug === slug);
  return { title: x?.title ?? "Hạng mục tham khảo", description: x?.desc };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = projects.find((x) => x.slug === slug);
  if (!item) notFound();
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Trang chủ</Link> / <Link href="/cong-trinh">Danh mục tham khảo</Link>
          </div>
          <h1>{item.title}</h1>
          <p>
            Ảnh minh họa tham khảo · {item.service} · {item.stone}
          </p>
        </div>
      </header>
      <section className="detail wrap">
        <div className="detail-grid">
          <Photo src={item.image} alt={`Ảnh minh họa ${item.title}`} priority />
          <div className="detail-copy">
            <span className="eyebrow">Thông tin tham khảo</span>
            <h2>{item.service}</h2>
            <p>
              {item.desc} Đây chưa phải thông tin về công trình do xưởng thực hiện. Danh mục sẽ được
              cập nhật bằng hình ảnh và mô tả thực tế.
            </p>
            <p>
              Vật liệu: {item.stone}
              <br />
              Khu vực tham khảo: {item.location}
            </p>
            <Link className="button button-light" href="/bao-gia">
              Trao đổi hạng mục ↗
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
