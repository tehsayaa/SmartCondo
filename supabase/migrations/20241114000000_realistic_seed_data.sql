-- Realistic Seed Data for Smart Condo Portal
-- Based on UI Design Mockups

-- Clear existing data
TRUNCATE TABLE ticket_attachments, ticket_comments, ticket_assignments, announcement_reads, announcement_attachments, user_units, bql_buildings, facility_time_slots, bookings RESTART IDENTITY CASCADE;
TRUNCATE TABLE announcements, facilities, tickets, units, buildings, users RESTART IDENTITY CASCADE;

-- USERS
-- More realistic Vietnamese users with proper roles
INSERT INTO users (id, clerk_user_id, role, full_name, email, phone, avatar_url, language_preference, created_at, updated_at) VALUES
-- Admin
(gen_random_uuid(), 'admin_001', 'admin', 'Trần Văn Admin', 'admin@smartcondo.vn', '0901234567', 'https://lh3.googleusercontent.com/a/default-avatar-admin.jpg', 'vi', NOW() - INTERVAL '6 months', NOW()),
-- BQL Staff
(gen_random_uuid(), 'bql_001', 'bql', 'Nguyễn Thị Quản Lý', 'bql@smartcondo.vn', '0902345678', 'https://lh3.googleusercontent.com/a/default-avatar-bql.jpg', 'vi', NOW() - INTERVAL '5 months', NOW()),
(gen_random_uuid(), 'bql_002', 'bql', 'Vũ Thị Maintenance', 'maintenance@smartcondo.vn', '0903456789', 'https://lh3.googleusercontent.com/a/default-avatar-bql2.jpg', 'vi', NOW() - INTERVAL '4 months', NOW()),
(gen_random_uuid(), 'bql_003', 'bql', 'Phạm Thị Security', 'security@smartcondo.vn', '0904567890', 'https://lh3.googleusercontent.com/a/default-avatar-security.jpg', 'vi', NOW() - INTERVAL '3 months', NOW()),
-- Residents with Vietnamese names
(gen_random_uuid(), 'user_001', 'resident', 'Hoàng Văn Cường', 'resident1@smartcondo.vn', '0909876543', 'https://lh3.googleusercontent.com/a/default-avatar-user1.jpg', 'vi', NOW() - INTERVAL '2 months', NOW()),
(gen_random_uuid(), 'user_002', 'resident', 'Lê Thị Minh Anh', 'resident2@smartcondo.vn', '0908765432', 'https://lh3.googleusercontent.com/a/default-avatar-user2.jpg', 'vi', NOW() - INTERVAL '1 month', NOW()),
(gen_random_uuid(), 'user_003', 'resident', 'Phạm Văn Bình', 'resident3@smartcondo.vn', '0907654321', 'https://lh3.googleusercontent.com/a/default-avatar-user3.jpg', 'vi', NOW() - INTERVAL '3 weeks', NOW()),
(gen_random_uuid(), 'user_004', 'resident', 'Trần Thu Trang', 'resident4@smartcondo.vn', '0906543210', 'https://lh3.googleusercontent.com/a/default-avatar-user4.jpg', 'vi', NOW() - INTERVAL '1 week', NOW()),
(gen_random_uuid(), 'user_005', 'resident', 'Ngô Đức Huy', 'resident5@smartcondo.vn', '0905432109', 'https://lh3.googleusercontent.com/a/default-avatar-user5.jpg', 'vi', NOW() - INTERVAL '2 weeks', NOW()),
(gen_random_uuid(), 'user_006', 'resident', 'Bùi Thị Mai', 'resident6@smartcondo.vn', '0904321098', 'https://lh3.googleusercontent.com/a/default-avatar-user6.jpg', 'vi', NOW() - INTERVAL '5 days', NOW());

-- BUILDINGS (based on UI design)
INSERT INTO buildings (id, name, code, address, created_at) VALUES
(gen_random_uuid(), 'Tòa A', 'A', '123 Nguyễn Huệ, Phường 17, Quận 1, TP.HCM', NOW() - INTERVAL '6 months'),
(gen_random_uuid(), 'Tòa B', 'B', '125 Nguyễn Huệ, Phường 17, Quận 1, TP.HCM', NOW() - INTERVAL '5 months'),
(gen_random_uuid(), 'Tòa C', 'C', '127 Nguyễn Huệ, Phường 17, Quận 1, TP.HCM', NOW() - INTERVAL '4 months');

