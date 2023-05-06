import { Route, Routes } from "react-router-dom";
import Home from "../../components/Pages/Home/Home"
import { Box } from "@material-ui/core";
import SignIn from "../../components/LoginSignUpComponent/SignIn";
import SignUp from "../../components/LoginSignUpComponent/SignUp";
import RichTextEditor from "../../components/EditiorComponent/TextEditor.js";
const Router = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Editor" element={<RichTextEditor />} />
        {/* <Route path="/test" element={<Test />} />
      <Route path="/job-search" element={<JobSearchPage />} />
      <Route path="/employee-search" element={<EmployeeSearchPage />} />
      <Route path="/job-profile" element={<JobProfile />}>
        <Route path=":id" element={<JobProfile />} />
      </Route>
      <Route
        path="/candidate-profile/:id/:jobId"
        element={<CanditateProfile />}
      />
      <Route path="/payment/:planId/:customId" element={<PaymentButton />} />
      <Route
        path="/checkout_plan/:planId/:count/:customId"
        element={<CheckoutPaymentButton />}
      />
      <Route
        path="/update_plan/:planId/:customId"
        element={<UpdateSubscription />}
      />
      <Route
        path="/Schedule-interview/:id/:jobId"
        element={<ScheduledInterviewCandidate />}
      />
      <Route path="/candidate-list" element={<CandidatesList />} />
      <Route path="/candidate-list-agency" element={<CandidatesListAgency />} />
      <Route path="/about-Us" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/policy" element={<PolicyComponent />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact-us" element={<ContactDetails />} />
      <Route path="/company-profile">
        <Route path=":id" element={<CompanyProfile />} />
      </Route>
      <Route path="/pricing" element={<Pricing />} />
      <Route
        path="/company-profile-updating"
        element={<CompanyProfileUpadtingPage />}
      />
      <Route
        path="/Agency-profile-updating"
        element={<AgentCompanyUpadtingPage />}
      />
      <Route
        path="/candidate-profile-updating"
        element={<CandidateProfileUpadtingPage />}
      />
      <Route path="/WelCome_To_TGL" element={<WelcomePage />} />
      <Route path="/WelCome_To_TGL_Portal" element={<WelcomeOrganization />} />
      <Route path="/WelCome_To_TGL_Portal_Agency" element={<WelcomeAgency />} />
      

      <Route path="/employee-dashboard" element={<EmployeeDashboard />}>
        <Route path="" element={<EmployeeDashboardComponent />} />
        <Route path="manage-seats" element={<ManageUsersPage />} />

        <Route path="manage-payment">
          <Route path="" element={<EmployeeDashboardPaymentInvoices />} />
          <Route path=":id" element={<EmployeeDashboardManageInvoices />} />
        </Route>
        <Route path="Omg-Assessment">
          <Route path="" element={<AgencyDashboardOmgAssessment />} />
          <Route path=":id" element={<AgencyDashboardAddOmgAssessment />} />
        </Route>
        <Route path="dashboard">
          <Route path="" element={<EmployeeDashboardComponent />} />
          <Route path=":id" element={<AgentDashboardScheduledInteview />} />
        </Route>
        <Route path="blogs" element={<EmployeeDashboardBlogs />} />
        <Route
          path="Learning_Resourcses"
          element={<EmployeeDashboardLearningResourcses />}
        />
        <Route
          path="company-profile"
          element={<EmployeeDashboardCompanyProfile />}
        />
        <Route path="post-new-job" element={<EmployeeDashboardPostNewJob />} />
        <Route path="manage-jobs">
          <Route path="" element={<EmployeeDashboardManageJobs />} />
          <Route path=":id" element={<EmployeeDashboardEditJob />} />
        </Route>
        <Route
          path="all-applicants"
          element={<EmployeeDashboardAllApplicants />}
        />
        <Route
          path="agency-recruitment"
          element={<EmployeeDashboardAgencyRecuirement />}
        />
        <Route
          path="agency-invites"
          element={<EmployeeDashboardAgencyInvites />}
        />
        <Route
          path="invite-applicants"
          element={<EmployeeDashboardInviteCandidates />}
        />
        <Route
          path="shortlisted-resumes"
          element={<EmployeeDashboardShorlistedResumes />}
        />
        <Route path="message" element={<EmployeeDashboardMessage />} />
        <Route
          path="notification"
          element={<EmployeeDashboardResumeAlerts />}
        />
        <Route
          path="change-password"
          element={<CandidateDashboardChangePassword />}
        />
        <Route path="view-profile" element={<EmployeeDashboardViewProfile />} />
      </Route>
      <Route path="/candidate-dashboard" element={<CandidateDashboard />}>
        <Route path="" element={<CandidateDashboardComponent />} />
        <Route path="dashboard">
          <Route path="" element={<CandidateDashboardComponent />} />
          <Route path=":id" element={<AgentDashboardScheduledInteview />} />
        </Route>
        <Route path="my-profile" element={<CandidateDashboardMyProfile />} />
        <Route path="my-resume" element={<CandidateDashboardMyResume />} />
        <Route path="job-invites" element={<JobInvites />} />
        <Route path="job-offer" element={<JobOffers />} />
        <Route path="sale-dna-invite" element={<DnaSalesInvites />} />
        <Route path="bookmarked-jobs" element={<Bookmarkedjobs />} />
        <Route path="suggested-jobs" element={<SuggestedJobs />} />
        <Route
          path="applied-jobs"
          element={<CandidateDashboardAppliedJobs />}
        />
        <Route path="job-alerts" element={<CandidateDashboardJobAlerts />} />
        <Route
          path="shortlisted-jobs"
          element={<CandidateDashboardShortlistedJobs />}
        />
        <Route path="message" element={<CandidateDashboardMessage />} />
        <Route path="notification" element={<CandidateNotification />} />
        <Route path="cv-manager" element={<CandidateDashboardCVManager />} />
        <Route
          path="change-password"
          element={<CandidateDashboardChangePassword />}
        />
      </Route>
      <Route path="/Agency-dashboard" element={<AgencyDashboard />}>
        <Route path="" element={<AgentDashboardComponent />} />
        <Route path="dashboard">
          <Route path="" element={<AgentDashboardComponent />} />
          <Route path=":id" element={<AgentDashboardScheduledInteview />} />
        </Route>
        <Route path="manage-payment">
          <Route path="" element={<EmployeeDashboardPaymentInvoices />} />
          <Route path=":id" element={<EmployeeDashboardManageInvoices />} />
        </Route>
        <Route
          path="Scheduled-interview"
          element={<AgentDashboardScheduledInteview />}
        />

        <Route
          path="company-profile"
          element={<AgencyDashboardCompanyProfile />}
        />
        <Route path="post-new-job" element={<AgencyDashboardPostNewJob />} />

        <Route path="manage-seats" element={<ManageUsersPageAgency />} />
        <Route path="manage-jobs">
          <Route path="" element={<AgencyDashboardManageJobs />} />
          <Route path=":id" element={<AgencyDashboardEditJob />} />
        </Route>
        <Route path="Omg-Assessment">
          <Route path="" element={<AgencyDashboardOmgAssessment />} />
          <Route path=":id" element={<AgencyDashboardAddOmgAssessment />} />
        </Route>
        <Route
          path="all-applicants"
          element={<AgencyDashboardAllApplicants />}
        />
        <Route
          path="invite-applicants"
          element={<AgencyDashboardInviteCandidates />}
        />
        <Route path="message" element={<AgencyDashboardMessage />} />
        <Route path="blogs" element={<AgencyDashboardBlogs />} />
        <Route
          path="Learning_Resourcses"
          element={<AgencyDashboardLearningResourcses />}
        />
        <Route path="notification" element={<AgencyDashboardResumeAlerts />} />
        <Route
          path="company-invite"
          element={<AgencyDashboardCompanyInvite />}
        />
        <Route
          path="change-password"
          element={<AgencyDashboardChangePassword />}
        />
      </Route>
      <Route path="/super-admin-dashboard" element={<SuperAdminDashboard />}>
        <Route path="dashboard" element={<SuperAdminDashboardComponent />} />
        <Route path="Omg-Assessment">
          <Route path="" element={<SuperAdminDashboardOmgAssessment />} />
          <Route
            path=":id"
            element={<SuperAdminDashboardUpdateOmgAssessment />}
          />
        </Route>
        <Route path="company-list">
          <Route path="" element={<SuperAdminDashboardCompanyList />} />
          <Route path=":id" element={<SuperAdminDashboardCompanyView />} />
        </Route>
        <Route path="job-seeker">
          <Route path="" element={<SuperAdminDashboardJobSeeker />} />
          <Route path=":id" element={<SuperAdminDashboardCandidateProfile />} />
        </Route>
        <Route path="edit-plans">
          <Route path="" element={<SuperAdminEditPlansPopupTable />} />
          <Route path=":id" element={<SuperAdminEditPlansById />} />
        </Route>
        <Route path="about-us" element={<SuperAdminDashboardAboutUs />} />
        <Route path="form-field" element={<SuperAdminDashboardFormField />} />
        <Route path="terms" element={<SuperAdminDashboardTerms />} />
        <Route path="policy" element={<SuperAdminDashboardPolicy />} />
        <Route path="faq" element={<SuperAdminDashboardFaq />} />
        <Route
          path="contact-us-details"
          element={<SuperAdminDashboardContactUsDetails />}
        />
        <Route path="notification" element={<NotificationDetails />} />
        <Route
          path="learning-resources"
          element={<SuperAdminDashboardLearningResources />}
        />
        <Route path="blogs" element={<SuperAdminDashboardBlogs />} />
        <Route
          path="payment-invoices"
          element={<SuperAdminDashboardPaymentInvoices />}
        />
      </Route>

      <Route path="/no-plans" element={<SuperAdminDashboardNoPlans />} />
      <Route path="/job-not-found" element={<JobNotFound />} />
      <Route path="/error-page" element={<ErrorPage />} />
      <Route path="/error" element={<ErrorComponent />} />
      <Route
        path="/super-admin-dashboard-pricing"
        element={<SuperAdminDashboardPricing />}
      />
      <Route
        path="/loading-search-components"
        element={<LoadingSearchComponents />}
      />
      <Route path="/message" element={<MessageDefaultScreen />} /> */}
      </Routes>
    </Box>
  );
};

export default Router;
