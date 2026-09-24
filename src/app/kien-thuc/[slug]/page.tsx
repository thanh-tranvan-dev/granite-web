import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/data/content";
import Link from "next/link";
export function generateStaticParams() {
  return articles.map((x) => ({ slug: x.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = articles.find((i) => i.slug === slug);
  return { title: x?.title ?? "Kiến thức", description: x?.desc };
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = articles.find((x) => x.slug === slug);
  if (!item) notFound();
  return (
    <>
      <header className="page-title">
        <div className="wrap">
          <div className="breadcrumbs">
            <Link href="/">Trang chủ</Link> / <Link href="/kien-thuc">Kiến thức</Link>
          </div>
          <h1>{item.title}</h1>
          <p>{item.desc}</p>
        </div>
      </header>
      <article className="section wrap">
        <div style={{ maxWidth: 760 }}>
          <span className="eyebrow">Bài viết tham khảo</span>
          <p style={{ fontSize: 18, lineHeight: 2, whiteSpace: "pre-line" }}>{item.body}</p>
          <p className="notice">
            Nội dung mẫu, cần kiểm chứng và biên tập lại trước khi phát hành.
          </p>
          <Link className="text-link" href="/kien-thuc">
            ← Tất cả bài viết
          </Link>
        </div>
      </article>
    </>
  );
}
