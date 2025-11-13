-- Initial Schema for Smart Condo Portal

-- Announcements Table
CREATE TABLE announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    short_description TEXT,
    body_html TEXT,
    category TEXT NOT NULL,
    priority TEXT NOT NULL DEFAULT 'normal',
    author_name TEXT NOT NULL,
    published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Facilities Table
CREATE TABLE facilities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    max_capacity INT,
    rules TEXT,
    requires_approval BOOLEAN NOT NULL DEFAULT false,
    image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bookings Table
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    facility_id UUID REFERENCES facilities(id),
    resident_id UUID NOT NULL, -- This would reference a users table
    resident_name TEXT,
    unit_label TEXT,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    participants INT,
    purpose TEXT,
    status TEXT NOT NULL DEFAULT 'pending',
    rejection_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Tickets (Service Requests) Table
CREATE TABLE tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    priority TEXT NOT NULL DEFAULT 'normal',
    status TEXT NOT NULL DEFAULT 'open',
    building TEXT,
    floor TEXT,
    unit_number TEXT,
    common_area TEXT,
    resident_id UUID NOT NULL,
    resident_name TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Add some sample data for testing
INSERT INTO announcements (title, short_description, category, priority, author_name) VALUES
('Emergency Water Shut-off Notice', 'Water will be shut off today from 2 PM to 4 PM.', 'Maintenance', 'emergency', 'Condo Administration'),
('Community BBQ & Pool Party', 'Join us for our annual summer BBQ!', 'Events', 'normal', 'Social Committee');

INSERT INTO facilities (name, description, requires_approval) VALUES
('Rooftop Infinity Pool', 'Heated pool open year-round.', true),
('Sky Gym', 'Fitness center with panoramic city views.', false);
