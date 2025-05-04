export default function FeaturesOverview() {
    const features = [
      { title: "Real-Time Analytics", description: "Track performance, customer trends, and sales metrics with insightful, easy-to-read dashboards.", icon: "📊" },
      { title: "Integrated Communication Tools", description: "Send emails, SMS, or chat directly from the platform to stay connected with customers effortlessly.", icon: "🔧" },
      { title: "Secure Access Controls", description: "Assign roles and permissions to your team members to ensure data privacy and operational clarity.", icon: "🔐" },
    ];
  
    return (
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Features Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow p-6 rounded">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  