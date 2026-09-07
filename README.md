# Constituency Connect

You are a Senior Product Architect, UX Designer, React Developer, and Government Digital Governance Platform specialist.

Create a completely new, production-quality constituency digital governance web application named:

ARAM

Citizen-first Digital Governance Platform

The application should help citizens communicate with their constituency office, report civic problems, track resolution, discover government schemes, book appointments, receive public updates, and understand ongoing constituency development.

The platform must be accessible in:

English

Tamil

The language switch must work throughout the entire application.

Do not simply copy the design of existing government portals. Create a distinctive, modern, trustworthy, citizen-friendly UX.

1. PRODUCT VISION

ARAM should feel like:

"One digital place for everything a citizen needs from their constituency."

The application should combine:

Citizen Services

Civic Grievance Management

Government Schemes

Constituency Development

MLA Appointment

Public Transparency

AI Assistance

GIS Mapping

Notifications

Citizen Feedback

The design should be simple enough for an elderly citizen but modern enough for younger users.

2. BRAND IDENTITY

Application Name:

ARAM

Suggested meaning/positioning:

"Accessible • Responsive • Accountable • Modern"

Use ARAM as the primary brand.

Create:

ARAM logo

ARAM favicon

ARAM loading animation

ARAM login experience

ARAM dashboard identity

Do not use third-party builder branding.

Do not make the application look like a generic SaaS dashboard.

3. UX DIRECTION

Create a completely different UX from traditional government websites.

Use:

Citizen-first navigation

Large visual actions

Contextual cards

Progressive disclosure

Minimal forms

Interactive maps

Timeline-based tracking

Smart search

Personalized recommendations

Clear status indicators

Accessibility-first design

Avoid:

Excessive blue cards

Large blocks of text

Complicated dashboards

Crowded navigation

Unnecessary animations

Excessive glassmorphism

Generic Bootstrap-style layouts

The interface should feel calm, trustworthy and modern.

4. LANGUAGE SYSTEM

Support only:

Tamil
English

Create a global language switch:

தமிழ் | English

The selected language must apply to:

Navigation

Buttons

Forms

Complaint categories

Government schemes

Notifications

Appointment booking

Dashboard

Help center

AI assistant

Validation messages

Error messages

Do not translate user-generated complaint content automatically unless an AI translation feature is later enabled.

Store language preference locally.

5. HOME PAGE

Create a highly engaging homepage.

Do not make the homepage look like an administrative dashboard.

Hero message:

"Your Voice. Your Area. Your ARAM."

Supporting text:

"Report issues, access services, track progress and stay connected with your constituency."

Primary actions:

Report an Issue
Track My Issue

Secondary actions:

Government Schemes
Book an Appointment

Add an AI-powered search/command bar:

"What do you need help with?"

Example suggestions:

Report a road problem

Check my complaint

Find a government scheme

Book an appointment

Find an emergency service

View constituency projects

6. QUICK CITIZEN SERVICES

Create a horizontal interactive service ribbon.

Services:

Report an Issue
Track an Issue
Government Schemes
Meet Your MLA
Emergency Help
Constituency Updates

Use a smooth carousel.

On mobile:

One card visible

Swipe support

Touch-friendly

No horizontal page overflow

7. ARAM LIVE STATUS

Create a simple public status section.

Do not overload it with analytics.

Display:

Complaints Resolved
Complaints In Progress
New Complaints

Add:

"View Constituency Status"

Use verified/approved data only.

If backend is not connected, clearly treat numbers as demo data.

8. LIVE CONSTITUENCY MAP

Create a major ARAM feature:

"What's Happening Around You?"

Use a real interactive Google Map.

The map should show the actual implementation constituency.

Complaint markers:

Green = Resolved
Yellow = In Progress
Red = Newly Registered
Blue = Assigned
Gray = Pending Verification

Clicking a marker should show:

Complaint ID
Category
Status
Ward
Department
Date
Location
Before/After evidence where applicable

Add filters:

Status
Category
Ward
Department

Add:

Normal Map
Heat Map

The architecture must support GeoJSON/KML ward boundaries.

Do not use artificial SVG maps as a replacement for the actual map.

9. SMART COMPLAINT SYSTEM

Create a complete citizen complaint workflow.

Step 1:

Choose issue category.

Examples:

Road
Drainage
Street Light
Water
Waste
Public Health
Electricity
Public Infrastructure
Other

Step 2:

Describe the problem.

Step 3:

Upload:

Photo
Video
Voice

Step 4:

Select location.

Options:

Use Current Location
Search Address
Select on Map

Step 5:

AI-assisted classification.

Show:

Detected Category
Suggested Department
Priority
Possible Duplicate

Citizen must confirm before submission.

Step 6:

Submit.

Generate:

ARAM Complaint ID

Example:

