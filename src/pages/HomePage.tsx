export default function HomePage() {
  return (
    <>
      <div className="p-12">
        <div className="flex justify-center items-center py-16">
          <img src="./src/assets/company-logo.svg" alt="" />
        </div>
        <p className="text-lg text-center mb-6">
          Welcome to <strong>Bank Syariah Indonesia</strong>—Your Trusted
          Financial Partner.
        </p>
        <p className="text-center mb-8">
          At <strong>Bank Syariah Indonesia</strong>, we are committed to
          empowering individuals, businesses, and communities to achieve their
          financial goals. With a strong foundation of trust, innovation, and
          customer focus, we have been shaping the future of banking for{" "}
          <em>4</em> years.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
        <p className="mb-6">
          Founded in <em>2021</em>, <strong>Bank Syariah Indonesia</strong> is a
          leading financial institution dedicated to providing exceptional
          banking services tailored to meet diverse needs. From personal banking
          to corporate solutions, we combine expertise with cutting-edge
          technology to deliver seamless and secure financial experiences.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="mb-6">
          To empower our customers with innovative financial solutions that
          inspire confidence, foster growth, and enrich lives.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="mb-6">
          To be the most trusted and forward-thinking bank, redefining financial
          possibilities for a brighter tomorrow.
        </p>

        <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
        <ul className=" pl-6 space-y-4 mb-6">
          <li>
            <h3 className="font-medium">Personal Banking</h3>
            <p className="text-gray-700">
              Savings and checking accounts, loans and mortgages, mobile and
              online banking.
            </p>
          </li>
          <li>
            <h3 className="font-medium">Business Banking</h3>
            <p className="text-gray-700">
              Tailored financing solutions, cash management services, merchant
              services.
            </p>
          </li>
          <li>
            <h3 className="font-medium">Digital Solutions</h3>
            <p className="text-gray-700">
              User-friendly mobile app, 24/7 online support, innovative payment
              systems.
            </p>
          </li>
          <li>
            <h3 className="font-medium">Wealth Management</h3>
            <p className="text-gray-700">
              Investment planning, retirement solutions, asset protection.
            </p>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
        <ul className=" pl-6 space-y-2 mb-6">
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is our
            priority.
          </li>
          <li>
            <strong>Innovative Technology:</strong> Seamlessly integrate banking
            into your everyday life.
          </li>
          <li>
            <strong>Experienced Team:</strong> A dedicated team with years of
            expertise.
          </li>
          <li>
            <strong>Sustainability Focus:</strong> Actively supporting
            eco-friendly initiatives and community growth.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Our Core Values</h2>
        <ul className="pl-6 space-y-2 mb-6">
          <li>
            <strong>Integrity:</strong> Building relationships based on trust
            and transparency.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously advancing to meet evolving
            customer needs.
          </li>
          <li>
            <strong>Excellence:</strong> Delivering exceptional service every
            step of the way.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Community Engagement</h2>
        <p className="mb-6">
          At <strong>Bank Syariah Indonesia</strong>, we believe in giving back.
          Through initiatives like <em>BSI Maslahat</em>, we contribute to
          education, environmental conservation, and economic empowerment to
          create lasting change in the communities we serve.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Get in Touch</h2>
        <p className="mb-6">
          Ready to explore how we can help you achieve your financial
          aspirations? Visit one of our branches, connect with us online, or
          call our customer service team today.
        </p>

        <p className="text-center font-medium mt-8">
          <strong>Bank Syariah Indonesia</strong>
          <br />
          <em>Banking on trust, driven by innovation.</em>
        </p>
      </div>
    </>
  );
}
