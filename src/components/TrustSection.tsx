const testimonials = [
  {
    name: "Anh Minh Hoàng",
    location: "Hà Nội",
    rating: 5,
    text: "Sử dụng được 6 tháng, hóa đơn điện giảm 35%. Công tắc thông minh rất tiện lợi, điều khiển từ xa cực kỳ ổn định.",
    product: "Hệ thống công tắc thông minh"
  },
  {
    name: "Chị Lan Phương", 
    location: "TP.HCM",
    rating: 5,
    text: "Đèn LED thông minh tuyệt vời! Tùy chỉnh màu sắc theo mood, còn có chế độ tự động theo giờ. Rất hài lòng.",
    product: "Hệ thống chiếu sáng thông minh"
  },
  {
    name: "Gia đình Bác Tuấn",
    location: "Đà Nẵng", 
    rating: 5,
    text: "An tâm hơn nhiều với hệ thống an toàn điện. Đã cứu gia đình tôi khỏi 2 lần sự cố chập điện nguy hiểm.",
    product: "Thiết bị an toàn điện"
  }
];

const partners = [
  "Vingroup", "FPT", "Viettel", "VNPT", "Schneider", "Siemens"
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-card-soft/30">
      <div className="container mx-auto px-6">
        {/* Partners */}
        <div className="text-center mb-16 animate-fade-in">
          <h3 className="text-lg font-medium text-foreground mb-8">
            Được tin dùng bởi
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="text-muted-foreground font-medium text-lg">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h2 className="text-xl font-medium text-foreground text-center mb-12">
            Khách hàng nói gì về chúng tôi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-soft p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-primary text-xs font-medium">
                    {testimonial.product}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-xl font-semibold text-primary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Gia đình tin dùng</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-xl font-semibold text-accent mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Đánh giá khách hàng</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-xl font-semibold text-primary mb-2">5 năm</div>
            <div className="text-sm text-muted-foreground">Bảo hành toàn diện</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-xl font-semibold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Hỗ trợ kỹ thuật</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;