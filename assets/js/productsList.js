//商品リスト
window.onload = function () {
    var source = $('#template').html()
    var template = Handlebars.compile(source)
    var values = {
        itemList: [
            { name: 'Kanako Momota', image: 'red', productPage: 'product1' },
            { name: 'Kanako Momota', image: 'red', productPage: 'product2' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' },
            { name: 'Kanako Momota', image: 'red', productPage: '' }
        ]
    }
    var html = template(values)
    console.log(html)
    $('#contents').html(html)
}
