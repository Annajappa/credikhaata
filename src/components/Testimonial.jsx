export default function Testimonial() {
    return (
      <section className="py-12 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src="https://res.cloudinary.com/dtfjtlpia/image/upload/v1741092777/Annajappa_bilout.jpg"
            alt="User"
          />
          <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
          <p className="mb-4 text-gray-700">
            Customer Management Hub has completely transformed how I handle client relationships. The intuitive design and robust features save me hours every week!
          </p>
          <p className="font-semibold">Gadige Annajappa</p>
          <p className="text-sm text-gray-500">Junior Account Manager</p>
        </div>
      </section>
    );
  }
  