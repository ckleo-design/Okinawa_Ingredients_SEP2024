// if condition
Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this)
    }
    return options.inverse(this)
})
//商品リスト
window.onload = function () {
    const source = $('#itemListTemplate').html()
    const template = Handlebars.compile(source)
    const values = {
        itemList: [
            //Leopard Coralgrouper / Mebai
            {
                name: 'Leopard Coralgrouper / Mebai',
                image: 'Leopard-Coralgrouper-Mebai',
                link: 'Leopard-Coralgrouper-Mebai',
                detail: '"Miibai" is a local Okinawan term for a type of grouper. Various species of miibai inhabit the coral reef-enclosed seas of Okinawa, known for their delicate white flesh and rich flavor. This versatile fish complements a wide range of dishes, from Japanese and Western to Chinese cuisine, and is highly regarded as a premium seafood choice.',
                specification: 'Refrigerated',
                itemsPerCase: '-',
                moq: 'Approx. 2kg',
                netWeight: 'Approx. 2kg',
                ingredients: '-',
                shelfLife: 'Not applicable due to being a fresh/raw product',
                shipping: 'All year round',
                price: '$30-42/kg',
                cooking: 'Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes'
            },

            //Leopard Coralgrouper / Sujiara (Akajin Mebai)
            {
                name: 'Leopard Coralgrouper / Sujiara (Akajin Mebai)',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Deepwater Longtail Red Snapper
            {
                name: 'Deepwater Longtail Red Snapper ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Great Green Turban/ Yako-gai
            {
                name: 'Great Green Turban/ Yako-gai ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Rhomboid Squid
            {
                name: 'Rhomboid Squid ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Octopus
            {
                name: 'Octopus ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Bluefin Tuna (Akami)
            {
                name: 'Bluefin Tuna (Akami)',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Bluefin medium-fatty tuna (Chutoro)
            {
                name: 'Bluefin medium-fatty tuna (Chutoro)',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Bluefin Fatty Tuna (Otoro)
            {
                name: 'Bluefin Fatty Tuna (Otoro)',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Bamboo Shrimp / Kuruma Prawn
            {
                name: 'Bamboo Shrimp / Kuruma Prawn ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Green Laver
            {
                name: 'Green Laver ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Mozuku Seaweed
            {
                name: 'Mozuku Seaweed ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Tankan Orange Conch
            {
                name: 'Tankan Orange Conch ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Shikwasa (Okinawan Citrus Fruit) Conch
            {
                name: 'Shikwasa (Okinawan Citrus Fruit) Conch ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Kokuto Nectar
            {
                name: 'Kokuto Nectar ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Long Pepper
            {
                name: 'Long Pepper ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Tarama Brown Sugar Powder
            {
                name: 'Tarama Brown Sugar Powder ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //OKINAWA Brown Sugar Ginger Powder
            {
                name: 'OKINAWA Brown Sugar Ginger Powder ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //OKINAWA Coffee Sugar
            {
                name: 'OKINAWA Coffee Sugar ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //OKINAWA Brown Sugar
            {
                name: 'OKINAWA Brown Sugar ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Acerola Puree
            {
                name: 'Acerola Puree ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Acerola Frozen Ingredients
            {
                name: 'Acerola Frozen Ingredients ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //OKINAWA Brown Sugar Syrup
            {
                name: 'OKINAWA Brown Sugar Syrup ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //OKINAWA Black Honey
            {
                name: 'OKINAWA Black Honey ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Aguni No Shio (Okinawa Sea Salt)
            {
                name: 'Aguni No Shio (Okinawa Sea Salt) ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Royal Mizuho Ryukyu Awamori 5 Year
            {
                name: 'Royal Mizuho Ryukyu Awamori 5 Year ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //SAKE×AWAMORI Daiginjo 2024
            {
                name: 'SAKE x AWAMORI Daiginjo 2024 ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //Japanese Craft Gin ORI-GIN
            {
                name: 'Japanese Craft Gin ORI-GIN ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //SHŌ MIZUHO
            {
                name: 'SHŌ MIZUHO ',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            },

            //The Okinawa Islands Rum
            {
                name: 'The Okinawa Islands Rum',
                image: '',
                link: '',
                detail: '',
                specification: '',
                itemsPerCase: '',
                moq: '',
                netWeight: '',
                ingredients: '',
                shelfLife: '',
                shipping: ''
            }
        ]
    }
    const allList = template(values)
    console.log(allList)
    $('#contents').html(allList)

    const itemProfilePage = template(values)
    console.log(itemProfilePage)
    $('#profile').html(itemProfilePage)
}
