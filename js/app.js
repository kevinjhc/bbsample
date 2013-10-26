(function ($) {

    var Contact = Backbone.Model.extend({
    });

    var Directory = Backbone.Collection.extend({
        model: Contact,
        url: 'http://localhost:3000/'
    });

    var ContactView = Backbone.View.extend({
        tagName: "article",
        className: "contact-container",
        template: $("#contactTemplate").html(),

        render: function () {
            var tmpl = _.template(this.template);
            
            $(this.el).html(tmpl(this.model.toJSON()));
            return this;
        }
    });

    //define master view
    var DirectoryView = Backbone.View.extend({
        el: $("#contacts"),

        initialize: function () {
            //this.collection = new Directory(contacts);
            //this.collection = new Directory([1,2,3]);
            var self = this;
            self.collection = new Directory();
            var coll = self.collection;
            coll.fetch({success: function() {
              console.log(coll);
              self.render();
            }});
        },

        render: function () {
            var that = this;
            _.each(this.collection.models, function (item) {
                that.renderContact(item);
            }, this);
        },

        renderContact: function (item) {
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    //create instance of master view
    var directory = new DirectoryView();

} (jQuery));