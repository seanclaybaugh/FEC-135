function percentageHelper(recs) {
  if(!recs.true) {
    return 0;
  }
  if(recs.true && !recs.false) {
    return 100;
  }

  const total = Number(recs.true) + Number(recs.false);

  return Math.round((Number(recs.true) / total) * 100);
}

export default percentageHelper;
