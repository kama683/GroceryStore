const createPost = (id: string, image: string, user: any, shop: any, productName: string) => ({
  id, image,
  content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
  user, product: { name: productName, category: 'Фрукты', price: 390, unit: '1 кг', currency: '₸' },
  shop, stats: { comments: 42, likes: 12, dislikes: 1, views: 89 },
});

export const MOCK_USER_JENNY = {
  id: 'u_jenny',
  name: 'Jenny Wilson',
  avatar: 'https://i.pravatar.cc/150?u=jenny',
  role: 'Активный пользователь',
  stats: { posts: 3, confirmations: 10 },
  timeAgo: '3 мин назад',
  posts: [] as any[],
};

export const MOCK_USER_JANE = {
  id: 'u_jane',
  name: 'Jane Cooper',
  avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  role: 'Активный пользователь',
  stats: { posts: 12, confirmations: 10 },
  timeAgo: '3 мин назад',
};

export const MOCK_SHOP_GALMART = {
  id: 's_galmart',
  name: 'Galmart Dostyk Plaza',
  verified: true,
  type: 'Мини-маркет',
  address: 'Достык, 97',
  rating: 4.6,
  products: [
    { id: 'prod1', name: 'Морковь', price: 120, unit: '1 кг', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod2', name: 'Помидоры', price: 120, unit: '1 кг', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod3', name: 'Брокколи', price: 1700, unit: '1 кг', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod4', name: 'Грибы', price: 2030, unit: '1 кг', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop' },
  ]
};

