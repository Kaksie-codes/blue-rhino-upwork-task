import Button from './Button';

const HitYourGoals = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Heading */}
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Ready to hit your goals?
          </h2>

          {/* Description */}
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
            Ready to take your hotel's online presence to the next level? Contact us today to schedule a consultation and see how we can help you create a website that wows your guests and drives results for your business.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button text="TALK TO US ANYTIME" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HitYourGoals;