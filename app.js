async function getData (selected_major) {
    var response = await fetch ('cit5students.json');

    if (response.ok) {
        var data = await response.json(); 

        //filter data array for the selected meal
        major_items = data.filter((item) => item.major == selected_major);

        var templateText = document.getElementById ('majorTemplate').innerHTML; 
        var compiledTemplateText = Handlebars.compile (templateText);
        compiledHtml = compiledTemplateText ({ rows: major_items})
        document.getElementById ('majorsTable').innerHTML = compiledHtml;
    }
    else {
        document.querySelector ('#majorsTable').innerHTML = "There was an error or student no longer exists"
    }
}
