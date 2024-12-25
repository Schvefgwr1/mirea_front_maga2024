export default function ReviewComponent() {
    const ReviewCard = ({
                            username,
                            rating,
                            reviewText,
                        }: {
        username: string;
        rating: number;
        reviewText: string;
    }) => {
        return (
            <div className="review-card">
                <div className="review-header">
                    <div className="review-username">{username}</div>
                    <div className="review-rating">{"★".repeat(rating)}</div>
                </div>
                <div className="review-text">{reviewText}</div>
            </div>
        );
    };

    return (
        <div className="product-content">
            <div className="product-content-cont">
                <div className="text-container">
                    <div className="title">Reviews</div>
                    <div className="text-content">
                        Explore what other customers are saying about this product. Discover their experiences, learn
                        about its pros and cons, and see how it fits into their daily lives. These reviews can help you
                        make an informed purchasing decision.
                    </div>
                </div>
                <div className="review-contener">
                    <ReviewCard
                        username="JohnDoe123"
                        rating={5}
                        reviewText="Absolutely love this MacBook Pro! It's super fast and handles all my workloads effortlessly."
                    />
                    <ReviewCard
                        username="TechGuru"
                        rating={4}
                        reviewText="Great product overall, but it's a bit pricey for the specs."
                    />
                    <ReviewCard
                        username="Designer87"
                        rating={5}
                        reviewText="The display quality is unmatched! Perfect for design and video editing."
                    />
                </div>
            </div>
        </div>
    );
}
