function percentageHelper(recs) {
  const total = Number(recs.true) + Number(recs.false);

  return Math.round((Number(recs.true) / total) * 100);
}

export default percentageHelper;