-- UNITS (realistic unit distribution)
INSERT INTO units (id, building_id, tower, floor, unit_number, created_at) VALUES
-- Tòa A - 15 floors, 4 units per floor = 60 units
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '01', '0101', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '01', '0102', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '01', '0103', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '01', '0104', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '02', '0201', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '02', '0202', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '02', '0203', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '02', '0204', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '05', '0501', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '05', '0502', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '05', '0503', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '05', '0504', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '10', '1001', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '10', '1002', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '10', '1003', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'A', '10', '1004', NOW()),
-- Tòa B - 12 floors, 4 units per floor = 48 units
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '01', '0101', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '01', '0102', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '01', '0103', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '01', '0104', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '03', '0301', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '03', '0302', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '03', '0303', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '03', '0304', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '06', '0601', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '06', '0602', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '06', '0603', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'B', '06', '0604', NOW()),
-- Tòa C - 10 floors, 4 units per floor = 40 units
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '01', '0101', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '01', '0102', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '01', '0103', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '01', '0104', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '02', '0201', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '02', '0202', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '02', '0203', NOW()),
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'C', '02', '0204', NOW());

-- USER_UNITS (assign units to residents)
INSERT INTO user_units (user_id, unit_id, is_primary, created_at) VALUES
((SELECT id FROM users WHERE clerk_user_id = 'user_001'), (SELECT id FROM units WHERE unit_number = '0501'), true, NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'user_002'), (SELECT id FROM units WHERE unit_number = '0201'), true, NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'user_003'), (SELECT id FROM units WHERE unit_number = '1001'), true, NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'user_004'), (SELECT id FROM units WHERE unit_number = '0301'), true, NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'user_005'), (SELECT id FROM units WHERE unit_number = '0601'), true, NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'user_006'), (SELECT id FROM units WHERE unit_number = '0101'), true, NOW());

-- BQL_BUILDINGS (assign buildings to BQL staff)
INSERT INTO bql_buildings (user_id, building_id, created_at) VALUES
((SELECT id FROM users WHERE clerk_user_id = 'bql_001'), (SELECT id FROM buildings WHERE code = 'A'), NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'bql_001'), (SELECT id FROM buildings WHERE code = 'B'), NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'bql_001'), (SELECT id FROM buildings WHERE code = 'C'), NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'bql_002'), (SELECT id FROM buildings WHERE code = 'A'), NOW()),
((SELECT id FROM users WHERE clerk_user_id = 'bql_003'), (SELECT id FROM buildings WHERE code = 'B'), NOW());

