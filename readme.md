# Typescript Library Template 📚

A modern, superior, development environment for starting new Typescript projects.

# Features 🔥

- Documentation Generation ✅
- Test Coverage Report Generation ✅
- Automatic Formatting ✅
- Preconfigured Git Hooks ✅
- Sensible Defaults ✅
- Vscode Workspace ✅
- Fully Open Source ✅

# The Mission 🪖

The goal of this project is to leverage modern tooling to create a superior TypeScript editing experience that offers exceptional developer ergonomics.

# The Vision ⛰️

The vision is to harness the full potential of these contemporary tools to automate various aspects of the development process, such as seamless code formatting, effortless generation of project documentation and code coverage reports. The overarching goal is to construct a straightforward and adaptable project template that can function autonomously or seamlessly integrate into larger monorepositories using pnpm.

# The License 👔

Furthermore, this project is committed to the principles of openness and collaboration. To reflect this ethos, it employs the Unlicense, a permissive open-source license that promotes absolute freedom in using the software. The Unlicense allows for maximum flexibility, enabling users to copy, modify, and distribute the code without any restrictions or requirements.

This approach fosters a sense of shared ownership, encouraging contributions from the community and fostering an environment where innovation thrives unhindered. The use of the Unlicense underscores the project's dedication to open collaboration and the spirit of giving back to the development community.

# Getting Started 🔥

## Prerequisites ⁉️

- [pnpm](https://pnpm.io)
- [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Initial Setup

The init command will install all dependencies and initialize pre-commit hooks via [Husky]('https://typicode.github.io/husky/)

```
pnpm run init
```

# Scripts 📜

This project provides a set of npm scripts to assist with development and maintenance.

### init

- **Description**: Initializes the project by installing dependencies and setting up Husky.
- **Usage**: Use this script to initialize your project, including package installation and setting up Git hooks with Husky.

### start

- **Description**: Starts the project using `ts-node` with `index.ts` as the entry point.
- **Usage**: Run this script to start your project.

### lint

- **Description**: Runs ESLint to check and enforce code style and best practices in your project.
- **Usage**: Execute this script to lint your codebase.

### test

- **Description**: Runs the Jest test suite to execute unit tests for your project.
- **Usage**: Use this script to run your unit tests.

### test:watch

- **Description**: Starts Jest in watch mode to automatically re-run tests as code changes.
- **Usage**: Execute this script to continuously run tests during development.

### test:coverage

- **Description**: Runs Jest with code coverage reporting to measure the code coverage of your tests.
- **Usage**: Run this script to generate code coverage statistics for your tests.

### format

- **Description**: Formats your TypeScript source code using Prettier with a specified configuration.
- **Usage**: Execute this script to auto-format your codebase.

### format:watch

- **Description**: Monitors changes in TypeScript source files and auto-formats them with Prettier.
- **Usage**: Run this script to automatically format files as you make changes.

### build

- **Description**: Compiles the TypeScript project using the `tsconfig.build.json` configuration.
- **Usage**: Use this script to build your TypeScript project.

### docs:generate

- **Description**: Generates project documentation using Typedoc. It will output documentation into the "docs" directory.
- **Usage**: Run this script to generate documentation for your TypeScript source code.

# Contributing 🫂

I believe that great projects are the result of a collective effort and a diverse range of perspectives. Your contributions to this project are highly valued, and we welcome everyone to participate.

Here are a few ways you can get involved in this project:

1. **Reporting Issues**: If you come across any bugs, errors, or have suggestions for improvements, please don't hesitate to [open an issue](https://github.com/minimallyexceptional/typescript-library-template/pulls) on the project's GitHub repository. Your feedback helps us make the project better.

2. **Feature Requests**: If you have an idea for a new feature or enhancement, we encourage you to [open a feature request](https://github.com/minimallyexceptional/typescript-library-template/issues/new) on GitHub. We'll consider all suggestions and work together to determine the best way to implement them.

3. **Code Contributions**: If you're interested in contributing code, feel free to fork the project, make your changes, and submit a pull request. We're committed to reviewing and merging valuable contributions from the community.

4. **Documentation Improvements**: If you notice gaps or errors in the documentation, you can contribute by making updates or providing new content. Clear and comprehensive documentation is crucial for the project's success.

5. **Spread the Word**: If you find this project useful, help us by spreading the word. Share it with your friends and colleagues, or write about it in your blogs or social media channels.

6. **Testing and Feedback**: Actively using the project and providing feedback based on your experience is highly valuable. We appreciate testing the software and giving us your input.
