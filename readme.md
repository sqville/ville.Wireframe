# ville.Wireframe

**ville.Wireframe** is a [Qooxdoo](https://qooxdoo.org/) theme designed to help bring focus to layout and interaction BEFORE functionality and branding. Pump the brakes. Take it one step at a time. Iterate and gather more focused feedback before increasing your workload.

## Benefits

* All the benefits of [ville.Clean](https://github.com/sqville/ville.Clean)
* Uses web safe fonts as the default fonts (Comic Sans MS for both pc and osx)
* Only three colors to deal with - black, white and gray
* Use it to build out a control image repository for mockup/wireframing tools (i.e. Adobe, Figma, Sketch, etc.)
* Examples of how to make borders look hand drawn using only CSS3

<!-- DEMOS -->
## Demo

Using Qooxdoos [WidgetBrowser](https://sqville.github.io/ville.Wireframe/published/)

<!-- GETTING STARTED -->
## Using the Theme in your Application

To use the Theme in your application, go into the application root directory and install the theme into your project:

```sh
qx package update
qx package list
qx package install sqville/ville.Wireframe
```

now you just have to modify your compile.json to enable the theme:

```javascript
"applications": [
  {
    ...
    "theme": "ville.theme.Wireframe",
    ...
  }
],
```

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.
