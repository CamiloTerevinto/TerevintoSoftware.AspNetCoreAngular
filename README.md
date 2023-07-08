# CT.Examples.AspNetCoreWithAngular

This sample contains a fully usable template app for:

* Angular 16 with Angular Material
* ASP.NET Core 7
* Entity Framework Core 7
* ASP.NET Core Identity

This template contains components to do sign in/up, and a sample page for users administration.

## Screenshots

The following are some screenshots of this template to give a better idea of what is provided.

### Log in

![Log in](/assets/login.png)

### Sign Up

![Sign up](/assets/signup.png)

### Users - list

![Users list](/assets/users.png)

### Users - edit

![Edit user](/assets/users-edit.png)

## Building locally

You require the following installed on your computer:

* .NET 7 SDK
* NodeJs 16.14 or newer, or NodeJs 18.10 or newer.
* [recommended] Visual Studio or Visual Studio Code

To build the .NET side of things, run:

``` bash
dotnet build
```

To build the Angular side of things, run:

```bash
cd CT.Examples.AspNetCoreWithAngular.Api/ClientApp
npm i
npm run build
```

## Running the apps locally

Running the applications can be achieved similarly:

``` bash
dotnet watch
```

```bash
cd CT.Examples.AspNetCoreWithAngular.Api/ClientApp
npm i
npm run start
```