-- FACILITIES (based on UI design)
INSERT INTO facilities (id, building_id, name, description, image_url, max_capacity, rules, requires_approval, is_active, created_at, updated_at) VALUES
-- Pool
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'Hồ Bơi Vô Cần Tầng Thượng', 'Hồ bơi nước ấm mở cửa quanh năm với tầm nhìn panoramic thành phố. Thiết bị hiện đại với khu vực thư giãn.', 'https://images.unsplash.com/photo-1571896349842-33c894cbcb1e?w=800&h=600&fit=crop', 30, 'Phải mặc đồ bơi chuyên dụng. Không mang đồ ăn từ ngoài vào. Tắm trước khi vào hồ.', true, true, NOW() - INTERVAL '3 months', NOW()),
-- Gym
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'Phòng Gym Sky', 'Trung tâm thể dục hiện đại với trang thiết bị đầy đủ và tầm nhìn thành phố. Có máy chạy bộ, tạ, và các lớp yoga.', 'https://images.unsplash.com/photo-1534438352484-ad436b31353b?w=800&h=600&fit=crop', 20, 'Giới hạn thời gian 1 giờ mỗi lần tập. Đặt lịch trước. Không mang giày dép lê.', false, true, NOW() - INTERVAL '3 months', NOW()),
-- Tennis Court
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'Sân Tennis', 'Sân tennis tiêu chuẩn quốc tế với đèn chiếu sáng ban đêm. Bề mặt chuyên nghiệp với lưới bao quanh.', 'https://images.unsplash.com/photo-1547147023-7f36d6503815?w=800&h=600&fit=crop', 4, 'Phải mang giày tennis chuyên dụng. Đặt lịch trước 2 giờ. Không chơi khi trời mưa.', true, true, NOW() - INTERVAL '2 months', NOW()),
-- Meeting Room
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'B'), 'Phòng Hội Nghị', 'Phòng họp hiện đại với projector, màn hình lớn, wifi tốc độ cao và hệ thống điều hòa. Phù hợp cho các cuộc họp quan trọng.', 'https://images.unsplash.com/photo-1519389950473-66ba0f63709e?w=800&h=600&fit=crop', 50, 'Chỉ dành cho các cuộc họp chung cư. Phải đăng ký trước. Không mang đồ ăn vào phòng.', true, true, NOW() - INTERVAL '2 months', NOW()),
-- BBQ Area
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'Khu BBQ', 'Khu vực BBQ ngoài trời với bàn ghế và lò nướng hiện đại. Có mái che và khu vực rửa tay.', 'https://images.unsplash.com/photo-1544025394-86871291ebc3?w=800&h=600&fit=crop', 25, 'Phải tự dọn dẹp sau khi sử dụng. Không sử dụng sau 22:00. Phải đăng ký trước.', false, true, NOW() - INTERVAL '1 month', NOW()),
-- Cinema Room
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'C'), 'Phòng Xem Phim', 'Phòng chiếu phim mini với ghế thoải mái và hệ thống âm thanh vòm. Có màn hình lớn và máy chiếu HD.', 'https://images.unsplash.com/photo-1598425833118-38dc2543774e?w=800&h=600&fit=crop', 12, 'Tối đa 3 lần đặt mỗi tháng. Đặt lịch trước. Không mang đồ ăn nhẹ có mùi vào phòng.', true, true, NOW() - INTERVAL '1 month', NOW());

-- FACILITY TIME SLOTS
INSERT INTO facility_time_slots (id, facility_id, label, start_time, end_time, is_active, created_at) VALUES
-- Pool time slots
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 1: 05:30 - 08:00', '05:30:00', '08:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 2: 08:00 - 10:30', '08:00:00', '10:30:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 3: 10:30 - 13:00', '10:30:00', '13:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 4: 13:00 - 15:30', '13:00:00', '15:30:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 5: 15:30 - 18:00', '15:30:00', '18:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), 'Ca 6: 18:00 - 21:00', '18:00:00', '21:00:00', true, NOW()),
-- Gym time slots (24/7 access)
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), 'Ca 1: 05:00 - 08:00', '05:00:00', '08:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), 'Ca 2: 08:00 - 12:00', '08:00:00', '12:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), 'Ca 3: 12:00 - 17:00', '12:00:00', '17:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), 'Ca 4: 17:00 - 22:00', '17:00:00', '22:00:00', true, NOW()),
-- Tennis Court time slots
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Sân Tennis'), 'Ca 1: 06:00 - 08:00', '06:00:00', '08:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Sân Tennis'), 'Ca 2: 08:00 - 10:00', '08:00:00', '10:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Sân Tennis'), 'Ca 3: 10:00 - 12:00', '10:00:00', '12:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Sân Tennis'), 'Ca 4: 16:00 - 18:00', '16:00:00', '18:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Sân Tennis'), 'Ca 5: 18:00 - 20:00', '18:00:00', '20:00:00', true, NOW()),
-- BBQ Area time slots
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Khu BBQ'), 'Ca 1: 09:00 - 12:00', '09:00:00', '12:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Khu BBQ'), 'Ca 2: 12:00 - 15:00', '12:00:00', '15:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Khu BBQ'), 'Ca 3: 15:00 - 18:00', '15:00:00', '18:00:00', true, NOW()),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Khu BBQ'), 'Ca 4: 18:00 - 21:00', '18:00:00', '21:00:00', true, NOW());

