export default function(server) {
  server.db.loadData({
    earnings: [
      { amount: 0 },
      { amount: 10000 },
      { amount: 5000 },
      { amount: 15000 },
      { amount: 10000 },
      { amount: 20000 },
      { amount: 15000 },
      { amount: 25000 },
      { amount: 20000 },
      { amount: 30000 },
      { amount: 25000 },
      { amount: 35000 },
      { amount: 30000 },
      { amount: 40000 },
    ],
    revenueSources: [
      { amount: 55, type: 'Direct' },
      { amount: 30, type: 'Social' },
      { amount: 15, type: 'Referral' },
    ],
  });
}
