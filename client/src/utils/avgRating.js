const calculateAvgRating = (reviews = []) => {
  // No reviews available
  if (!reviews.length) {
    return {
      totalRating: 0,
      avgRating: 0,
    };
  }

  // Calculate total sum of all ratings
  const ratingSum = reviews.reduce(
    (acc, item) => acc + Number(item.rating || 0),
    0
  );

  // Calculate average rating
  const avgRating = Number((ratingSum / reviews.length).toFixed(1));

  // Total number of reviews
  const totalRating = reviews.length;

  return {
    totalRating,
    avgRating,
  };
};

export default calculateAvgRating;