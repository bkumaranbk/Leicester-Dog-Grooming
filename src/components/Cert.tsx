

export const Cert = () => {
    const imageUrls = [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
      ];

    return (
        <>
            {/* Certifications */}
            <section className="py-20 px-4 md:px-8 bg-brand-background relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(182,75,24,0.1),transparent_60%)]"></div>
                <div className="page-container relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="block text-sm font-medium text-brand-primary mb-2">Credentials</span>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                            Our Qualifications & Certifications
                        </h2>
                        <p className="text-foreground/80">
                            We're proud to hold industry-recognized certifications that demonstrate our commitment to excellence in dog grooming education.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 px-4 place-items-center">
                        {imageUrls.map((url, index) => (
                            <img
                                key={index}
                                src={url}
                                alt={`Image ${index + 1}`}
                                className="w-40 h-40 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}