---
title: Contributing to Savant
tags: ["Savant", "Contributing"]
date: 2024-11-04
description: A guide on how to contribute to Savant, an open-source community blog platform.
author: a2ys
thumbnail: /og.png
featured: true
---

## Introduction

Savant is an open-source community blog platform built with Astro. It allows anyone to write and publish articles, tutorials, and guides on various topics. If you’re interested in contributing to Savant, this guide will help you get started. You can write blog posts, improve the platform, fix bugs, and suggest new features. Your contributions are valuable and appreciated. Let’s make Savant better together!

## Prerequisites

Before contributing to Savant, you should have the following.

- Basic knowledge of Git and GitHub
- Familiarity with Markdown syntax
- Node.js and npm installed on your machine
- A GitHub account
- A code editor like Visual Studio Code
- A sense of humor (optional but recommended)
- A cup of coffee or tea (highly recommended)
- A cat, dog, or any pet to keep you company (optional but encouraged)
- A love for open-source and community-driven projects

I think that's enough for now! 😆

## Contributing to Savant

To contribute to Savant, follow these steps:

- Fork the Savant repository on GitHub.
- Clone your forked repository to your local machine.
- Install the project dependencies using npm.

    ```bash
    npm install
    ```

- Create a new branch for your changes.
- Make your changes as mentioned below.

  - Add a new blog post to the `src/content/blog` directory. You can use an existing post as a template. You can learn markdown syntax [here](https://www.markdownguide.org/).
  - Then add your information with the file name the same as your `author` property set in the blog post in the `src/content/author` directory. You can take help from the existing files.
  - Also, don't forget to add your avatar image in the `public/` directory. You can use the existing images as a reference. You can add any image as your avatar, but make sure it's square and not too large.
  - If you want to add a thumbnail image for your blog post, add it to the `public/` directory and use the file name in the `thumbnail` property of your blog post. It is optional but recommended.

  For example, if your author property is `aayush-shukla`, then create a file named `aayush-shukla.md` in the `src/content/author` directory.

  Here, see this:

    ```markdown
    ---
    title: Some title
    tags: ["Your", "Tags"]
    date: 2024-11-03
    description: Your post description
    thumbnail: /{your-thumbnail-image-name} (optional)
    author: your-name
    ---

    Your post content goes here.
    ```

    Then in the `src/content/author` directory, create a file named `your-name.md` and add your information like this:

    ```markdown
    ---
    name: Your Name
    bio: Your bio
    avatar: /{your-image-name}
    email: your-email (optional)
    github: your-github (optional)
    twitter: your-twitter (optional)
    linkedin: your-linkedin (optional)
    website: your-website (optional)
    ---
    ```

    Don't forget to add your image in the `public/` directory.

- Test your changes locally.

    ```bash
    npm run dev
    ```

- Commit your changes and push them to your fork.

    ```bash
    git add .
    git commit -m "Add a new blog post"
    git push origin your-branch-name
    ```

- Create a pull request on GitHub.
- Wait for the maintainers to review your pull request.
- Celebrate your contribution to Savant!

> Don't make changes to any other files than the blog post and author information. If you want to make any other changes, please create an issue first and discuss it with the maintainers.

## Additional Tips

Here are some additional tips to help you contribute to Savant effectively.

- Be respectful and considerate of others.
- Follow the [Code of Conduct](https://github.com/a2ys/blog/blob/master/CODE_OF_CONDUCT.md) and community guidelines.
- Ask questions if you’re unsure about something.
- Test your changes locally before submitting a pull request.
- Write clear commit messages and pull request descriptions.
- Keep your pull requests small and focused.
- Be patient and open to feedback.
- Have fun and enjoy the process!

## Conclusion

Contributing to open-source projects like Savant is a rewarding experience. It allows you to learn new skills, connect with like-minded people, and make a positive impact on the world. If you’re passionate about writing, sharing knowledge, and helping others, consider contributing to Savant. Your ideas, feedback, and contributions are totally welcome. Together, we can build a better future for everyone. Happy writing!
