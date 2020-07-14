export function searchFilter(data) {
  return data.bestMatches.map((item) => ({
    symbol: item['1. symbol'],
    name: item['2. name'],
    type: item['3. type'],
    region: item['4. region'],
    marketOpen: item['5. marketOpen'],
    marketClose: item['6. marketClose'],
    timezone: item['7. timezone'],
    currency: item['8. currency'],
    matchScore: item['9. matchScore'],
  }));
}
