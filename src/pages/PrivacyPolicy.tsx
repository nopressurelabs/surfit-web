import Navigation from "@/components/SurfitNavigation";
import Footer from "@/components/SurfitFooter";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: 19th November 2025
          </p>

          <Card className="mb-8">
            <CardContent className="p-8 space-y-8">
              <div>
                <p className="text-foreground leading-relaxed">
                  Surfit ("we," "us," or "our") provides surf-condition information to users without requiring an account. This Privacy Policy explains how we collect, use, and protect information when you use the Surfit iOS app (the "App").
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  1. No Account Required
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Surfit does not require you to create an account or provide any personal login information. You can use the App in full without signing up.
                  </p>
                  <p>
                    Surfit operates entirely on your device. The app does not collect, store, or transmit any personally identifiable information. All processing occurs locally, and no user data is retained on our servers or shared with third parties. The only information used is your device's location, which remains on-device and is used solely to display nearby surf conditions. Location data is never stored or linked to you in any way.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  2. Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.1 Information You Provide
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Because the App does not use accounts, we do not collect personal information such as your name, email, phone number, or address.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.2 Automatically Collected Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      To ensure the App functions properly and to improve user experience, the App may automatically collect certain non-personal data, such as:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Device information (device model, OS version)</li>
                      <li>App usage information (features used, performance data)</li>
                      <li>Crash logs and diagnostics (to improve stability)</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                      This information does not identify you personally.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      2.3 Location Information
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      Surfit may request access to your approximate or precise location to show surf conditions relevant to your area.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Your location data is used only to display surf conditions and is not stored or shared by us.</li>
                      <li>You may disable location access at any time in iOS settings.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  3. Third-Party Services
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We may use trusted third-party tools or APIs to provide surf condition data, analytics, or crash reporting. These may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Weather and ocean-condition data providers</li>
                    <li>Analytics services (e.g., Apple Analytics or similar)</li>
                    <li>Crash reporting (e.g., Apple or other diagnostics tools)</li>
                  </ul>
                  <p>
                    These services may collect non-personal device or usage information as governed by their own privacy policies.
                  </p>
                  <p>
                    We do not sell, rent, or trade your personal information to anyone.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  4. How We Use Information
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Any collected information is used solely for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing surf condition data</li>
                    <li>Improving App performance and stability</li>
                    <li>Understanding how users interact with the App to enhance features and usability</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  5. Data Storage
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Surfit does not store personal information on our servers. Any temporary data (such as location requests or surf-condition queries) is handled in real time and not retained.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  6. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Surfit is not intended for children under the age of 4. We do not knowingly collect personal information from children. If you believe a child has provided information, please contact us so we can delete it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  7. Your Choices
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>You can control and manage the following:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Location permissions:</strong> Enable or disable at any time through iOS Settings.</li>
                    <li><strong>Analytics and diagnostics:</strong> Depending on your Apple device settings, you may choose whether to share analytics data.</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  8. Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We take reasonable measures to protect any non-personal information processed by the App. However, no digital system is completely secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top. Continued use of the App after changes indicates acceptance of the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  10. Contact Us
                </h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <p>
                    <strong>Email:</strong> help@surfit.app<br />
                    <strong>Website:</strong> surfit.app
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