-- BOOKINGS (realistic booking data)
INSERT INTO bookings (id, facility_id, resident_id, unit_id, start_time, end_time, participants, purpose, status, rejection_reason, created_at, updated_at) VALUES
-- Pool bookings
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), (SELECT id FROM units WHERE unit_number = '0501'), NOW() + INTERVAL '1 day', NOW() + INTERVAL '1 day' + INTERVAL '2 hours', 4, 'Bơi lội thư giãn cuối tuần', 'approved', NULL, NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days')),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), (SELECT id FROM users WHERE clerk_user_id = 'user_002'), (SELECT id FROM units WHERE unit_number = '0201'), NOW() + INTERVAL '2 days', NOW() + INTERVAL '2 days' + INTERVAL '2 hours', 3, 'Bơi với con', 'approved', NULL, NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days')),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Hồ Bơi Vô Cần Tầng Thượng'), (SELECT id FROM users WHERE clerk_user_id = 'user_003'), (SELECT id FROM units WHERE unit_number = '1001'), NOW() + INTERVAL '3 days', NOW() + INTERVAL '3 days' + INTERVAL '1 hour', 2, 'Tập bơi', 'pending', NULL, NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day')),
-- Gym bookings (no approval needed)
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), (SELECT id FROM users WHERE clerk_user_id = 'user_004'), (SELECT id FROM units WHERE unit_number = '0301'), NOW() - INTERVAL '6 hours', NOW() - INTERVAL '4 hours', 1, 'Tập thể dục buổi sáng', 'approved', NULL, NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day')),
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Gym Sky'), (SELECT id FROM users WHERE clerk_user_id = 'user_005'), (SELECT id FROM units WHERE unit_number = '0601'), NOW() + INTERVAL '1 day', NOW() + INTERVAL '1 day' + INTERVAL '1 hour', 2, 'Tập với bạn', 'approved', NULL, NOW() - INTERVAL '12 hours', NOW() - INTERVAL '12 hours')),
-- BBQ bookings
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Khu BBQ'), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), (SELECT id FROM units WHERE unit_number = '0501'), NOW() + INTERVAL '7 days', NOW() + INTERVAL '7 days' + INTERVAL '3 hours', 8, 'Tiệc sinh nhật gia đình', 'pending', NULL, NOW() - INTERVAL '6 hours', NOW() - INTERVAL '6 hours')),
-- Rejected booking example
(gen_random_uuid(), (SELECT id FROM facilities WHERE name = 'Phòng Xem Phim'), (SELECT id FROM users WHERE clerk_user_id = 'user_006'), (SELECT id FROM units WHERE unit_number = '0101'), NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day' + INTERVAL '2 hours', 5, 'Xem phim bóng đá', 'rejected', 'Phòng xem phim đã được đặt bởi cư dân khác vào thời gian này. Vui lòng chọn thời gian khác.', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'));