export const MOCK_SHOP_AYLIN = {
  id: 's_aylin',
  name: 'Aylin Market',
  verified: true,
  type: 'Мини-маркет',
  address: 'Кенесары, 27',
  rating: 4.6,
  products: [
    { id: 'prod1', name: 'Морковь', price: 120, unit: '1 кг', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod2', name: 'Помидоры', price: 120, unit: '1 кг', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod3', name: 'Брокколи', price: 1700, unit: '1 кг', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=600&auto=format&fit=crop' },
    { id: 'prod4', name: 'Грибы', price: 2030, unit: '1 кг', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop' },
  ]
};

MOCK_USER_JENNY.posts = [
  createPost('j1', 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a6?q=80&w=600&auto=format&fit=crop', MOCK_USER_JENNY, MOCK_SHOP_GALMART, 'Клубника'),
  createPost('j2', 'https://images.unsplash.com/photo-1569866854580-e8f08149890a?q=80&w=600&auto=format&fit=crop', MOCK_USER_JENNY, MOCK_SHOP_GALMART, 'Макароны'),
  createPost('j3', 'https://images.unsplash.com/photo-1598511726623-d08316df5f8f?q=80&w=600&auto=format&fit=crop', MOCK_USER_JENNY, MOCK_SHOP_GALMART, 'Авокадо'),
];

export const MOCK_FEED = [
  {
    id: '1',
    user: MOCK_USER_JENNY,
    content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyRIkEgXQ6prN8duYfvZmQB11kyhAwe2S58A&s',
    product: { name: 'Клубника (Бельгия)', category: 'Фрукты', price: 120, unit: '1 кг', currency: '₸' },
    shop: MOCK_SHOP_GALMART,
    stats: { comments: 423, likes: 36, dislikes: 6, views: 123 },
  },
];

const createUserPost = (id: string, image: string, user: typeof MOCK_USER_JANE, shop: typeof MOCK_SHOP_AYLIN, productName: string) => ({
  id,
  image,
  content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia',
  user,
  product: { name: productName, category: 'Фрукты', price: 390, unit: '1 кг', currency: '₸' },
  shop,
  stats: { comments: 42, likes: 12, dislikes: 1, views: 89 },
});

export const MOCK_USER = {
  ...MOCK_USER_JANE,
  posts: [
    createUserPost('p1', 'https://images.unsplash.com/photo-1569866854580-e8f08149890a?q=80&w=600&auto=format&fit=crop', MOCK_USER_JANE, MOCK_SHOP_AYLIN, 'Макароны'),
    createUserPost('p2', 'https://images.unsplash.com/photo-1598511726623-d08316df5f8f?q=80&w=600&auto=format&fit=crop', MOCK_USER_JANE, MOCK_SHOP_AYLIN, 'Авокадо'),
    createUserPost('p3', 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a6?q=80&w=600&auto=format&fit=crop', MOCK_USER_JANE, MOCK_SHOP_AYLIN, 'Клубника'),
  ]
};

export const MOCK_SHOP = MOCK_SHOP_AYLIN;

const USERS_MAP: Record<string, any> = {
  [MOCK_USER_JENNY.id]: MOCK_USER_JENNY,
  [MOCK_USER_JANE.id]: MOCK_USER,
};
const SHOPS_MAP: Record<string, any> = {
  [MOCK_SHOP_GALMART.id]: MOCK_SHOP_GALMART,
  [MOCK_SHOP_AYLIN.id]: MOCK_SHOP_AYLIN,
};

const ALL_POSTS: any[] = [...MOCK_FEED, ...MOCK_USER_JENNY.posts, ...(MOCK_USER.posts || [])];
const POSTS_MAP: Record<string, any> = {};
ALL_POSTS.forEach((p) => { POSTS_MAP[p.id] = p; });

export function getUserById(userId: string | undefined) {
  return userId ? USERS_MAP[userId] : MOCK_USER;
}

export function getShopById(shopId: string | undefined) {
  return shopId ? SHOPS_MAP[shopId] : MOCK_SHOP;
}

export function getPostById(postId: string | undefined) {
  return postId ? POSTS_MAP[postId] : MOCK_FEED[0];
}

export function getProductById(shopId: string | undefined, productId: string | undefined) {
  const shop = getShopById(shopId);
  const found = shop?.products?.find((p: any) => p.id === productId);
  return found || MOCK_SHOP.products?.[0];
}

export const SEARCH_SUGGESTIONS = ['Фрукты', 'Яблоки', 'Крупа гречневая'];

export const SEARCH_GRID_ITEMS = [
  { id: 'g1', image: 'https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=600', name: 'Апельсины' },
  { id: 'g2', image: 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=600', name: 'Черника' },
  { id: 'g3', image: 'https://images.unsplash.com/photo-1597362925123-77861d3f3af0?q=80&w=600', name: 'Папайя' },
  { id: 'g4', image: 'https://images.unsplash.com/photo-1598511726623-d08316df5f8f?q=80&w=600', name: 'Авокадо' },
  { id: 'g5', image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?q=80&w=600', name: 'Лайм' },
  { id: 'g6', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a6?q=80&w=600', name: 'Клубника' },
  { id: 'g7', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0a6?q=80&w=600', name: 'Клубника' },
  { id: 'g8', image: 'https://images.unsplash.com/photo-1602762642232-04d64c995505?q=80&w=600', name: 'Цитрусовые' },
  { id: 'g9', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=600', name: 'Дыня' },
  { id: 'g10', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=600', name: 'Вишня' },
  { id: 'g11', image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=600', name: 'Груша' },
  { id: 'g12', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=600', name: 'Вишня' },
  { id: 'g13', image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=600', name: 'Яйца' },
  { id: 'g14', image: 'https://images.unsplash.com/photo-1528821128474-27f963b062bf?q=80&w=600', name: 'Вишня' },
  { id: 'g15', image: 'https://images.unsplash.com/photo-1598511726623-d08316df5f8f?q=80&w=600', name: 'Авокадо' },
];

export const SEARCH_CATEGORIES = [
  { id: 'c1', name: 'Цитрусовые' },
  { id: 'c2', name: 'Ягоды' },
  { id: 'c3', name: 'Экзотические фрукты' },
  { id: 'c4', name: 'Косточковые' },
  { id: 'c5', name: 'Семечковые' },
  { id: 'c6', name: 'Овощи' },
  { id: 'c7', name: 'Зелень' },
  { id: 'c8', name: 'Молочные продукты' },
];