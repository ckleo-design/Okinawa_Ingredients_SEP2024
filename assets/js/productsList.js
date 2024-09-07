// if condition
Handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 == v2) {
        return options.fn(this)
    }
    return options.inverse(this)
})
Handlebars.registerHelper('br', function (contents) {
    let str = contents
    str = str.replace(/\r?\n/g, '<br>')
    return str
})
//商品リスト
window.onload = function () {
    const source = $('#itemListTemplate').html()
    const template = Handlebars.compile(source)
    const values = {
        itemList: [
            //Leopard Coralgrouper / Mebai
            {
                name: `Leopard Coralgrouper / Mebai`,
                image: `Leopard-Coralgrouper-Mebai`,
                link: `Leopard-Coralgrouper-Mebai`,
                detail: `"Miibai" is a local Okinawan term for a type of grouper. Various species of miibai inhabit the coral reef-enclosed seas of Okinawa, known for their delicate white flesh and rich flavor. This versatile fish complements a wide range of dishes, from Japanese and Western to Chinese cuisine, and is highly regarded as a premium seafood choice.`,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Leopard Coralgrouper / Sujiara (Akajin Mebai)
            {
                name: `Leopard Coralgrouper / Sujiara (Akajin Mebai)`,
                image: `Leopard-Coralgrouper-Sujiara-Akajin-Mebai`,
                link: `Leopard-Coralgrouper-Sujiara-Akajin-Mebai`,
                detail: `In the local dialect, "Aka" refers to the fish’s red body color, and "Jin" is linked to money. "Miibai" denotes a fish from the grouper family, meaning "a highly prized red-bodied grouper." Renowned for its delicate white flesh and rich flavor, it is regarded as a premium fish.`,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$36-60/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Deepwater Longtail Red Snapper
            {
                name: `Deepwater Longtail Red Snapper`,
                image: `Deepwater-Longtail-Red-Snapper`,
                link: `Deepwater-Longtail-Red-Snapper`,
                detail: `One of Okinawa's top three luxury fish, it boasts translucent white flesh and striking red bloodlines. It remains tender and doesn't toughen even when cooked. With its delicate and refined flavor, this white fish is exquisite both as sashimi (with the skin blanched in hot water) and in a sweet-savory stew.`,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-48/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Great Green Turban/ Yako-gai
            {
                name: `Great Green Turban　/ Yako-gai`,
                image: `Great-Green-Turban-Yako-gai`,
                link: `Great-Green-Turban-Yako-gai`,
                detail: `The night light shell, known as "Yako-gai," is the largest whelk among turban shells. It offers a flavor similar to that of turban shells but with a subtler marine aroma and a variety of textures. The flesh is slightly firmer and is best enjoyed when sliced thinly. \n \n*Note: Due to the shell's strong closing force, exercise caution when removing the adductor muscle to avoid pinching your fingers. Cutting off the lid can simplify the process of extracting the flesh.`,
                specification: `Refrigerated / Frozen`,
                itemsPerCase: `Based on Catch Yield`,
                moq: `12cm-15cm, 1.2kg-1.5kg`,
                netWeight: `12cm-15cm, 1.2kg-1.5kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$12-24/kg`,
                cooking: `• The white part is ideal for sashimi.\n• The black part near the lid is tough and should be sautéed with butter.\n• The liver has a sweet taste akin to abalone liver and is very flavorful.\nIf serving the liver as sashimi, be sure to briefly blanch it first.`
            },

            //Rhomboid Squid
            {
                name: `Rhomboid Squid`,
                image: `Rhomboid-Squid`,
                link: `Rhomboid-Squid`,
                detail: `The giant squid, harvested from depths of 500 to 600 meters, can reach up to 20 kg in weight. Due to its short lifespan of about one year, it is only available for fishing from November to June. Its chewy texture, combined with a subtle sweetness and umami, makes it a versatile ingredient suitable for a variety of dishes beyond just sashimi.`,
                specification: `Frozen`,
                itemsPerCase: `Based on Catch Yield`,
                moq: `10kg`,
                netWeight: `10kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$33/kg`,
                cooking: `Sashimi, Sushi topping, Stir-fry ingredient, Sauté, Steak, Fried (karaage), Tempura, Simmered dish`
            },

            //Octopus
            {
                name: `Octopus`,
                image: `Octopus`,
                link: `Octopus`,
                detail: `Unlike true or water octopuses from outside Okinawa, this octopus has a brownish hue and a wonderfully chewy texture that intensifies in flavor with each bite. It is less slimy, notably tender when raw, and retains its softness even after boiling.`,
                specification: `Frozen`,
                itemsPerCase: `Based on Catch Yield`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `October to December, December to March Varies depending on the type of octopus`,
                price: `$22-30/kg`,
                cooking: `Sashimi, Boiled, Sauté, Simmered dish, Tempura, Ajillo (garlic oil dish)`
            },

            //Bluefin Tuna (Akami)
            {
                name: `Bluefin Tuna (Akami)`,
                image: `Bluefin-Tuna-Akami`,
                link: `Bluefin-Tuna-Akami`,
                detail: `Through careful management of feed freshness and vitamin supplementation, along with controlled stocking density and rearing conditions to minimize stress, we ensure a consistent supply of premium-quality bluefin tuna throughout the year.`,
                specification: `Frozen`,
                itemsPerCase: `Variable weight\n(Approx. 200g per block)`,
                moq: `Variable weight\n(Approx. 200g per block)`,
                netWeight: `Variable weight\n(Approx. 200g per block)`,
                ingredients: `-`,
                shelfLife: `Approx. 14 days (-25°C)\nApprox. 180 days (stored at -40°C)`,
                shipping: `All year round`,
                price: `$126/kg`,
                cooking: `Sashimi`
            },

            //Bluefin medium-fatty tuna (Chutoro)
            {
                name: `Bluefin medium-fatty tuna (Chutoro)`,
                image: `Bluefin-medium-fatty-tuna-Chutoro`,
                link: `Bluefin-medium-fatty-tuna-Chutoro`,
                detail: `Through careful management of feed freshness and vitamin supplementation, along with controlled stocking density and rearing conditions to minimize stress, we ensure a consistent supply of premium-quality bluefin tuna throughout the year.`,
                specification: `Frozen`,
                itemsPerCase: `Variable weight\n(Approx. 200g per block)`,
                moq: `Variable weight\n(Approx. 200g per block)`,
                netWeight: `Variable weight\n(Approx. 200g per block)`,
                ingredients: `-`,
                shelfLife: `Approx. 14 days (-25°C)\nApprox. 180 days (stored at -40°C)`,
                shipping: `All year round`,
                price: `$141/kg`,
                cooking: `Sashimi`
            },

            //Bluefin Fatty Tuna (Otoro)
            {
                name: `Bluefin Fatty Tuna (Otoro)`,
                image: `Bluefin-Fatty-Tuna-Otoro`,
                link: `Bluefin-Fatty-Tuna-Otoro`,
                detail: `Through careful management of feed freshness and vitamin supplementation, along with controlled stocking density and rearing conditions to minimize stress, we ensure a consistent supply of premium-quality bluefin tuna throughout the year.`,
                specification: `Frozen`,
                itemsPerCase: `Variable weight\n(Approx. 200g per block)`,
                moq: `Variable weight\n(Approx. 200g per block)`,
                netWeight: `Variable weight\n(Approx. 200g per block)`,
                ingredients: `-`,
                shelfLife: `Approx. 14 days (-25°C)\nApprox. 180 days (stored at -40°C)`,
                shipping: `All year round`,
                price: `$170/kg`,
                cooking: `Sashimi`
            },

            //Bamboo Shrimp / Kuruma Prawn
            {
                name: `Bamboo Shrimp / Kuruma Prawn`,
                image: `Bamboo-Shrimp-Kuruma-Prawn`,
                link: `Bamboo-Shrimp-Kuruma-Prawn`,
                detail: `Bamboo shrimp cultivated in Okinawa's warm, pristine waters achieve impressive size year-round thanks to continuous feeding. This consistent nourishment enhances their rich flavor and mineral richness.`,
                specification: `Frozen`,
                itemsPerCase: `To be confirmed upon shipping`,
                moq: `To be confirmed upon shipping`,
                netWeight: `To be confirmed upon shipping`,
                ingredients: `-`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$84-119/kg`,
                cooking: `Sashimi, Tempura, Salt-grilled`
            },

            //Green Laver
            {
                name: `Green Laver`,
                image: `Green-Laver`,
                link: `Green-Laver`,
                detail: `The Japanese name is Hitoegusa. Unlike Aosa nori, this seaweed is renowned for its exceptional flavor and is a favorite in Okinawa. Due to its tendency to lose color quickly when raw, it's best to portion and freeze Hitoegusa if you have a large supply.`,
                specification: `Dehydrated`,
                itemsPerCase: `-`,
                moq: `Available from 1 order`,
                netWeight: `10g`,
                ingredients: `Seaweed`,
                shelfLife: `365`,
                shipping: `All year round\nHarvest Period: January to March`,
                price: `$3.60/pc`,
                cooking: `Kakiage Tempura, Soup, Tamagoyaki (Japanese Omelette), Miso Soup Takoyaki (Octopus Balls), Starch Sauce Dishes`
            },

            //Mozuku Seaweed
            {
                name: `Mozuku Seaweed`,
                image: `Mozuku-Seaweed`,
                link: `Mozuku-Seaweed`,
                detail: `Okinawa's mozuku, renowned for its highest production volume in Japan, is a unique seaweed that thrives exclusively in pristine, beautiful waters. The early-harvested mozuku, known as the new sprout of 'Okinawa mozuku,' is a premium variety meticulously selected by seasoned fishermen at the perfect moment, just before it fully matures. This delicate seaweed is characterized by its slender strands, slippery yet firm texture, and a refreshingly juicy bite. Pre-cleaned for convenience, it is ready to be enjoyed straight from the package.`,
                specification: `Frozen`,
                itemsPerCase: `10`,
                moq: `Available from 1 case`,
                netWeight: `500g`,
                ingredients: `Mozuku seaweed`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$12/pc`,
                cooking: `Salad, Omelet filling, Mozuku vinegar, Tempura, Mixed with natto and kimchi, Miso soup, Takoyaki (octopus balls), Noodle topping, Ramen,\n• Rinse off the slime and enjoy it with mentsuyu (noodle dipping sauce) just like how you enjoys zaru soba (cold soba noodles).`
            },

            //Tankan Orange Conch
            {
                name: `Tankan Orange Conch`,
                image: `Tankan-Orange-Conch`,
                link: `Tankan-Orange-Conch`,
                detail: `The ripe Tankan drink from Ōgimi Village in Okinawa is a sweetened mixer that captures the rich aroma and vibrant flavor of freshly squeezed Tankan oranges.`,
                specification: `Room Temperature`,
                itemsPerCase: `12`,
                moq: `1 case`,
                netWeight: `1000ml`,
                ingredients: `Tankan juice, Granulated sugar, Syrup, Vitamin C, Citric Acid`,
                shelfLife: `180`,
                shipping: `All year round`,
                price: `$31`,
                cooking: `• Mix with soda water for a refreshing mealtime beverage.\n• Pair with alcohol to craft cocktails or sours.\n• Blend with milk for a drink that offers a yogurt-like flavor.`
            },

            //Shikwasa (Okinawan Citrus Fruit) Conch
            {
                name: `Shikwasa (Okinawan Citrus Fruit) Conch`,
                image: `Shikwasa-Okinawan-Citrus-Fruit-Conch`,
                link: `Shikwasa-Okinawan-Citrus-Fruit-Conch`,
                detail: `A sweetened mixer crafted from 100% Okinawan shikuwasa juice, delivering a bright, refreshing tartness and flavor that tastes just like it was freshly squeezed.`,
                specification: `Room Temperature`,
                itemsPerCase: `12`,
                moq: `1 case`,
                netWeight: `1000ml`,
                ingredients: `Shikuwasa juice, Granulated sugar Vitamin C, Citric Acid`,
                shelfLife: `180`,
                shipping: `All year round`,
                price: `$31`,
                cooking: `• Mix with soda water for a refreshing mealtime beverage.\n• Pair with alcohol to craft cocktails or sours.`
            },

            //Kokuto Nectar
            {
                name: `Kokuto Nectar`,
                image: `Kokuto-Nectar`,
                link: `Kokuto-Nectar`,
                detail: `A meticulously crafted syrup made with 100% Tarama Island brown sugar. Savor its distinctive, rich flavor.`,
                specification: `Room Temperature`,
                itemsPerCase: `15`,
                moq: `1 case`,
                netWeight: `270g`,
                ingredients: `Brown Sugar (Tarama Island, Okinawa)`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$9/btl`,
                cooking: ` A perfect substitute for pancake syrup.\n• Ideal for cooking and baking with the rich flavor of brown sugar.`
            },

            //Long Pepper
            {
                name: `Long Pepper`,
                image: `Long-Pepper`,
                link: `Long-Pepper`,
                detail: `Okinawa-grown pepper boasts a unique aroma, starting with a subtle sweetness that soon gives way to a sharp, spicy kick, delivering a depth of flavor that's truly distinctive.`,
                specification: `Room Temperature`,
                itemsPerCase: `24`,
                moq: `1 case`,
                netWeight: `14g`,
                ingredients: `Long Pepper`,
                shelfLife: `365`,
                shipping: `Inability to supply in large quantities, please check availability as needed.`,
                price: `$10/btl`,
                cooking: `• Perfect for enhancing stir-fries, stews, and fried dishes.\n• Pairs beautifully with sweets, offering a subtle, hidden flavor in cookies and cakes.\n• Experience its unique aroma by adding it to coffee.`
            },

            //Tarama Brown Sugar Powder
            {
                name: `Tarama Brown Sugar Powder`,
                image: `Tarama-Brown-Sugar-Powder`,
                link: `Tarama-Brown-Sugar-Powder`,
                detail: `Powdered brown sugar made from 100% sugar cane grown on Tarama Island, which was formed from uplifted coral reefs.`,
                specification: `Room Temperature`,
                itemsPerCase: `20`,
                moq: `1 case`,
                netWeight: `260g`,
                ingredients: `Sugar Cane (Tarama Island, Okinawa)`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$5.80`,
                cooking: `• Seasoning for various dishes.\n• For baking and confectionery.`
            },

            //OKINAWA Brown Sugar Ginger Powder
            {
                name: `OKINAWA Brown Sugar Ginger Powder`,
                image: `OKINAWA-Brown-Sugar-Ginger-Powder`,
                link: `OKINAWA-Brown-Sugar-Ginger-Powder`,
                detail: `Powdered brown sugar with ginger flavor, made from 100% domestically sourced ingredients. Just stir a spoonful into hot water or tea for an easy and delightful ginger drink.`,
                specification: `Room Temperature`,
                itemsPerCase: `20`,
                moq: `1 case`,
                netWeight: `160g`,
                ingredients: `Raw Sugar (sugar cane, Okinawa)\nBrown Sugar (sugar cane, Okinawa)\nGinger Powder (ginger, domestic production) \nMolasses (sugar cane, Okinawa)`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$5.80`,
                cooking: `• Seasoning for various dishes.\n• Dissolve in hot water to make ginger tea.`
            },

            //OKINAWA Coffee Sugar
            {
                name: `OKINAWA Coffee Sugar`,
                image: `OKINAWA-Coffee-Sugar`,
                link: `OKINAWA-Coffee-Sugar`,
                detail: `Crafted from 100% Okinawan ingredients and blended with coral calcium, this sugar eliminates the bitterness and impurities of brown sugar, resulting in a smooth and sophisticated sweetness.`,
                specification: `Room Temperature`,
                itemsPerCase: `20`,
                moq: `1 case`,
                netWeight: `430g`,
                ingredients: `Raw sugar, Brown Sugar, Coral Calcium`,
                shelfLife: `365`,
                shipping: `All year round`,
                price: `$5.80`,
                cooking: `• Seasoning for various dishes.`
            },

            //OKINAWA Brown Sugar
            {
                name: `OKINAWA Brown Sugar`,
                image: `OKINAWA-Brown-Sugar`,
                link: `OKINAWA-Brown-Sugar`,
                detail: `Made from raw sugarcane grown in Okinawa and blended with Okinawan brown sugar, this sugar preserves the distinctive flavor of Okinawan brown sugar while delivering a smooth, mellow sweetness.`,
                specification: `Room Temperature`,
                itemsPerCase: `20`,
                moq: `1 case`,
                netWeight: `500g`,
                ingredients: `Raw sugar (Sugar Cane, Okinawa) \nBrown sugar (Sugar Cane, Okinawa)`,
                shelfLife: `730`,
                shipping: `All year round`,
                price: `$5.80`,
                cooking: `• As a seasoning for cooking.\n• Add in coffee or tea.`
            },

            //Acerola Puree
            {
                name: `Acerola Puree`,
                image: `Acerola-Puree`,
                link: `Acerola-Puree`,
                detail: `100% pure juice made from pesticide-free acerola fruit, simply squeezed with no additives or artificial colors. The vibrant natural red hue is achieved through a unique process, and it can also be enjoyed as a natural supplement.`,
                specification: `Frozen`,
                itemsPerCase: `20`,
                moq: `1 case`,
                netWeight: `500g`,
                ingredients: `Acerola`,
                shelfLife: `Frozen for 180 days`,
                shipping: `All year round`,
                price: `$34`,
                cooking: `• Dilute with water or sparkling water for a refreshing drink.\n• Use as a sauce or dressing for meat and fish dishes.\n• Add as a topping for yogurt, soups, and other dishes.`
            },

            //Acerola Frozen Ingredients
            {
                name: `Acerola Frozen Ingredients`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //OKINAWA Brown Sugar Syrup
            {
                name: `OKINAWA Brown Sugar Syrup`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //OKINAWA Black Honey
            {
                name: `OKINAWA Black Honey`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Aguni No Shio (Okinawa Sea Salt)
            {
                name: `Aguni No Shio (Okinawa Sea Salt)`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Royal Mizuho Ryukyu Awamori 5 Year
            {
                name: `Royal Mizuho Ryukyu Awamori 5 Year`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //SAKE×AWAMORI Daiginjo 2024
            {
                name: `SAKE x AWAMORI Daiginjo 2024`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //Japanese Craft Gin ORI-GIN
            {
                name: `Japanese Craft Gin ORI-GIN`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //SHŌ MIZUHO
            {
                name: `SHŌ MIZUHO`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
            },

            //The Okinawa Islands Rum
            {
                name: `The Okinawa Islands Rum`,
                image: ``,
                link: ``,
                detail: ``,
                specification: `Refrigerated`,
                itemsPerCase: `-`,
                moq: `Approx. 2kg`,
                netWeight: `Approx. 2kg`,
                ingredients: `-`,
                shelfLife: `Not applicable due to being a fresh/raw product`,
                shipping: `All year round`,
                price: `$30-42/kg`,
                cooking: `Sashimi, Soup, Simmered dishes, Steamed dishes, Sautéed dishes, Grilled dishes`
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
