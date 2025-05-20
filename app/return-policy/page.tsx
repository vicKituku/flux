import ShowcaseNavbar from "@/components/showcase-navbar";
import Footer from "@/components/footer";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <ShowcaseNavbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Return Policy</h1>
        
        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Digital Products and Services</h2>
            <p>For digital products and services:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>We offer a 14-day money-back guarantee for most digital products</li>
              <li>Refunds must be requested within 14 days of purchase</li>
              <li>Custom development work and consulting services are non-refundable once work has begun</li>
              <li>Subscription services can be cancelled at any time, but we do not provide partial refunds for unused time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Refund Process</h2>
            <p>To request a refund:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Contact our support team with your order details</li>
              <li>Explain the reason for your refund request</li>
              <li>Provide any relevant documentation or information</li>
              <li>Allow 5-7 business days for refund processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Exceptions</h2>
            <p>Refunds will not be provided in the following cases:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>After the 14-day refund period has expired</li>
              <li>For custom development work that has been completed</li>
              <li>If terms of service have been violated</li>
              <li>For services that have been fully rendered</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Payment Processing</h2>
            <p>Refunds will be processed to the original payment method used for the purchase. Processing times may vary depending on your payment provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Contact Us</h2>
            <p>If you have any questions about our Return Policy, please contact us at:</p>
            <p className="mt-2">Email: victorkituku@gmail.com</p>
            <p>Phone: +254716694890</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 