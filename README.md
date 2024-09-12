Certainly! Here is the `README.md` file in actual markdown format:

---

# Angular Wiki SPA

## Overview

This Angular application serves as a simple wiki that displays content from offline markdown files. It features a modern and responsive UI using Angular Material components, ensuring an excellent user experience on both desktop and mobile devices.

Can be tested on Fly.io at: [https://kgromero-angular-wiki.fly.dev/](https://kgromero-angular-wiki.fly.dev/)

## Features

- **Offline Markdown Content**: Easily add content by placing markdown files in the designated folder.
- **Enhanced UI**: Modern and attractive design using Angular Material, including toolbar, sidenav, and cards.
- **Responsive Design**: Optimized for various screen sizes, providing a seamless experience on desktop and mobile devices.
- **Navigation Menu**: Accessible sidebar navigation with links to different pages.
- **Routing**: Navigate between pages using Angular's powerful routing module.
- **Docker Support**: Build and run the application in a Docker container for easy deployment.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Adding Content](#adding-content)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Docker](#docker)
- [License](#license)

---

## Prerequisites

- **Node.js and npm**: Install from [Node.js official website](https://nodejs.org/).
- **Angular CLI**: Install globally using:

  ```bash
  npm install -g @angular/cli
  ```

- **Git**: For cloning the repository.
- **Docker**: For building and running the Docker image (optional).

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/angular-wiki.git
cd angular-wiki
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Additional Libraries

```bash
npm install ngx-markdown@^16.0.0
ng add @angular/material
```

---

## Usage

### Running the Application

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200/`.

### Building for Production

```bash
ng build --prod
```

---

## Adding Content

### 1. Create Markdown Files

- Place your `.md` files in the `src/assets/markdown/` directory.
- For example, to add an "About" page, create `about.md` in that directory.

### 2. Access the Content

- Navigate to `http://localhost:4200/page/about` to view the "About" page.

---

## Project Structure

```
angular-wiki/
├── README.md
├── Dockerfile
├── .gitignore
├── package.json
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   ├── polyfills.ts
│   ├── assets/
│   │   └── markdown/
│   │       ├── about.md
│   │       └── contact.md
│   └── app/
│       ├── app.module.ts
│       ├── app-routing.module.ts
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.css
│       ├── home/
│       │   ├── home.component.ts
│       │   ├── home.component.html
│       │   └── home.component.css
│       └── page/
│           ├── page.component.ts
│           ├── page.component.html
│           └── page.component.css
```

---

## Customization

### UI Enhancements

The application includes a modern and attractive UI:

- **Toolbar with Menu Button**: A top toolbar that includes a menu button to toggle the sidebar navigation.
- **Sidebar Navigation (Sidenav)**: A responsive sidenav containing navigation links to different pages.
- **Content Cards**: Pages display content within Material cards for better visual appeal.
- **Responsive Layout**: The layout adjusts automatically for different screen sizes.

### Themes

The application uses Angular Material's **Indigo-Pink** theme by default. You can change the theme by modifying the import in `src/styles.css`:

```css
@import "~@angular/material/prebuilt-themes/deeppurple-amber.css";
/* Other available themes:
   - indigo-pink.css
   - pink-bluegrey.css
   - purple-green.css
*/
```

---

## Docker

### Building and Running with Docker

#### 1. Build the Docker Image

```bash
docker build -t angular-wiki .
```

#### 2. Run the Docker Container

```bash
docker run -d -p 80:80 angular-wiki
```

#### 3. Access the Application

Open your browser and navigate to `http://localhost/`.

---

## License

This project is licensed under the MIT License.

---

## Additional Notes

### Updating Angular Material Modules

Ensure all the required Angular Material modules are imported in `src/app/app.module.ts`:

```typescript
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
```

### Styles and Fonts

- **Material Icons**: Include Material Icons in `src/index.html`:

  ```html
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  ```

- **Global Styles**: Global styles are defined in `src/styles.css` and include the imported Angular Material theme.

### Responsive Design

- The application layout adjusts for different screen sizes, ensuring usability on mobile devices.
- The sidenav changes behavior based on the screen width for optimal navigation.

---

## Conclusion

You now have a fully functional Angular Wiki SPA with an enhanced user interface and responsive design. Feel free to customize the components and styles further to match your preferences. If you have any questions or need assistance, don't hesitate to reach out!

Happy coding!
