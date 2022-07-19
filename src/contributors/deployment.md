---
title: Deployment
---

# Deployment

This page documents what a deployment process looks like in Catalysis and the building blocks it builds on.

## Concepts

### Build 📦

The build represents the first phase of deployment. It takes the projects as input and output artifacts to deploy to the cloud infrastructure. Deployments can build in the **local** host from which the deployment is triggered or in a **remote** host in the cloud infrastructure.

##### Host
The builder is a host from where the build process runs.

##### Process
The process of building a project to deploy it. The output of the build process is a build artifact.

##### Artifact
A deployable unit, for example, a virtual image or a static website contained in a standard bundle.
