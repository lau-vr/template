# Virtual Reality Classroom Template

This repository contains a template structure for creating a virtual reality classroom with WebXR functionalities.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/lau-vr/template.git
   ```

2. Navigate to the project directory:
   ```bash
   cd template
   ```
3. Install the project dependencies:
    ```bash
    npm install
    ```
### Models Folder

Since the classroom .glb has a large size, it can't be commited to github, thus the models folder is added in the git ignore, and in order to run the project, you need to manually create a folder in src/ named 'models' and add the following classroom .glb file that you can download from this link:

```
https://cdn.glitch.me/9c8de3fe-0afd-4613-b8a2-ca66167d2a9d/CLASSROOM%203.glb
```
### Development

To run the project in development mode:

```bash
npm start
```

This will start the development server using webpack-dev-server. The application should automatically open in your default web browser.

If you face the following issue:
 ```
 “node: --openssl-legacy-provider is not allowed in NODE_OPTIONS”
 ```
 To fox this issue, one fix would be to write into the terminal:
 ```
 export NODE_OPTIONS=--openssl-legacy-provider
 ```


### Deployment

If you want to deploy the project to GitHub Pages, run the deployment script:

```bash
npm run deploy
```

This will publish the dist directory to the gh-pages branch of your repository.

## Acknowledgments

This project makes use of various dependencies, including A-Frame, AR.js, and Three.js. See the package.json for the full list of dependencies.

