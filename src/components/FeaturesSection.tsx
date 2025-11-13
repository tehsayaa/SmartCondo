import { Zap, Shield, Palette, Smartphone } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Tiết kiệm năng lượng",
    description: "Giảm đến 40% hóa đơn điện với công nghệ thông minh tự động điều chỉnh",
    color: "text-accent"
  },
  {
    icon: Shield,
    title: "An toàn tối đa",
    description: "Hệ thống bảo vệ đa lớp, chống quá tải và đoản mạch tự động",
    color: "text-primary"
  },
  {
    icon: Palette,
    title: "Thiết kế tối giản",
    description: "Giao diện phẳng, tinh tế, hòa hợp với mọi phong cách nội thất",
    color: "text-muted-foreground"
  },
  {
    icon: Smartphone,
    title: "Điều khiển thông minh",
    description: "Quản lý từ xa qua ứng dụng di động, điều khiển giọng nói AI",
    color: "text-accent"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-card-soft/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl mb-4 text-foreground font-medium">
            Tại sao chọn thiết bị điện thông minh?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mang lại sự tiện nghi, an toàn và hiệu quả cho ngôi nhà của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="feature-card text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-lg bg-card-soft border border-border/50 flex items-center justify-center">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;