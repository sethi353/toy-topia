export default function Contact() {
  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-xl p-8">
        
        <h1 className="text-3xl font-semibold text-purple-700 mb-6 text-center">
          Get in Touch
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Have a question or want to work together? Fill out the form below and we’ll respond soon.
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg p-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg p-3 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg p-3 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition duration-200"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
