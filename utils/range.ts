function range(startAt: number = 0, size: number) {
  const range = Array.from(Array(size).keys());

  return range.map((i) => i + startAt);
}

export default range;
