// Terms.jsx
import React from "react";
import "./PrivacyPolicy.css";
import Footer from "./Components/Footer";

export default function Terms() {
  return (
    <>
      <div className="top">
        <h1>
          <img src="/logo.png" alt="NotesBolt Logo" /> <span>NotesBolt</span>
        </h1>
      </div>

      <div className="main">
        <div className="header">
          <h1 className="terms-title">Terms and Conditions</h1>
          <p className="last-updated">Last updated: September 7, 2025</p>
        </div>

        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>NotesBolt</strong>. These Terms and Conditions
            ("Terms") govern your use of our website and services. By accessing
            or using NotesBolt, you agree to comply with these Terms. If you do
            not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2>2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use NotesBolt. By using our
            services, you represent and warrant that you meet this requirement.
          </p>
        </section>

        <section>
          <h2>3. Accounts</h2>
          <ul>
            <li>
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </li>
            <li>
              You agree to provide accurate, current, and complete information
              during registration.
            </li>
            <li>
              NotesBolt reserves the right to suspend or terminate accounts if
              suspicious or fraudulent activity is detected.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <p>
            You agree to use NotesBolt only for lawful purposes. You will not:
          </p>
          <ul>
            <li>Use NotesBolt for any unlawful, harmful, or abusive purpose.</li>
            <li>Attempt to gain unauthorized access to our systems.</li>
            <li>
              Upload malicious code, viruses, or engage in activity that may
              disrupt our services.
            </li>
            <li>
              Infringe on intellectual property rights of NotesBolt or third
              parties.
            </li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>
            All content, design, and code on NotesBolt are owned by or licensed
            to us and protected under intellectual property laws. You may not
            copy, distribute, or create derivative works without prior written
            consent.
          </p>
        </section>

        <section>
          <h2>6. User Content</h2>
          <p>
            You retain ownership of any content you create or upload on
            NotesBolt. However, by posting content, you grant us a limited,
            worldwide, non-exclusive license to use, display, and store it as
            necessary to operate our services.
          </p>
        </section>

        <section>
          <h2>7. Third-Party Services</h2>
          <p>
            NotesBolt may integrate with third-party services (e.g., hosting,
            analytics, authentication). We are not responsible for the content
            or policies of these third-party services.
          </p>
        </section>

        <section>
          <h2>8. Privacy</h2>
          <p>
            Your use of NotesBolt is also governed by our{" "}
            <a href="/privacy">Privacy Policy</a>, which explains how we collect
            and protect your data.
          </p>
        </section>

        <section>
          <h2>9. Disclaimers</h2>
          <p>
            NotesBolt is provided on an "as is" and "as available" basis. We do
            not guarantee that the service will be error-free, secure, or
            uninterrupted. Your use of the service is at your own risk.
          </p>
        </section>

        <section>
          <h2>10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, NotesBolt shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of our services.
          </p>
        </section>

        <section>
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless NotesBolt, its affiliates,
            and employees from any claims, damages, or expenses resulting from
            your use of our services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>12. Termination</h2>
          <p>
            We may suspend or terminate your access to NotesBolt at any time,
            without prior notice, if you breach these Terms or engage in
            unlawful activity.
          </p>
        </section>

        <section>
          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of India, without regard to conflict of law principles.
          </p>
        </section>

        <section>
          <h2>14. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Any changes will be
            posted here with a revised “Last updated” date. Continued use of the
            service after changes constitutes acceptance.
          </p>
        </section>

        <section>
          <h2>15. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:{" "}
            <a href="mailto:support@notesbolt.com">support@notesbolt.com</a>
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
