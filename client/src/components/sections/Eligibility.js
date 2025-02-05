import Sidebar from './component/Sidebar';
import Accordion from "./component/Accordion";
import Card from "./component/Card";
import CoffeeCard from '../sections/Faqcard';
import BackButton from '../../components/button'

const Eligibility = () => {
  return (
    <div className="flex flex-col md:flex-row lg:p-24">
      {/* Sidebar */}
      <Sidebar className="w-full md:w-1/4" />

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4 md:p-6">

        {/* Registered Company Section */}
        <section id="registered-company">
          <h1 className="text-2xl font-bold text-blue-900">Registered Company</h1>
          <p className="text-gray-700 mt-2">
            To legally engage in exporting spices from India, it is essential to establish a registered company. This crucial step lays the groundwork for your export business and ensures compliance with Indian laws and regulations.
          </p>
          <h2 className="text-xl font-semibold mt-6">Why Company Registration Matters for Spice Exporters?</h2>
          <div className="mt-4">
            <Accordion title="Legal Entity"><p>A registered company provides a legal framework...</p></Accordion>
            <Accordion title="Credibility and Trust"><p>Registration increases trust in business...</p></Accordion>
            <Accordion title="Access to Funding"><p>Companies can apply for business loans...</p></Accordion>
            <Accordion title="Government Benefits"><p>Registered businesses get tax benefits...</p></Accordion>
            <Accordion title="Legal Compliance"><p>Companies must comply with regulations...</p></Accordion>
          </div>

          {/* Types of Companies */}
          <h2 className="text-xl font-semibold mt-6">Types of Companies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 h-[40rem]">
            <Card title="Private Limited Company" description="A popular choice for most businesses, offering limited liability and flexibility in terms of ownership and management." />
            <Card title="Public Limited Company" description="Suitable for large-scale businesses that plan to raise capital through public offerings." />
            <Card title="Partnership" description="A simpler form of business structure suitable for smaller businesses with a few partners." />
            <Card title="Proprietorship" description="A single-owner business, relatively easy to set up but offers limited liability protection." />
          </div>

          {/* Registration Process */}
          <h2 className="text-xl font-semibold mt-6">Registration Process:</h2>
          <p className="text-gray-700 mt-2">
            The specific registration process varies depending on the chosen company type. Generally, it involves:
          </p>
          <div className="bg-gray-200 p-4 lg:w-96 rounded-lg mt-4 shadow-md">
            <ul className="list-none space-y-2">
              <li>✔️ Choosing a unique company name</li>
              <li>✔️ Obtaining necessary documents (e.g., identity proofs, address proofs, PAN card).</li>
              <li>✔️ Filing the required forms with the Registrar of Companies (ROC).</li>
              <li>✔️ Paying the prescribed fees.</li>
            </ul>
          </div>
          <div className="bg-green-100 p-4 rounded-lg mt-4">
            To know more, read our comprehensive guide on <a href="#" className="text-blue-900 font-semibold underline">how to register a company</a>.
          </div>
        </section>

        {/* GST Registration Section */}
        <section id="gst-registration">
          <h2 className="text-xl font-semibold mt-6 text-blue-900">GST Registration</h2>
          <p className="text-gray-700 mt-2">
            Goods and Services Tax (GST) is a comprehensive, multi-stage tax levied on the supply of goods and services within India. For spice exporters, GST registration is a major compliance requirement.
          </p>
          <h3 className="text-lg font-semibold mt-4">Why is GST Registration Crucial for Spice Exporters?</h3>
          <div className="mt-4">
            <Accordion title="Legal Compliance"><p>GST registration is mandatory for most businesses involved in the supply of goods and services, including spice exporters. Operating without GST registration can lead to penalties and legal repercussions.</p></Accordion>
            <Accordion title="Input Tax Credit (ITC)"><p>Registered businesses can claim ITC on the GST paid for raw materials and other business expenses, reducing the overall tax burden.</p></Accordion>
            <Accordion title="Enhanced Credibility"><p>GST registration enhances a business's reputation and opens doors to more opportunities, especially for exporters.</p></Accordion>
          </div>
          <h2 className="text-xl font-semibold mt-6">Key Aspects of GST for Spice Exporters:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 h-[40rem]">
            <Card title="GST Rates" description="The GST rate applicable to spices varies depending on the type of spice and its classification. It’s crucial to understand the applicable GST rate for your specific products." />
            <Card title="Record Keeping" description="Maintaining accurate and detailed records of all GST-related transactions is essential for compliance. This includes invoices, purchase bills, and other relevant documents." />
            <Card title="GST Returns" description="Spice exporters are required to file periodic GST returns, including details of sales, purchases, and tax liabilities. Timely filing of returns is crucial to avoid penalties." />
            <Card title="GST Audits" description="Businesses may be subject to GST audits to verify the accuracy of their tax returns and ensure compliance with GST regulations." />
          </div>
        </section>

        <section id="pan-registration">
      <h1 className="text-2xl font-bold text-blue-900 mt-12">PAN Registration</h1>
      <p className="text-gray-700 mt-2">
        Exporters can maintain foreign currency accounts to receive payments from overseas buyers, which can help to hedge against currency fluctuations.
      </p>

      <h2 className="text-xl font-semibold mt-6 text-gray-800">Why is PAN Essential for Spice Exporters?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold text-gray-800">Tax Compliance:</h3>
          <p className="text-gray-600">PAN is mandatory for filing income tax returns. As a spice exporter, you will need to file income tax returns to report your profits and pay taxes on your export earnings.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Financial Transactions:</h3>
          <p className="text-gray-600">PAN is required for various financial transactions, including opening bank accounts, making investments, and conducting large cash transactions.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">GST Registration:</h3>
          <p className="text-gray-600">PAN is a prerequisite for obtaining GST registration, which is essential for conducting business within India, including domestic transactions related to your export operations.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Other Legal Requirements:</h3>
          <p className="text-gray-600">PAN may be required for various other legal and regulatory purposes, such as obtaining import-export licenses and other necessary permits.</p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-6 text-gray-800">How to Obtain a PAN Card?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="font-semibold text-gray-800">Online Application:</h3>
          <p className="text-gray-600">You can apply for a PAN card online through the NSDL or UTIITSL websites.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">Offline Application:</h3>
          <p className="text-gray-600">You can also apply for a PAN card offline by submitting the application form to designated centers.</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Required Documents:</h3>
        <p className="text-gray-600">The required documents for PAN card application may vary depending on the application method and applicant type. Generally, you will need to provide proof of identity and address, along with recent photographs.</p>
      </div>

      <div className="mt-6 p-4 bg-green-100 rounded-lg text-center">
        <p className="text-gray-700">To know more, read our comprehensive guide on <a href="#" className="text-blue-900 font-medium">How to apply for PAN registration</a>.</p>
      </div>
    </section>
                 {/* Importer Exporter Code (IEC), Authorized Dealer (AD) Code, and FSSAI Registration Section */}
        <section id="compliance-section">
         
          <div className="mt-12">
            <Accordion  title="Importer Exporter Code (IEC)">
              <p>IEC is mandatory for most businesses involved in exports and imports.</p>
            </Accordion>
            <Accordion title="Authorized Dealer (AD) Code">
              <p>It is essential for routing foreign currency transactions.</p>
            </Accordion>
            <Accordion title="FSSAI Registration">
              <p>FSSAI registration ensures food safety standards are maintained.</p>
            </Accordion>
          </div>
        </section>

        <CoffeeCard />


        <BackButton/>
      </div>
    </div>
  );
};

export default Eligibility;
