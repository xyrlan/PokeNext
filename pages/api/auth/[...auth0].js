import { handleAuth } from '@auth0/nextjs-auth0';

console.log('the AUTH0_SECRET env var is set: ', !!process.env.AUTH0_SECRET);
const secret =  process.env.AUTH0_SECRET
console.log(secret);

export default handleAuth();