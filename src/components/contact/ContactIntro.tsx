const ContactInformation = ({ contactPurp }) => {
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
        Contact Us
      </h1>
      <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
        Email, call, or complete the form to learn how FillCart can help you
        shop smarter and faster.
      </p>

      <div className="mt-8 space-y-2 text-base font-medium text-gray-900">
        <p>info@fillcart.io</p>
        <p>321-221-231</p>
        <p>
          <a
            href="#customer-support"
            className="font-semibold text-black underline underline-offset-2 hover:opacity-80"
          >
            Customer Support
          </a>
        </p>
      </div>

      <div
        id="customer-support"
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3"
      >
        <div>
          <h3 className="text-sm font-bold text-black">Customer Support</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            Our support team is available around the clock to address any
            concerns or queries you may have.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-black">
            Feedback and Suggestions
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            We value your feedback and are continuously working to improve
            FillCart.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold text-black">Media Inquiries</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            For media-related questions or press inquiries, please contact us at{" "}
            <a
              href="mailto:media@fillcart.com"
              className="hover:underline"
              style={{ color: `${contactPurp}` }}
            >
              media@fillcart.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