ARAM-2026-000245

10. COMPLAINT TRACKING

Create a visual timeline.

Submitted

↓

Verified

↓

Assigned

↓

Officer Assigned

↓

Work Started

↓

Work Completed

↓

Department Verified

↓

Citizen Verification

↓

Closed

Each stage should show:

Date
Time
Responsible department
Update

11. BEFORE & AFTER PROOF

For completed complaints:

Before

↓

Work Completed

↓

After

Allow the citizen to compare images using:

Slider

Side-by-side view

Display:

Work Completed On
Department
Officer/Team
Status

12. CITIZEN VERIFICATION

After an officer marks a complaint complete:

Ask:

"Has your issue been resolved?"

Options:

Yes, Resolved

No, Still an Issue

If Yes:

1–5 rating

Comment

If No:

Reopen Complaint
Add Comment
Upload New Photo

This feedback should contribute to citizen satisfaction analytics.

13. GOVERNMENT SCHEMES

Create:

"Find Government Schemes"

Do not simply display PDF cards.

Each scheme should show:

Overview
Benefits
Eligibility
Required Documents
Application Process
Official Source
Apply

Add:

"Find Schemes for Me"

Ask simple questions such as:

Age
Gender
Income
Occupation
Education
Relevant eligibility conditions

Return:

"Potentially Relevant Schemes"

Never claim final legal eligibility unless verified against official rules.

14. MLA APPOINTMENT

Create:

"Meet Your MLA"

Citizen can:

Request Appointment
Choose Purpose
Select Preferred Date
Select Available Time
Add Description
Upload Supporting Documents
Submit

After submission:

Generate Appointment ID.

Status:

Pending Review
Under Verification
Approved
Rescheduled
Rejected
Completed

Citizen receives notifications.

15. CONSTITUENCY DEVELOPMENT TRACKER

Create:

"See Where Development Is Happening"

Display public development projects.

Each project:

Project Name
Ward
Department
Location
Start Date
Expected Completion
Status
Progress
Approved Budget, only if verified
Before Image
Progress Image
Completed Image

Statuses:

Planned
In Progress
Completed
Delayed

Allow projects to appear on the constituency map.

16. WARD EXPERIENCE

Create a dedicated:

"Explore Your Ward"

The system should support the official wards configured for the selected constituency.

Each ward page can contain:

Ward Overview
Public Issues
Resolved Issues
Ongoing Projects
Development Works
Important Facilities
Ward Map

Do not hardcode incorrect ward information.

Create a centralized ward configuration so the constituency administrator can manage the official ward list.

17. PUBLIC TRANSPARENCY

Create:

"Constituency at a Glance"

Show approved aggregated statistics:

Total Complaints
Resolved
In Progress
Average Resolution Time
Citizen Satisfaction
Development Projects
Completed Projects

Do not expose:

Citizen phone numbers
Addresses
Aadhaar numbers
Private documents
Sensitive personal information

18. CONSTITUENCY NEWS

Create:

"Latest Constituency Updates"

Categories:

Public Notice
Development Work
Government Announcement
Event
Emergency Alert
Scheme Update

Each update:

Title
Image
Date
Category
Description
Read More

19. AI CITIZEN ASSISTANT

Create an ARAM AI assistant.

The assistant should help users with:

Complaint Registration
Complaint Tracking
Government Schemes
Eligibility
Documents
Appointments
Departments
Ward Information
Public Services

Support:

Tamil
English

Include suggested prompts.

Example:

"How do I report a road problem?"

"Which documents are required for this scheme?"

"Where is my complaint?"

"How do I meet the MLA?"

For frontend development, use mock responses.

Keep the architecture ready for a real AI backend.

20. VOICE-FIRST EXPERIENCE

Provide a microphone button for:

Voice complaint

AI assistant

Search

Flow:

Tap microphone

↓

Speak

↓

Speech-to-text

↓

Citizen reviews text

↓

Submit

Never submit a complaint automatically without citizen confirmation.

21. SMART NOTIFICATIONS

Create a notification center.

Citizen notifications:

Complaint Submitted
Complaint Assigned
Work Started
Work Completed
Verification Required
Complaint Closed
Appointment Approved
Appointment Reminder
Scheme Update
Public Announcement
Emergency Alert

Use:

Read
Unread
Priority

22. DIGITAL RECEIPTS

After submitting important requests, generate a digital receipt.

Complaint:

ARAM Complaint ID
Date
Category
Ward
Location
Status

Appointment:

ARAM Appointment ID
Date
Time
Purpose
Status

Provide:

Download Receipt
Track Status

23. ADMINISTRATION

Create role-based administration.

Roles:

Super Admin

Constituency Admin

Department Admin

Field Officer

Content & Citizen Services Admin

Each role should have a separate dashboard and permissions.

24. SUPER ADMIN

