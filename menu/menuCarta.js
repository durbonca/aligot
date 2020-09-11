let app = new Vue({

    el: "#app",
    data: {
        compartir: {
            cp1: {
                name: "Terrine De Cerdo",
                description: "80GR",
                price: "3.000"
            },
            cp2: {
                name: "Tostadas de Tomate y Serrano",
                description: "",
                price: "3.500"
            },
            cp3: {
                name: "Hummus con Vegetales",
                description: "",
                price: "5.000"
            },
            cp4: {
                name: "Terrine de Foie Gras",
                description: "Mi - Cuit 60GR",
                price: "6.000"
            },
            cp5: {
                name: "Tabla Charcutière",
                description: "Serrano - Chorizo - Terrine de Cerdo",
                price: "7.000"
            },
            cp6: {
                name: "Tabla Mixta",
                description: "Serrano - Chorizo - Laguiole - Brillat Savarin",
                price: "9.000"
            },
            cp7: {
                name: "Tabla 3 Quesos",
                description: "Laguiole - Roquefort - Brillat Savarin",
                price: "7.000"
            },
            cp8: {
                name: "Quesos Individuales",
                description: "",
                price: "3.000"
            }
        },
        platos: {
            pl1: {
                name: "Reineta “Meunière”",
                description: "",
                price: "8.000"
            },
            pl2: {
                name: "Magret de Canard",
                description: "",
                price: "8.000"
            },
            pl3: {
                name: "Filete de Res “Rôti”",
                description: "al Horno",
                price: "8.000"
            },
            pl4: {
                name: "Boeuf Bourguignon",
                description: "",
                price: "8.000"
            },
            pl5: {
                name: "Steak “Tartar”",
                description: "con Lechuga",
                price: "7.000"
            },
            pl6: {
                name: "Ensalada de Quinoa",
                description: "con Kale, Tomate, Palta y Pepino",
                price: "7.000"
            }

        },
        acompañar: {
            ap1: {
                name: "Aligot",
                description: "",
                price: "4.000"
            },
            ap2: {
                name: "Ratatouille",
                description: "",
                price: "4.000"
            },
            ap3: {
                name: "Lechuga con Nueces",
                description: "",
                price: "4.000"
            }
        },
        cervezaBarril: {
            br1: { name: "Mestra", description: "Lager Pilsen - Chile", price: "1.500", price2: "3.000" },
            br2: { name: "Tübinger", description: "Red Ale - Chile", price: "1.500", price2: "3.000" },
            br3: { name: "La Montaña", description: "IPA - Chile", price: "1.500", price2: "3.000" }
        }

    }
})