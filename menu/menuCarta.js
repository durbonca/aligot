let app = new Vue({

    el: "#app",
    data: {
        compartir: {
            pr1: {
                name: "Terrine De Cerdo",
                description: "80GR",
                price: "3.000"
            },
            pr2: {
                name: "Tostadas de Tomate y Serrano",
                description: "",
                price: "3.500"
            },
            pr3: {
                name: "Hummus con Vegetales",
                description: "",
                price: "5.000"
            },
            pr4: {
                name: "Terrine de Foie Gras",
                description: "Mi - Cuit 60GR",
                price: "6.000"
            },
            pr5: {
                name: "Tabla Charcutière",
                description: "Serrano - Chorizo - Terrine de Cerdo",
                price: "7.000"
            },
            pr6: {
                name: "Tabla Mixta",
                description: "Serrano - Chorizo - Laguiole - Brillat Savarin",
                price: "9.000"
            },
            pr7: {
                name: "Tabla 3 Quesos",
                description: "Laguiole - Roquefort - Brillat Savarin",
                price: "7.000"
            },
            pr8: {
                name: "Quesos Individuales",
                description: "",
                price: "3.000"
            }
        },
        platos: {
            pr1: {
                name: "Reineta “Meunière”",
                description: "",
                price: "8.000"
            },
            pr2: {
                name: "Magret de Canard",
                description: "",
                price: "8.000"
            },
            pr3: {
                name: "Filete de Res “Rôti”",
                description: "al Horno",
                price: "8.000"
            },
            pr4: {
                name: "Boeuf Bourguignon",
                description: "",
                price: "8.000"
            },
            pr5: {
                name: "Steak “Tartar”",
                description: "con Lechuga",
                price: "7.000"
            },
            pr6: {
                name: "Ensalada de Quinoa",
                description: "con Kale, Tomate, Palta y Pepino",
                price: "7.000"
            }

        },
        acompañar: {
            pr1: {
                name: "Aligot",
                description: "",
                price: "4.000"
            },
            pr2: {
                name: "Ratatouille",
                description: "",
                price: "4.000"
            },
            pr3: {
                name: "Lechuga con Nueces",
                description: "",
                price: "4.000"
            }
        },
        cervezaBarril: {
            pr1: { name: "Mestra", description: "Lager Pilsen - Chile", price: "1.500", price2: "3.000" },
            pr2: { name: "Tübinger", description: "Red Ale - Chile", price: "1.500", price2: "3.000" },
            pr3: { name: "La Montaña", description: "IPA - Chile", price: "1.500", price2: "3.000" }
        },
        cervezaBotella: {
            pr1: { name: "Cusqueña Gold", description: "Lager - Perú", price: "3.500" },
            pr2: { name: "Peroni", description: "Ale - Italia", price: "3.500" },
            pr3: { name: "Leffe Blonde", description: "Ale - Bélgica", price: "3.500" },
            pr4: { name: "Schöfferhofer", description: "Hefeweizen - Alemania", price: "3.500" }
        },
        sinAlcohol: {
            pr1: { name: "Cerveza Mestra", description: "", price: "3.500" },
            pr2: { name: "Virgin Mary", description: "", price: "3.500" },
            pr3: { name: "Virgin Mojito", description: "", price: "3.500" }
        },
        aguasJugos: {
            pr1: { name: "Jugos Naturales", description: "", price: "2.500" },
            pr2: { name: "Limonadas", description: "", price: "2.500" },
            pr3: { name: "Ginger Ale", description: "Fever Tree", price: "2.500" },
            pr4: { name: "Ginger Beer", description: "Fever Tree", price: "2.500" },
            pr5: { name: "Elderflower", description: "Fever Tree", price: "2.500" },
            pr6: { name: "Mediterrenean", description: "Fever Tree", price: "2.500" },
            pr7: { name: "Tónica Light", description: "Fever Tree", price: "2.500" },
            pr8: { name: "Agua Tónica", description: "1724", price: "2.500" },
            pr9: { name: "Aguas Minerales", description: "Glenlivet o Perrier", price: "2.500" }
        }

    }
})