---
path: /blog/firstblog
date: 2020-09-24T10:27:17.034Z
title: Blog
---
# Static Website: Continuous Deployment on Google Cloud Platform

[![Jayasagar](https://miro.medium.com/fit/c/96/96/1*x3WK85ZhiRpw7JS_y9iz_Q.jpeg)](https://medium.com/@jayasagar?source=post_page-----6168c076e1e8--------------------------------)

[Jayasagar](https://medium.com/@jayasagar?source=post_page-----6168c076e1e8--------------------------------)

Follow

[Jun 5, 2019](https://medium.com/@jayasagar/static-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8?source=post_page-----6168c076e1e8--------------------------------) · 4 min read

[](https://medium.com/m/signin?actionUrl=%2F_%2Fbookmark%2Fp%2F6168c076e1e8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jayasagar%2Fstatic-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8&source=post_actions_header--------------------------bookmark_preview-----------)

![Image for post](https://miro.medium.com/max/60/1*-kJVPCDvPhSJcVzLNNteDg.jpeg?q=20)

![Image for post](https://miro.medium.com/max/3840/1*-kJVPCDvPhSJcVzLNNteDg.jpeg)

<https://www.fpcomplete.com/blog/continuous-integration-delivery-best-practices>

How to automate the deployment of static Gatsby website application on Google Cloud Platform? This was the question I asked myself when I finished [my profile website](https://jayasagar.dev/) and ready to host. However, I could not find the solution to host it on GCP(Google Cloud Platform).

To host your static website, no doubt there are few options out there. Out of them, you could use, almost free and best solutions to name a few, AWS S3, Google Firebase, Google Cloud Storage or Netlify as the most popular solutions available.

Choose the right solution which fits based on your experience, in my opinion, it doesn't matter much what you choose, in the end, my goal was to have a solution with maximum control of the tools I use so that I know what is happening and how to tune them later.

## What I tried

The end goal was, I want to build a PWA static web application using Gatsby. We could buy a simple template, change the content, and host it right? However, there is no originality and personal touch on this approach. Instead, I want to have a complete brand new design with my theme, styles and able to manage the end-to-end solution on my own!

> Tech stack: Gatsby, Emotion CSS, Cloudflare, Google Cloud Storage, and Google Cloud Build

![Image for post](https://miro.medium.com/max/60/1*KYEW1rJWhTmK1UAWeCNKCA.png?q=20)

![Image for post](https://miro.medium.com/max/1540/1*KYEW1rJWhTmK1UAWeCNKCA.png)

Here is the quick overview of how Cloud Build triggers automatically build containers for any changes in a master branch.

![Image for post](https://miro.medium.com/max/60/1*Dqt85JS96rkgeJGc2zpeFQ.png?q=20)

![Image for post](https://miro.medium.com/max/1596/1*Dqt85JS96rkgeJGc2zpeFQ.png)

A Simple high-level communication flow.

# How to deploy

I will assume, you already have a domain!

Now I will try to explain how to automate your website deployment!

## Change DNS server to Cloudflare

I like the Cloudflare as offers the performance, security, and reliability. First thing, it comes with Edge Certificate, which enables us to have HTTPS communication between the browser and the DNS Server. Moreover, Cloudflare has a global delivery network, and with data centers hosted in 180 cities request serves from the nearest region where the user is located!

Refer here for how to switch to Custom Domain Server on [Google Domains](https://support.google.com/domains/answer/3290309?hl=en&ref_topic=9018335) and here on [Cloudflare to see the changes](https://support.cloudflare.com/hc/en-us/articles/205195708-Changing-your-domain-nameservers-to-Cloudflare)

![Image for post](https://miro.medium.com/max/60/1*wMaHopI0z43ikDv_x2Wvzg.png?q=20)

![Image for post](https://miro.medium.com/max/2254/1*wMaHopI0z43ikDv_x2Wvzg.png)

Under the Crypto page, make sure you enable “Always Use HTTPS” and SSL communication is `full`

## Permanent redirect to HTTPS

Create a Page Rule on the Cloudflare to make sure every possible URL on the domain should redirect to HTTPS!

![Image for post](https://miro.medium.com/max/60/1*fsIBKzA_3I-86PAzMeDiQg.png?q=20)

![Image for post](https://miro.medium.com/max/2132/1*fsIBKzA_3I-86PAzMeDiQg.png)

## Create a Google Cloud Storage with your domain name and add a Trigger to Google Cloud Build

The complete detailed step by step guide is here <https://cloud.google.com/community/tutorials/automated-publishing-cloud-build>

In the end, it should look like below

![Image for post](https://miro.medium.com/max/60/1*3cZZZXDNJVs5MltOhGAmgA.png?q=20)

![Image for post](https://miro.medium.com/max/3270/1*3cZZZXDNJVs5MltOhGAmgA.png)

Bucket name as Domain name

![Image for post](https://miro.medium.com/max/60/1*AlXe53L5-K3T8_Baurv6VQ.png?q=20)

![Image for post](https://miro.medium.com/max/3796/1*AlXe53L5-K3T8_Baurv6VQ.png)

Code build pipeline trigger

## Continuous Deployment

Finally, we would like to have a fully automated solution to deploy every change we do on code should deploy on Google Cloud Storage.

It is quite simple, Create a file \`codebuild.yaml\` and push to your repository.

Here is an example using `yarn`

```

```

If you use `npm` , replace it with right code-builders from google! You could find them

## [Cloud builders | Cloud Build | Google Cloud](https://cloud.google.com/cloud-build/docs/cloud-builders)

### [Whether your business is early in its journey or well on its way to digital transformation, Google Cloud's solutions…](https://cloud.google.com/cloud-build/docs/cloud-builders)

#### [cloud.google.com](https://cloud.google.com/cloud-build/docs/cloud-builders)

## [GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)

### [Supported builder images for Google Cloud Build. Contribute to GoogleCloudPlatform/cloud-builders development by…](https://github.com/GoogleCloudPlatform/cloud-builders)

#### [github.com](https://github.com/GoogleCloudPlatform/cloud-builders)

And that is it; whenever you push the changes to your master branch, your changes should appear in minutes. It is quite simple to have a continuous deployment code pipeline for static websites!

You can see my profile at [https://jayasagar.dev](https://www.jayasagar.dev/)

[](https://medium.com/m/signin?actionUrl=%2F_%2Fvote%2Fp%2F6168c076e1e8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jayasagar%2Fstatic-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8&source=post_sidebar-----6168c076e1e8---------------------clap_sidebar-----------)

#### 15

[](https://medium.com/m/signin?actionUrl=%2F_%2Fbookmark%2Fp%2F6168c076e1e8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jayasagar%2Fstatic-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8&source=post_sidebar-----6168c076e1e8---------------------bookmark_sidebar-----------)

* [Google Cloud Platform](https://medium.com/tag/google-cloud-platform)
* [Continuous Deployment](https://medium.com/tag/continuous-deployment)
* [Cloud Build](https://medium.com/tag/cloud-build)
* [Static Website Hosting](https://medium.com/tag/static-website-hosting)
* [Google Cloud Storage](https://medium.com/tag/google-cloud-storage)

[](https://medium.com/m/signin?actionUrl=%2F_%2Fvote%2Fp%2F6168c076e1e8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jayasagar%2Fstatic-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8&source=post_actions_footer-----6168c076e1e8---------------------clap_footer-----------)

#### 15 claps

[](https://medium.com/m/signin?actionUrl=%2F_%2Fbookmark%2Fp%2F6168c076e1e8&operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40jayasagar%2Fstatic-website-continuous-deployment-on-google-cloud-platform-6168c076e1e8&source=post_actions_footer--------------------------bookmark_footer-----------)

[![Jayasagar](https://miro.medium.com/fit/c/160/160/1*x3WK85ZhiRpw7JS_y9iz_Q.jpeg)](https://medium.com/@jayasagar?source=follow_footer--------------------------follow_footer-----------)

WRITTEN BY

## [Jayasagar](https://medium.com/@jayasagar?source=follow_footer--------------------------follow_footer-----------)

Follow

#### I am an engineering specialist with poly-skills and a tech@core person with end to end software development experience.