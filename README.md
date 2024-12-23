
# KrishiSahayak - Empowering Farmers through Technology

## Project Summary
KrishiSahayak is a comprehensive platform designed to bridge the gap between the government and farmers by facilitating easy access to agricultural schemes. The platform allows administrators to post schemes, track applications, and manage statuses while enabling users to explore, apply for, and monitor their application statuses.

## Features

### For Users:
- **View Schemes:** Browse a list of government schemes with detailed information.
- **Apply for Schemes:** Fill out a detailed application form for schemes directly on the platform.
- **Track Applications:** Monitor the status of submitted applications (Pending, Approved, or Rejected).
- **User Dashboard:** A personalized dashboard to view applied schemes and their statuses.

### For Admins:
- **Post New Schemes:** Create and publish new schemes with detailed descriptions.
- **Manage Applications:** View applicants for each scheme along with their details.
- **Approve/Reject Applications:** Change the status of applications based on eligibility and requirements.
- **Admin Dashboard:** A centralized dashboard for scheme and application management.

## How the System Works

### Scheme Creation:
1. Admin logs in and navigates to the "Post a New Scheme" section.
2. Admin fills in the scheme title, summary, and details.
3. Scheme is added to the database and visible to all users.

### User Application:
1. User logs in and explores available schemes.
2. User clicks on a scheme to view its details and fills out the application form.
3. Application data is stored in the database for admin review.

### Application Review:
1. Admin views the list of applicants for each scheme in the admin dashboard.
2. Admin approves or rejects applications and provides feedback if necessary.
3. User sees the updated status on their dashboard.

## Technical Stack
- **Frontend:** React.js, React Router, Bootstrap for styling.
- **Backend:** Firebase Realtime Database for real-time data synchronization.
- **Authentication:** Firebase Authentication.
- **State Management:** Redux Toolkit for managing roles and application states.

## Installation and Setup
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure Firebase credentials in the `firebase.js` file.
4. Start the development server with `npm start`.

## Conclusion
KrishiSahayak is a user-friendly and efficient platform that empowers farmers by providing seamless access to government schemes. Its robust features for both users and admins ensure transparency and effective communication.
