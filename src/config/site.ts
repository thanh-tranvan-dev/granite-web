export const site = {
  businessName: "Đá Hoa Cương Thao Trường",
  shortName: "Thao Trường",
  description:
    "Tư vấn, gia công và thi công đá granite, marble, quartz cho nhà ở và công trình dân dụng.",
  phone: "0358853439",
  zalo: "https://zalo.me/0358853439",
  facebook: "https://facebook.com/",
  email: "[EMAIL LIÊN HỆ]",
  address: "Sơn Hạ, Quảng Ngãi",
  serviceAreas: ["Tư Nghĩa ", "Sơn Hạ", "Sơn Tịnh", "Nghĩa Hành"],
  domain: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  googleMapsUrl: "https://maps.google.com/",
} as const;
