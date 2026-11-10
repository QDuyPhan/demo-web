// ============================================================
// TOÀN BỘ THÔNG TIN THƯƠNG HIỆU NẰM Ở FILE NÀY.
// Khách: Long Lăng Thiên Cảnh - Công ty TNHH Dịch vụ Cao cấp Thiên Phúc.
// Ảnh thật của khách nằm trong public/sites/demo/.
// Còn chờ khách gửi: số điện thoại, email, nội dung tin tức thật.
// ============================================================

const img = (name: string) => `/sites/demo/${name}`;

export const site = {
  name: "Long Lăng Thiên Cảnh",
  nameHan: "龍陵天境",
  // Đặt đường dẫn logo thật (vd: "/sites/demo/logo.png") để thay logo chữ mặc định.
  logoImage: null as string | null,
  logoMark: "龍陵",
  slogan: "Nhà lưu trữ tro cốt",
  legalName: "Công ty TNHH Dịch vụ Cao cấp Thiên Phúc",
  taxId: "0319773798",
  // Để trống hotline/zalo/email thì web hiện "Đang cập nhật" và ẩn nút gọi/Zalo.
  hotline: "",
  zalo: "",
  email: "",
  // Địa chỉ khu lưu trữ (theo biển cổng). Trụ sở chính của công ty Thiên Phúc: chờ khách gửi.
  address: "Ấp An Thạnh, Xã An Ninh, Tỉnh Tây Ninh",
  mapQuery: "Xã An Ninh, Tây Ninh",
  workingHours: "Đang cập nhật",

  menu: [
    { label: "Trang chủ", href: "#top" },
    { label: "Giới thiệu", href: "#gioi-thieu" },
    { label: "Sản phẩm", href: "#san-pham" },
    { label: "Bảng giá", href: "#bang-gia" },
    { label: "Dịch vụ", href: "#dich-vu" },
    { label: "Tin tức", href: "#tin-tuc" },
    { label: "Liên hệ", href: "#lien-he" },
  ],

  hero: [
    {
      image: img("11-nha-chinh.jpg"),
      title: "Long Lăng Thiên Cảnh",
      subtitle: "Không gian an vị thanh tịnh giữa thiên nhiên Tây Ninh",
    },
    {
      image: img("08-hanh-lang-tu-go.jpg"),
      title: "Trang nghiêm - Chu đáo",
      subtitle: "Dãy tủ lưu trữ tro cốt ngăn nắp, có tượng Phật ở đầu mỗi dãy",
    },
    {
      image: img("12-mo-hinh-tong-the.jpg"),
      title: "Mô hình quy hoạch tổng thể",
      subtitle: "Khuôn viên cây xanh, hồ nước và các khu nhà",
    },
  ],

  about: {
    eyebrow: "Giới thiệu",
    title: "Long Lăng Thiên Cảnh - Nơi gửi trọn tâm hiếu",
    body: [
      "Long Lăng Thiên Cảnh là nhà lưu trữ tro cốt tại Ấp An Thạnh, Xã An Ninh, Tỉnh Tây Ninh, nằm giữa khuôn viên cây xanh rộng, yên tĩnh và thoáng đãng.",
      "Khuôn viên có Điện Vĩnh An, dãy tủ gỗ có tượng Phật và các phòng hộc lưu trữ. Giá công bố gồm khu cũ và khu mới, phí quản lý đóng theo năm, 5 năm hoặc 15 năm.",
    ],
    images: [img("07-tu-go-tuong-phat.jpg"), img("06-dien-vinh-an.jpg")],
    stats: [
      { value: "38tr", label: "Khu cũ, giá từ" },
      { value: "70tr", label: "Khu mới, giá từ" },
      { value: "15 năm", label: "Gói phí quản lý dài nhất" },
    ],
  },

  products: [
    { name: "Dãy tủ gỗ", desc: "Tủ gỗ xếp hàng ngay ngắn, đầu mỗi dãy có tượng Phật.", image: img("07-tu-go-tuong-phat.jpg") },
    { name: "Phòng hộc xanh trắng", desc: "Hộc hoa văn xanh trắng phủ kín tường, đèn chùm, sàn gỗ.", image: img("16-phong-xanh-den-chum.jpg") },
    { name: "Phòng hộc vàng", desc: "Hộc màu vàng chạm hoa văn phủ kín tường, sàn gỗ.", image: img("17-phong-vang.jpg") },
    { name: "Vách hộc vàng", desc: "Mỗi ô hộc có cửa riêng, bên trong đặt hũ tro cốt.", image: img("13-tuong-hoc-vang.jpg") },
  ],

  pricing: {
    eyebrow: "Bảng giá",
    title: "Giá công bố",
    titleHan: "公告價",
    zones: [
      { name: "Khu cũ", nameHan: "舊區", price: "38.000.000 – 48.000.000 VNĐ" },
      { name: "Khu mới", nameHan: "新區", price: "70.000.000 – 150.000.000 VNĐ" },
    ],
    feeTitle: "Phí quản lý 管理費",
    feeHeaders: ["Hình thức đóng", "Vị trí 塔位 (VNĐ)", "Bài vị 牌位 (VNĐ)"],
    fees: [
      ["Theo hàng năm 年繳", "1.500.000", "500.000"],
      ["Theo 5 năm 5年繳", "6.000.000", "2.000.000"],
      ["Theo 15 năm 15年繳", "15.000.000", "5.000.000"],
    ],
    transferTitle: "Phí sang tên 過戶費",
    transfers: [
      { name: "Xóa hủy mộc", nameHan: "塗銷蓋章", price: "1.500.000 VNĐ" },
      { name: "Đổi giấy chứng nhận mới", nameHan: "換發新證", price: "3.000.000 VNĐ" },
    ],
  },

  services: [
    {
      name: "Tổ chức nghi lễ tâm linh",
      desc: "Chuẩn bị chu đáo nghi thức an vị, cầu siêu, giỗ chạp theo phong tục và tâm nguyện gia đình.",
      image: img("04-mieu-loi-vao.jpg"),
    },
    {
      name: "Chăm sóc & bảo trì",
      desc: "Khuôn viên, vườn tượng Phật và khu lưu trữ được giữ gìn sạch đẹp, gia đình yên tâm dù ở xa.",
      image: img("09-vuon-tuong-phat.jpg"),
    },
    {
      name: "Tư vấn chọn vị trí",
      desc: "Tư vấn chọn khu, chọn vị trí và gói phí quản lý phù hợp với nhu cầu và ngân sách của gia đình.",
      image: img("14-phong-xanh-1.jpg"),
    },
    {
      name: "Lưu trữ tro cốt",
      desc: "Quy trình nhận lưu và bàn giao minh bạch, có giấy chứng nhận vị trí rõ ràng.",
      image: img("08-hanh-lang-tu-go.jpg"),
    },
  ],

  gallery: [
    img("12-mo-hinh-tong-the.jpg"),
    img("01-cong-chinh.jpg"),
    img("03-bia-long-group.jpg"),
    img("05-duong-noi-bo.jpg"),
    img("15-phong-xanh-2.jpg"),
    img("10-bai-co.jpg"),
  ],

  // Tin tức mẫu: thay bằng bài viết thật khi khách gửi.
  news: [
    { title: "Toàn cảnh quy hoạch Long Lăng Thiên Cảnh", date: "Bài mẫu", excerpt: "Mô hình quy hoạch với khuôn viên cây xanh, hồ nước và các khu nhà.", image: img("12-mo-hinh-tong-the.jpg") },
    { title: "Điện Vĩnh An", date: "Bài mẫu", excerpt: "Hình ảnh lối vào Điện Vĩnh An trong khuôn viên.", image: img("06-dien-vinh-an.jpg") },
    { title: "Hướng dẫn chọn khu và gói phí quản lý", date: "Bài mẫu", excerpt: "So sánh khu cũ, khu mới và các hình thức đóng phí 1, 5, 15 năm.", image: img("17-phong-vang.jpg") },
  ],

  cta: {
    title: "Một lời tiễn biệt trọn nghĩa ân",
    body: "Liên hệ để được tư vấn và tham quan khuôn viên Long Lăng Thiên Cảnh.",
    image: img("02-cong-toan-canh.jpg"),
  },
};
