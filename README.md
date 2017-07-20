# Gulp Starter
A basic starter project with Gulp & Nunjucks.

This project Includes the following tools, tasks and workflows:

- Gulp
- Nunjucks
- TypeScript
- Plumber
- BrowserSync
- SASS
- Autoprefixer
- Concat
- CleanCSS
- Uglify
- Gulp-Watch
- Gulp-Data

# To get started
1. Install node - Get node from here https://nodejs.org/en/download/
2. Install npm (Node package Manager) - Here is a helpful link (http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm)
3. Download Gulp_Basic as zip and extract it.
4. In terminal (Command Line), `cd` (change directory) to the project folder you downloaded, presumably `Gulp_Basic/`
5. When inside the directory of this project in terminal, type `npm install`. In case of error, try `sudo npm install`. This will install node dependencies in to the project and create a folder called `node_modules`, do nothing to this folder.
6. In the terminal, enter `gulp` This will initialize your gulp setup, and launch the project in browser window.
7. Note the External URL in terminal, you can use this URL to access the same page on your various devices in the same wifi network.
8. All of your working project files are going to be in `site/` folder. While rendered site in `deploy/` folder.
9. Edit your Sass code inside of the `site/scss/` folder. You can make subfolders inside of that to better organize your code. Refer to this guide to learn about Sass (http://sass-lang.com/guide)
10. Similarly your JavaScript files are going to be in `site/JS/` folder. Create as many files as you want, they will be compiled to single file in deploy/assets/js/all.min.js
11. This project is using Nunjucks for HTML templating, Nunjucks files have .njk extension. They will get rendered as .html in `deploy/` folder. Refer to this guide to learn about Nunjucks (https://mozilla.github.io/nunjucks/templating.html)
12. Your rendered files will be automagically created and updated in `deploy/`. It will create your optimized css, html, and javascript files for you.
13. Place all your assets in `deploy/assets` folder. E.g place images in `deploy/assets/img`, your .css and .js files will also get rendered into respective folders within `assets/` folders. You can add any additional files that you may need. For any links in your project use relative paths and refer to the files in `deploy/`, it is your root directory.
14. Keep gulp running while you're making changes. Gulp will watch your project for any changes and reload browser each time you make a change. When you want to close out of the gulp task, in the terminal, hit `ctrl + C`
