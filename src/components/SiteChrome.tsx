"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/config/site";

const nav = [
  ["Trang chủ", "/"],
  ["Dịch vụ", "/dich-vu"],
  ["Công trình", "/cong-trinh"],
  ["Các loại đá", "/cac-loai-da"],
  ["Báo giá", "/bao-gia"],
  ["Kiến thức", "/kien-thuc"],
  ["Liên hệ", "/lien-he"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap head-inner">
        <Link href="/" className="brand">
          <Image
            className="brand-logo"
            src="/images/thao-truong-logo-03.png"
            alt="Logo Đá Hoa Cương Thao Trường"
            width={475}
            height={425}
            priority
          />
          <span>
            {site.businessName}
            <small>GIA CÔNG · THI CÔNG ĐÁ</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav
          id="primary-navigation"
          aria-label="Điều hướng chính"
          className={open ? "nav nav-open" : "nav"}
        >
          {nav.map(([name, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {name}
            </Link>
          ))}
        </nav>
        <a className="header-call" href={`tel:${site.phone}`}>
          Gọi tư vấn
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <Image
              className="brand-logo"
              src="/images/thao-truong-logo-03.png"
              alt="Logo Đá Hoa Cương Thao Trường"
              width={475}
              height={425}
            />
            <span>
              {site.businessName}
              <small>GIA CÔNG · THI CÔNG ĐÁ</small>
            </span>
          </Link>
          <p>{site.description}</p>
        </div>
        <div>
          <h3>Liên hệ xưởng</h3>
          <p>{site.address}</p>
          <p>Khu vực: {site.serviceAreas.join(", ")}</p>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
        </div>
        <div>
          <h3>Khám phá</h3>
          <Link href="/gioi-thieu">Giới thiệu</Link>
          <Link href="/dich-vu">Dịch vụ</Link>
          <Link href="/cong-trinh">Công trình tham khảo</Link>
          <Link href="/bao-gia">Yêu cầu báo giá</Link>
        </div>
      </div>
      <div className="wrap copyright">
        © {new Date().getFullYear()} {site.shortName}. Thông tin xưởng sẽ được cập nhật trước khi ra
        mắt.
      </div>
    </footer>
  );
}
export function ContactBar() {
  return (
    <div className="contact-bar">
      <a href={`tel:${site.phone}`}>Gọi điện</a>
      <a href={site.zalo} target="_blank" rel="noreferrer">
        Nhắn Zalo
      </a>
      <Link href="/bao-gia">Nhận báo giá</Link>
    </div>
  );
}
