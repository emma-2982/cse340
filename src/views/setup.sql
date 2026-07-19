CREATE TABLE organization (
    organization_id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    contact_email VARCHAR(255) NOT NULL,
    logo_filename VARCHAR(255) NOT NULL
);

INSERT INTO organization (name, description, contact_email, logo_filename)
VALUES
    (
        'BrightFuture Builders',
        'A nonprofit focused on improving community infrastructure through sustainable construction projects.',
        'info@brightfuturebuilders.org',
        'brightfuture-logo.png'
    ),
    (
        'GreenHarvest Growers',
        'An urban farming collective promoting food sustainability and education in local neighborhoods.',
        'contact@greenharvest.org',
        'greenharvest-logo.png'
    ),
    (
        'UnityServe Volunteers',
        'A volunteer coordination group supporting local charities and service initiatives.',
        'hello@unityserve.org',
        'unityserve-logo.png'
    );

CREATE TABLE service_projects (
    project_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255),
    date DATE NOT NULL,
    organization_id INTEGER,
    FOREIGN KEY (organization_id) REFERENCES organization (organization_id)
);
INSERT INTO service_projects (title, description, location, date, organization_id) VALUES
('Community Bridge Repair', 'Volunteers repair damaged footbridges.', 'Riverside Park', '2024-03-10', 1),
('Playground Renovation', 'Updating playground equipment for safety.', 'Oakwood Playground', '2024-04-02', 1),
('Solar Panel Installation', 'Installing solar panels for low-income homes.', 'East District', '2024-05-15', 1),
('Bike Path Expansion', 'Extending bike paths for safer commuting.', 'North Trail', '2024-06-01', 1),
('Storm Drain Cleanup', 'Clearing debris from storm drains.', 'Downtown', '2024-07-20', 1),

('Garden Bed Construction', 'Building raised garden beds.', 'Community Garden', '2024-03-22', 2),
('Seed Distribution Drive', 'Providing seeds to local families.', 'GreenHarvest HQ', '2024-04-18', 2),
('Composting Workshop', 'Teaching composting techniques.', 'City Hall', '2024-05-05', 2),
('Irrigation Setup', 'Installing drip irrigation systems.', 'Urban Farm', '2024-06-12', 2),
('Farmers Market Support', 'Helping run the weekly farmers market.', 'Central Plaza', '2024-07-08', 2),

('Youth Mentorship', 'Pairing mentors with local youth.', 'UnityServe Center', '2024-03-30', 3),
('Charity Run Event', 'Organizing a 5K charity run.', 'City Stadium', '2024-04-25', 3),
('Food Pantry Support', 'Sorting and distributing food donations.', 'Community Pantry', '2024-05-20', 3),
('Senior Outreach', 'Visiting seniors and offering assistance.', 'Sunrise Home', '2024-06-14', 3),
('Back-to-School Drive', 'Providing supplies to students.', 'Lincoln School', '2024-07-28', 3);