-- ANNOUNCEMENTS (based on UI design)
INSERT INTO announcements (id, building_id, title, short_description, category, priority, status, body_html, author_id, publish_at, published_at, created_at, updated_at) VALUES
-- Emergency announcements
(gen_random_uuid(), NULL, 'Khẩn Cấp: Cắt Nước Tạm Thời', 'Nước sẽ bị cắt từ 14:00 - 16:00 hôm nay để sửa chữa đường ống chính. Mong cư dân thông cảm và chuẩn bị trước.', 'maintenance', 'emergency', 'published', 
'<h2>Thông Báo Khẩn Cấp</h2>
<p>Kính thưa quý cư dân,</p>
<p>Chúng tôi sẽ thực hiện <strong>cắt nước tạm thời</strong> vào ngày hôm nay, <strong>14:00 - 16:00</strong> để sửa chữa đường ống chính.</p>
<p><strong>Thời gian:</strong> 14:00 - 16:00 ngày hôm nay</p>
<p><strong>Khu vực bị ảnh hưởng:</strong> Tòa nhà Tầng 1-5</p>
<p>Chúng tôi xin lỗi vì sự bất tiện này và cảm ơn sự thông cảm của quý cư dân.</p>
<p><em>Trân trọng,<br>Ban Quản lý Tòa nhà</em></p>', 
(SELECT id FROM users WHERE clerk_user_id = 'bql_001'), NOW() - INTERVAL '2 hours', NOW() - INTERVAL '2 hours', NOW() - INTERVAL '3 days', NOW()),
-- High priority maintenance
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'Kiểm Tra Hệ Thống Báo Cháy Hàng Năm', 'Vui lòng lưu ý kiểm tra hệ thống báo cháy sẽ diễn ra vào thứ Sáu, ngày 26/07, giữa 10:00 - 13:00. Báo có thể kêu intermittently.', 'maintenance', 'high', 'published',
'<h2>Kiểm Tra Hệ Thống Báo Cháy Hàng Năm</h2>
<p>Kính thưa quý cư dân,</p>
<p>Vui lòng lưu ý <strong>kiểm tra hệ thống báo cháy</strong> sẽ diễn ra vào:</p>
<p><strong>Thời gian:</strong> Thứ Sáu, 26/07/2024</p>
<p><strong>Giờ:</strong> 10:00 - 13:00</p>
<p><strong>Lưu ý:</strong> Báo có thể kêu intermittently trong suốt thời gian kiểm tra.</p>
<p>Đây là hoạt động bảo trì định kỳ để đảm bảo an toàn cho chung cư.</p>
<p><em>Trân trọng,<br>Phòng An Ninh</em></p>',
(SELECT id FROM users WHERE clerk_user_id = 'bql_002'), NOW() - INTERVAL '1 week', NOW() - INTERVAL '1 week', NOW() - INTERVAL '1 week', NOW()),
-- Event announcements
(gen_random_uuid(), NULL, 'Tiệc BBQ & Pool Party Cộng Đồng', 'Hãy tham gia cùng chúng tôi trong tiệc BBQ hè thường niên! Chúng tôi sẽ có đồ ăn, nhạc và niềm vui cho cả gia đình bên hồ bơi vào ngày 3/8 từ 12:00. Vui lòng xác nhận tham dự trước ngày 30/7.', 'event', 'normal', 'published',
'<h2>Tiệc BBQ & Pool Party Cộng Đồng</h2>
<p>🎉 <strong>Mời quý cư dân tham dự tiệc BBQ hè thường niên!</strong></p>
<p><strong>Thời gian:</strong> Thứ Bảy, 3/8/2024</p>
<p><strong>Giờ:</strong> 12:00 - 18:00</p>
<p><strong>Địa điểm:</strong> Khu vực BBQ & Hồ bơi Tầng Thượng</p>
<p><strong>Hoạt động:</strong></p>
<ul>
<li>Đồ ăn miễn phí</li>
<li>Nhạc sống</li>
<li>Trò chơi cho trẻ em</li>
<li>Giải trí bơi lội</li>
</ul>
<p><strong>Lưu ý:</strong> Vui lòng xác nhận tham dự trước ngày 30/7 để chúng tôi chuẩn bị tốt nhất.</p>
<p>Mong gặp mặt tất cả quý cư dân trong không khí vui vẻ!</p>
<p><em>Trân trọng,<br>Ổ ban tổ chức</em></p>',
(SELECT id FROM users WHERE clerk_user_id = 'bql_003'), NOW() - INTERVAL '2 weeks', NOW() - INTERVAL '2 weeks', NOW() - INTERVAL '2 weeks', NOW()),
-- Policy announcements
(gen_random_uuid(), (SELECT id FROM buildings WHERE code = 'A'), 'Nhắc Nhở: Quy Tắc Phân Loại Rác Mới', 'Đây là lời nhắc nhở thân thiện về các hướng dẫn phân loại rác mới bắt đầu từ tháng này. Vui lòng đảm bảo bạn phân loại rác đúng cách.', 'policy', 'normal', 'published',
'<h2>Nhắc Nhở: Quy Tắc Phân Loại Rác Mới</h2>
<p>Kính thưa quý cư dân,</p>
<p>Để bảo vệ môi trường và tái chế tốt hơn, chúng tôi áp dụng <strong>quy tắc phân loại rác mới</strong> kể từ tháng này.</p>
<p><strong>Hướng dẫn phân loại:</strong></p>
<ul>
<li><strong>Rác hữu cơ:</strong> Giấy, nhựa, kim loại, thủy tinh</li>
<li><strong>Rác hữu cơ khác:</strong> Vải, da, xốp</li>
<li><strong>Rác hữu cơ nguy hại:</strong> Pin, đèn huỳnh, hóa chất, thuốc trừ sâu</li>
<li><strong>Rác tái chế:</strong> Giấy, nhựa, thủy tinh, kim loại đã qua sử dụng</li>
</ul>
<p><strong>Lịch thu gom:</strong></p>
<ul>
<li>Thứ Hai, Tư, Sáu: Rác hữu cơ và tái chế</li>
<li>Thứ Tư, Năm, Bảy: Rác hữu cơ nguy hại</li>
</ul>
<p>Cảm ơn sự hợp tác của quý cư dân trong việc bảo vệ môi trường!</p>
<p><em>Trân trọng,<br>Phòng Môi trường</em></p>',
(SELECT id FROM users WHERE clerk_user_id = 'bql_001'), NOW() - INTERVAL '3 weeks', NOW() - INTERVAL '3 weeks', NOW() - INTERVAL '3 weeks', NOW());

