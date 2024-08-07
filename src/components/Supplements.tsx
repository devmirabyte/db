function Supplements() {
  return (
    <section id="supplements">
      <div className="flex justify-between align-center max-w-screen-2xl mx-auto bg-orange-600 mt-16 rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-row justify-between items-center">
          <div className=" flex flex-col justify-centerw-1/3">
            <img src="/supplements.png" className="w-40" />
          </div>
          <div className="w-2/3">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-800 font-mont">
              Experience the Difference
            </h2>
            <p className="mb-8 font-medium text-gray-900">
              Unlock your body’s full potential with our premium range of
              supplements. Carefully formulated with high-quality ingredients,
              our products are designed to support your overall well-being,
              boost energy levels, and help you achieve your health goals.
              Whether you’re looking to enhance your fitness routine, support
              weight management, or simply nourish your body from within, we
              have the perfect supplement to complement your lifestyle.
              Experience the difference today and discover a healthier, happier
              you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Supplements;
