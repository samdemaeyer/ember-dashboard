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
    users: [
      {
        firstName: 'Emily',
        surName: 'Fowler',
        avatar: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      },
      {
        firstName: 'Jae',
        surName: 'Chun',
        avatar: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      },
      {
        firstName: 'Morgan',
        surName: 'Alvarez',
        avatar: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      },
      {
        firstName: 'Chicken',
        surName: 'the Dog',
        avatar: 'https://source.unsplash.com/fn_BT9fwg_E/60x60',
      },
    ],
    messages: [
      {
        content: 'Hi there! I am wondering if you can help me with a problem I\'ve been having.' ,
        userId: 1,
        createdAt: moment().subtract(5, 'minutes'),
      },
      {
        content: 'I have the photos that you ordered last month, how would you like them sent to you?' ,
        userId: 2,
        createdAt: moment().subtract(53, 'minutes'),
      },
      {
        content: 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!' ,
        userId: 3,
        createdAt: moment().subtract(3, 'hours'),
      },
      {
        content: 'Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...' ,
        userId: 4,
        createdAt: moment().subtract(1, 'day'),
      },
    ]
  });
}
