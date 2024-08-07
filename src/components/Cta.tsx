function Cta() {
  return (
    <section id="cta">
      <div className="flex justify-between align-center max-w-screen-2xl mx-auto bg-gray-800 mt-16 rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex flex-row justify-between items-center">
          <div className=" flex flex-col justify-centerw-1/3">
            <img src="/cta.png" className="w-80" />
          </div>
          <div className="w-2/3">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-100 font-mont">
              Hitting a roadblock in your diet journey?
            </h2>
            <p className="mb-8 font-medium text-neutral-50">
              Don't let setbacks derail your progress. Our team of experts is
              here to provide the support and guidance you need to overcome
              challenges and stay motivated. Whether you're struggling with
              cravings, plateaus, or simply need personalized advice, we're
              committed to helping you reach your health goals. Contact us today
              for a consultation and let's work together to achieve lasting
              results.
            </p>
            <button
              type="button"
              className="text-gray-50 bg-orange-600 text-md font-medium rounded-lg  py-4 px-8 flex justify-center items-center"
            >
              <a href="/#contact" className="flex items-center justify-center">
                Contact Us
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
