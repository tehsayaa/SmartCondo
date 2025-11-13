import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ToggleLeft, Lightbulb, Shield, BarChart3 } from "lucide-react";

const productCategories = [
  {
    id: "switches",
    title: "Công tắc & Ổ cắm thông minh",
    icon: ToggleLeft,
    description: "Điều khiển thiết bị từ xa, hẹn giờ tự động",
    heroText: "Kiểm soát hoàn hảo mọi thiết bị điện trong nhà",
    highlights: [
      "Điều khiển từ xa qua WiFi & Bluetooth",
      "Hẹn giờ tự động theo lịch sinh hoạt",
      "Giám sát tiêu thụ điện năng real-time"
    ],
    products: [
      {
        name: "Công tắc thông minh 1 phím",
        description: "Điều khiển 1 thiết bị, màn hình cảm ứng",
        price: "499.000đ",
        image: "🔘"
      },
      {
        name: "Ổ cắm thông minh WiFi",
        description: "Tương thích Alexa, Google Home",
        price: "299.000đ",
        image: "🔌"
      },
      {
        name: "Công tắc điều sáng thông minh",
        description: "Điều chỉnh độ sáng 0-100%",
        price: "699.000đ",
        image: "🎛️"
      }
    ]
  },
  {
    id: "lighting",
    title: "Hệ thống chiếu sáng",
    icon: Lightbulb,
    description: "Đèn LED thông minh, điều chỉnh màu sắc",
    heroText: "Tạo không gian sống với ánh sáng hoàn hảo",
    highlights: [
      "16 triệu màu sắc tùy chỉnh",
      "Chế độ ánh sáng tự nhiên theo giờ",
      "Tiết kiệm 80% điện năng so với đèn thường"
    ],
    products: [
      {
        name: "Đèn LED thông minh 12W",
        description: "RGB + White, điều khiển ứng dụng",
        price: "399.000đ",
        image: "💡"
      },
      {
        name: "Dải đèn LED dán tường",
        description: "5m, chống nước IP65",
        price: "799.000đ",
        image: "🌈"
      },
      {
        name: "Đèn ốp trần thông minh",
        description: "Điều chỉnh nhiệt độ màu",
        price: "1.299.000đ",
        image: "🔆"
      }
    ]
  },
  {
    id: "safety",
    title: "Thiết bị an toàn điện",
    icon: Shield,
    description: "Bảo vệ khỏi quá tải, đoản mạch, rò điện",
    heroText: "An toàn tuyệt đối cho gia đình bạn",
    highlights: [
      "Phát hiện sự cố trong 0.1 giây",
      "Cảnh báo ngay lập tức qua app",
      "Tự động ngắt điện khi có nguy hiểm"
    ],
    products: [
      {
        name: "CB thông minh chống rò điện",
        description: "Độ nhạy 30mA, báo động SMS",
        price: "1.999.000đ",
        image: "⚡"
      },
      {
        name: "Ổ cắm an toàn cho trẻ em",
        description: "Khóa tự động, chống cháy nổ",
        price: "199.000đ",
        image: "🛡️"
      },
      {
        name: "Hệ thống báo cháy thông minh",
        description: "Cảm biến khói & nhiệt độ",
        price: "2.999.000đ",
        image: "🚨"
      }
    ]
  },
  {
    id: "monitoring",
    title: "Bộ giám sát năng lượng",
    icon: BarChart3,
    description: "Theo dõi & tối ưu hóa tiêu thụ điện",
    heroText: "Quản lý hiệu quả mọi khoản chi phí điện",
    highlights: [
      "Báo cáo chi tiết theo ngày/tháng",
      "AI dự đoán hóa đơn điện",
      "Đề xuất tối ưu tiêu thụ năng lượng"
    ],
    products: [
      {
        name: "Công tơ điện thông minh",
        description: "Đo lường chính xác 99.5%",
        price: "3.999.000đ",
        image: "📊"
      },
      {
        name: "Sensor giám sát thiết bị",
        description: "Theo dõi từng thiết bị riêng lẻ",
        price: "599.000đ",
        image: "📈"
      },
      {
        name: "Hub trung tâm điều khiển",
        description: "Kết nối tất cả thiết bị smart",
        price: "4.999.000đ",
        image: "🎮"
      }
    ]
  }
];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("switches");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl mb-4 text-foreground font-medium">
            Khám phá sản phẩm
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Giải pháp hoàn chỉnh cho ngôi nhà thông minh hiện đại
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12 bg-transparent border-0 p-0 rounded-none gap-2">
            {productCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="tab-button flex flex-col items-center gap-2 py-4 rounded-md bg-transparent data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-muted/50 transition-colors"
              >
                <category.icon className="w-5 h-5" />
                <span className="text-sm font-medium text-center leading-tight">
                  {category.title}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {productCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="animate-fade-in">
              <div className="bg-card-soft rounded-lg p-8 mb-8">
                {/* Category Hero */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {category.heroText}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {category.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border/50">
                      <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.products.map((product, index) => (
                  <Card key={index} className="card-flat hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-3">{product.image}</div>
                      <CardTitle className="text-lg font-medium text-foreground">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-xl font-semibold text-navy mb-4">
                        {product.price}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Xem chi tiết
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProductTabs;