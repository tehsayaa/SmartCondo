import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl font-medium text-foreground mb-4">
            Bắt đầu hành trình nhà thông minh
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Để lại thông tin để nhận tư vấn miễn phí và báo giá chi tiết
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg font-medium text-foreground">
                  Gửi yêu cầu tư vấn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Họ và tên *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên"
                        className="rounded-lg border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Số điện thoại *
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Nhập số điện thoại"
                        className="rounded-lg border-border/50 focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ email"
                      className="rounded-lg border-border/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nhu cầu cụ thể
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mô tả về ngôi nhà và nhu cầu sử dụng thiết bị thông minh..."
                      className="rounded-lg border-border/50 focus:border-primary min-h-[120px]"
                      rows={5}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-hero"
                  >
                    Nhận tư vấn miễn phí
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Bằng việc gửi thông tin, bạn đồng ý với{" "}
                    <a href="#" className="text-primary hover:underline">
                      chính sách bảo mật
                    </a>{" "}
                    của chúng tôi
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Hotline</h3>
                    <p className="text-sm text-muted-foreground">1900 1234</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Tư vấn 24/7, miễn phí cuộc gọi
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent-soft rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">info@smarthome.vn</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Phản hồi trong vòng 2 giờ
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-soft rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Showroom</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Trần Hưng Đạo, Q1, TP.HCM
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Mở cửa 8:00 - 20:00 hàng ngày
                </p>
              </CardContent>
            </Card>

            {/* Special Offer */}
            <div className="bg-accent-soft border border-accent/20 rounded-lg p-6 text-center">
              <h3 className="font-medium text-accent mb-2">🎁 Ưu đãi đặc biệt</h3>
              <p className="text-sm text-foreground mb-3">
                Miễn phí khảo sát & lắp đặt cho đơn hàng từ 5 triệu
              </p>
              <p className="text-xs text-muted-foreground">
                *Áp dụng đến hết tháng này
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;