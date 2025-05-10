import redis from "../../../lib/redis"

export default async function handler(req, res) {
  const cacheKey = 'users';

  const cached = await redis.get(cacheKey);

  if (cached) {
    return res.status(200).json(JSON.parse(cached));
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  await redis.set(cacheKey, JSON.stringify(users), 'EX', 3600);

  res.status(200).json(users);
}
