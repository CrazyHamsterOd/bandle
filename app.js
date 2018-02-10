var context = require("./stub/context.js");
var partials = require("./hbs/partials.js");
var helpers = require("./hbs/helpers.js");
var template = require("./template.hbs");

Handlebars.registerPartial(partials);

Handlebars.registerHelper(helpers);

var template = template;

var compiledData = Handlebars.compile(template);
var compiledTemplate = compiledData(context)

wrapper.innerHTML = compiledTemplate;
