import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card-soft to-primary-soft/30">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent-soft rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-soft rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-card-soft rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Hero Headline */}
          <h1 className="text-hero mb-6 leading-tight text-foreground font-light">
            Nâng tầm ngôi nhà với{" "}
            <span className="text-primary font-medium">giải pháp điện thông minh</span>{" "}
            & <span className="text-accent font-medium">tinh tế</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Trải nghiệm cuộc sống hiện đại với các thiết bị điện dân dụng thông minh - 
            <strong className="text-foreground"> an toàn tối đa</strong>, 
            <strong className="text-foreground"> tiết kiệm năng lượng</strong>, và 
            <strong className="text-foreground"> thiết kế tối giản</strong>
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-hero">
              Khám phá ngay
            </button>
            <button className="btn-outline">
              Tư vấn miễn phí
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Được tin dùng bởi hơn 10,000+ gia đình Việt Nam</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-xs font-medium text-muted-foreground">⭐⭐⭐⭐⭐ 4.8/5</div>
              <div className="h-4 w-px bg-border"></div>
              <div className="text-xs font-medium text-muted-foreground">Bảo hành 5 năm</div>
              <div className="h-4 w-px bg-border"></div>
              <div className="text-xs font-medium text-muted-foreground">Lắp đặt miễn phí</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;