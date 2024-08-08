const mockData = {
  Tech: [
    { id: 1, title: 'Tech Blog Post 1', content: 'This is the first tech blog post. It covers various aspects of the latest technology trends and innovations. The post delves into the advancements in artificial intelligence, machine learning, and the impact of these technologies on different industries.', author: 'Tech Author 1', date: '2023-10-01', category: 'Tech' },
    { id: 2, title: 'Tech Blog Post 2', content: 'The second tech blog post discusses the future of blockchain technology and its potential applications beyond cryptocurrencies. It explores how blockchain can revolutionize supply chain management, enhance security, and provide transparency in various sectors.', author: 'Tech Author 2', date: '2023-10-02', category: 'Tech' },
  ],
  Lifestyle: [
    { id: 3, title: 'Lifestyle Blog Post 1', content: 'In this lifestyle blog post, we explore the importance of maintaining a balanced lifestyle. The post provides tips on how to manage work-life balance, the benefits of regular exercise, and the significance of mental well-being.', author: 'Lifestyle Author 1', date: '2023-10-03', category: 'Lifestyle' },
    { id: 4, title: 'Lifestyle Blog Post 2', content: 'This lifestyle blog post focuses on healthy eating habits. It offers insights into creating a nutritious diet plan, the advantages of organic foods, and how to make healthier food choices in everyday life.', author: 'Lifestyle Author 2', date: '2023-10-04', category: 'Lifestyle' },
  ],
  Travel: [
    { id: 5, title: 'Travel Blog Post 1', content: 'The first travel blog post takes you on a journey to the most beautiful destinations around the world. It highlights the must-visit places, cultural experiences, and travel tips for an unforgettable adventure.', author: 'Travel Author 1', date: '2023-10-05', category: 'Travel' },
    { id: 6, title: 'Travel Blog Post 2', content: 'In this travel blog post, we explore the hidden gems of lesser-known travel destinations. The post provides detailed itineraries, local attractions, and recommendations for an off-the-beaten-path travel experience.', author: 'Travel Author 2', date: '2023-10-06', category: 'Travel' },
  ],
}

export const getPostsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData[category] || [])
    }, 100)
  })
}

export const getPostById = (postId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const allPosts = Object.values(mockData).flat(); 
      const post = allPosts.find(p => p.id === postId); 
      console.log(post);
      resolve(post || null);
    }, 100)
  })
}

export const addPost = (category, post) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      post.id = Date.now();
      mockData[category].push(post);
      resolve(post);
    }, 100)
  })
}

export const getCategories = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Tech', 'Lifestyle', 'Travel']); // Mocked categories
    }, 100);
  });
};