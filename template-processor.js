// eslint-disable-next-line no-unused-vars,strict
class TemplateProcessor{
    constructor(template) {
        this.template = template;
    }

    fillIn(dictionary) {
        var temp = this.template;
        // eslint-disable-next-line guard-for-in
        for (var key in dictionary) {
            var re = new RegExp('\\{\\{' + key + '\\}\\}');
            temp = temp.replace(re, dictionary[key]);
        }
        temp = temp.replace(/\{\{\w+\}\}/g, "");
        return temp;
    }
}