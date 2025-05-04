export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">CrediKhaata</h3>
            <p>© 2025 CrediKhaata. All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>Pricing</li>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact</li>
              <li>Docs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded mb-2 text-black"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded text-white">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    );
  }
  