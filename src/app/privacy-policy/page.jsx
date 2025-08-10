"use client"
import React from "react";

export default function page() {
  return (
    <main className="px-4 sm:px-6 lg:p-8  bg-white text-black">
      {/* Container and header remain same */}
      <div className="max-w-4xl xl:max-w-5xl mx-auto text-justify text-xl space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">
            Privacy Policy - Navnerds
          </h2>
          <p>
            This Privacy Policy outlines how Navnerds collects, uses, and
            protects personal information obtained from participants in our
            outdoor activities and programs. By enrolling or participating in
            any of our program, you consent to the terms of this Policy.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">1. Information Collection:</h4>
          <ol className="space-y-4">
            <li>
              <p>
                1.1 Personal Information: We may collect personal information
                such as
              </p>
              <ul className="list-[lower-roman] list-inside space-y-2 ml-4">
                <li>Personal identification - Name, Date of birth, Gender.</li>
                <li>Contact information – Address, Phone Number, Email.</li>
                <li>Health information – Medical condition</li>
                <li>Emergency contact information</li>
                <li>Travel documents</li>
                <li>Consent forms and waiver</li>
              </ul>
            </li>
            <li>
              <p>1.2 Payment Information:</p>
              <p className="ml-4">
                If payment is required for enrolment in programs, we may collect
                payment information such as credit card details or billing
                information to process payments.
              </p>
            </li>
            <li>
              <p>1.3 Participant Feedback:</p>
              <p className="ml-4">
                We may collect feedback or testimonials from participants
                regarding their experiences in our programs. Participation in
                feedback surveys is voluntary.
              </p>
            </li>
          </ol>
        </div>

        {/* Sections 2-7 remain same structure */}
        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">2. Information Use:</h4>
          <ul className="list-[lower-roman] list-inside space-y-2">
            <li>
              Safety and Communication: Personal information collected is used
              to ensure the safety of participants during activities and to
              communicate important information regarding program.
            </li>
            <li>
              Program Improvement: Participant feedback may be used to improve
              the quality of our programs and services.
            </li>
            <li>
              Marketing and Promotions: With your consent, we may use your
              contact information to send promotional materials or updates about
              upcoming programs, events, or special offers. You may opt out of
              marketing communications at any time.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">3. Information Sharing:</h4>
          <ul className="list-[lower-roman] list-inside space-y-2">
            <li>
              Third-Party Service Providers: Sharing personal information with
              third-party service providers who assist us in operating our
              programs, processing payments, or delivering services will be done
              after prior permission. These service providers are contractually
              obligated to protect the confidentiality of personal information,
              they may only use it for specified purposes and not share the
              details further.
            </li>
            <li>
              Legal Compliance: We may disclose personal information if required
              to do so by law or in response to valid legal requests, such as
              court orders, or government investigations.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">4. Data Security:</h4>
          <ul className="list-[lower-roman] list-inside space-y-2">
            <li>
              We implement reasonable security measures to protect personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </li>
            <li>
              While we strive to protect personal information, no method of
              transmission over the internet or electronic storage is 100%
              secure. Therefore, we cannot guarantee absolute security of
              personal information.
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">5. Data Retention:</h4>
          <p>
            We retain personal information for as long as necessary to fulfil
            the purposes outlined in this Policy or as required by law. When
            personal information is no longer needed, we securely dispose of it
            in accordance with applicable regulations.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">6. Rights of individual:</h4>
          <p>
            Individuals can access and request correction of their personal
            information. Consent for the use of information can be withdrawn at
            any time.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">7. Consent:</h4>
          <p>
            Users can cancel the trip as per the specified timeline before the
            date of trip. A portion of the booking amount may be deducted as
            outlined in the cancellation policy.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">8. Refund Policy:</h4>
          <ol className="space-y-4">
            <li>
              
                8.1 Refunds are subject to company's policy. Refunds for
                cancellation are provided as per the specified timeline before
                the trip, with a deduction as outlined in the cancellation
                policy.
              
            </li>
            <li>
              <p>8.2 Cancellation Policy</p>
              <ul className="list-[lower-roman] list-inside space-y-4 ml-4">
                <li>
                  More than 30 days before the program start date:
                  <br />
                  Refund: 90% of the total amount paid.
                  <br />
                  Deduction: 10% administrative fee.
                </li>
                <li>
                  15 to 30 days before the program start date:
                  <br />
                  Refund: 75% of the total amount paid.
                  <br />
                  Deduction: 25% administrative fee.
                </li>
                <li>
                  10 days before the program start date:
                  <br />
                  Refund: 50% of the total amount paid.
                  <br />
                  Deduction: 50% administrative fee.
                </li>
                <li>
                  Less than 5 days before the program start date or no-show:
                  <br />
                  Refund: No refund will be provided.
                </li>
              </ul>
              <p className="mt-2">
                Note: The above deductions are to cover administrative and
                operational costs incurred by the company.
              </p>
            </li>
            <li>
              <p>8.3 Refund Process</p>
              <ul className="list-[lower-roman] list-inside space-y-2 ml-4">
                <li>
                  Refunds will be processed to the original payment method used
                  during booking.
                </li>
                <li>
                  The refund process will be initiated within 7 business days
                  from the date of cancellation confirmation.
                </li>
                <li>
                  It may take an additional 5-7 business days for the refunded
                  amount to reflect in your account, depending on your bank or
                  payment provider.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        {/* Sections 9-11 and footer remain same */}
        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">
            9. Updates to Privacy Policy:
          </h4>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify
            participants of any material changes to the Policy by posting the
            updated version on our website or sending a notification via email.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">
            10. Equipment Buy and Hire Policy:
          </h4>
          <p>
            Navnerds may offer equipment for hire or purchase. Users are
            responsible for the proper use and return of hired equipment as per
            the outlined terms.
          </p>
        </div> 
        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">11. Dispute Resolution Policy:</h4>
          <ol className="space-y-4">
            <li>

              Navnerds is committed to resolving all disputes fairly, promptly and transparently. Any individual or entity who has experienced a problem or disagreement with our services is encouraged to reach out to us at the earliest. We value feedback and aim to address concerns in a constructive manner that maintains trust and professionalism.

            </li>
            <li> 
              <ul className="list-[lower-roman] list-inside space-y-4 ml-4">
                <li>
                 Disputes must be reported in writing to info@navnerds.com within 7 days of the incident or event.
                </li>
                <li>
                 The complaint should include the full name, contact information, trek details (location and date) and a clear description of the issue.
                </li>
                <li>
               Our team will acknowledge the complaint within 48 hours and initiate an internal review.
                </li>
                <li>
                 A detailed response or proposed resolution will be shared within 10 business days after gathering relevant facts and accounts.
                </li>
                <li>
                 If the resolution is unsatisfactory, either party can request a mediation process with a neutral third party, agreed upon by both sides.
                </li>
                <li>
                 Mediation may take place virtually or in-person, preferably in Uttarakhand and both parties are expected to cooperate in good faith.
                </li>
                <li>
                 If any dispute or issue arises that cannot be resolved through mediation, it shall be settled by the courts located in Dehradun, Uttarakhand. All parties agree that only the courts in Dehradun will have the authority to handle such matters. This policy shall be governed by the laws of India.
                </li>
                <li>
               The arbitration will be held in Dehradun, conducted in English and the decision of the arbitrator will be final and legally binding.
                </li>
                <li>
                 All information and communication related to the dispute will be kept confidential throughout the process.
                </li>
                <li>
                 This policy does not override or limit any consumer rights provided under applicable Indian laws.
                </li>
                <li>
                 Navnerds reserves the right to update or amend this policy, and such changes will be duly communicated.
                </li>
              </ul>
              <p className="mt-2">
                Note: The above deductions are to cover administrative and
                operational costs incurred by the company.
              </p>
            </li>
           
          </ol>
        </div>
        
        <div className="space-y-2">
          <h4 className="text-2xl font-semibold">12. Contact Information:</h4>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or the handling of your personal information, please
            contact us at info@navnerds.com
          </p>
          <address className="not-italic">
            Address: 273/1 Maltulpuri, Haridwar Uttarakhand 247667 <br />
            Phone: +91 9068476495
          </address>
        </div>
        <p>
          By enrolling or participating in our programs, you acknowledge that
          you have read, understood, and agreed to the terms of this Privacy
          Policy.
        </p>
      </div>
    </main>
  );
}
