import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — QuotaDoctor",
  description:
    "QuotaDoctor Terms of Service. Read our terms and conditions for using our website and AI-powered services.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "April 10, 2026";

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0A2F4C] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#4AACDE] font-semibold text-sm uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            Terms of Service
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
            1. Acceptance of Terms
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            By accessing or using the QuotaDoctor website at{" "}
            <span className="text-[#0A2F4C] font-semibold">
              quotadoctor.ai
            </span>{" "}
            (the &ldquo;Site&rdquo;) or any of our services, you agree to be
            bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do
            not agree to these Terms, please discontinue use of the Site and our
            services immediately.
          </p>
          <p className="text-[#6B7280] leading-relaxed mt-4">
            These Terms constitute a legally binding agreement between you and
            QuotaDoctor (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a business located in
            Denver, Colorado.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            2. Description of Services
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            QuotaDoctor provides AI-powered business automation services for
            small and local businesses, including but not limited to: 24/7 AI
            phone answering, SMS lead follow-up, review collection automation,
            and social media management. Specific service terms, pricing, and
            scope are outlined in separate service agreements provided upon
            onboarding.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            3. SMS &amp; Text Messaging Terms
          </h2>
          <div className="bg-blue-50 border border-[#4AACDE]/30 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-black text-[#0A2F4C]">
              SMS Communication Terms
            </h3>
            <p className="text-[#6B7280] leading-relaxed">
              When you provide your phone number and opt in to receive SMS
              messages from QuotaDoctor (by checking the consent checkbox on our
              contact form), you agree to the following terms:
            </p>
            <ul className="space-y-3 text-[#6B7280]">
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Program Description:</strong>{" "}
                  You will receive text messages from QuotaDoctor related to
                  your inquiry, including follow-up communications, consultation
                  scheduling, and service information.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Message Frequency:</strong>{" "}
                  Message frequency varies. We will only text you as needed to
                  respond to your inquiry or follow up on your request.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Message &amp; Data Rates:</strong>{" "}
                  Message and data rates may apply depending on your mobile
                  carrier plan. QuotaDoctor is not responsible for any charges
                  from your carrier.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">How to Opt Out:</strong>{" "}
                  You may opt out at any time by replying{" "}
                  <strong>STOP</strong> to any text message you receive from us.
                  You may also opt out by emailing{" "}
                  <a
                    href="mailto:Dave@quotadoctor.ai"
                    className="text-[#4AACDE] underline"
                  >
                    Dave@quotadoctor.ai
                  </a>{" "}
                  or calling{" "}
                  <a href="tel:7206062741" className="text-[#4AACDE] underline">
                    720-606-2741
                  </a>
                  . We will honor opt-out requests promptly.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">How to Get Help:</strong>{" "}
                  Reply <strong>HELP</strong> to any message for assistance, or
                  contact us at{" "}
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
                  <strong className="text-[#0A2F4C]">Consent is Voluntary:</strong>{" "}
                  Consenting to receive SMS messages is not required to purchase
                  any goods or services from QuotaDoctor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">TCPA Compliance:</strong>{" "}
                  Our SMS program complies with the Telephone Consumer Protection
                  Act (TCPA) and CTIA guidelines. By opting in, you provide
                  prior express written consent as required under the TCPA.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">No Third-Party Sharing:</strong>{" "}
                  Your SMS opt-in information and phone number will{" "}
                  <strong>NOT</strong> be sold, rented, or shared with third
                  parties for their marketing purposes.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4AACDE] font-black mt-0.5">•</span>
                <span>
                  <strong className="text-[#0A2F4C]">Supported Carriers:</strong>{" "}
                  Carriers are not liable for delayed or undelivered messages.
                  Compatible with major US carriers including AT&amp;T, T-Mobile,
                  Verizon, and others.
                </span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            4. Use of the Site
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            You agree to use the Site only for lawful purposes and in a manner
            that does not infringe the rights of others. You may not:
          </p>
          <ul className="list-disc list-outside pl-6 space-y-2 text-[#6B7280]">
            <li>
              Use the Site in any way that violates applicable local, national,
              or international laws or regulations
            </li>
            <li>
              Transmit any unsolicited or unauthorized advertising or promotional
              material
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Site or its
              related systems
            </li>
            <li>
              Reproduce, duplicate, or exploit any portion of the Site without
              express written permission from QuotaDoctor
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            5. Intellectual Property
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            The Site and its original content, features, and functionality are
            owned by QuotaDoctor and are protected by applicable copyright,
            trademark, and other intellectual property laws. You may not use our
            branding, logo, or content without prior written permission.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            6. Privacy
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Your use of the Site is also governed by our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#4AACDE] underline"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. By using the
            Site, you consent to the data practices described in our Privacy
            Policy.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            The Site and its content are provided on an &ldquo;as is&rdquo; and
            &ldquo;as available&rdquo; basis without warranties of any kind,
            either express or implied. QuotaDoctor does not warrant that the
            Site will be uninterrupted, error-free, or free of viruses or other
            harmful components.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            8. Limitation of Liability
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            To the fullest extent permitted by law, QuotaDoctor shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Site or our services,
            even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            9. Third-Party Services
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Our Site may link to third-party websites or services (including
            Calendly for scheduling). These third parties have their own terms
            and privacy policies. QuotaDoctor is not responsible for the
            practices of any third-party services.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            10. Governing Law
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            These Terms are governed by and construed in accordance with the
            laws of the State of Colorado, without regard to its conflict of law
            provisions. Any disputes arising under these Terms shall be subject
            to the exclusive jurisdiction of the courts located in Denver,
            Colorado.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            11. Changes to These Terms
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will
            be posted on this page with an updated &ldquo;Last Updated&rdquo;
            date. Your continued use of the Site after any changes constitutes
            your acceptance of the revised Terms.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h2 className="text-2xl font-black text-[#0A2F4C] mb-3">
            12. Contact Us
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            For questions about these Terms of Service, please contact us:
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
                href="tel:7206062741"
                className="text-[#4AACDE] underline"
              >
                720-606-2741
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
            href="/privacy-policy"
            className="text-[#4AACDE] font-semibold hover:underline text-sm"
          >
            View Privacy Policy →
          </Link>
        </div>
      </div>
    </main>
  );
}
