import Link from "next/link";
import { Hero, SectionTitle, Cards, ProjectCards, CTA, Photo } from "@/components/Blocks";
import { services, photos } from "@/data/content";
export default function Home() {
  return (
    <>
      <Hero />
      <section className="section wrap">
        <SectionTitle
          eyebrow="Dịch vụ của xưởng"
          title="Gia công cho từng hạng mục"
          body="Tư vấn loại đá và phương án thi công theo vị trí sử dụng, kích thước thực tế và ngân sách."
        />
        <Cards items={services} />
        <div className="more-link">
          <Link className="text-link" href="/dich-vu">
            Xem tất cả dịch vụ ↗
          </Link>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <SectionTitle
            eyebrow="Tham khảo công trình"
            title="Một số hạng mục đá phổ biến"
            body="Ảnh trong danh mục hiện là hình minh họa. Vui lòng thay bằng ảnh công trình thực tế của xưởng trước khi ra mắt."
          />
          <ProjectCards />
        </div>
      </section>
      <section className="section wrap">
        <div className="split">
          <Photo src={photos.stone} alt="Bề mặt vật liệu đá tự nhiên" />
          <div className="split-copy">
            <span className="eyebrow">Làm rõ trước khi thi công</span>
            <h2>Chọn đá phù hợp với cách bạn sử dụng.</h2>
            <p>
              Mỗi vị trí có yêu cầu khác nhau về bề mặt, màu sắc và bảo dưỡng. Xưởng trao đổi mẫu
              đá, kích thước và chi tiết hoàn thiện trước khi gia công.
            </p>
            <ul className="check-list">
              <li>Tư vấn vật liệu theo công năng</li>
              <li>Đo đạc và xác nhận kích thước</li>
              <li>Thống nhất hạng mục trong báo giá</li>
            </ul>
            <div className="stats">
              <div>
                <strong>Khảo sát</strong>theo hiện trạng
              </div>
              <div>
                <strong>Gia công</strong>theo kích thước
              </div>
              <div>
                <strong>Lắp đặt</strong>đúng hạng mục
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper">
        <div className="wrap">
          <SectionTitle eyebrow="Góc tư vấn" title="Tìm hiểu trước khi chọn đá" />
          <Link href="/kien-thuc" className="text-link">
            Đọc bài viết tư vấn ↗
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