-- TICKETS (realistic service requests based on UI design)
INSERT INTO tickets (id, resident_id, unit_id, building_id, category, title, description, priority, status, floor, common_area, preferred_access_time, created_at, updated_at, closed_at) VALUES
-- Water leak tickets
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), (SELECT id FROM units WHERE unit_number = '0501'), (SELECT id FROM buildings WHERE code = 'A'), 'water_leak', 'Rò rỉ nước từ phòng vệ sinh master', 'Phòng vệ sinh master có rò rỉ nước từ dưới sàn, nước chảy ra hành lang. Cần xử lý gấp.', 'urgent', 'open', '05', NULL, 'Bất kỳ lúc nào trong ngày', NOW() - INTERVAL '4 hours', NOW() - INTERVAL '4 hours', NULL),
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_002'), (SELECT id FROM units WHERE unit_number = '0201'), (SELECT id FROM buildings WHERE code = 'C'), 'water_leak', 'Vòi nước rò rỉ nhỏ', 'Vòi nước trong bếp rò rỉ nhỏ giọt, lãng phí nước. Cần thay thế.', 'normal', 'in_progress', '02', NULL, 'Buổi chiều sau 17:00', NOW() - INTERVAL '1 day', NOW() - INTERVAL '12 hours', NULL),
-- Electricity issues
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_003'), (SELECT id FROM units WHERE unit_number = '1001'), (SELECT id FROM buildings WHERE code = 'A'), 'electricity', 'Mất điện đột ngột', 'Căn hộ mất điện từ 10:00 sáng nay. Các căn hộ khác vẫn có điện. Đã kiểm tra aptomat không thấy lỗi.', 'normal', 'open', '10', NULL, 'Ưu tiên buổi sáng', NOW() - INTERVAL '6 hours', NOW() - INTERVAL '6 hours', NULL),
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_004'), (SELECT id FROM units WHERE unit_number = '0301'), (SELECT id FROM buildings WHERE code = 'B'), 'electricity', 'Đèn đường hành lang nhấp nháy', 'Đèn hành lang tòa nhà B nhấp nháy liên tục từ 2 ngày nay. Gây mất an toàn cho cư dân.', 'normal', 'in_progress', '03', NULL, 'Bất kỳ lúc nào', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day', NULL),
-- Cleanliness issues
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_005'), (SELECT id FROM units WHERE unit_number = '0601'), (SELECT id FROM buildings WHERE code = 'B'), 'cleanliness', 'Sân bẩn cần dọn dẹp', 'Khu vực sân chung quanh tòa nhà B có nhiều rác và lá cây, cần dọn dẹp để đảm bảo vệ sinh.', 'normal', 'open', NULL, 'Sân chung', 'Cuối tuần', NOW() - INTERVAL '1 day', NOW() - INTERVAL '1 day', NULL),
-- Noise complaints
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_006'), (SELECT id FROM units WHERE unit_number = '0101'), (SELECT id FROM buildings WHERE code = 'A'), 'noise', 'Tiếng ồn từ tầng trên', 'Căn hộ tầng trên có tiếng ồn lớn vào ban đêm (22:00 - 02:00), ảnh hưởng giấc ngủ. Có thể là tiệc tùng hoặc sửa nhà.', 'normal', 'in_progress', '01', NULL, 'Sau 21:00', NOW() - INTERVAL '3 days', NOW() - INTERVAL '2 days', NULL),
-- Other issues
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), (SELECT id FROM units WHERE unit_number = '0501'), (SELECT id FROM buildings WHERE code = 'A'), 'other', 'Yêu cầu sửa khóa cửa', 'Khóa cửa chính bị kẹt, không mở được. Cần thợ khóa đến sửa gấp.', 'normal', 'resolved', '05', NULL, 'Buổi chiều', NOW() - INTERVAL '5 days', NOW() - INTERVAL '2 days', NOW() - INTERVAL '2 days'),
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_003'), (SELECT id FROM units WHERE unit_number = '1001'), (SELECT id FROM buildings WHERE code = 'A'), 'other', 'Yêu cầu lắp đặt internet', 'Cần lắp đặt internet tốc độ cao cho làm việc tại nhà. Mong có gói phù hợp.', 'normal', 'closed', '10', NULL, 'Bất kỳ lúc nào', NOW() - INTERVAL '1 week', NOW() - INTERVAL '5 days', NOW() - INTERVAL '5 days');

