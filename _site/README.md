f## Developing Locally

### macOS

1. Install homebrew
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ```
2. Install `rbenv` to manage your Ruby versions
    ```bash
    brew install rbenv
    rbenv init
    ```
4. Follow the instructions that `rbenv init` outputs, which will likely entail adding text to a file. Once done, **close and reopen** your terminal window and run:
    ```bash
    # Check your rbenv installation
    curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
    ```
    Ensure all points should be green. It's ok if `Counting installed Ruby versions: none` is present.
5. Install Ruby 2.7.1
    ```bash
    rbenv install 2.7.1
    rbenv global 2.7.1
    ```
6. **Restart your terminal**

9. Install `Bundler` and `Jekyll`
    ```bash
    echo 'export PATH="$HOME/.gem/ruby/2.7.0/bin:$PATH"' >> ~/.bash_profile
    gem install --user-install bundler jekyll
    ```
10. **Close and reopen** terminal to apply these changes
11. Install ImageMagic
    ```bash
    brew install imagemagick@6
    ```
    **If already installed ImageMagic V7**, run:
    ```bash
    brew uninstall imagemagick
    brew install imagemagick@6 && brew link imagemagick@6 --force
    ```
11. Install `libv8`
    ```bash
    brew install v8@3.15
    bundle config build.libv8 --with-system-v8
    bundle config build.therubyracer --with-v8-dir=$(brew --prefix v8@3.15)
    ```
12. In the `portfolio` folder, run
    ```bash
    bundle install
    bundle update
    ```
13. Now run the following in the same folder to launch the site!
    ```bash
    bundle exec jekyll serve
    ```

## Structure

### Folders

The structure is built around the fact that the site is built with Jekyll

* `_blog`: A submodule that contains all the blog articles
* `_data`: Contains data files that can be used in Liquid and for generating pages (e.g. silo pages)
* `_includes`: Contains `html` and `md` files that can be *included* in other files (like partials)
* `_layouts`: Jekyll Layouts that can be used via the Front Matter of a page
* `_library`: Similar to `_blog` but not a submodule and contains knowledge base articles
* `_pages`: Contains static pages (i.e. not generated like silo pages or articles html)
* `_plugins`: Ruby plugins for Jekyll that modify the build process and provide additional features
* `_sass`: Contains styling code
* `_assets`: Contains media, javascript and such. Is loaded as is to site (if you want to link to items)

### Files

* `_config_prod.yml`: Special configuration applied to production site
* `_config.yml`: Jekyll configuration settings
* `.gitlab-ci.yml`: Tell GitLab how to build the site and deploy it automatically
* `Gemfile`: Contains the Ruby Gems need to run Jekyll and build the site
* `README.md`: Dats mi


