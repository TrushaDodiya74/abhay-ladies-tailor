
import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Manisha Nakum",
    comment: "The fitting of the designer blouse I ordered was impeccable. Abhay Tailor is definitely the best in town for perfect stitching!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Trusha Dodiya",
    comment: "Very professional service. They delivered my party wear gown on time with beautiful finishing. Affordable and elegant.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Pooja Ladani",
    comment: "I've been getting my suits stitched here for 2 years now. The comfort and style they provide is unmatched. Highly recommended!",
    rating: 5,
    date: "3 weeks ago"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif">What Our Clients Say</h2>
          <div className="flex justify-center mt-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-peach-400 text-xl mx-0.5">★</span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-cream p-8 shadow-sm border border-peach-100 italic font-body relative">
              <span className="absolute -top-4 left-8 text-6xl text-peach-200/50 serif opacity-50 italic">“</span>
              <p className="text-espresso/80 mb-6 leading-relaxed relative z-10">
                {review.comment}
              </p>
              <div className="flex items-center gap-4 border-t border-peach-50 pt-4">
                <div className="w-10 h-10 rounded-full bg-peach-100 flex items-center justify-center font-sans font-bold text-peach-400">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider">{review.name}</h4>
                  <p className="text-xs text-espresso/50 font-sans">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
