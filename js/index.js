$("#pageName")
    .data("textToggle", "Click to Enter")
    .hover(function (e) {

        var that = $(this);
        var textToSet = that.data("textToggle");

        that.data("textToggle", that.text());
        that.text(textToSet);

    }, function (e) {

        var that = $(this);
        var textToSet = that.data("textToggle");

        that.data("textToggle", that.text());
        that.text(textToSet);
    });
