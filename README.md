# CodeWithDocker
## _Docker+VS code: Development environment setup (for Windows)_
## swagger-autogen with nodejs-expressjs

Developing software requires a robust environment that can simplify code management, deployment, and testing. Docker is a widely used tool for building, packing, and shipping applications, while Visual Studio Code (VS Code) is an integrated development environment that can streamline development activities. Setting up an environment that integrates both Docker and VS Code can be a game-changer for developers. By configuring the development environment with Docker and VS Code, programmers can leverage the benefits of containerization and streamline their workflow, without having to worry about the complexities of system dependencies and configurations. Docker provides a controlled environment that can be shared across multiple machines, simplifying setup and reducing errors, while VS Code provides features like debugging, live code editing, and code navigation. By using the two tools together, developers can create a productive and efficient environment for coding, testing, and deploying software.

This project include expressjs api sample.

## Steps
# 0: 
Install the “Dev Containers” plugin in VS Code.

# 1:
Pull the Docker image by running the following commands:
```sh
docker pull mcr.microsoft.com/devcontainers/javascript-node
```
# 2:
Add a file `.devcontainer/devcontainer.json`  with the following contents:
```sh
{
  "image": "mcr.microsoft.com/devcontainers/javascript-node:18",
  "forwardPorts": [8084, 8084],
  "customizations": {
    // Configure properties specific to VS Code.
    "vscode": {
      // Add the IDs of extensions you want installed when the container is created.
      "extensions": ["streetsidesoftware.code-spell-checker"]
    }
  }
}
```
for more properties of this file please check this link
[DevContainer.json] - 

# 3:
Open the current folder in a container.




Install the dependencies:

```bash
$ npm install
```

Use the command below to generate the documentation at project startup:

```bash
$ npm run start-gendoc
```

Use the command below to start the project without generating the documentation:

```bash
$ npm start
```

Run the project and access the documentation at:

[http://localhost:3000/swagger](http://localhost:3000/swagger)


## License
[MIT](LICENSE) License


[DevContainer.json]: <https://containers.dev/implementors/json_reference>