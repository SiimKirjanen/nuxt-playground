import GithubProvider from 'next-auth/providers/github';
import { NuxtAuthHandler } from '#auth';

export default NuxtAuthHandler({
  secret: process.env.NUXT_AUTH_SECRET,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: process.env.NUXT_GITHUB_OAUTH_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_OAUTH_CLIENT_SECRET
    })
  ]
});
