import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — QuotaDoctor",
  description:
    "QuotaDoctor Privacy Policy. Learn how we collect, use, and protect your personal information, including SMS messaging consent.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 2, 2026";

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A2F4C] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#4AACDE] font-semibold text-sm uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-4 text-base">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            1. Introduction
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            QuotaDoctor (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
            your personal information and your right to privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <span className="text-[#0A2F4C] font-semibold">
              quotadoctor.ai
            </span>{" "}
            or contact us through any of our services, including via telephone
            and SMS text messaging.
          </p>
          <p className="text-[#6B7280] leading-relaxed mt-4">
            Please read this policy carefully. If you disagree with its terms,
            please discontinue use of our site and services.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            2. Information We Collect
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We may collect the following categories of personal information:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[#6B7280]">
            <li>
              <strong className="text-[#0A2F4C]">Contact Information:</strong>{" "}
              Your name, email address, phone number, and business name when you
              submit our contact form.
            </li>
            <li>
              <strong className="text-[#0A2F4C]">Message Content:</strong> Any
              information you provide in the &ldquo;How can we help you?&rdquo;
              field of our contact form.
            </li>
            <li>
              <strong className="text-[#0A2F4C]">Usage Data:</strong> Pages
              visited, time spent on pages, browser type, and device information
              collected automatically via standard web analytics.
            </li>
            <li>
              <strong className="text-[#0A2F4C]">Communications:</strong> The
              content of any emails or messages you send to us.
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            3. SMS Messaging — Consent, Terms &amp; Opt-Out
          </h2>
          <div className="bg-blue-50 border border-[#4AACDE]/30 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-black text-[#0A2F4C]">
              SMS / Text Message Program Disclosure
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              By providing your phone number and checking the SMS consent
              checkbox on our contact form, you expressly consent to receive
              text messages (SMS/MMS) from{" "}
              <strong className="text-[#0A2F4C]">QuotaDoctor</strong> at the
              phone number you provided. These messages may include follow-up
              communications, appointment reminders, service information, and
              responses to your inquiry.
            </p>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Message Frequency:</strong>{" "}
                  Message frequency varies based on your inquiry and
                  communication needs.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Message &amp; Data Rates:</strong>{" "}
                  Message and data rates may apply. Check with your mobile
                  carrier for details.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">To Opt Out:</strong> Reply{" "}
                  <strong>STOP</strong> to any text message to cancel. You may
                  also opt out by emailing{" "}
                  <a
                    href="mailto:Dave@quotadoctor.ai"
                    className="text-[#4AACDE] underline"
                  >
                    Dave@quotadoctor.ai
                  </a>{" "}
                  or calling{" "}
                  <a
                    href="tel:7204651809"
                    className="text-[#4AACDE] underline"
                  >
                    720-465-1809
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">For Help:</strong> Reply{" "}
                  <strong>HELP</strong> for more information, or contact us at{" "}
                  <a
                    href="mailto:Dave@quotadoctor.ai"
                    className="text-[#4AACDE] underline"
                  >
                    Dave@quotadoctor.ai
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">
                    No Third-Party Sharing:
                  </strong>{" "}
                  Your SMS opt-in consent and phone number will{" "}
                  <strong>NOT</strong> be sold, rented, or shared with third
                  parties for their marketing purposes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Consent is Optional:</strong>{" "}
                  Providing your phone number and consenting to SMS is not a
                  condition of purchasing any goods or services.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            4. How We Use Your Information
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[#6B7280]">
            <li>Respond to your inquiries and contact form submissions</li>
            <li>
              Send SMS text messages if you have opted in to receive them
            </li>
            <li>Schedule and confirm appointments or consultations</li>
            <li>Provide, operate, and improve our services</li>
            <li>
              Send administrative communications related to your account or
              inquiry
            </li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            5. Sharing Your Information
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We do <strong className="text-[#0A2F4C]">not</strong> sell, trade,
            rent, or share your personal information — including your phone
            number and SMS opt-in data — with third parties for marketing
            purposes. We may share information only in the following limited
            circumstances:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[#6B7280]">
            <li>
              <strong className="text-[#0A2F4C]">Service Providers:</strong>{" "}
              Trusted vendors who assist us in operating our website and
              delivering our services (e.g., cloud hosting, CRM tools), under
              strict confidentiality obligations.
            </li>
            <li>
              <strong className="text-[#0A2F4C]">Legal Requirements:</strong>{" "}
              When required by law, subpoena, or other legal process, or to
              protect our rights and the safety of others.
            </li>
            <li>
              <strong className="text-[#0A2F4C]">Business Transfers:</strong>{" "}
              In the event of a merger, acquisition, or sale of all or part of
              our assets, your information may be transferred as part of that
              transaction.
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            6. Data Retention
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            We retain personal information for as long as necessary to fulfill
            the purposes described in this policy, or as required by law. SMS
            consent records — including the date, time, and method of consent —
            are retained for a minimum of 4 years in compliance with TCPA
            requirements.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            7. Your Rights &amp; Choices
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            Depending on your location, you may have rights regarding your
            personal data, including:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[#6B7280]">
            <li>
              The right to access personal information we hold about you
            </li>
            <li>The right to correct inaccurate or incomplete data</li>
            <li>
              The right to request deletion of your personal information
            </li>
            <li>
              The right to withdraw SMS consent at any time by replying{" "}
              <strong>STOP</strong> or contacting us directly
            </li>
            <li>
              The right to opt out of future communications at any time
            </li>
          </ul>
          <p className="text-[#6B7280] leading-relaxed mt-4">
            To exercise any of these rights, contact us at{" "}
            <a
              href="mailto:Dave@quotadoctor.ai"
              className="text-[#4AACDE] underline"
            >
              Dave@quotadoctor.ai
            </a>
            .
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            8. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Our website may use standard web cookies and similar tracking
            technologies to improve your browsing experience and analyze site
            traffic. You may control cookie settings through your browser. Note
            that disabling cookies may affect certain website features.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            9. Third-Party Links
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Our website may contain links to third-party websites (e.g.,
            Calendly, LinkedIn, Instagram, Facebook). We are not responsible for
            the privacy practices or content of those sites. We encourage you to
            review their privacy policies before providing any personal
            information.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            10. Security
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            We implement reasonable administrative, technical, and physical
            safeguards designed to protect your personal information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the Internet is 100% secure.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Our services are not directed to individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe we have inadvertently collected such information, please
            contact us immediately.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            12. Changes to This Policy
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated &ldquo;Last
            Updated&rdquo; date. Your continued use of our website following any
            changes constitutes your acceptance of the revised policy.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            13. Contact Us
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 rounded-2xl p-6 space-y-2 text-[#6B7280]">
            <p>
              <strong className="text-[#0A2F4C]">QuotaDoctor</strong>
            </p>
            <p>Denver, CO</p>
            <p>
              Email:{" "}
              <a
                href="mailto:Dave@quotadoctor.ai"
                className="text-[#4AACDE] underline"
              >
                Dave@quotadoctor.ai
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:7204651809"
                className="text-[#4AACDE] underline"
              >
                720-465-1809
              </a>
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <Link
            href="/"
            className="text-[#4AACDE] font-semibold hover:underline text-sm"
          >
            ← Back to Home
          </Link>
          <Link
            href="/terms"
            className="text-[#4AACDE] font-semibold hover:underline text-sm"
          >
            View Terms of Service →
          </Link>
        </div>
      </div>
    </main>
  );
}
