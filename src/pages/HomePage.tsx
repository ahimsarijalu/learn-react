import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CreditCard,
  Building,
  Smartphone,
  PiggyBank,
  Shield,
  Lightbulb,
  Award,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="m-8">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Bank Syariah Indonesia
        </h1>
        <p className="text-xl mb-8">
          Your Trusted Financial Partner in the Digital Age
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      <Card className="mt-12 backdrop-blur-lg border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl">About Us</CardTitle>
          <CardDescription>
            Shaping the future of banking since 2010
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At Bank Syariah Indonesia, we are committed to empowering
            individuals, businesses, and communities to achieve their financial
            goals. With a strong foundation of trust, innovation, and customer
            focus, we have been shaping the future of banking for over a decade.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Our Mission</h3>
          <p>
            To empower our customers with innovative financial solutions that
            inspire confidence, foster growth, and enrich lives.
          </p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Our Vision</h3>
          <p>
            To be the most trusted and forward-thinking bank, redefining
            financial possibilities for a brighter tomorrow.
          </p>
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Personal Banking",
              items: [
                "Savings and checking accounts",
                "Loans and mortgages",
                "Mobile and online banking",
              ],
              icon: <CreditCard className="h-6 w-6" />,
            },
            {
              title: "Business Banking",
              items: [
                "Tailored financing solutions",
                "Cash management services",
                "Merchant services",
              ],
              icon: <Building className="h-6 w-6" />,
            },
            {
              title: "Digital Solutions",
              items: [
                "User-friendly mobile app",
                "24/7 online support",
                "Innovative payment systems",
              ],
              icon: <Smartphone className="h-6 w-6" />,
            },
            {
              title: "Wealth Management",
              items: [
                "Investment planning",
                "Retirement solutions",
                "Asset protection",
              ],
              icon: <PiggyBank className="h-6 w-6" />,
            },
          ].map((service, index) => (
            <Card key={index} className=" backdrop-blur-lg border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mt-12  backdrop-blur-lg border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl">Why Choose Us?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Customer-Centric Approach: Your satisfaction is our priority.
            </li>
            <li>
              Innovative Technology: Seamlessly integrate banking into your
              everyday life.
            </li>
            <li>Experienced Team: A dedicated team with years of expertise.</li>
            <li>
              Sustainability Focus: Actively supporting eco-friendly initiatives
              and community growth.
            </li>
          </ul>
        </CardContent>
      </Card>

      <section className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Integrity",
              description:
                "Building relationships based on trust and transparency.",
              icon: <Shield className="h-6 w-6" />,
            },
            {
              title: "Innovation",
              description:
                "Continuously advancing to meet evolving customer needs.",
              icon: <Lightbulb className="h-6 w-6" />,
            },
            {
              title: "Excellence",
              description:
                "Delivering exceptional service every step of the way.",
              icon: <Award className="h-6 w-6" />,
            },
          ].map((value, index) => (
            <Card key={index} className=" backdrop-blur-lg border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center">
                  {value.icon}
                  <span className="ml-2">{value.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="mt-12  backdrop-blur-lg border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl">Community Engagement</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            At Bank Syariah Indonesia, we believe in giving back. Through
            initiatives like our Digital Literacy Program, Environmental
            Conservation Fund, and Small Business Empowerment Workshops, we
            contribute to education, environmental conservation, and economic
            empowerment to create lasting change in the communities we serve.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-12 backdrop-blur-lg border-gray-700">
        <CardHeader>
          <CardTitle className="text-3xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Ready to explore how we can help you achieve your financial
            aspirations? Fill out the form below, and our team will get back to
            you shortly.
          </p>
          <form className="space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>

      <footer className="mt-12 py-6 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 ms-4">
            <p>&copy; 2024 Bank Syariah Indonesia. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 me-4">
            <Facebook className="h-6 w-6" />
            <Twitter className="h-6 w-6" />
            <Instagram className="h-6 w-6" />
            <Linkedin className="h-6 w-6" />
          </div>
        </div>
      </footer>
    </div>
  );
}
