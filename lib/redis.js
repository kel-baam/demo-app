// lib/redis.js
import Redis from 'ioredis';

const redis = new Redis('redis://redis:6379'); // Uses localhost:6379 by default

export default redis;
