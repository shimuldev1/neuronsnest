const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-700 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Privacy Policy
      </h1>

      <p className="mb-6">
        At <strong>NeuronsNest</strong>, we value your privacy and are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard your data when you interact with our
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address,
        company name, phone number, and other information when you:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Fill out contact forms</li>
        <li>Subscribe to our newsletter</li>
        <li>Request a demo or service</li>
        <li>Use our applications or platforms</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        2. How We Use Your Information
      </h2>
      <p className="mb-6">The data we collect is used to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Provide and improve our services</li>
        <li>Respond to inquiries and support requests</li>
        <li>Send updates, offers, or relevant communication</li>
        <li>Ensure the security and integrity of our systems</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        3. Data Protection & Security
      </h2>
      <p className="mb-6">
        We implement industry-standard security measures to safeguard your data.
        While we strive to protect your information, no method of transmission
        over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        4. Sharing Your Information
      </h2>
      <p className="mb-6">
        We do not sell or trade your personal information. We may share your
        data only with trusted third-party providers who help us operate our
        business, under confidentiality agreements.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        5. Cookies
      </h2>
      <p className="mb-6">
        Our site does <strong>not use cookies</strong> to track or store user
        information. We respect your privacy and do not collect data through
        cookies or similar tracking technologies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        6. Your Rights
      </h2>
      <p className="mb-6">
        You have the right to access, correct, or delete your personal data. To
        request access or make changes, please contact us directly at{" "}
        <a
          href="mailto:neuronsnest@gmail.com"
          className="text-blue-600 hover:underline"
        >
          neuronsnest@gmail.com
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-black">
        7. Changes to This Policy
      </h2>
      <p className="mb-6">
        NeuronsNest reserves the right to update this Privacy Policy at any
        time. We encourage you to check this page periodically for changes.
      </p>

      <p className="mt-12 text-sm text-gray-500">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
