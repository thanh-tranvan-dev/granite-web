import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { photos, services, projects, stones, articles } from "@/data/content";

export function SectionTitle({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-title">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
export function Photo({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="photo">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
      />
    </div>
  );
}
export function Cards({
  items,
}: {
  items: { slug: string; title: string; desc: string; image: string }[];
}) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <Link
          className="image-card"
          href={`/${services.some((x) => x.slug === item.slug) ? "dich-vu" : stones.some((x) => x.slug === item.slug) ? "cac-loai-da" : "cong-trinh"}/${item.slug}`}
          key={item.slug}
        >
          <Photo src={item.image} alt={item.title} priority={item.slug === "cau-thang-da"} />
          <div className="card-copy">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="text-link">Tìm hiểu thêm ↗</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function ProjectCards({ prioritizeStairs = false }: { prioritizeStairs?: boolean }) {
  return (
    <div className="card-grid">
      {projects.map((item) => (
        <Link className="image-card" href={`/cong-trinh/${item.slug}`} key={item.slug}>
          <Photo
            src={item.image}
            alt={`Ảnh minh họa ${item.title}`}
            priority={prioritizeStairs && item.slug === "cau-thang-da-tu-nhien"}
          />
          <div className="card-copy">
            <span className="tag">Ảnh tham khảo</span>
            <h3>{item.title}</h3>
            <p>
              {item.service} · {item.stone} · {item.location}
            </p>
            <span className="text-link">Xem thông tin ↗</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function CTA() {
  return (
    <section className="cta wrap">
      <div>
        <span className="eyebrow">Tư vấn theo nhu cầu</span>
        <h2>Gửi kích thước hoặc ảnh hiện trạng để được tư vấn.</h2>
        <p>Trao đổi về vật liệu, cách hoàn thiện và các hạng mục cần làm.</p>
      </div>
      <div className="button-row">
        <Link className="button button-light" href="/bao-gia">
          Nhận báo giá
        </Link>
        <a className="button button-outline" href={site.zalo}>
          Chat Zalo
        </a>
      </div>
    </section>
  );
}
export function ArticleList() {
  return (
    <div className="article-list">
      {articles.map((a, i) => (
        <Link href={`/kien-thuc/${a.slug}`} className="article-row" key={a.slug}>
          <span>0{i + 1}</span>
          <div>
            <h3>{a.title}</h3>
            <p>{a.desc}</p>
          </div>
          <b>↗</b>
        </Link>
      ))}
    </div>
  );
}
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-image">
        <Image
          src={photos.kitchen}
          alt="Không gian bếp hiện đại với bề mặt đá"
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <span className="eyebrow">
          Xưởng gia công và thi công đá · {site.serviceAreas.join(" & ")}
        </span>
        <h1>
          Thi công đá hoa cương
          <br />
          cho ngôi nhà của bạn.
        </h1>
        <p>
          Bếp đá · Mộ đá · Cầu thang · Mặt tiền · Lavabo
          <br />
          Tư vấn vật liệu, khảo sát và báo giá theo từng hạng mục.
        </p>
        <div className="button-row">
          <Link href="/bao-gia" className="button button-light">
            Nhận báo giá <span>↗</span>
          </Link>
          <a href={site.zalo} className="button button-outline">
            Chat Zalo
          </a>
          <a className="hero-phone" href={`tel:${site.phone}`}>
            hoặc gọi {site.phone}
          </a>
        </div>
      </div>
      <div className="hero-caption">Hình ảnh minh họa · Unsplash</div>
    </section>
  );
}