Manage:

Users
Roles
Departments
Constituencies
Wards
Permissions
System Settings
Audit Logs
Security
Notifications
Reports

25. CONSTITUENCY ADMIN

Manage:

Complaints
Appointments
Development Projects
Citizen Feedback
Constituency Updates
Ward Analytics
Department Performance
Public Announcements

26. DEPARTMENT ADMIN

Manage:

Department Complaints
Officer Assignment
SLA
Work Progress
Completion Verification
Department Reports

27. FIELD OFFICER

Mobile-first dashboard.

Show:

Today's Assignments
Complaint Location
Navigate
Complaint Details
Before Photo
Work Update
After Photo
Complete Work

The officer should be able to use the dashboard comfortably from a mobile phone while working in the field.

28. CONTENT ADMIN

Manage:

Announcements
Government Schemes
FAQs
Banners
Events
Notifications
Citizen Information

29. ROLE-BASED LOGIN

Create one:

"Login"

entry point.

Do not expose separate Admin Login / MLA Login buttons publicly.

After authentication, redirect based on role:

Citizen → Citizen Dashboard

Field Officer → Officer Dashboard

Department Admin → Department Dashboard

Constituency Admin → Constituency Dashboard

Super Admin → Super Admin Dashboard

Use mock authentication for the frontend phase.

Prepare the architecture for secure backend authentication later.

30. MOBILE-FIRST DESIGN

The application must be fully optimized for:

320px
360px
375px
390px
414px
430px
Tablet
Desktop

No horizontal scrolling.

Forms should become single-column.

Maps should remain touch-friendly.

Dashboards should become mobile cards.

Navigation should become a mobile drawer.

All important buttons should have minimum 44px touch targets.

31. ACCESSIBILITY

Support:

Tamil
English

Include:

Large Text
High Contrast
Keyboard Navigation
Screen Reader Support
Clear Focus States
Accessible Forms
ARIA Labels

32. TECHNOLOGY

Frontend:

React
TypeScript
Vite

UI:

Tailwind CSS
Shadcn UI
Framer Motion
Lucide React

Routing:

React Router or existing project router

State:

Zustand or existing state architecture

Forms:

React Hook Form
Zod

Maps:

Google Maps JavaScript API

Charts:

Recharts

Backend-ready API layer:

Axios / fetch abstraction

Future backend:

Node.js
PostgreSQL
Redis
AI Services

Deployment:

Docker
Azure / Vercel depending on environment

Do not add unnecessary dependencies if an existing project dependency already provides the same capability.

33. ARCHITECTURE REQUIREMENT

Before implementing, inspect the existing project.

Identify:

Existing routes
Existing components
Existing design system
Existing map implementation
Existing authentication
Existing dashboards
Existing data models
Existing reusable UI components

Reuse what is appropriate.

Do not duplicate existing components.

Create centralized configuration for:

Constituency
Ward
Departments
Complaint Categories
Languages
Roles
Statuses

34. DEMO DATA

Use clearly labelled mock/demo data during frontend development.

Never present fabricated government statistics as real data.

Do not use real citizen personal information.

Keep all public statistics configurable through backend APIs later.

35. DESIGN QUALITY

The final product should feel like:

A premium citizen service platform + smart constituency command center.

It should NOT feel like:

A basic government website
A generic admin template
A CRUD application
A collection of cards

Prioritize:

Clarity
Trust
Accessibility
Speed
Citizen action
Transparency
Visual hierarchy

36. IMPLEMENTATION PROCESS

Do not immediately rewrite the project.

First:

Analyze the current application.

Identify reusable components.

Identify missing modules.

Create an implementation plan.

Wait for approval if the environment requires plan approval.

Then implement feature-by-feature.

Implementation priority:

Phase 1:
Home
Citizen Services
Complaint Registration
Complaint Tracking
Google Map

Phase 2:
Government Schemes
Appointment Booking
Notifications
Citizen Feedback

Phase 3:
Development Tracker
Public Transparency
AI Assistant
Voice Experience

Phase 4:
Admin
Department
Field Officer
Constituency Dashboards

Phase 5:
Backend integration and production authentication.

37. FINAL QUALITY CHECK

Before completing:

Run the application.

Check:

Home
Login
Citizen Dashboard
Complaint Registration
Complaint Tracking
Google Map
Government Schemes
Appointment Booking
Notifications
Development Tracker
AI Assistant
Super Admin
Constituency Admin
Department Admin
Field Officer
Content Admin

Test Tamil and English.

Test mobile and desktop.

Run:

npm run build

Fix all TypeScript, routing, layout and build errors.

Do not stop at generating a plan if implementation permission has been granted.

At the end provide:

Files modified

Components created

Routes created

Features implemented

Mock data created

Build status

Remaining backend requirements

Recommended next development phase

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
