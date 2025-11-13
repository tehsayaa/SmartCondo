import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card-soft border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Smart Home Solutions
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md leading-relaxed">
              Tiên phong trong việc mang đến các giải pháp thiết bị điện thông minh, 
              an toàn và tiết kiệm năng lượng cho gia đình Việt Nam.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-card border border-border/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Công tắc thông minh</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ổ cắm thông minh</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Đèn LED thông minh</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Thiết bị an toàn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Giám sát năng lượng</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Bảo hành</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Tải ứng dụng</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Liên hệ</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Smart Home Solutions. Bảo lưu mọi quyền.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">Điều khoản sử dụng</a>
            <a href="#" className="hover:text-foreground transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-foreground transition-colors">Chính sách cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;