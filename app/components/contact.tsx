const Contact = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h1>
                
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Email</h2>
                    <p className="text-gray-600">dave@vkdt.in</p>
                </div>
                
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Phone Number</h2>
                    <p className="text-gray-600">1234567991</p>
                </div>
                
                <div className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Location</h2>
                    <p className="text-gray-600">#2123123 xsdghsjfhs shgjdsjg jjfhsdjfhsdjfhs</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
