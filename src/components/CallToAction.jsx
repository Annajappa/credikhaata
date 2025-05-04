export default function CallToAction() {
    return (
        <>
      <section className="bg-blue-100 py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Empower Your Business</h2>
          <p className="mb-6">Join Credikhaata today to streamline your operations and unlock productivity like never before.</p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold">Join for Free</button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2024/08/26/15/48/ai-generated-8999821_1280.jpg"
          alt="Team meeting"
          className="md:w-1/2 rounded shadow"
        />
      </section>
      <br></br>
      </>
    );
  }
  