-- ANNOUNCEMENT_READS (mark some as read)
INSERT INTO announcement_reads (announcement_id, user_id, read_at) VALUES
((SELECT id FROM announcements WHERE title = 'Khẩn Cấp: Cắt Nước Tạm Thời'), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), NOW() - INTERVAL '1 hour'),
((SELECT id FROM announcements WHERE title = 'Kiểm Tra Hệ Thống Báo Cháy Hàng Năm'), (SELECT id FROM users WHERE clerk_user_id = 'user_002'), NOW() - INTERVAL '2 days'),
((SELECT id FROM announcements WHERE title = 'Tiệc BBQ & Pool Party Cộng Đồng'), (SELECT id FROM users WHERE clerk_user_id = 'user_003'), NOW() - INTERVAL '1 week'),
((SELECT id FROM announcements WHERE title = 'Nhắc Nhở: Quy Tắc Phân Loại Rác Mới'), (SELECT id FROM users WHERE clerk_user_id = 'user_004'), NOW() - INTERVAL '2 days');

-- AI LOGS (some AI interactions)
INSERT INTO ai_logs (id, user_id, context_type, context_id, prompt, response, created_at) VALUES
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_001'), 'ticket', (SELECT id FROM tickets WHERE title = 'Rò rỉ nước từ phòng vệ sinh master'), 'Tôi cần giúp đừng viết báo cáo sự cố cho ban quản lý', 'Tôi đã giúp bạn soạn báo cáo sự cố về rò rỉ nước. Báo cáo bao gồm: mô tả chi tiết vấn đề, yêu cầu xử lý khẩn cấp, và thông tin liên hệ khẩn cấp.', NOW() - INTERVAL '3 hours'),
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_002'), 'booking', (SELECT id FROM bookings WHERE purpose = 'Bơi lội thư giãn cuối tuần'), 'Làm thế nào để đặt thêm giờ bơi?', 'Để đặt thêm giờ bơi, bạn cần: 1) Chọn ngày mong muốn, 2) Chọn khung giờ có sẵn, 3) Điền số người tham gia, 4) Ghi chú mục đích sử dụng.', NOW() - INTERVAL '2 days'),
(gen_random_uuid(), (SELECT id FROM users WHERE clerk_user_id = 'user_003'), 'announcement', (SELECT id FROM announcements WHERE title = 'Tiệc BBQ & Pool Party Cộng Đồng'), 'Tôi có thể mang đồ ăn riêng không?', 'Chào bạn, bạn hoàn toàn có thể mang đồ ăn riêng đến tiệc BBQ. Tuy nhiên, chúng tôi đã chuẩn bị đồ ăn miễn phí cho tất cả mọi người. Nếu bạn mang đồ ăn riêng, vui lòng dọn dẹp sau khi sử dụng nhé!', NOW() - INTERVAL '1 day');

-- UPDATE SEQUENCES
SELECT setval(pg_get_serial_sequence('users_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM users));
SELECT setval(pg_get_serial_sequence('buildings_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM buildings));
SELECT setval(pg_get_serial_sequence('units_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM units));
SELECT setval(pg_get_serial_sequence('announcements_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM announcements));
SELECT setval(pg_get_serial_sequence('facilities_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM facilities));
SELECT setval(pg_get_serial_sequence('bookings_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM bookings));
SELECT setval(pg_get_serial_sequence('tickets_id_seq'), (SELECT COALESCE(MAX(id), 0) FROM tickets));
