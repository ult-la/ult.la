import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-palette-card shadow-sm rounded-xl border border-palette-border p-8">
        <h1 className="text-3xl font-bold text-palette-primary mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-palette-secondary">
          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including
              but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Profile information and preferences</li>
              <li>Content you post or share</li>
              <li>Communications with other users</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and complete transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              3. Information Sharing
            </h2>
            <p className="mb-4">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Other users according to your privacy settings</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              4. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of certain data collection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at privacy@example.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-palette-primary mb-4">
              7. Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </section>

          <div className="mt-8 pt-6 border-t border-palette-border">
            <p className="text-sm text-palette-tertiary">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
