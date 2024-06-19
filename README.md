

# E-Commerce Project using Gulp

This project is a responsive e-commerce website built using Gulp, featuring automated workflows for SASS compilation, image optimization, and JavaScript minification. It utilizes jQuery for dynamic interactions, Browser Sync for live-reloading, Fancybox for image galleries, and Slick Carousel for responsive sliders, ensuring an efficient and modern development process.

## Features

- **Responsive Design**: Ensures the website looks great on all devices.
- **Gulp 4**: Task runner for automating development workflows.
- **Browser Sync**: Live-reloading server for seamless development.
- **SASS Compilation**: Compiles SASS/SCSS files to CSS with nested rules and variables.
- **Autoprefixer**: Adds vendor prefixes to CSS rules for cross-browser compatibility.
- **Image Optimization**: Compresses images to reduce file size without losing quality.
- **File Concatenation**: Combines multiple files into one for faster loading times.
- **JavaScript Uglification**: Minifies JavaScript files to reduce file size for production.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gulp-start.git
   ```
2. Navigate to the project directory:
   ```bash
   cd gulp-start
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

- **Start Development Server**:
  ```bash
  gulp
  ```
  This will start a live-reloading development server using Browser Sync, enabling you to see changes in real-time.

- **Build for Production**:
  ```bash
  gulp build
  ```
  This will compile, concatenate, and minify all assets for production use.

## Dependencies

- **@fancyapps/fancybox**: For creating beautiful, responsive image galleries.
- **browser-sync**: For live-reloading and synchronization across devices.
- **del**: For cleaning up generated files.
- **gulp**: The task runner.
- **gulp-autoprefixer**: For adding vendor prefixes to CSS.
- **gulp-concat**: For concatenating JavaScript and CSS files.
- **gulp-imagemin**: For optimizing images.
- **gulp-sass**: For compiling SASS/SCSS files into CSS.
- **gulp-uglify-es**: For minifying JavaScript files.
- **jquery**: For DOM manipulation.
- **mixitup**: For filtering and sorting products.
- **sass**: Dart Sass for compiling SCSS files.
- **slick-carousel**: For creating responsive carousels and sliders.

## License

This project is licensed under the ISC License.

---
