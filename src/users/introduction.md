---
title: Introduction
---

# Introduction

Despite the **decentralized** nature of the Internet's design,
it's experienced a centralization in the developer community by [cloud providers](https://en.wikipedia.org/wiki/Cloud_computing) that seek capital extraction at any cost through infrastructure and convenient (and often "free") tools.
Leaving the infrastructure and the foundational tools that power today's economy in the hands of a few players leads to monopolistic practices that eliminate diversity.

We need an alternative model, but **what does it take to break the dependency?**
We need to **reduce the costs** associated with abandoning the model.

The first one of the costs is **financial**. Many tools harness users through free plans that [treat them as products and not customers](https://quoteinvestigator.com/2017/07/16/product/). The second cost has to do with **developers' ergonomics and convenience**. Giving up on those tools leads to alternatives, often open-source, with worse experiences. The reason is that centralized and private solutions are usually built in the context of financially sustainable or VC-backed companies that can gear money towards marketing, design, and development efforts (e.g., [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), [Fly](https://fly.io/), [Heroku](https://dashboard.heroku.com/)), resulting in better products.

**What if you could help decentralize software hosting without compromising on developer experience? What if you could contribute to the project's mission and build for the long-term?** That's what Catalysis sets out to solve.

We believe that the above is possible through an [open-source](https://en.wikipedia.org/wiki/Open_source) deployment tool, a diverse community of software crafters, and an organization based on the [steward-ownership](https://purpose-economy.org/en/whats-steward-ownership/) model to ensure self-governance and that profits serve a purpose.

Catalysis is designed to be easily self-hostable, integrate with different hosting solutions and strategies, and, more importantly, support software crafters along their journey of empowering others through software.

## Specification

- **Built upon [Elixir](https://elixir-lang.org/) and [Phoenix](https://www.phoenixframework.org/):** As a deployment tool, it'll have to run build and deploy workflows concurrently, ensuring that errors in one deployment don't bleed into other deployments and represent the deployment state in real-time through the UI. These traits make [Erlang](https://www.erlang.org/), [Elixir](https://elixir-lang.org/), the [Phoenix Framework](https://www.phoenixframework.org/), and [LiveView](https://github.com/phoenixframework/phoenix_live_view) a suitable tech stack for the project. As a side benefit, users and we can get the most out of the resources in the host Catalysis runs.

## Next steps

Catalysis' open source nature presents you with different configurations that you can choose from:

### Our hosting and infrastructure
#### (Recommended)

This option is the most convenient and recommended to support the project to ensure its long-term sustainability financially. We host an instance of Catalysis and provide the infrastructure so that you can focus on developing your projects. The costs are the cost of the underlying infrastructure plus some interest for the development, maintenance, and support work.

### Our hosting and your infrastructure

Suppose you prefer to bring your infrastructure, for example, when your organization already has a billing plan with a cloud provider. In that case, you can configure your organization on our Catalysis instance to use your infrastructure. The costs in this setup are minimal and are based on the number of organization users.

Check out [the cloud provider](/users/cloud-provider) documentation to learn how to connect your account to a cloud provider.

### Your hosting and infrastructure

If you prefer to run your instance of Catalysis deploying to your infrastructure, you have that option too. Note that it incurs a cost on your end associated with running and updating a Catalysis instance.

Check out [the deploy](/contributors/deploy) guides to learn how to deploy Catalysis to the most common providers.
