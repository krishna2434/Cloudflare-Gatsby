---
path: /blog/techblog
date: 2020-09-25T10:14:52.747Z
title: "Deploy Cloudflare workers "
---
Prerequisites

1)  Create cloudflare account in https://dash.cloudflare.com/login

2)  Create workers bundled free plan

(https://dash.cloudflare.com/9e06c9ac72df642b4376fb90cd2 dddc7/workers/plans)with some limitations like:

-->Includes 100,000 requests per day -->Up to 10ms CPU time per request -->Lowest latency after the first request -->Up to 30 Workers

3)  Create Gatsby site here

https://www.gatsbyjs.com/docs/quick-start/

4) Install wrangler by using npm (npm i -g @cloudflare/wrangler)

Directions:

Build your Gatsby application using gatsby build

Run wrangler config where you’ll be prompted for your Cloudflare API

token.

Run wrangler init --site

Configure wrangler.toml. First add account ID field and then either

1. A free workers.dev domain by setting workers_dev = true
2. A custom domain on Cloudflare by setting workers_dev = false,

zone_id = "abdc.. and route = customdomain.com/*

In wrangler.toml set bucket = "./public”

Run wrangler publish and your site will be deployed in seconds!

