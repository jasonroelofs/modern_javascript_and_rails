# Modern Javascript and Rails

This Rails 5 application shows the bare minimum requirements to get ES6 compilation running under the Rails asset pipeline as described in my blog post [Modern Javascript and Rails](http://collectiveidea.com/blog/archives/2016/03/09/modern-javascript-and-rails).

To run this example yourself:

`bundle install`

`npm install`

`rails s`

Visit `localhost:3000/teaspoon` and click on `default`

If all is well, you'll get a green test suite. You can inspect the resulting `hello_world.js` to see that it was properly transpiled into ES5.
