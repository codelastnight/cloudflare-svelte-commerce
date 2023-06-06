# svelte + cloudflare pages + commerce.js

currently proof of concept

builds on pages, but not ssr (runs fetch on client side atm)


### dev

```
pnpm i
```

### cloudflare pages setup

- change cloudflare development build to version 2

- remember to use matching pnpm version with delopment and cloudflare ( i had some bugs between versions)

- use node 18 or higher (16 supposedly works but i havent tried)

